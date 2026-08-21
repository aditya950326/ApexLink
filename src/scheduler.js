// scheduler.js
// Deterministic constraint-based scheduling logic for VedAI

export function generateOptimizedSchedule(tasks, constraints, profile) {
  const [wH, wM] = constraints.wake.split(":").map(Number);
  const [sH, sM] = constraints.sleep.split(":").map(Number);
  const wakeMin = wH * 60 + wM;
  const sleepMin = sH * 60 + sM;
  const maxMin = Math.min((constraints.maxHours || 8) * 60, sleepMin - wakeMin);

  let usedMin = 0;
  const scheduleBlocks = [];
  const fixedEvents = constraints.fixedEvents || [];

  // Parse fixed events into blocks
  fixedEvents.forEach(event => {
    const [startH, startM] = event.start.split(":").map(Number);
    const [endH, endM] = event.end.split(":").map(Number);
    scheduleBlocks.push({
      ...event,
      startMin: startH * 60 + startM,
      endMin: endH * 60 + endM,
      isFixed: true
    });
  });

  // Sort tasks by priority (Critical > High > Medium > Low) and then by deadline proximity
  const priorityScore = { "Critical": 4, "High": 3, "Medium": 2, "Low": 1 };
  
  const sortedTasks = [...tasks].sort((a, b) => {
    const pA = priorityScore[a.priority] || 2;
    const pB = priorityScore[b.priority] || 2;
    if (pA !== pB) return pB - pA;
    return (b.estimated_duration || 60) - (a.estimated_duration || 60);
  });

  const isBlocked = (startMin, endMin) => {
    return scheduleBlocks.some(b => {
      return startMin < b.endMin && endMin > b.startMin;
    });
  };

  let currentCursor = wakeMin;

  sortedTasks.forEach(task => {
    if (task.status === "Completed") return;

    let duration = task.estimated_duration || 60;
    
    // Phase 3: Adaptive Duration Learning
    // If profile has category-specific duration correction factors, apply it
    if (profile?.categoryPerformance && profile.categoryPerformance[task.category]) {
        const perf = profile.categoryPerformance[task.category];
        if (perf.durationRatio) {
            // durationRatio = actual / estimated
            duration = Math.round(duration * perf.durationRatio);
        }
    }

    if (usedMin + duration > maxMin) {
      return; // Exceeds max daily workload
    }

    let start = currentCursor;
    let explanation = `Scheduled based on priority (${task.priority}).`;
    
    // Soft constraint: Preferred Time
    if (task.preferred_time) {
      if (task.preferred_time === 'morning') start = Math.max(start, 7 * 60);
      else if (task.preferred_time === 'afternoon') start = Math.max(start, 12 * 60);
      else if (task.preferred_time === 'evening') start = Math.max(start, 17 * 60);
      explanation = `Placed in the ${task.preferred_time} as requested.`;
    }

    // Phase 3: Soft constraint: Profile-based productivity matching
    // If no preferred time was requested, and we have a strong time window for this category
    if (!task.preferred_time && profile?.strongest_hours) {
      // Find the first available strong window
      const strongWindows = profile.strongest_hours.map(w => w.split("-")); // e.g. ["07:00", "10:00"]
      for (let window of strongWindows) {
        const [shH, shM] = window[0].split(":").map(Number);
        const winStartMin = shH * 60 + shM;
        if (winStartMin >= start) {
           start = Math.max(start, winStartMin);
           explanation = `Placed in your most productive focus window (${window[0]}-${window[1]}).`;
           break;
        }
      }
    }

    let attempts = 0;
    while (attempts < 96 && (isBlocked(start, start + duration) || start + duration > sleepMin)) {
      start += 15;
      attempts++;
    }

    if (start + duration > sleepMin) return;
    if (isBlocked(start, start + duration)) return;

    // Assign slot
    scheduleBlocks.push({
      id: task.id || crypto.randomUUID(),
      task_id: task.id,
      title: task.title,
      category: task.category,
      priority: task.priority,
      startMin: start,
      endMin: start + duration,
      duration: duration,
      isFixed: false,
      explanation: explanation
    });

    currentCursor = start + duration + (constraints.breakMin || 15);
    usedMin += duration;
  });

  // Sort final schedule
  scheduleBlocks.sort((a, b) => a.startMin - b.startMin);

  // Format back to HH:MM
  const formatTime = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };

  const finalSchedule = scheduleBlocks.map(b => ({
    ...b,
    start_time: formatTime(b.startMin),
    end_time: formatTime(b.endMin)
  }));

  const score = Math.min(100, Math.round((usedMin / maxMin) * 100));

  return {
    date: new Date().toISOString().split('T')[0],
    schedule_blocks: finalSchedule,
    quality_score: score,
    total_scheduled_minutes: usedMin
  };
}

// Analytics function for generating a user's productivity profile from their sessions
export function computeProductivityProfile(sessions) {
  if (!sessions || sessions.length === 0) return null;
  
  // Basic computation of average focus block and schedule adherence
  let totalPlanned = 0;
  let totalActual = 0;
  let timeOfDaySuccess = {
      morning: { attempts: 0, completed: 0 },
      afternoon: { attempts: 0, completed: 0 },
      evening: { attempts: 0, completed: 0 },
      night: { attempts: 0, completed: 0 }
  };

  let categoryPerformance = {};

  sessions.forEach(s => {
      totalPlanned += s.planned_duration || 0;
      totalActual += s.actual_duration || 0;
      
      const startH = new Date(s.planned_start).getHours();
      let timeSlot = 'night';
      if (startH >= 6 && startH < 12) timeSlot = 'morning';
      else if (startH >= 12 && startH < 17) timeSlot = 'afternoon';
      else if (startH >= 17 && startH < 22) timeSlot = 'evening';

      timeOfDaySuccess[timeSlot].attempts++;
      if (s.completion_percentage >= 80) {
          timeOfDaySuccess[timeSlot].completed++;
      }

      if (s.category) {
          if (!categoryPerformance[s.category]) {
              categoryPerformance[s.category] = { planned: 0, actual: 0, sessions: 0 };
          }
          categoryPerformance[s.category].planned += s.planned_duration || 0;
          categoryPerformance[s.category].actual += s.actual_duration || 0;
          categoryPerformance[s.category].sessions++;
      }
  });

  // Calculate duration ratios per category
  Object.keys(categoryPerformance).forEach(cat => {
      const p = categoryPerformance[cat];
      p.durationRatio = p.planned > 0 ? p.actual / p.planned : 1.0; 
  });

  // Determine strongest hours
  let bestSlot = null;
  let bestRate = 0;
  Object.keys(timeOfDaySuccess).forEach(slot => {
      const stats = timeOfDaySuccess[slot];
      if (stats.attempts > 0) {
          const rate = stats.completed / stats.attempts;
          if (rate > bestRate) {
              bestRate = rate;
              bestSlot = slot;
          }
      }
  });

  let strongest_hours = [];
  if (bestSlot === 'morning') strongest_hours = ["07:00-11:00"];
  else if (bestSlot === 'afternoon') strongest_hours = ["13:00-17:00"];
  else if (bestSlot === 'evening') strongest_hours = ["18:00-21:00"];

  const schedule_adherence = totalPlanned > 0 ? Math.min(1.0, totalActual / totalPlanned) : 1.0;

  return {
      average_daily_capacity: totalActual / Math.max(1, (new Set(sessions.map(s => s.planned_start?.substring(0,10)))).size),
      strongest_hours,
      schedule_adherence,
      categoryPerformance
  };
}
