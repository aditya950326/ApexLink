/* eslint-disable */
const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Combine everything into one single line at the very top
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Canvas, PencilBrush, Rect, Circle } from "fabric";
// DELETE THE OTHER "import React, { useState } from 'react';" LINE COMPLETELY
function LandingPage({ onEnterAuth }) {
  const [showVideo, setShowVideo] = useState(false);

  const features = [
    { title: 'Neural Timetable', icon: '📅', color: '#6c63ff' },
    { title: 'VedAI Assistant', icon: '🤖', color: '#00f2ff' },
    { title: 'Execution Hub', icon: '🚀', color: '#3b82f6' },
    { title: 'Warrior Mode', icon: '⚔️', color: '#ef4444' },
    { title: 'Friend Circles', icon: '👥', color: '#f59e0b' },
    { title: 'Reminders', icon: '⏰', color: '#a78bfa' }
  ];

  return (
    <div style={{ 
      height: '100vh', 
      background: '#020205', 
      color: '#fff', 
      fontFamily: "'Inter', sans-serif",
      overflow: 'hidden', 
      position: 'relative' 
    }}>
      
      {/* 🎭 LAYER 1: CINEMATIC LOOPING VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.5)' // Keeps the background dark for text contrast
        }}
      >
        <source src="/landing-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌫️ LAYER 1.5: GRADIENT MASK (Fades the video for the UI) */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 1,
        background: 'linear-gradient(to right, rgba(2,2,5,0.8), transparent 40%, transparent 60%, rgba(2,2,5,0.8))',
        pointerEvents: 'none'
      }} />

      {/* 🧭 LAYER 2: NAVIGATION */}
      <nav style={{ position: 'absolute', top: 0, width: '100vw', padding: '25px 80px 25px 60px', display: 'flex', justifyContent: 'flex-end', zIndex: 1000, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
          {['ABOUT', 'COMMUNITY', 'SYSTEM'].map(t => (
            <span key={t} className="nav-item">{t}</span>
          ))}
          <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }} />
          <button onClick={() => onEnterAuth('login')} className="auth-trigger">LOG IN</button>
          <button onClick={() => onEnterAuth('signup')} className="prime-trigger">SIGN IN</button>
        </div>
      </nav>

      {/* ⚔️ HERO MAIN VIEWPORT */}
      <main style={{ 
        position: 'relative', 
        zIndex: 10, 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        boxSizing: 'border-box' 
      }}>
        
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          padding: '0 80px 0 8%', 
          maxWidth: 800 
        }}>
          <div className="reveal-anim" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h1 className="cinematic-title">ApexLink</h1>
            
            <h2 className="warrior-slogan" style={{ 
              fontSize: '22px', 
              fontWeight: 900, 
              color: '#7bcdf6', 
              margin: '15px 0 0', 
              textTransform: 'uppercase', 
              letterSpacing: '14px', 
              paddingLeft: '14px', 
              opacity: 0.9,
              textShadow: '0 0 25px rgba(252, 249, 254, 0.5)', 
              display: 'block',
              textAlign: 'center'
            }}>
              FORGE.FOCUS.CONQUER
            </h2>

            <div style={{ height: '40px' }} /> 
            
            <div style={{ display: 'flex', gap: 30, justifyContent: 'center' }}>
              <button onClick={() => onEnterAuth('signup')} className="prime-cta">Start Mission</button>
              <button onClick={() => setShowVideo(true)} className="video-trigger">Demo video</button>
            </div>
          </div>
        </div>

        <div className="marquee-viewport-full" style={{ marginBottom: '10px' }}>
          <div className="marquee-content">
            {[...features, ...features, ...features].map((f, i) => (
              <div key={i} className="feat-card" style={{ borderLeft: `3px solid ${f.color}` }}>
                <span style={{ fontSize: 26 }}>{f.icon}</span>
                <div style={{ fontWeight: 800, fontSize: 11, color: '#fff', letterSpacing: 1 }}>{f.title.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 📺 VIDEO OVERLAY MODAL */}
      {showVideo && (
        <div 
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', 
            backdropFilter: 'blur(15px)', zIndex: 2000, 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onClick={() => setShowVideo(false)}
        >
          <div 
            style={{
              width: '90%', maxWidth: '1000px', background: '#050508', 
              border: '1px solid rgba(8, 66, 212, 0.5)', borderRadius: '12px',
              padding: '10px', position: 'relative',
              boxShadow: '0 0 50px rgba(8, 66, 212, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowVideo(false)}
              style={{
                position: 'absolute', top: '-40px', right: '0', background: 'none', border: 'none',
                color: '#fff', fontSize: '30px', cursor: 'pointer'
              }}
            >
              ×
            </button>
            <video autoPlay controls style={{ width: '100%', borderRadius: '8px', display: 'block' }}>
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <style>{`
        .nav-item { font-size: 10px; font-weight: 900; letter-spacing: 2px; color: #555; cursor: pointer; transition: 0.3s; }
        .nav-item:hover { color: #fff; }
        .prime-trigger { background: #fff; color: #000; border: none; padding: 10px 25px; border-radius: 100px; font-weight: 950; font-size: 10px; cursor: pointer; letter-spacing: 1px; }
        .auth-trigger { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 10px 25px; border-radius: 100px; font-weight: 950; font-size: 10px; cursor: pointer; letter-spacing: 1px; }

        .cinematic-title {
          font-size: 135px; font-weight: 950; text-transform: uppercase; letter-spacing: -10px; margin: 0; line-height: 0.8;
          background: linear-gradient(180deg, #fff 40%, #444 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        
        .prime-cta { padding: 20px 45px; background: #fff; color: #000; border: none; border-radius: 4px; font-weight: 950; font-size: 14px; cursor: pointer; letter-spacing: 2px; transition: 0.3s; }
        .video-trigger { padding: 20px 40px; background: transparent; border: 2px solid #fff; color: #fff; border-radius: 4px; font-weight: 950; font-size: 14px; cursor: pointer; letter-spacing: 2px; transition: 0.3s; }

        .marquee-viewport-full { 
            overflow: hidden; width: 100vw; 
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            z-index: 20;
        }
        .marquee-content { display: inline-flex; animation: scroll 40s linear infinite; gap: 20px; padding-bottom: 5px; }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }

        .feat-card { 
            width: 210px; padding: 22px; background: rgba(255,255,255,0.02); 
            backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.06); 
            border-radius: 10px; display: flex; flex-direction: column; gap: 8px; position: relative; overflow: hidden; 
        }
        
        .reveal-anim { animation: reveal 1.2s cubic-bezier(0.19, 1, 0.22, 1); }
        @keyframes reveal { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

// ─── UTILITY HELPERS ────────────────────────────────────────────────────────
const uid = () => Math.random().toString(36).slice(2, 10);
const today = () => {
  const offset = Number(localStorage.getItem("apx_date_offset") || 0);
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};
const yesterday = () => {
  const offset = Number(localStorage.getItem("apx_date_offset") || 0);
  const d = new Date();
  d.setDate(d.getDate() - 1 + offset);
  return d.toISOString().slice(0, 10);
};
const addDays = (dateStr, days) => {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};
const fmtDate = (d) => new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
const fmtTime = (d) => new Date(d).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
 // For Thought Pattern Breaker

// 1. UPDATED useLS HELPER (Ensure it's inside the file but outside components)
function useLS(key, init) {
  const [v, setV] = useState(() => {
    try {
      const s = localStorage.getItem(key);
      // Logic: If empty or "undefined" string, return init
      return (s && s !== "undefined") ? JSON.parse(s) : init;
    } catch (e) {
      console.error("LS Read Error", e);
      return init;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(v));
    } catch (e) {
      console.error("LS Write Error", e);
    }
  }, [key, v]);

  return [v, setV];
}

// ─── AI PRODUCTIVITY LOG PARSER ─────────────────────────────────────────────
const parseProductivityLogs = (userId) => {
  const habitsData = localStorage.getItem(`apx_habits_${userId}`);
  const habitsList = localStorage.getItem(`apx_custom_habits_${userId}`);
  const ehData = localStorage.getItem("apx_eh_v1");

  let habits = [];
  try { habits = habitsList ? JSON.parse(habitsList) : []; } catch (e) { habits = []; }
  let habitLogs = {};
  try { habitLogs = habitsData ? JSON.parse(habitsData) : {}; } catch (e) { habitLogs = {}; }
  let ehTasks = [];
  try {
    const parsedEH = ehData ? JSON.parse(ehData) : {};
    ehTasks = parsedEH.tasks || [];
  } catch (e) { ehTasks = []; }

  // Day-of-week counters (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const habitCompletionsByDay = Array(7).fill(0);
  const habitPossibleByDay = Array(7).fill(0);
  const taskCompletionsByDay = Array(7).fill(0);

  // Parse Habit logs
  Object.keys(habitLogs).forEach(dateStr => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return;
    const dayOfWeek = date.getDay();
    
    const dayHabits = habitLogs[dateStr] || {};
    habits.forEach(h => {
      habitPossibleByDay[dayOfWeek]++;
      const val = dayHabits[h.id];
      if (val === "yes" || (typeof val === "number" && val >= h.target)) {
        habitCompletionsByDay[dayOfWeek]++;
      }
    });
  });

  // Parse Execution Hub tasks
  ehTasks.forEach(t => {
    if (t.status === "Done" && t.updatedAt) {
      const date = new Date(t.updatedAt);
      if (!isNaN(date.getTime())) {
        const dayOfWeek = date.getDay();
        taskCompletionsByDay[dayOfWeek]++;
      }
    }
  });

  const DAYS_ENG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let report = "=== SQUAD & PERSONAL PRODUCTIVITY STATS ===\n";
  for (let i = 0; i < 7; i++) {
    const habitRatio = habitPossibleByDay[i] > 0 ? Math.round((habitCompletionsByDay[i] / habitPossibleByDay[i]) * 100) : 0;
    const tasksDone = taskCompletionsByDay[i];
    report += `- ${DAYS_ENG[i]}: Habit Completion Rate = ${habitRatio}%, Collaborative Tasks Completed = ${tasksDone}\n`;
  }
  
  const expVal = localStorage.getItem(`apx_warrior_exp_${userId}`) || "0";
  report += `Current Gamified Warrior EXP: ${expVal} points.\n`;

  return report;
};

// ─── LOG HELPERS (FIX 1 – structured log schema) ─────────────────────────────
const makeLog = (minutes, note = "") => ({ minutesSpent: Number(minutes), note, editHistory: [], ts: new Date().toISOString() });
const editLog = (existing, minutes, note) => ({ ...existing, minutesSpent: Number(minutes), note: note !== undefined ? note : existing.note, editHistory: [...(existing.editHistory || []), { val: existing.minutesSpent, ts: existing.ts }], ts: new Date().toISOString() });
// FIX 2 – heatmap status derived ONLY from logs
const logStatus = (log, target) => { if (!log || log.minutesSpent === undefined || log.minutesSpent === null) return "nodata"; const r = log.minutesSpent / target; if (r >= 0.8) return "done"; if (r >= 0.25) return "partial"; return "fail"; };
const STATUS_COLOR = { done: "#22c55e", partial: "#f59e0b", fail: "#ef4444", nodata: "rgba(255,255,255,0.07)" };
const STATUS_LABEL = { done: "Completed", partial: "Partial", fail: "Not Done", nodata: "No Data" };


// ─── REALTIME SHARED STATE (FIX 4 – cross-tab sync via localStorage events) ──
function useShared(key, init) {
  const [v, setV] = useState(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : (typeof init === "function" ? init() : init); }
    catch { return typeof init === "function" ? init() : init; }
  });
  const write = useCallback((updater) => {
    setV(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      try { localStorage.setItem(key, JSON.stringify(next)); window.dispatchEvent(new StorageEvent("storage", { key, newValue: JSON.stringify(next) })); } catch {}
      return next;
    });
  }, [key]);
  useEffect(() => {
    const onStorage = (e) => { if (e.key !== key) return; try { if (e.newValue) setV(JSON.parse(e.newValue)); } catch {} };
    window.addEventListener("storage", onStorage);
    const interval = setInterval(() => {
      try { const s = localStorage.getItem(key); if (s) setV(prev => { const next = JSON.parse(s); return JSON.stringify(next) !== JSON.stringify(prev) ? next : prev; }); } catch {}
    }, 1500);
    return () => { window.removeEventListener("storage", onStorage); clearInterval(interval); };
  }, [key]);
  return [v, write];
}


// ─── LOGO (FIXED SYNTAX) ───────────────────────────────────────────────────
function ApexLogo({ size = 48, textSize = 20, showText = true }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9, flexShrink: 0 }}>
      <img 
        src="/logo.png" 
        alt="Logo" 
        style={{ width: size, height: size, objectFit: "contain" }} 
      />
      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ 
            fontSize: textSize, 
            fontWeight: 800, 
            background: "linear-gradient(135deg,#3bacd6,#1e6fa8)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent", 
            letterSpacing: 0.5
          }}>
            ApexLink
          </span>
          <span style={{ 
            fontSize: Math.max(9, textSize * 0.65), 
            color: "#4a90b8", 
            fontWeight: 500, 
            letterSpacing: 0.8, 
            marginTop: 1 
          }}>
            Productivity Planner
          </span>
        </div>
      )}
    </div>
  );
}



// ─── AUTH ────────────────────────────────────────────────────────────────────
function AuthPage({ onLogin, users, setUsers, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const handle = () => {
    setErr("");
    const emailLower = form.email.trim().toLowerCase();
    const pass = form.password.trim();
    if (!emailLower || !pass) return setErr("Fill all fields.");

    if (mode === "signup") {
      if (!form.name.trim()) return setErr("Name required.");
      const exists = users.find(u => u.email.toLowerCase() === emailLower);
      if (exists) return setErr("Email already registered.");
      const newUser = { id: uid(), name: form.name.trim(), email: emailLower, password: pass, createdAt: new Date().toISOString() };
      setUsers([...users, newUser]);
      onLogin(newUser);
    } else {
      const foundUser = users.find(u => u.email.toLowerCase() === emailLower && u.password === pass);
      if (!foundUser) return setErr("Invalid credentials.");
      onLogin(foundUser);
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "flex-end", 
      padding: "0 8%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Inter', sans-serif",
      background: "#020205" 
    }}>
      
      {/* 🎭 LAYER 1: CINEMATIC LOOPING VIDEO (MUTED) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          filter: "brightness(0.7) saturate(1.1)"
        }}
      >
        <source src="/auth-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌫️ LAYER 2: DARK EDGE VIGNETTE OVERLAY (Hides Logos) */}
      <div style={{ 
        position: "absolute", inset: 0, zIndex: 1,
        background: "radial-gradient(circle at center, transparent 0%, rgba(2,2,5,0.4) 60%, rgba(2,2,5,0.9) 100%)",
        pointerEvents: "none" 
      }} />

      {/* 🛡️ LAYER 3: TRANSPARENT AUTH CARD */}
      <div className="auth-card-mockup">
        
        {/* LOGO SECTION */}
        <div style={{ textAlign: "center", marginBottom: 30 }}>
           <div style={{ display: 'flex', justifyContent: 'center', marginBottom: -20 }}>
             <img src="/logo.png" alt="Logo" style={{ height: 230, filter: 'drop-shadow(0 0 20px rgba(59,172,214,0.4))' }} />
           </div>
           <h1 style={{ fontSize: 32, fontWeight: 900, color: "#fff", letterSpacing: 2, marginTop: -25 }}>APEXLINK</h1>
           
           <h2 className="welcome-text">{mode === "login" ? "" : ""}</h2>
           <p style={{ color: "#94a3b8", fontSize: 13, marginTop: -30 }}>FORGE . FOCUS . CONQUER</p>
        </div>

        {/* INPUTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {mode === "signup" && (
            <div className="input-group">
              <span className="input-icon">👤</span>
              <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
          )}

          <div className="input-group">
            <span className="input-icon">✉️</span>
            <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input placeholder="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} onKeyDown={e => e.key === 'Enter' && handle()} />
          </div>
        </div>

        {/* UTILS */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px 0', fontSize: 12, color: '#64748b' }}>
           <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>
             <input type="checkbox" /> Remember me
           </label>
           <span style={{ cursor: 'pointer' }}>Forgot password?</span>
        </div>

        {err && <div style={{ color: "#f87171", fontSize: 12, marginBottom: 10, textAlign: "center", fontWeight: 700 }}>{err}</div>}

        {/* THE TERMINAL BUTTON */}
        <button onClick={handle} className="enter-terminal-btn">
          {mode === "login" ? "ENTER TERMINAL" : "INITIALIZE PROFILE"}
          <div className="btn-glow" />
        </button>

        {/* SWITCH MODE */}
        <div style={{ textAlign: 'center', marginTop: 25 }}>
          <span style={{ color: '#64748b', fontSize: 13 }}>
            {mode === "login" ? "New to the path?" : "Already a warrior?"} 
            <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} style={{ background: 'none', border: 'none', color: '#3bacd6', fontWeight: 800, cursor: 'pointer', marginLeft: 5 }}>
              {mode === "login" ? "Sign Up" : "Log In"}
            </button>
          </span>
        </div>

        <div style={{ textAlign: 'center', marginTop: 40, fontSize: 10, color: '#444', letterSpacing: 1 }}>
          
        </div>
      </div>

      <style>{`
        .auth-card-mockup {
          width: 420px;
          background: transparent;
          border: none;
          padding: 45px;
          position: relative;
          z-index: 10;
          animation: slideIn 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .welcome-text {
          font-family: 'Brush Script MT', cursive, sans-serif;
          font-size: 38px;
          color: #a78bfa;
          margin: 15px 0 5px;
          font-style: italic;
          text-shadow: 0 0 20px rgba(167, 139, 250, 0.4);
        }

        .input-group {
          background: rgba(15, 15, 25, 0.5); 
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 0 15px;
          transition: 0.3s;
        }
        
        .input-group input {
          width: 100%; background: none; border: none; padding: 12px; 
          color: #fff; font-size: 14px; outline: none;
        }

        .enter-terminal-btn {
          width: 100%; padding: 14px; 
          background: linear-gradient(90deg, #6c63ff, #3bacd6);
          border: none; border-radius: 8px; color: #fff; 
          font-weight: 900; letter-spacing: 2px; cursor: pointer;
          position: relative; overflow: hidden; transition: 0.3s;
          box-shadow: 0 10px 20px rgba(59, 172, 214, 0.2);
        }
        
        .btn-glow {
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: sweep 3s infinite;
        }

        @keyframes sweep { 100% { left: 100%; } }
        @keyframes slideIn { from { transform: translateX(50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
    </div>
  );
}
// ─── LAYOUT ──────────────────────────────────────────────────────────────────


const TABS = [
  { id: "dashboard", icon: "⊞", label: "Dashboard" },
  { id: "timetable", icon: "📅", label: "Timetable" },
  { id: "vedai", icon: "🤖", label: "VedAI" },
  { id: "reminders", icon: "⏰", label: "Reminders" },
  { id: "notes", icon: "📝", label: "Sticky Notes" },
  { id: "friends", icon: "👥", label: "Friend Circles" },
  { id: "corporate", icon: "🚀", label: "Execution Hub" },
  { id: "habits", icon: "📊", label: "Habit Tracker" },
  { id: "warrior", icon: "⚔️", label: "Warrior" },
  { id: "settings", icon: "⚙️", label: "Settings" },
];

// --- 🛡️ MAIN LAYOUT COMPONENT ---
function Layout({ user, tab, setTab, onLogout, children, pomo, setPomo, stopwatch, setStopwatch, counter, setCounter }) {
  const [collapsed, setCollapsed] = useState(false);
  const [showWarConsole, setShowWarConsole] = useState(false);
  const fmt = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;

  return (
    <div style={{ 
      display: "flex", 
      minHeight: "100vh", 
      // 🟢 1. GLOBAL WALLPAPER
      backgroundImage: "url('/global-wallpaper.png')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      fontFamily: "'Segoe UI',system-ui,sans-serif", 
      color: "#e2e8f0",
      position: "relative",
      overflow: "hidden"
    }}>
      
      {/* 🌫️ 2. DARK OVERLAY (Ensures text is readable over wallpaper) */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'rgba(2, 2, 5, 0.40)', 
        zIndex: 0 
      }} />

      {/* 🧭 3. GLASS SIDEBAR WITH ORGANIC WAVE ANIMATION */}
<div style={{ 
  width: collapsed ? 80 : 260, 
  backgroundImage: "linear-gradient(rgba(10, 10, 15, 0.5), rgba(10, 10, 15, 0.5)), url('/sidebar-bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backdropFilter: "blur(25px)",
  borderRight: "1px solid rgba(255,255,255,0.08)", 
  display: "flex", 
  flexDirection: "column", 
  /* 🌊 WAVY TRANSITION: Uses a custom cubic-bezier for a spring-like organic feel */
  transition: "width 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)", 
  flexShrink: 0,
  position: "relative",
  zIndex: 100,
  overflow: "visible" 
}}>
  
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
    
    .lux-tab {
      font-family: 'Orbitron', sans-serif !important;
      transition: all 0.3s ease !important;
      position: relative !important;
      margin: 4px 10px !important;
      width: calc(100% - 20px) !important;
      height: 48px !important;
    }

    .lux-tab:hover {
      background: rgba(59, 130, 246, 0.15) !important;
      border-radius: ${collapsed ? '12px' : '12px 30px 12px 30px'} !important; 
      transform: translateX(5px) !important;
    }

    /* 🌊 WAVY LABEL ANIMATION */
    .wavy-label {
      opacity: ${collapsed ? 0 : 1};
      transform: translateX(${collapsed ? '-10px' : '0'});
      transition: opacity 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      transition-delay: ${collapsed ? '0s' : '0.2s'};
    }

    .lux-popup {
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      background: #0f172a;
      border: 1px solid #3bacd6;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 9px;
      color: #fff;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: 0.2s ease;
      margin-left: 15px;
      z-index: 9999;
      font-family: 'Orbitron', sans-serif;
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }

    .lux-tab:hover .lux-popup {
      opacity: 1;
      transform: translateY(-50%) translateX(5px);
    }

    .active-bar {
      position: absolute;
      left: -10px;
      height: 24px;
      width: 4px;
      background: #3bacd6;
      border-radius: 0 4px 4px 0;
      box-shadow: 0 0 15px #3bacd6;
    }
  `}</style>
  
  {/* Sidebar Header */}
  <div style={{ 
    padding: "20px 14px", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: collapsed ? "center" : "space-between", 
    minHeight: 80,
    position: 'relative'
  }}>
    <div style={{ 
      opacity: collapsed ? 0 : 1, 
      transform: `scale(${collapsed ? 0.5 : 0.9})`,
      transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      transformOrigin: "left",
      width: collapsed ? 0 : 'auto',
      overflow: 'hidden'
    }}>
      <ApexLogo size={50} textSize={14} showText={true} />
    </div>

    {/* ⚔️ Ninja War Console Trigger */}
    {!collapsed && (
      <button 
        onClick={() => setShowWarConsole(!showWarConsole)}
        style={{ 
          background: showWarConsole ? "rgba(59, 172, 214, 0.2)" : "rgba(255,255,255,0.05)",
          border: "1px solid rgba(59, 172, 214, 0.3)",
          borderRadius: 8,
          width: 32, height: 32,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", transition: "0.3s",
          color: "#3bacd6", fontSize: 16,
          boxShadow: showWarConsole ? "0 0 15px rgba(59, 172, 214, 0.4)" : "none"
        }}
        title="Ninja War Console"
      >
        <img src="/shuriken.png" style={{ width: 20, height: 20, filter: 'drop-shadow(0 0 2px #3bacd6)' }} alt="⚔️" />
      </button>
    )}

    {/* Expandable War Console Panel */}
    {showWarConsole && !collapsed && (
      <div style={{
        position: 'absolute', top: 75, left: 14, right: 14,
        background: 'rgba(10, 10, 15, 0.98)', backdropFilter: 'blur(30px)',
        border: '1px solid rgba(59, 172, 214, 0.3)', borderRadius: 12,
        padding: "18px 14px", zIndex: 1000, boxShadow: '0 15px 50px rgba(0,0,0,0.95)',
        animation: 'revealDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        fontFamily: "'Orbitron', sans-serif"
      }}>
        <style>{`
          @keyframes revealDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>

        {/* Console Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <img src="/shuriken.png" style={{ width: 14, height: 14 }} alt="" />
            <span style={{ fontSize: 9, fontWeight: 900, color: '#3bacd6', letterSpacing: 2 }}>WAR CONSOLE</span>
          </div>
          <button onClick={() => setShowWarConsole(false)} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center' }}>✕</button>
        </div>
        
        {/* Pomodoro Row */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 8, color: '#94a3b8', fontWeight: 900, marginBottom: 6, letterSpacing: 2 }}>MISSION CLOCK</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 18, fontWeight: 900, color: '#fff', fontFamily: 'monospace', letterSpacing: 1 }}>{fmt(pomo.time)}</span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button onClick={() => setPomo(p => ({ ...p, active: !p.active, lastTick: Date.now() }))} style={{ background: pomo.active ? '#ef4444' : '#22c55e', color: '#000', border: 'none', borderRadius: 4, padding: '4px 8px', fontSize: 9, fontWeight: 900, cursor: 'pointer' }}>{pomo.active ? 'STOP' : 'START'}</button>
              <button onClick={() => setPomo({ ...pomo, time: 1500, active: false })} style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 7px', fontSize: 11, cursor: 'pointer' }}>↺</button>
            </div>
          </div>
        </div>

        {/* Stopwatch Row */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 8, color: '#94a3b8', fontWeight: 900, marginBottom: 6, letterSpacing: 2 }}>STOPWATCH</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 18, fontWeight: 900, color: '#22c55e', fontFamily: 'monospace', letterSpacing: 1 }}>{fmt(stopwatch.time)}</span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button onClick={() => setStopwatch(s => ({ ...s, active: !s.active, lastTick: Date.now() }))} style={{ background: stopwatch.active ? '#ef4444' : '#22c55e', color: '#000', border: 'none', borderRadius: 4, padding: '4px 8px', fontSize: 9, fontWeight: 900, cursor: 'pointer' }}>{stopwatch.active ? 'STOP' : 'RUN'}</button>
              <button onClick={() => setStopwatch({ ...stopwatch, time: 0, active: false })} style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 7px', fontSize: 11, cursor: 'pointer' }}>↺</button>
            </div>
          </div>
        </div>

        {/* Rep Counter Row */}
        <div>
          <div style={{ fontSize: 8, color: '#94a3b8', fontWeight: 900, marginBottom: 6, letterSpacing: 2 }}>ACTION COUNT</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 22, fontWeight: 900, color: '#f59e0b' }}>{counter}</span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button onClick={() => setCounter(c => c + 1)} style={{ background: '#f59e0b', color: '#000', border: "none", borderRadius: 4, padding: "4px 14px", fontSize: 14, fontWeight: 900, cursor: "pointer" }}>+</button>
              <button onClick={() => setCounter(0)} style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 7px', fontSize: 11, cursor: 'pointer' }}>↺</button>
            </div>
          </div>
        </div>
      </div>
    )}
    
    <button 
      onClick={() => setCollapsed(!collapsed)} 
      style={{ 
        background: "rgba(255,255,255,0.05)", 
        border: "1px solid rgba(255,255,255,0.1)", 
        color: "#fff", 
        cursor: "pointer", 
        width: 32, height: 32,
        borderRadius: 8,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "transform 0.4s ease"
      }}
    >
      <span style={{ transform: `rotate(${collapsed ? 180 : 0}deg)`, transition: "transform 0.5s" }}>
        {collapsed ? "»" : "«"}
      </span>
    </button>
  </div>

  {/* Navigation Links */}
  <nav style={{ flex: 1, paddingTop: "10px", overflowY: "auto", overflowX: "hidden" }}>
    {TABS.map(t => (
      <button 
        key={t.id} 
        onClick={() => setTab(t.id)} 
        className="lux-tab"
        style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: collapsed ? "center" : "flex-start",
          gap: 12, 
          padding: "0 14px", 
          borderRadius: 10, 
          border: "none", 
          cursor: "pointer", 
          background: tab === t.id ? "rgba(59, 130, 246, 0.2)" : "transparent", 
          color: tab === t.id ? "#3bacd6" : "#94a3b8"
        }}
      >
        {tab === t.id && <div className="active-bar" />}
        
        <span style={{ fontSize: 18, flexShrink: 0 }}>{t.icon}</span>
        
        {!collapsed && (
          <span className="wavy-label" style={{ fontWeight: 700, fontSize: 11, whiteSpace: "nowrap", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            {t.label}
          </span>
        )}

        <div className="lux-popup">
          {t.label.toUpperCase()} // ACTIVE
        </div>
      </button>
    ))}
  </nav>

  {/* User Profile Area */}
  {!collapsed && (
    <div className="wavy-label" style={{ 
      padding: "20px 16px", 
      borderTop: "1px solid rgba(255,255,255,0.06)", 
      background: "rgba(0,0,0,0.2)",
      fontFamily: "'Orbitron', sans-serif"
    }}>
      <div style={{ fontSize: 9, color: "#3bacd6", textTransform: "uppercase", fontWeight: 900, marginBottom: 4, letterSpacing: '2px' }}>OPERATOR</div>
      <div style={{ fontWeight: 700, fontSize: 12, color: "#fff", letterSpacing: '1px' }}>{user.name}</div>
    </div>
  )}
</div>
      {/* ⚔️ 4. MAIN CONTENT AREA (Transparent to show wallpaper) */}
      <div style={{ flex: 1, overflow: "auto", minWidth: 0, position: "relative", zIndex: 5, background: "transparent" }}>
        {children}
      </div>
    </div>
  );
}

// --- 🛠️ HELPER COMPONENTS (Keep these as they are) ---

function PageHeader({ title, subtitle, actions }) {
  return (
    <div style={{ padding: "35px 32px 25px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 900, color: "#fff", letterSpacing: "-0.5px" }}>{title}</h1>
        {subtitle && <p style={{ margin: "8px 0 0", fontSize: 15, color: "#64748b", fontWeight: 500 }}>{subtitle}</p>}
      </div>
      {actions && <div style={{ display: "flex", gap: 10 }}>{actions}</div>}
    </div>
  );
}

function Btn({ onClick, children, variant = "primary", small, style: extra }) {
  const bg = { primary: "linear-gradient(135deg,#6c63ff,#8b5cf6)", secondary: "rgba(255,255,255,0.07)", danger: "rgba(239,68,68,0.15)" };
  const col = { primary: "#fff", secondary: "#ccc", danger: "#f87171" };
  return (
    <button onClick={onClick} style={{ padding: small ? "6px 14px" : "9px 18px", background: bg[variant], border: variant === "secondary" ? "1px solid rgba(255,255,255,0.1)" : "none", borderRadius: 8, color: col[variant], fontWeight: 600, fontSize: small ? 12 : 14, cursor: "pointer", whiteSpace: "nowrap", ...extra }}>
      {children}
    </button>
  );
}

function Modal({ open, onClose, title, children, width = 480 }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 20, backdropFilter: "blur(5px)" }}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#0c0c14", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "28px 28px 24px", width, maxWidth: "100%", maxHeight: "85vh", overflowY: "auto", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#f1f5f9" }}>{title}</h2>
          <button onClick={onClose} style={{ marginLeft: "auto", background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: 24, lineHeight: 1 }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return <div style={{ marginBottom: 16 }}><div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>{children}</div>;
}

function Inp({ value, onChange, type = "text", placeholder, min, max, style: s }) {
  return <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} min={min} max={max}
    style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "9px 12px", color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box", ...s }} />;
}

function Sel({ value, onChange, children, style: s }) {
  return <select value={value} onChange={e => onChange(e.target.value)}
    style={{ width: "100%", background: "#1a1a2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "9px 12px", color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box", ...s }}>
    {children}
  </select>;
}

function Card({ children, style: s }) {
  return <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 22px", ...s }}>{children}</div>;
}

function Badge({ children, color = "#6c63ff" }) {
  return <span style={{ display: "inline-block", background: color + "22", color, padding: "2px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{children}</span>;
}


// ─── 1. TASK GOALS COMPONENT ──────────────────────────────────────────────────
function TaskGoals({ task, onUpdate, onBack }) {
  const [newGoal, setNewGoal] = useState("");
  const goals = task.goals || [];

  const addGoal = () => {
    if (!newGoal.trim()) return;
    onUpdate([...goals, { id: uid(), text: newGoal, completed: false }]);
    setNewGoal("");
  };

  const toggleGoal = (id) => {
    const updated = goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g);
    onUpdate(updated);
  };

  const deleteGoal = (id) => {
    onUpdate(goals.filter(g => g.id !== id));
  };

  return (
    <div style={{ animation: "revealUp 0.4s ease-out" }}>
      <PageHeader title={`${task.name} Goals`} actions={<button onClick={onBack} className="click-scale" style={{padding:"8px 16px", background:"rgba(255,255,255,0.1)", border:"none", borderRadius:8, color:"#fff", cursor:"pointer"}}>← Back</button>} />
      <div style={{ padding: "24px 32px", maxWidth: 600 }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 30 }}>
          <Inp value={newGoal} onChange={setNewGoal} placeholder="Add a new milestone" onKeyDown={e => e.key === 'Enter' && addGoal()} />
          <Btn className="click-scale" onClick={addGoal}>Add</Btn>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {goals.map((g, i) => (
            <div key={g.id} className="reveal-item" style={{ animationDelay: `${i * 0.05}s`, display: 'flex', alignItems: 'center', gap: 12, padding: 15, background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)' }}>
              <input type="checkbox" checked={g.completed} onChange={() => toggleGoal(g.id)} style={{ width: 18, height: 18, cursor: 'pointer' }} />
              <span style={{ flex: 1, textDecoration: g.completed ? 'line-through' : 'none', color: g.completed ? '#64748b' : '#f1f5f9' }}>{g.text}</span>
              <button className="click-scale" onClick={() => deleteGoal(g.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>✕</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── 2. ANALYTICS COMPONENT ──────────────────────────────────────────────────
function Analytics({ task, year, month, onBack, setYear, setMonth, capTaskName }) {
  const canvasRef = useRef(null);
  const [frame, setFrame] = useState(0);
  const [hoverData, setHoverData] = useState(null);

  const now = new Date();
  const isCurrentMonth = now.getFullYear() === year && now.getMonth() === month;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const activeDaysCount = isCurrentMonth ? now.getDate() : daysInMonth;
  const monthName = new Date(year, month).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  
  const monthPrefix = `${year}-${String(month + 1).padStart(2, "0")}`;
  const logs = task.logs || {};
  const dates = Array.from({ length: daysInMonth }, (_, i) => `${monthPrefix}-${String(i + 1).padStart(2, "0")}`);
  const vals = dates.map(d => logs[d] || 0);
  const target = task.targetMinutes;

  const doneCount = vals.slice(0, activeDaysCount).filter(v => v >= target * 0.8).length;
  const productivity = activeDaysCount > 0 ? (doneCount / activeDaysCount) * 100 : 0;

  useEffect(() => {
    let start = Date.now();
    const animate = () => {
      const p = Math.min(1, (Date.now() - start) / 1200);
      setFrame(p);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [month, year]);

  const handleMouseMove = (e) => {
    if (!canvasRef.current || dates.length === 0) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const padL = 60, padR = 30;
    const graphWidth = rect.width - padL - padR;
    const index = Math.round(((x - padL) / graphWidth) * (daysInMonth - 1));
    
    if (index >= 0 && index < daysInMonth && index < (isCurrentMonth ? activeDaysCount : daysInMonth)) {
      setHoverData({ index, date: dates[index], value: vals[index], x: x, y: e.clientY - rect.top });
    } else { setHoverData(null); }
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const W = rect.width, H = rect.height;
    const padL = 60, padR = 30, padT = 40, padB = 50;
    ctx.clearRect(0, 0, W, H);

    const maxV = Math.max(...vals, target, 60) * 1.3;
    const toX = (i) => padL + (i / (daysInMonth - 1)) * (W - padL - padR);
    const toY = (v) => H - padB - (v / maxV) * (H - padB - padT);

    // 🟢 1. VERTICAL AXIS (TIME IN MINUTES)
    ctx.font = "900 10px 'Inter', sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    [0, 0.25, 0.5, 0.75, 1].forEach(p => {
      const val = Math.round(maxV * p);
      const y = toY(val);
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.fillText(`${val}m`, padL - 15, y);
      
      // Horizontal grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.03)";
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
    });

    // 🟢 2. HORIZONTAL AXIS (DAYS 1, 2, 3...)
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    dates.forEach((_, i) => {
      // Show every 2nd or 5th day if mobile, else every day
      if (daysInMonth > 15 && i % 2 !== 0 && i !== daysInMonth - 1) return;
      const x = toX(i);
      ctx.fillStyle = (i + 1 <= activeDaysCount) ? "#94a3b8" : "rgba(255,255,255,0.1)";
      ctx.fillText(i + 1, x, H - padB + 15);
    });

    const drawLimit = (isCurrentMonth ? activeDaysCount : daysInMonth) * frame;

    // 🌊 Area Fill
    const grad = ctx.createLinearGradient(0, padT, 0, H - padB);
    grad.addColorStop(0, "rgba(59, 130, 246, 0.25)");
    grad.addColorStop(1, "rgba(59, 130, 246, 0)");
    ctx.beginPath();
    ctx.moveTo(toX(0), toY(0));
    for(let i=0; i < drawLimit; i++) ctx.lineTo(toX(i), toY(vals[i]));
    ctx.lineTo(toX(Math.max(0, drawLimit - 1)), toY(0));
    ctx.fillStyle = grad; ctx.fill();

    // ☄️ Stroke Path
    ctx.strokeStyle = "#3b82f6"; ctx.lineWidth = 3; ctx.lineJoin = "round";
    ctx.beginPath();
    for(let i=0; i < drawLimit; i++) {
      if (i === 0) ctx.moveTo(toX(i), toY(vals[i]));
      else ctx.lineTo(toX(i), toY(vals[i]));
    }
    ctx.stroke();

    // 🎯 Crosshair logic
    if (hoverData) {
      ctx.setLineDash([5, 5]); ctx.strokeStyle = "rgba(59, 130, 246, 0.5)";
      ctx.beginPath(); ctx.moveTo(toX(hoverData.index), padT); ctx.lineTo(toX(hoverData.index), H - padB); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(toX(hoverData.index), toY(hoverData.value), 6, 0, Math.PI * 2); ctx.fill();
    }
  }, [frame, vals, hoverData, activeDaysCount]);

  return (
    <div style={{ animation: "revealUp 0.5s ease-out", background: "#050508", color: "#f8fafc" }}>
      <PageHeader 
        title={`${capTaskName} Intel`} 
        subtitle={`${monthName} (Active Days: ${activeDaysCount})`}
        actions={
          <div style={{ display: 'flex', gap: 10 }}>
            <Btn className="click-scale" onClick={() => { month === 0 ? (setMonth(11), setYear(y=>y-1)) : setMonth(m=>m-1); }}>‹</Btn>
            <Btn className="click-scale" onClick={() => { month === 11 ? (setMonth(0), setYear(y=>y+1)) : setMonth(m=>m+1); }}>›</Btn>
            <Btn variant="secondary" className="click-scale" onClick={onBack}>← Back</Btn>
          </div>
        } 
      />
      
      <div style={{ padding: "0 32px 32px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* TOP CARDS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[{l:"DONE",v:doneCount,c:"#22c55e"},{l:"ACTIVE",v:activeDaysCount,c:"#3b82f6"},{l:"TARGET",v:target+'m',c:"#f59e0b"}].map((s,i)=>(
              <div key={i} className="reveal-item" style={{ animationDelay:`${i*0.1}s`, background: "#0f172a", padding: 24, borderRadius: 20, borderLeft: `4px solid ${s.c}`, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                <div style={{ color: "#64748b", fontSize: 11, fontWeight: 900, letterSpacing: 1 }}>{s.l}</div>
                <div style={{ fontSize: 32, fontWeight: 900, marginTop: 5 }}>{s.v}</div>
              </div>
            ))}
          </div>

          {/* MAIN GRAPH */}
          <Card style={{ background: "#0f172a", borderRadius: 24, padding: "24px 24px 32px 24px", position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 25 }}>
              <div style={{ fontWeight: 900, color: "#3b82f6", fontSize: 11, letterSpacing: 2 }}>ACTIVITY OSCILLOSCOPE</div>
              <div style={{ color: "#475569", fontSize: 10, fontWeight: 800 }}>Y: MINUTES | X: DAYS</div>
            </div>
            
            <div style={{ position: 'relative' }} onMouseMove={handleMouseMove} onMouseLeave={() => setHoverData(null)}>
              <canvas ref={canvasRef} style={{ width: "100%", height: "340px", cursor: 'crosshair' }} />
              
              {hoverData && (
                <div style={{ 
                  position: 'absolute', left: hoverData.x + 20, top: hoverData.y - 40,
                  background: 'rgba(15, 23, 42, 0.98)', border: '1px solid #3b82f6',
                  padding: '12px 16px', borderRadius: 12, pointerEvents: 'none', backdropFilter: 'blur(10px)', zIndex: 10,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
                }}>
                  <div style={{ fontSize: 10, color: '#64748b', fontWeight: 900, marginBottom: 4 }}>DAY {hoverData.index + 1}</div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: '#fff' }}>{hoverData.value}<span style={{fontSize: 12, color: '#3b82f6'}}>m</span></div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Card style={{ background: "#0f172a", borderRadius: 24, padding: 32, textAlign: 'center' }}>
             <div style={{ fontWeight: 900, color: "#94a3b8", fontSize: 11, marginBottom: 25, letterSpacing: 1 }}>PRODUCTIVITY INDEX</div>
             <div style={{ position: 'relative', width: 160, height: 160, margin: '0 auto' }}>
                <svg width="160" height="160" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="8" />
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round"
                    strokeDasharray={`${(productivity * frame) * 2.76}, 276`} transform="rotate(-90 50 50)" 
                    style={{ filter: "drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))" }} />
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 28, fontWeight: 900 }}>{Math.round(productivity * frame)}%</div>
             </div>
          </Card>

          <Card style={{ background: "#0f172a", borderRadius: 24, padding: 32 }}>
             <div style={{ fontWeight: 900, color: "#94a3b8", fontSize: 11, marginBottom: 20, letterSpacing: 1 }}>SUCCESS MATRIX</div>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
               {vals.map((v, i) => (
                 <div key={i} className="reveal-item" style={{ 
                   animationDelay: `${i*0.01}s`,
                   aspectRatio: '1', borderRadius: 5, 
                   background: v >= target * 0.8 ? '#3b82f6' : (v > 0 ? '#1d4ed8' : ((i+1) <= activeDaysCount ? '#1e293b' : 'rgba(255,255,255,0.02)'))
                 }} />
               ))}
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── 3. MONTHLY CHECKLIST COMPONENT ──────────────────────────────────────────
function MonthlyChecklist({ task, tasks, updateLog, onBack }) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [view, setView] = useState("calendar"); 
  
  const days = new Date(year, month + 1, 0).getDate();
  const [editing, setEditing] = useState(null);
  const [editVal, setEditVal] = useState("");

  const capTaskName = task?.name ? task.name.charAt(0).toUpperCase() + task.name.slice(1) : "Warrior Task";

  const getStatus = (mins) => {
    if (!mins) return "empty";
    const r = Number(mins) / task.targetMinutes;
    if (r >= 0.8) return "done";
    if (r <= 0.25) return "notdone";
    return "partial";
  };

  const colors = { done: "#22c55e", partial: "#f59e0b", notdone: "#ef4444", empty: "rgba(255,255,255,0.04)" };
  const monthStr = `${year}-${String(month+1).padStart(2,"0")}`;
  const currentMonthObj = new Date(year, month, 1);
  const monthName = currentMonthObj.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const firstDow = currentMonthObj.getDay();

  if (view === "analytics") {
    return <Analytics task={task} year={year} month={month} onBack={() => setView("calendar")} setYear={setYear} setMonth={setMonth} capTaskName={capTaskName} />;
  }

  return (
    <div style={{ animation: "revealUp 0.4s ease-out" }}>
      <PageHeader title={`${capTaskName} — ${monthName}`} actions={
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="click-scale" onClick={() => setView("analytics")} style={{ padding: "10px 18px", background: "linear-gradient(135deg, #3b82f6, #2563eb)", border: "none", borderRadius: 10, color: "#fff", fontWeight: 800, cursor: "pointer" }}>⚔️ VIEW ANALYSIS</button>
          <button className="click-scale" onClick={onBack} style={{ padding: "10px 18px", background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, cursor: "pointer" }}>← BACK</button>
        </div>
      } />
      <div style={{ padding: "24px 32px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24 }}>
          <button className="click-scale" onClick={() => { if (month===0){setMonth(11);setYear(y=>y-1);}else setMonth(m=>m-1); }} style={{ background:"rgba(255,255,255,0.07)", border:"none", color:"#fff", borderRadius:8, padding:"8px 16px", cursor:"pointer" }}>‹</button>
          <div style={{ fontWeight:800, fontSize:18, minWidth:180, textAlign:"center" }}>{monthName.toUpperCase()}</div>
          <button className="click-scale" onClick={() => { if (month===11){setMonth(0);setYear(y=>y+1);}else setMonth(m=>m+1); }} style={{ background:"rgba(255,255,255,0.07)", border:"none", color:"#fff", borderRadius:8, padding:"8px 16px", cursor:"pointer" }}>›</button>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:10 }}>
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d=>(<div key={d} style={{ textAlign:"center", fontSize:11, color:"#444", fontWeight:900 }}>{d.toUpperCase()}</div>))}
          {Array(firstDow).fill(null).map((_,i)=><div key={"e"+i} />)}
          {Array.from({length: days}, (_, i) => i + 1).map((day, i) => {
            const dateStr = `${monthStr}-${String(day).padStart(2,"0")}`;
            const mins = task.logs?.[dateStr];
            const status = getStatus(mins);
            return (
              <div key={day} onClick={() => { setEditing(dateStr); setEditVal(mins || ""); }} className="click-scale hover-lift reveal-item" style={{ animationDelay: `${i * 0.01}s`, aspectRatio:"1", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:14, background: colors[status], cursor:"pointer", fontSize: 16, fontWeight: 900 }}>{day}</div>
            );
          })}
        </div>
        <Modal open={!!editing} onClose={() => setEditing(null)} title={`LOG DATA: ${editing}`}>
          <div style={{ animation: "revealUp 0.3s ease" }}>
            <Field label="Minutes Invested"><Inp type="number" value={editVal} onChange={setEditVal} /></Field>
            <Btn className="click-scale" onClick={() => { updateLog(task.id, editing, editVal); setEditing(null); }} style={{ width:"100%", marginTop: 10 }}>SAVE TO DATABASE</Btn>
          </div>
        </Modal>
      </div>
    </div>
  );
}

// ─── 4. MAIN DASHBOARD COMPONENT ─────────────────────────────────────────────
function Dashboard({ user }) {
  const [tasks, setTasks] = useLS(`apx_tasks_${user.id}`, []);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", target: 60 });
  const [view, setView] = useState(null);

  useEffect(() => {
    const needsUpdate = tasks.some(t => t.name && t.name[0] !== t.name[0].toUpperCase());
    if (needsUpdate) {
      const updatedTasks = tasks.map(t => ({
        ...t,
        name: t.name ? t.name.charAt(0).toUpperCase() + t.name.slice(1) : t.name,
        goals: t.goals || [] 
      }));
      setTasks(updatedTasks);
    }
  }, []);

  const addTask = () => {
    if (!form.name.trim()) return;
    const capitalizedName = form.name.trim().charAt(0).toUpperCase() + form.name.trim().slice(1);
    setTasks([...tasks, { id: uid(), name: capitalizedName, targetMinutes: Number(form.target), logs: {}, notes: {}, goals: [] }]);
    setForm({ name: "", target: 60 });
    setShowAdd(false);
  };

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  const updateLog = (taskId, date, minutes) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, logs: { ...t.logs, [date]: minutes === "" || minutes === null ? undefined : Number(minutes) } } : t));
  };
  const updateGoals = (taskId, newGoals) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, goals: newGoals } : t));
  };
  const liveTask = (t) => tasks.find(x => x.id === t.id) || t;

  if (view?.type === "checklist") return <MonthlyChecklist task={liveTask(view.task)} tasks={tasks} updateLog={updateLog} onBack={() => setView(null)} />;
  if (view?.type === "goals") return <TaskGoals task={liveTask(view.task)} onUpdate={(newGoals) => updateGoals(view.task.id, newGoals)} onBack={() => setView(null)} />;

  return (
    <div style={{ animation: "fadeIn 0.5s ease-out" }}>
      <style>{`
        @keyframes revealUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .reveal-item { animation: revealUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both; }
        .hover-lift { transition: all 0.25s ease !important; }
        .hover-lift:hover { transform: translateY(-6px); box-shadow: 0 12px 30px -10px rgba(59, 130, 246, 0.4); border-color: rgba(59, 130, 246, 0.4) !important; }
        .click-scale:active { transform: scale(0.96); }
      `}</style>

      <PageHeader
        title={`Welcome, ${user.name}!`}
        actions={<button className="click-scale" onClick={() => setShowAdd(true)} style={{ padding:"10px 22px", background:"#3b82f6", border:"none", borderRadius:12, color:"#fff", fontWeight:800, cursor:"pointer", boxShadow:"0 4px 15px rgba(59, 130, 246, 0.3)" }}>+ NEW MISSION</button>}
      />
      
      <div style={{ padding: "24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(310px,1fr))", gap: 20 }}>
          {tasks.map((task, index) => (
            <div key={task.id} className="reveal-item hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 18, color: "#fff" }}>{task.name}</div>
                    <div style={{ color: "#475569", fontSize: 12, fontWeight: 700, marginTop: 2 }}>{task.targetMinutes} MIN DAILY TARGET</div>
                  </div>
                  <button className="click-scale" onClick={() => deleteTask(task.id)} style={{ background: "none", border: "none", color: "#f87171", cursor: "pointer", fontSize: 18 }}>🗑</button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <button className="click-scale" onClick={() => setView({ type: "checklist", task })} style={{ padding:"12px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, color:"#fff", cursor:"pointer", fontWeight:600, width:"100%" }}>📅 CHECKLIST</button>
                  <button className="click-scale" onClick={() => setView({ type: "goals", task })} style={{ padding:"12px", background:"#3b82f6", border:"none", borderRadius:10, color:"#fff", cursor:"pointer", fontWeight:800, width:"100%" }}>🎯 GOALS</button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="New Objective">
        <Field label="Task Name"><Inp value={form.name} onChange={v => setForm({...form, name: v})} /></Field>
        <Field label="Target (Min)"><Inp type="number" value={form.target} onChange={v => setForm({...form, target: v})} /></Field>
        <Btn className="click-scale" onClick={addTask} style={{ width: "100%", marginTop: 10 }}>ACTIVATE</Btn>
      </Modal>
    </div>
  );
}
// ─── TIMETABLE BUILDER ────────────────────────────────────────────────────────
function TimetableBuilder({ user }) {
  const [timetable, setTimetable] = useLS(`apx_timetable_${user.id}`, null);
  const [subtab, setSubtab] = useState(() => {
    const stored = localStorage.getItem(`apx_timetable_${user.id}`);
    return (stored && stored !== "undefined" && stored !== "null") ? "timetable" : "setup";
  });
  const [tasks, setTasks] = useLS(`apx_tt_tasks_${user.id}`, []);
  const [constraints, setConstraints] = useLS(`apx_tt_con_${user.id}`, {
    wake: "07:00", sleep: "23:00", maxHours: 8, breakMin: 15, noWork: [],
    blocks: []
  });
  const [history, setHistory] = useLS(`apx_tt_history_${user.id}`, []);
  const [form, setForm] = useState({ title:"", priority:3, duration:120, energy:3, type:"daily", days:[], preferStart:"", preferEnd:"", taskType:"Deep Work", recurrence:"daily" });
  const [blockForm, setBlockForm] = useState({ start: "09:00", end: "16:00", label: "College / Class", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] });
  const [aiOptimizing, setAiOptimizing] = useState(false);
  const [apiKey] = useLS("apx_gemini_key", "");
  const [showKeyModal, setShowKeyModal] = useState(false);
  const exportRef = useRef(null);

  const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const TASK_TYPES = ["Deep Work","Revision","Practice","Reading","Exercise","Meeting","Leisure","Other"];
  const COLOR_MAP = { "Deep Work":"#6c63ff","Revision":"#3b82f6","Practice":"#22c55e","Reading":"#f59e0b","Exercise":"#ef4444","Meeting":"#ec4899","Leisure":"#8b5cf6","Other":"#64748b","Blocked":"#ef4444" };

  const PRESETS = [
    {
      name: "🎓 Exam Cram",
      tasks: [
        { id: "1", title: "Math Deep Practice", priority: 5, duration: 120, energy: 5, type: "daily", days: [], preferStart: "08:30", preferEnd: "10:30", taskType: "Practice", recurrence: "daily" },
        { id: "2", title: "Physics Revision", priority: 4, duration: 90, energy: 4, type: "daily", days: [], preferStart: "11:00", preferEnd: "12:30", taskType: "Revision", recurrence: "daily" },
        { id: "3", title: "Chemistry Mock Paper", priority: 4, duration: 120, energy: 4, type: "daily", days: [], preferStart: "14:00", preferEnd: "16:00", taskType: "Practice", recurrence: "daily" },
        { id: "4", title: "Formula Active Recall", priority: 3, duration: 60, energy: 3, type: "daily", days: [], preferStart: "17:00", preferEnd: "18:00", taskType: "Reading", recurrence: "daily" }
      ],
      constraints: { wake: "07:00", sleep: "23:00", maxHours: 10, breakMin: 15, noWork: [], blocks: [] }
    },
    {
      name: "⚖️ Balanced Plan",
      tasks: [
        { id: "1", title: "Deep Work coding", priority: 4, duration: 150, energy: 5, type: "daily", days: [], preferStart: "09:00", preferEnd: "11:30", taskType: "Deep Work", recurrence: "daily" },
        { id: "2", title: "Literature Reading", priority: 3, duration: 60, energy: 2, type: "daily", days: [], preferStart: "13:30", preferEnd: "14:30", taskType: "Reading", recurrence: "daily" },
        { id: "3", title: "Topic Revision", priority: 3, duration: 90, energy: 3, type: "daily", days: [], preferStart: "15:30", preferEnd: "17:00", taskType: "Revision", recurrence: "daily" },
        { id: "4", title: "Cardio Exercise", priority: 3, duration: 45, energy: 4, type: "daily", days: [], preferStart: "18:00", preferEnd: "18:45", taskType: "Exercise", recurrence: "daily" }
      ],
      constraints: { wake: "07:30", sleep: "22:30", maxHours: 7, breakMin: 20, noWork: ["Sun"], blocks: [] }
    },
    {
      name: "🏃 Light Review",
      tasks: [
        { id: "1", title: "Java revision", priority: 4, duration: 90, energy: 3, type: "daily", days: [], preferStart: "10:00", preferEnd: "11:30", taskType: "Revision", recurrence: "daily" },
        { id: "2", title: "History reading", priority: 2, duration: 60, energy: 2, type: "daily", days: [], preferStart: "15:00", preferEnd: "16:00", taskType: "Reading", recurrence: "daily" }
      ],
      constraints: { wake: "08:00", sleep: "23:00", maxHours: 5, breakMin: 15, noWork: ["Sat", "Sun"], blocks: [] }
    }
  ];

  const loadPreset = (preset) => {
    setTasks(preset.tasks);
    setConstraints(preset.constraints);
  };

  const addTask = () => {
    if (!form.title.trim()) return;
    setTasks([...tasks, { ...form, id: uid(), duration: Number(form.duration), priority: Number(form.priority), energy: Number(form.energy) }]);
    setForm({ title:"", priority:3, duration:120, energy:3, type:"daily", days:[], preferStart:"", preferEnd:"", taskType:"Deep Work", recurrence:"daily" });
  };

  const addBlock = () => {
    if (!blockForm.start || !blockForm.end || !blockForm.label.trim() || blockForm.days.length === 0) {
      alert("Please complete all block form fields (From, To, Label, Days).");
      return;
    }
    const blocks = [...(constraints.blocks || []), { ...blockForm, id: uid() }];
    setConstraints({ ...constraints, blocks });
  };

  const removeBlock = (id) => {
    const blocks = (constraints.blocks || []).filter(b => b.id !== id);
    setConstraints({ ...constraints, blocks });
  };

  const overlapsAny = (startMin, endMin, existingSlots) => {
    return existingSlots.some(s => startMin < s.startMin + s.duration && endMin > s.startMin);
  };

  const generate = () => {
    const [wH, wM] = constraints.wake.split(":").map(Number);
    const [sH, sM] = constraints.sleep.split(":").map(Number);
    const wakeMin = wH*60+wM;
    const sleepMin = sH*60+sM;
    const maxMin = Math.min(constraints.maxHours * 60, sleepMin - wakeMin);

    const sorted = [...tasks].sort((a,b) => {
      const score = t => t.priority*3 + t.energy;
      return score(b) - score(a);
    });

    const table = {};
    DAYS.forEach((day, dayIdx) => {
      let cursor = wakeMin;
      let usedMin = 0;
      const slots = [];

      // Inject Blocked commitments
      const dayBlocks = (constraints.blocks || []).filter(b => b.days.includes(day));
      dayBlocks.forEach(b => {
        const [sh, sm] = b.start.split(":").map(Number);
        const [eh, em] = b.end.split(":").map(Number);
        slots.push({
          id: b.id,
          title: b.label,
          taskType: "Blocked",
          start: b.start,
          end: b.end,
          startMin: sh * 60 + sm,
          duration: (eh*60+em) - (sh*60+sm),
          priority: 5,
          energy: 1,
          isBlockSlot: true
        });
      });

      sorted.forEach(task => {
        if (constraints.noWork.includes(day) && task.type !== "specific") return;
        if (task.type === "specific" && (!task.days || !task.days.includes(day))) return;
        if (usedMin + task.duration > maxMin) return;

        let start = cursor;
        if (task.preferStart) {
          const [ph, pm] = task.preferStart.split(":").map(Number);
          const preferred = ph*60+pm;
          if (preferred >= wakeMin && preferred + task.duration <= sleepMin && !overlapsAny(preferred, preferred + task.duration, slots)) {
            start = preferred;
          }
        }

        let attempts = 0;
        while (attempts < 60 && (overlapsAny(start, start + task.duration, slots) || start + task.duration > sleepMin)) {
          start += 30; // check in half hour increments
          attempts++;
        }
        if (start + task.duration > sleepMin) return;
        if (overlapsAny(start, start + task.duration, slots)) return;

        const sh = Math.floor(start/60), sm = start%60;
        const eh = Math.floor((start+task.duration)/60), em = (start+task.duration)%60;
        slots.push({ ...task,
          start: `${String(sh).padStart(2,"0")}:${String(sm).padStart(2,"0")}`,
          end: `${String(eh).padStart(2,"0")}:${String(em).padStart(2,"0")}`,
          startMin: start,
          isBlockSlot: false
        });
        cursor = start + task.duration + constraints.breakMin;
        usedMin += task.duration + constraints.breakMin;
      });

      // Sort by start time for display
      table[day] = slots.sort((a,b) => a.startMin - b.startMin);
    });

    setTimetable(table);
    setSubtab("timetable");

    // Snapshot configuration to history
    const newHistoryItem = {
      id: uid(),
      name: `Schedule generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`,
      createdAt: new Date().toISOString(),
      tasks: [...tasks],
      constraints: { ...constraints },
      timetable: table
    };
    setHistory([newHistoryItem, ...history]);
  };

  const generateWithAI = async () => {
    if (!apiKey) {
      alert("Please set your Gemini API key in VedAI tab or Settings first.");
      return;
    }
    setAiOptimizing(true);
    try {
      const prompt = `You are an expert AI productivity coach. Formulate an optimized weekly study schedule based on the following:
Tasks List: ${JSON.stringify(tasks)}
Weekly Constraints: wake at ${constraints.wake}, sleep at ${constraints.sleep}, max study hours daily ${constraints.maxHours}, rest/no-work days: ${constraints.noWork.join(", ")} (Do not schedule daily tasks on rest days, but schedule specific tasks if they target a rest day).
Locked Block Commitments: ${JSON.stringify(constraints.blocks)} (No tasks should ever be assigned during these times).

Instructions:
1. Output the final schedule strictly as a raw JSON object (with no markdown or wrapping quotes) matching this exact format:
{
  "Mon": [ { "id": "1", "title": "Math Deep Practice", "taskType": "Practice", "start": "08:30", "end": "10:30", "duration": 120, "priority": 5, "energy": 5, "isBlockSlot": false } ],
  "Tue": [], ...
}
2. Ensure you represent each week day: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
3. Output ONLY the raw valid JSON. Do not write any explanations before or after.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.1, responseMimeType: "application/json" }
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      const parsed = JSON.parse(text.trim());

      // Merge locked blocks into AI response
      const finalTable = {};
      DAYS.forEach(day => {
        const slots = parsed[day] || [];
        const dayBlocks = (constraints.blocks || []).filter(b => b.days.includes(day));
        dayBlocks.forEach(b => {
          const [sh, sm] = b.start.split(":").map(Number);
          const [eh, em] = b.end.split(":").map(Number);
          slots.push({
            id: b.id,
            title: b.label,
            taskType: "Blocked",
            start: b.start,
            end: b.end,
            startMin: sh * 60 + sm,
            duration: (eh*60+em) - (sh*60+sm),
            priority: 5,
            energy: 1,
            isBlockSlot: true
          });
        });
        finalTable[day] = slots.sort((a,b) => {
          const [ah, am] = a.start.split(":").map(Number);
          const [bh, bm] = b.start.split(":").map(Number);
          return (ah*60+am) - (bh*60+bm);
        });
      });

      setTimetable(finalTable);
      setSubtab("timetable");

      // Snapshot to history
      const newHistoryItem = {
        id: uid(),
        name: `AI Generated Schedule (${new Date().toLocaleDateString()})`,
        createdAt: new Date().toISOString(),
        tasks: [...tasks],
        constraints: { ...constraints },
        timetable: finalTable
      };
      setHistory([newHistoryItem, ...history]);
    } catch (e) {
      alert("Failed to generate schedule with AI: " + e.message);
    } finally {
      setAiOptimizing(false);
    }
  };

  const handleMoveSlot = (sourceDay, slotId, targetDay, targetHour, targetMinute) => {
    const targetSlot = (timetable[sourceDay] || []).find(s => s.id === slotId);
    if (!targetSlot) return;

    if (targetSlot.isBlockSlot) {
      alert("Blocked commitment slots cannot be dragged. Remove them in constraints setup.");
      return;
    }

    const startMin = targetHour * 60 + targetMinute;
    const endMin = startMin + targetSlot.duration;

    const targetDaySlots = (timetable[targetDay] || []).filter(s => s.id !== slotId);
    const hasConflict = targetDaySlots.some(s => startMin < s.startMin + s.duration && endMin > s.startMin);

    if (hasConflict) {
      if (!window.confirm("⚠️ Conflict Warning: Dragged slot overlaps with another task or block. Proceed anyway?")) {
        return;
      }
    }

    const sh = Math.floor(startMin / 60), sm = startMin % 60;
    const eh = Math.floor(endMin / 60), em = endMin % 60;
    
    const newStart = `${String(sh).padStart(2,"0")}:${String(sm).padStart(2,"0")}`;
    const newEnd = `${String(eh).padStart(2,"0")}:${String(em).padStart(2,"0")}`;

    const updated = { ...timetable };
    updated[sourceDay] = (updated[sourceDay] || []).filter(s => s.id !== slotId);
    
    const moved = { 
      ...targetSlot, 
      start: newStart, 
      end: newEnd, 
      startMin 
    };

    updated[targetDay] = [...(updated[targetDay] || []), moved].sort((a,b) => a.startMin - b.startMin);
    setTimetable(updated);

    // Save update to history
    const newHistoryItem = {
      id: uid(),
      name: `Drag-adjusted Schedule (${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})})`,
      createdAt: new Date().toISOString(),
      tasks: [...tasks],
      constraints: { ...constraints },
      timetable: updated
    };
    setHistory([newHistoryItem, ...history]);
  };

  const getRenderState = (day, hour, minute) => {
    const currentMin = hour * 60 + minute;
    const daySlots = timetable[day] || [];

    const startingSlot = daySlots.find(s => {
      const [sh, sm] = s.start.split(":").map(Number);
      const startMin = sh * 60 + sm;
      const startCell = Math.floor(startMin / 30) * 30;
      return startCell === currentMin;
    });

    if (startingSlot) {
      const rowSpan = startingSlot.isBlockSlot ? 1 : Math.max(1, Math.round(startingSlot.duration / 30));
      return { render: true, slot: startingSlot, rowSpan };
    }

    const occupiedSlot = daySlots.find(s => {
      if (s.isBlockSlot) return false; // do not collapse cells for blocked slots
      const [sh, sm] = s.start.split(":").map(Number);
      const startMin = sh * 60 + sm;
      const startCell = Math.floor(startMin / 30) * 30;
      const rowSpan = Math.max(1, Math.round(s.duration / 30));
      const endCell = startCell + rowSpan * 30;
      return currentMin > startCell && currentMin < endCell;
    });

    if (occupiedSlot) return { render: false };
    return { render: true, slot: null, rowSpan: 1 };
  };

  const isCellBlocked = (day, hour, minute) => {
    const currentMin = hour * 60 + minute;
    return (constraints.blocks || []).some(b => {
      if (!b.days.includes(day)) return false;
      const [sh, sm] = b.start.split(":").map(Number);
      const [eh, em] = b.end.split(":").map(Number);
      const startMin = sh * 60 + sm;
      const endMin = eh * 60 + em;
      return currentMin >= startMin && currentMin < endMin;
    });
  };

  // Build 30-minute rows for grid (5:00 to 22:30)
  const HOURS = Array.from({length:18}, (_,i)=>i+5); // 5..22
  const ROWS = [];
  HOURS.forEach(h => {
    ROWS.push({ hour: h, minute: 0, label: `${String(h).padStart(2,"0")}:00` });
    ROWS.push({ hour: h, minute: 30, label: `${String(h).padStart(2,"0")}:30` });
  });

  const filteredRows = ROWS.filter(row => {
    const currentMin = row.hour * 60 + row.minute;
    const isInsideAnyBlock = (constraints.blocks || []).some(b => {
      const [sh, sm] = b.start.split(":").map(Number);
      const [eh, em] = b.end.split(":").map(Number);
      const startMin = sh * 60 + sm;
      const endMin = eh * 60 + em;
      return currentMin > startMin && currentMin < endMin;
    });
    return !isInsideAnyBlock;
  });

  const getDayTotal = (day) => {
    return (timetable[day] || []).filter(s => !s.isBlockSlot).reduce((acc, s) => acc + s.duration, 0);
  };

  const downloadImage = async () => {
    if (!exportRef.current) return;
    try {
      const html2canvas = (await import("https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.esm.js")).default;
      const canvas = await html2canvas(exportRef.current, { backgroundColor:"#0a0a0f", scale:2 });
      const a = document.createElement("a"); a.download="timetable.png"; a.href=canvas.toDataURL(); a.click();
    } catch { printTimetableCleanly(); }
  };

  const printTimetableCleanly = () => {
    const printContent = document.getElementById("tt-print");
    if (!printContent) return;

    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <html>
        <head>
          <title>Weekly Schedule</title>
          <style>
            @page { size: A4 landscape; margin: 8mm; }
            body { 
              font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif; 
              margin: 0; 
              padding: 0; 
              background: #fff; 
              color: #111; 
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            #tt-print {
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
              background: #fff !important;
              color: #111 !important;
            }
            table { 
              width: 100%; 
              border-collapse: collapse; 
              margin-top: 10px;
            }
            th, td { 
              border: 1px solid #d1d5db !important; 
              padding: 6px 8px !important; 
              font-size: 11px !important; 
              vertical-align: top !important;
              height: 38px !important;
              box-sizing: border-box !important;
            }
            th { 
              background: #f3f4f6 !important; 
              font-weight: 700 !important; 
              color: #1f2937 !important;
              text-align: center !important;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          </style>
        </head>
        <body>
          ${printContent.outerHTML}
        </body>
      </html>
    `);
    doc.close();

    setTimeout(() => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }, 500);
  };

  return (
    <div>
      <PageHeader title="Timetable Planner" subtitle="Interactive schedule builder with custom commitments and AI helper"
        actions={subtab==="timetable" && timetable ? (
          <div style={{display:"flex",gap:8}}>
            <Btn variant="secondary" onClick={printTimetableCleanly}>🖨 Print Timetable</Btn>
            <Btn onClick={downloadImage}>⬇ Download Image</Btn>
          </div>
        ) : null}
      />

      {/* Navigation Subtabs */}
      <div style={{ display:"flex", borderBottom:"1px solid rgba(255,255,255,0.07)", marginBottom:20 }}>
        {[
          ["setup","+ Task & Block Setup"],
          ["timetable","📅 Interactive Schedule"],
          ["analytics","📈 Productivity Analytics"],
          ["printable","🖨 Printable Export"]
        ].map(([id,lbl])=>(
          <button key={id} onClick={()=>setSubtab(id)}
            style={{ padding:"12px 20px", background:"none", border:"none", color:subtab===id?"#a78bfa":"#64748b", fontWeight:subtab===id?800:600, borderBottom:subtab===id?"2px solid #a78bfa":"none", cursor:"pointer", transition:"0.2s", fontSize:13 }}>{lbl}</button>
        ))}
      </div>

      {/* ── SETUP TAB ── */}
      {subtab === "setup" && (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
          {/* Presets Row */}
          <div style={{ gridColumn: "1/-1", display: "flex", gap: 12, background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: "16px 20px", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#cbd5e1", letterSpacing: 0.5, fontFamily: "Orbitron" }}>✨ LOAD STUDY PRESETS:</span>
            {PRESETS.map(p => (
              <button key={p.name} onClick={() => loadPreset(p)}
                style={{ padding: "8px 16px", background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 10, color: "#a78bfa", fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(108,99,255,0.18)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(108,99,255,0.08)"; }}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Create Task Form */}
          <Card>
            <div style={{ fontSize:16, fontWeight:700, color:"#f1f5f9", marginBottom:18 }}>Create New Task</div>
            <Field label="Title *"><Inp value={form.title} onChange={v=>setForm({...form,title:v})} placeholder="e.g., Physics Revision" /></Field>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              <Field label="Priority (1-5) *"><Inp type="number" value={form.priority} onChange={v=>setForm({...form,priority:v})} min="1" max="5" /></Field>
              <Field label="Duration (hours) *"><Inp type="number" value={Math.round(form.duration/60*10)/10} onChange={v=>setForm({...form,duration:Math.round(Number(v)*60)})} min="0.5" max="8" step="0.5" /></Field>
            </div>
            <Field label="Deadline *"><Inp type="date" value={form.deadline||""} onChange={v=>setForm({...form,deadline:v})} /></Field>
            <Field label="Energy Level (1-5) *">
              <div style={{ display:"flex", gap:8 }}>
                {[1,2,3,4,5].map(n=>(
                  <button key={n} onClick={()=>setForm({...form,energy:n})} style={{ flex:1, padding:"8px 0", borderRadius:8, border:"1px solid rgba(255,255,255,0.15)", background:form.energy===n?"#3b82f6":"transparent", color:form.energy===n?"#fff":"#888", cursor:"pointer", fontWeight:700, fontSize:15 }}>{n}</button>
                ))}
              </div>
            </Field>
            <Field label="Type *">
              <Sel value={form.taskType} onChange={v=>setForm({...form,taskType:v})}>
                {TASK_TYPES.map(t=><option key={t} value={t}>{t}</option>)}
              </Sel>
            </Field>
            <Field label="Task Recurrence Type *">
              <Sel value={form.type} onChange={v=>setForm({...form,type:v})}>
                <option value="daily">Daily Task</option>
                <option value="specific">Specific Days</option>
              </Sel>
            </Field>
            {form.type==="specific" && (
              <Field label="Select Days">
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  {DAYS.map(d=>(
                    <button key={d} onClick={()=>setForm({...form,days:form.days.includes(d)?form.days.filter(x=>x!==d):[...form.days,d]})}
                      style={{ padding:"5px 12px", borderRadius:7, border:"1px solid rgba(255,255,255,0.15)", background:form.days.includes(d)?"#6c63ff":"transparent", color:form.days.includes(d)?"#fff":"#888", cursor:"pointer", fontSize:13 }}>{d}</button>
                  ))}
                </div>
              </Field>
            )}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              <Field label="Preferred Start"><Inp type="time" value={form.preferStart} onChange={v=>setForm({...form,preferStart:v})} /></Field>
              <Field label="Preferred End"><Inp type="time" value={form.preferEnd} onChange={v=>setForm({...form,preferEnd:v})} /></Field>
            </div>
            <Btn onClick={addTask} style={{ width:"100%", marginTop:4 }}>Add Task</Btn>
          </Card>

          {/* Constraints & Blocks Card */}
          <Card>
            <div style={{ fontSize:16, fontWeight:700, color:"#f1f5f9", marginBottom:18 }}>Constraints & Study Slots</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              <Field label="Wake Up Time"><Inp type="time" value={constraints.wake} onChange={v=>setConstraints({...constraints,wake:v})} /></Field>
              <Field label="Sleep Time"><Inp type="time" value={constraints.sleep} onChange={v=>setConstraints({...constraints,sleep:v})} /></Field>
            </div>
            <Field label="Max Study Hours/Day"><Inp type="number" value={constraints.maxHours} onChange={v=>setConstraints({...constraints,maxHours:Number(v)})} min="1" max="18" /></Field>
            <Field label="Break Duration (minutes)"><Inp type="number" value={constraints.breakMin} onChange={v=>setConstraints({...constraints,breakMin:Number(v)})} min="0" max="60" /></Field>
            <Field label="No Study Days">
              <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                {DAYS.map(d=>(
                  <button key={d} onClick={()=>setConstraints({...constraints,noWork:constraints.noWork.includes(d)?constraints.noWork.filter(x=>x!==d):[...constraints.noWork,d]})}
                    style={{ padding:"5px 11px", borderRadius:20, border:"1px solid rgba(255,255,255,0.15)", background:constraints.noWork.includes(d)?"#ef4444":"transparent", color:constraints.noWork.includes(d)?"#fff":"#888", cursor:"pointer", fontSize:13, fontWeight:600 }}>{d}</button>
                ))}
              </div>
            </Field>

            {/* Block hours setup */}
            <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#cbd5e1", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "Orbitron" }}>🏫 College & Class Blocks (Busy Hours)</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 10 }}>
                <Field label="Block Label"><Inp value={blockForm.label} onChange={v => setBlockForm({ ...blockForm, label: v })} placeholder="e.g. Lectures / Work" /></Field>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <Field label="From"><Inp type="time" value={blockForm.start} onChange={v => setBlockForm({ ...blockForm, start: v })} /></Field>
                  <Field label="To"><Inp type="time" value={blockForm.end} onChange={v => setBlockForm({ ...blockForm, end: v })} /></Field>
                </div>
              </div>
              <Field label="Select Target Days">
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                  {DAYS.map(d => (
                    <button key={d} onClick={() => setBlockForm({ ...blockForm, days: blockForm.days.includes(d) ? blockForm.days.filter(x => x !== d) : [...blockForm.days, d] })}
                      style={{ padding: "5px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: blockForm.days.includes(d) ? "#6c63ff" : "transparent", color: blockForm.days.includes(d) ? "#fff" : "#888", cursor: "pointer", fontSize: 12 }}>{d}</button>
                  ))}
                </div>
              </Field>
              <Btn small onClick={addBlock} style={{ width: "100%", marginBottom: 16 }}>Add Busy block</Btn>
              
              {/* Blocks list */}
              {(constraints.blocks || []).map(b => (
                <div key={b.id} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 10, padding: "8px 14px", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: "#f87171", flex: 1, fontWeight: 600 }}>🚫 {b.label} ({b.start}–{b.end}) on {b.days.join(", ")}</span>
                  <button onClick={() => removeBlock(b.id)} style={{ background: "none", border: "none", color: "#f87171", cursor: "pointer", fontSize: 18, fontWeight:"bold" }}>×</button>
                </div>
              ))}
            </div>

            <div style={{ marginTop:24, display:"flex", gap:12 }}>
              <button onClick={generate} style={{ flex:1, padding:"12px 0", background:"linear-gradient(135deg,#8b5cf6,#ec4899)", border:"none", borderRadius:12, color:"#fff", fontWeight:800, fontSize:13, cursor:"pointer", boxShadow:"0 4px 16px rgba(139,92,246,0.2)" }}>
                ✨ Auto Schedule Tasks
              </button>
              <button onClick={generateWithAI} disabled={aiOptimizing} style={{ flex:1, padding:"12px 0", background:"linear-gradient(135deg,#3b82f6,#22c55e)", border:"none", borderRadius:12, color:"#fff", fontWeight:800, fontSize:13, cursor:"pointer", boxShadow:"0 4px 16px rgba(59,130,246,0.2)", opacity:aiOptimizing?0.5:1 }}>
                {aiOptimizing ? "🤖 Analyzing..." : "🤖 AI Optimize"}
              </button>
            </div>
          </Card>

          {/* Active Tasks List */}
          {tasks.length > 0 && (
            <div style={{ gridColumn:"1/-1" }}>
              <Card>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                  <div style={{ fontSize:14, fontWeight:800, color:"#aaa", letterSpacing:0.5 }}>ACTIVE TASKS ({tasks.length})</div>
                  {/* Category segment distribution bar */}
                  {(() => {
                    const counts = {};
                    tasks.forEach(t => { counts[t.taskType] = (counts[t.taskType] || 0) + t.duration; });
                    const totalDuration = tasks.reduce((s,t) => s + t.duration, 0);
                    return (
                      <div style={{ display:"flex", gap:3, width:260, height:8, borderRadius:4, overflow:"hidden", background:"rgba(255,255,255,0.05)" }}>
                        {Object.keys(counts).map(type => {
                          const pct = Math.round((counts[type] / totalDuration) * 100);
                          return (
                            <div key={type} style={{ width: `${pct}%`, background: COLOR_MAP[type] || "#6c63ff", height: "100%" }}
                              title={`${type}: ${pct}% (${Math.round(counts[type]/60*10)/10}h)`} />
                          );
                        })}
                      </div>
                    );
                  })()}
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:10 }}>
                  {tasks.map(t=>(
                    <div key={t.id} style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", borderRadius:10, padding:"12px 14px", display:"flex", flexDirection:"column", gap:6 }}>
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                        <span style={{ fontWeight:700, fontSize:14, color:"#f1f5f9" }}>{t.title}</span>
                        <button onClick={()=>setTasks(tasks.filter(x=>x.id!==t.id))} style={{ background:"none", border:"none", color:"#f87171", cursor:"pointer" }}>×</button>
                      </div>
                      <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                        <span style={{ fontSize:11, background:COLOR_MAP[t.taskType]+"22", color:COLOR_MAP[t.taskType], padding:"2px 8px", borderRadius:20, fontWeight:700 }}>{t.taskType}</span>
                        <span style={{ fontSize:11, color:"#888" }}>P{t.priority} · {t.duration}min · E{t.energy}</span>
                      </div>
                      <div style={{ fontSize:11, color:"#64748b" }}>{t.type === "specific" ? t.days.join(",") : "Daily"}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      )}

      {/* ── INTERACTIVE TIMETABLE TAB ── */}
      {subtab === "timetable" && (
        timetable ? (
          <div>
            <div style={{ color:"#888", fontSize:12, marginBottom:12, display:"flex", alignItems:"center", gap:6 }}>
              <span>💡 Drag study cards to adjust timeslots. Warning conflict warnings automatically check constraints.</span>
            </div>
            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", minWidth:800 }}>
                <thead>
                  <tr style={{ background:"rgba(255,255,255,0.02)" }}>
                    <th style={{ padding:"10px 14px", fontSize:13, color:"#64748b", fontWeight:700, border:"1px solid rgba(255,255,255,0.05)", width:70, textAlign:"center" }}>Time</th>
                    {DAYS.map(d=>(
                      <th key={d} style={{ padding:"10px 14px", fontSize:13, color:"#a78bfa", fontWeight:700, border:"1px solid rgba(255,255,255,0.05)", textAlign:"center" }}>{d === "Mon" ? "Monday" : d === "Tue" ? "Tuesday" : d === "Wed" ? "Wednesday" : d === "Thu" ? "Thursday" : d === "Fri" ? "Friday" : d === "Sat" ? "Saturday" : "Sunday"}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map(row=>{
                    return (
                      <tr key={row.label}>
                        <td style={{ padding:"8px 12px", border:"1px solid rgba(255,255,255,0.05)", color:"#64748b", fontSize:12, verticalAlign:"middle", whiteSpace:"nowrap", textAlign:"center" }}>{row.label}</td>
                        {DAYS.map(d=>{
                          const state = getRenderState(d, row.hour, row.minute);
                          if (!state.render) return null;
                          const slot = state.slot;
                          const color = slot ? (COLOR_MAP[slot.taskType] || "#6c63ff") : null;
                          return (
                            <td key={d} rowSpan={state.rowSpan}
                              onDragOver={e => e.preventDefault()}
                              onDrop={e => {
                                const { day: sourceDay, slotId } = JSON.parse(e.dataTransfer.getData("text/plain"));
                                handleMoveSlot(sourceDay, slotId, d, row.hour, row.minute);
                              }}
                              style={{ 
                                padding:"4px 6px", 
                                border:"1px solid rgba(255,255,255,0.05)", 
                                verticalAlign:"top", 
                                minWidth:110, 
                                height: 48 * state.rowSpan,
                                background: !slot && isCellBlocked(d, row.hour, row.minute) ? "rgba(239, 68, 68, 0.03)" : "transparent"
                              }}
                            >
                              {slot && (
                                <div draggable={!slot.isBlockSlot}
                                  onDragStart={e => {
                                    e.dataTransfer.setData("text/plain", JSON.stringify({ day: d, slotId: slot.id }));
                                  }}
                                  style={{ 
                                    background: slot.isBlockSlot ? "rgba(239, 68, 68, 0.08)" : color+"15", 
                                    borderLeft:`4px solid ${color}`, 
                                    borderRadius:8, 
                                    padding: slot.isBlockSlot ? "5px 10px" : "6px 10px",
                                    border:`1px solid ${color}33`,
                                    boxShadow:`0 4px 12px ${color}11`,
                                    cursor: slot.isBlockSlot ? "not-allowed" : "grab",
                                    height: "100%",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    flexDirection: slot.isBlockSlot ? "row" : "column",
                                    alignItems: slot.isBlockSlot ? "center" : "stretch",
                                    justifyContent: "space-between"
                                  }}
                                >
                                  {slot.isBlockSlot ? (
                                    <>
                                      <span style={{ fontSize:11, fontWeight:800, color:"#ef4444" }}>🚫 {slot.title}</span>
                                      <span style={{ fontSize:10, color:"#ef4444", fontWeight:700 }}>{slot.start}–{slot.end}</span>
                                    </>
                                  ) : (
                                    <>
                                      <div>
                                        <div style={{ fontSize:12, fontWeight:800, color:"#f1f5f9", lineHeight:1.2 }}>{slot.title}</div>
                                        <div style={{ fontSize:10, color:color, fontWeight:700, marginTop:3 }}>{slot.taskType}</div>
                                      </div>
                                      <div style={{ fontSize:10, color:"#888", marginTop:4, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                                        <span>{slot.start}–{slot.end}</span>
                                        {!slot.isBlockSlot && <span style={{ color:"#a78bfa", fontWeight:700 }}>⚡{slot.energy}</span>}
                                      </div>
                                    </>
                                  )}
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <Card>
            <div style={{ textAlign:"center", color:"#555", padding:60 }}>
              <div style={{fontSize:40,marginBottom:12}}>🗓</div>
              <div>No weekly timetable generated yet.</div>
              <Btn style={{marginTop:16}} onClick={()=>setSubtab("setup")}>Go to Setup →</Btn>
            </div>
          </Card>
        )
      )}

      {/* ── ANALYTICS & ADAPTATION TAB ── */}
      {subtab === "analytics" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Charts Row */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
            <Card>
              <div style={{ fontSize:16, fontWeight:700, color:"#f1f5f9", marginBottom:16 }}>Weekly Productive Hours Distribution</div>
              {timetable ? (
                <div style={{ padding: "10px 0" }}>
                  <svg viewBox="0 0 500 200" style={{ width: "100%", height: 200 }}>
                    <defs>
                      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#6c63ff" />
                      </linearGradient>
                    </defs>
                    {/* Render grid lines */}
                    {[0, 50, 100, 150].map(y => (
                      <line key={y} x1="40" y1={170 - y} x2="480" y2={170 - y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    ))}
                    {DAYS.map((d, i) => {
                      const totalMin = getDayTotal(d);
                      const barHeight = Math.min(150, (totalMin / 480) * 150); // capped at 8h
                      return (
                        <g key={d}>
                          <rect x={60 + i * 60} y={170 - barHeight} width="24" height={barHeight} fill="url(#barGrad)" rx="4" />
                          <text x={72 + i * 60} y="190" fill="#64748b" fontSize="11" textAnchor="middle">{d}</text>
                          <text x={72 + i * 60} y={160 - barHeight} fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">
                            {totalMin > 0 ? `${Math.round(totalMin/60*10)/10}h` : "0h"}
                          </text>
                        </g>
                      );
                    })}
                    <line x1="40" y1="170" x2="480" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  </svg>
                </div>
              ) : (
                <div style={{ color:"#555", textAlign:"center", padding:40 }}>Generate schedule to view stats.</div>
              )}
            </Card>

            <Card>
              <div style={{ fontSize:15, fontWeight:700, color:"#f1f5f9", marginBottom:16 }}>Total Work Breakdown</div>
              {timetable ? (
                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  {[
                    ["Total Study Tasks", tasks.length, "#6c63ff"],
                    ["Committed Busy Blocks", (constraints.blocks || []).length, "#ef4444"],
                    ["Work Days/Week", DAYS.filter(d=>!constraints.noWork.includes(d)).length, "#22c55e"],
                    ["Weekly Study Hours", Math.round(DAYS.reduce((acc,d)=>acc+getDayTotal(d), 0) / 60 * 10) / 10 + " hrs", "#f59e0b"]
                  ].map(([l,v,c]) => (
                    <div key={l} style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <span style={{ fontSize:13, color:"#64748b" }}>{l}</span>
                      <span style={{ fontSize:14, fontWeight:800, color:c }}>{v}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ color:"#555", textAlign:"center", padding:30 }}>No data.</div>
              )}
            </Card>
          </div>

          {/* Timetable History logs */}
          <Card>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "Orbitron", letterSpacing: 0.5 }}>⏳ Saved Timetables History Logs</span>
              <span style={{ fontSize: 11, background: "rgba(108,99,255,0.15)", padding: "4px 10px", borderRadius: 20, color: "#a78bfa", fontWeight: 700 }}>{history.length} SAVED</span>
            </div>
            {history.length === 0 ? (
              <div style={{ color: "#555", textAlign: "center", padding: "30px 0", fontSize: 13 }}>No historical timetables saved yet. Auto-saves every new generation or manual drag adjust!</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {history.map(item => (
                  <div key={item.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: "12px 18px", transition: "0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(108,99,255,0.2)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9" }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
                        📋 {item.tasks?.length || 0} tasks · 🚫 {item.constraints?.blocks?.length || 0} blocks · Wake: {item.constraints?.wake} · Sleep: {item.constraints?.sleep}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <button onClick={() => {
                        if (window.confirm("Overwrite active schedule with this historical version?")) {
                          setTasks(item.tasks || []);
                          setConstraints(item.constraints || {});
                          setTimetable(item.timetable || null);
                          setSubtab("timetable");
                        }
                      }}
                        style={{ padding: "6px 12px", background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", borderRadius: 8, color: "#a78bfa", fontSize: 11, fontWeight: 700, cursor: "pointer", transition: "0.2s" }}
                        onMouseEnter={e => { e.currentTarget.style.background = "rgba(108,99,255,0.25)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "rgba(108,99,255,0.15)"; }}
                      >
                        📂 Restore & Edit
                      </button>
                      <button onClick={() => {
                        if (window.confirm("Delete this saved schedule?")) {
                          setHistory(history.filter(x => x.id !== item.id));
                        }
                      }}
                        style={{ padding: "6px 10px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, color: "#f87171", cursor: "pointer", display: "flex", alignItems: "center" }}
                        title="Delete log"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      )}

      {/* ── PRINTABLE EXPORT TAB ── */}
      {subtab === "printable" && (
        timetable ? (
          <div>
            <div style={{ display:"flex", gap:10, marginBottom:20 }}>
              <Btn onClick={printTimetableCleanly}>🖨 Print Timetable (PDF)</Btn>
              <Btn variant="secondary" onClick={downloadImage}>⬇ Download Image (PNG)</Btn>
            </div>
            {/* Print canvas */}
            <div ref={exportRef} id="tt-print" style={{ background:"#fff", color:"#111", borderRadius:12, padding:"32px 28px", fontFamily:"'Segoe UI',sans-serif" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20, paddingBottom:16, borderBottom:"2px solid #e5e7eb" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <img src="/logo.png" alt="Logo" style={{ width: 48, height: 48, objectFit: "contain" }} />
                  <div>
                    <div style={{ fontSize:18, fontWeight:800, color:"#1e6fa8" }}>ApexLink</div>
                  </div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontSize:16, fontWeight:700, color:"#111" }}>Weekly Schedule</div>
                </div>
              </div>
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead>
                  <tr>
                    <th style={{ border:"1px solid #ddd", padding:"8px 10px", fontSize:12, fontWeight:700, color:"#333", textAlign:"left", background:"#f8f8f8", width: 70 }}>Time</th>
                    {DAYS.map(d=>(
                      <th key={d} style={{ border:"1px solid #ddd", padding:"8px 10px", fontSize:12, fontWeight:700, color:"#333", textAlign:"center", background:"#f8f8f8" }}>
                        {d==="Mon"?"Monday":d==="Tue"?"Tuesday":d==="Wed"?"Wednesday":d==="Thu"?"Thursday":d==="Fri"?"Friday":d==="Sat"?"Saturday":"Sunday"}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map(row=>{
                    return (
                      <tr key={row.label}>
                        <td style={{ border:"1px solid #ddd", padding:"6px 10px", fontSize:11, color:"#555", fontWeight:600, whiteSpace:"nowrap" }}>{row.label}</td>
                        {DAYS.map(d=>{
                          const state = getRenderState(d, row.hour, row.minute);
                          if (!state.render) return null;
                          const slot = state.slot;
                          const color = slot ? (COLOR_MAP[slot.taskType]||"#6c63ff") : null;
                          return (
                            <td key={d} rowSpan={state.rowSpan} style={{ border:"1px solid #ddd", padding:"4px 6px", verticalAlign:"top", minWidth:80, height:36 * state.rowSpan }}>
                              {slot && (
                                <div style={{ 
                                  background: slot.isBlockSlot ? "rgba(239, 68, 68, 0.08)" : "#f0f0ff", 
                                  borderLeft:`3px solid ${color}`, 
                                  borderRadius:4, 
                                  padding:"4px 6px",
                                  height: "100%",
                                  boxSizing: "border-box",
                                  display: "flex",
                                  flexDirection: slot.isBlockSlot ? "row" : "column",
                                  alignItems: slot.isBlockSlot ? "center" : "stretch",
                                  justifyContent: "space-between"
                                }}>
                                  {slot.isBlockSlot ? (
                                    <>
                                      <span style={{ fontSize:9, fontWeight:700, color:"#ef4444" }}>🚫 {slot.title}</span>
                                      <span style={{ fontSize:8, color:"#ef4444", fontWeight:600 }}>{slot.start}–{slot.end}</span>
                                    </>
                                  ) : (
                                    <>
                                      <div style={{ fontSize:10, fontWeight:700, color:"#111" }}>{slot.title}</div>
                                      <div style={{ fontSize:9, color:"#666", marginTop: 2 }}>{slot.start}–{slot.end}</div>
                                    </>
                                  )}
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <style>{`
              @media print {
                @page { size: A4 landscape; margin: 0.3in; }
                html, body, #root, #root > div, .App, .app-container, .main-content {
                  height: auto !important;
                  overflow: visible !important;
                  display: block !important;
                  background: #fff !important;
                  color: #000 !important;
                }
                body * { visibility: hidden; }
                #tt-print, #tt-print * { visibility: visible; }
                #tt-print { 
                  position: absolute !important; 
                  left: 0 !important; 
                  top: 0 !important; 
                  width: 100% !important; 
                  height: auto !important;
                  overflow: visible !important;
                  background: #fff !important; 
                  box-sizing: border-box !important; 
                  display: block !important;
                }
              }
            `}</style>
          </div>
        ) : (
          <Card><div style={{ textAlign:"center", color:"#555", padding:40 }}>Generate schedule first.</div></Card>
        )
      )}
    </div>
  );
}



// ─── AI MARKDOWN RENDERER ────────────────────────────────────────────────────
const parseBold = (text) => {
  const parts = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} style={{ color: "#f1f5f9", fontWeight: 700 }}>
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

function EHMarkdown({ text }) {
  if (!text) return null;
  if (text.startsWith("Debug Info:")) {
    return <pre style={{ margin: 0, fontSize: 11, background: "rgba(0,0,0,0.3)", padding: 10, borderRadius: 8, overflowX: "auto", fontFamily: "monospace", color: "#f87171" }}>{text}</pre>;
  }

  const lines = text.split("\n");
  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {lines.map((line, idx) => {
        let trimmed = line.trim();
        if (!trimmed) return <div key={idx} style={{ height: 6 }} />;

        if (trimmed.startsWith("###")) {
          return (
            <div key={idx} style={{ fontSize: 13.5, fontWeight: 800, color: "#38bdf8", marginTop: 12, marginBottom: 4, fontFamily: "Orbitron", letterSpacing: 0.5 }}>
              {trimmed.replace(/^###\s*/, "")}
            </div>
          );
        }
        if (trimmed.startsWith("##")) {
          return (
            <div key={idx} style={{ fontSize: 14.5, fontWeight: 900, color: "#a78bfa", marginTop: 16, marginBottom: 6, fontFamily: "Orbitron", letterSpacing: 0.5, borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4 }}>
              {trimmed.replace(/^##\s*/, "")}
            </div>
          );
        }
        if (trimmed.startsWith("#")) {
          return (
            <div key={idx} style={{ fontSize: 16, fontWeight: 900, color: "#f1f5f9", marginTop: 20, marginBottom: 8, fontFamily: "Orbitron", letterSpacing: 0.5 }}>
              {trimmed.replace(/^#\s*/, "")}
            </div>
          );
        }

        const isBullet = trimmed.startsWith("* ") || trimmed.startsWith("- ");
        const isNumbered = /^\d+\.\s/.test(trimmed);

        if (isBullet || isNumbered) {
          let content = isBullet 
            ? trimmed.replace(/^[\*\-]\s*/, "") 
            : trimmed.replace(/^\d+\.\s*/, "");
            
          const parts = parseBold(content);

          return (
            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10, paddingLeft: isBullet ? 14 : 6, fontSize: 13.5, color: "#cbd5e1", lineHeight: 1.7, margin: "4px 0" }}>
              <span style={{ color: "#38bdf8", fontWeight: 900, userSelect: "none", marginTop: 1 }}>{isBullet ? "✦" : trimmed.match(/^\d+/)[0] + "."}</span>
              <span style={{ flex: 1 }}>{parts}</span>
            </div>
          );
        }

        const parts = parseBold(trimmed);
        
        const isHeadingObs = (trimmed.startsWith("**") && trimmed.endsWith("**")) || 
                             (trimmed.startsWith("**") && trimmed.endsWith(":**")) ||
                             (trimmed.startsWith("**") && trimmed.endsWith("**:") && trimmed.length > 4);
                             
        if (isHeadingObs) {
          return (
            <div key={idx} style={{ fontSize: 13, fontWeight: 800, color: "#38bdf8", marginTop: 18, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1.5, fontFamily: "Orbitron", borderLeft: "3px solid #38bdf8", paddingLeft: 8 }}>
              {trimmed.replace(/\*\*/g, "")}
            </div>
          );
        }

        return (
          <div key={idx} style={{ fontSize: 13.5, color: "#cbd5e1", lineHeight: 1.7 }}>
            {parts}
          </div>
        );
      })}
    </div>
  );
}

// ─── VEDAI ────────────────────────────────────────────────────────────────────
function VedAI({ user }) {
  const [chats, setChats] = useLS(`apx_chats_${user.id}`, []);
  const [activeChatId, setActiveChatId] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useLS("apx_gemini_key", "");
  const [showKeyModal, setShowKeyModal] = useState(false);
  const bottomRef = useRef(null);

  const activeChat = chats.find(c => c.id === activeChatId);

  const newChat = () => {
    const c = { id: uid(), title: "New Chat", messages: [], createdAt: new Date().toISOString() };
    setChats([c, ...chats]);
    setActiveChatId(c.id);
  };

  const deleteChat = (id) => {
    setChats(chats.filter(c => c.id !== id));
    if (activeChatId === id) setActiveChatId(null);
  };

  const generateTimetableLocally = (tasks, constraints) => {
    const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    const [wH, wM] = constraints.wake.split(":").map(Number);
    const [sH, sM] = constraints.sleep.split(":").map(Number);
    const wakeMin = wH*60+wM;
    const sleepMin = sH*60+sM;
    const maxMin = Math.min(constraints.maxHours * 60, sleepMin - wakeMin);

    const sorted = [...tasks].sort((a,b) => {
      const score = t => t.priority*3 + t.energy;
      return score(b) - score(a);
    });

    const isBlocked = (startMin, endMin, blocks = []) => {
      return blocks.some(b => {
        const [bh, bm] = b.start.split(":").map(Number);
        const [eh, em] = b.end.split(":").map(Number);
        const bs = bh*60+bm, be = eh*60+em;
        return startMin < be && endMin > bs;
      });
    };

    const table = {};
    DAYS.forEach((day, dayIdx) => {
      if ((constraints.noWork || []).includes(day)) { table[day] = []; return; }
      let cursor = wakeMin;
      let usedMin = 0;
      const slots = [];

      sorted.forEach(task => {
        if (task.type === "specific" && !(task.days || []).includes(day)) return;
        if (usedMin + task.duration > maxMin) return;

        let start = cursor;
        if (task.preferStart) {
          const [ph, pm] = task.preferStart.split(":").map(Number);
          const preferred = ph*60+pm;
          if (preferred > cursor && preferred + task.duration <= sleepMin) start = preferred;
        }

        let attempts = 0;
        const blocks = constraints.blocks || [];
        while (attempts < 40 && (isBlocked(start, start + task.duration, blocks) || start + task.duration > sleepMin)) {
          start += 15;
          attempts++;
        }
        if (start + task.duration > sleepMin) return;
        if (isBlocked(start, start + task.duration, blocks)) return;

        const sh = Math.floor(start/60), sm = start%60;
        const eh = Math.floor((start+task.duration)/60), em = (start+task.duration)%60;
        
        slots.push({
          ...task,
          id: task.id || uid(),
          start: `${String(sh).padStart(2,"0")}:${String(sm).padStart(2,"0")}`,
          end: `${String(eh).padStart(2,"0")}:${String(em).padStart(2,"0")}`,
          startMin: start
        });
        cursor = start + task.duration + (constraints.breakMin || 15);
        usedMin += task.duration + (constraints.breakMin || 15);
      });

      table[day] = slots.sort((a,b) => a.startMin - b.startMin);
    });

    return table;
  };

  const send = async (overrideMsg) => {
    const msg = overrideMsg || input.trim();
    if (!msg || loading) return;
    if (!apiKey) { setShowKeyModal(true); return; }

    let chat = activeChat;
    if (!chat) {
      chat = { id: uid(), title: msg.slice(0, 30), messages: [], createdAt: new Date().toISOString() };
      setChats(prev => [chat, ...prev]);
      setActiveChatId(chat.id);
    }

    const userMsg = { role: "user", content: msg, id: uid() };
    let updatedMessages = [...(chat.messages || []), userMsg];
    setChats(prev => prev.map(c => c.id === chat.id ? { ...c, messages: updatedMessages, title: c.title === "New Chat" ? msg.slice(0, 30) : c.title } : c));
    setInput("");
    setLoading(true);

    try {
      const stats = parseProductivityLogs(user.id);
      const systemPrompt = `You are VedAI, a productivity and study assistant for students and professionals. Help with scheduling, motivation, habit building, and productivity analysis. Be concise, actionable, and analytical.
Here are the user's actual productivity stats computed from their habit logs and collaborative workspace tasks:
${stats}

Use this data to give custom recommendations (e.g. noting if they have a weekend slump, or suggesting optimizations).

You also have a custom tool: update_user_timetable. You can call this tool to automatically create or update the user's timetable builder (slots and constraints) based on their study requirements or your optimization suggestions. Ensure you explain why you are updating their schedule before calling the tool.`;

      const tools = [
        {
          functionDeclarations: [
            {
              name: "update_user_timetable",
              description: "Automatically updates or generates the user's study timetable tasks and constraints in the Timetable Builder based on study habits and optimization criteria.",
              parameters: {
                type: "OBJECT",
                properties: {
                  tasks: {
                    type: "ARRAY",
                    description: "A complete list of study tasks/subjects to schedule.",
                    items: {
                      type: "OBJECT",
                      properties: {
                        title: { type: "STRING", description: "Subject or task title (e.g. Physics Revision, Math Homework)" },
                        priority: { type: "NUMBER", description: "Priority level from 1 (lowest) to 5 (highest)" },
                        duration: { type: "NUMBER", description: "Duration of each session in minutes (e.g. 90, 120, 60)" },
                        energy: { type: "NUMBER", description: "Energy required from 1 to 5" },
                        taskType: { 
                          type: "STRING", 
                          description: "Category of the study slot (e.g. Deep Work, Revision, Practice, Reading, Exercise, Meeting, Leisure, Other)" 
                        },
                        type: { type: "STRING", description: "Whether task repeats daily or specific days (daily or specific)" },
                        days: { 
                          type: "ARRAY", 
                          items: { type: "STRING" },
                          description: "If type is specific, define which days this task should run (e.g., ['Mon', 'Wed'])"
                        },
                        preferStart: { type: "STRING", description: "Preferred start time in 24h format" },
                        preferEnd: { type: "STRING", description: "Preferred end time in 24h format" }
                      },
                      required: ["title", "priority", "duration", "energy", "taskType", "type"]
                    }
                  },
                  constraints: {
                    type: "OBJECT",
                    description: "User schedule boundary limits and wake/sleep cycles.",
                    properties: {
                      wake: { type: "STRING", description: "Wake up time (e.g. '07:00')" },
                      sleep: { type: "STRING", description: "Sleep time (e.g. '23:00')" },
                      maxHours: { type: "NUMBER", description: "Max study hours per day (e.g. 6, 8)" },
                      breakMin: { type: "NUMBER", description: "Break duration in minutes between tasks (e.g. 15)" },
                      noWork: { 
                        type: "ARRAY", 
                        items: { type: "STRING" },
                        description: "Days of the week the student does not want to study (e.g., ['Sat', 'Sun'])" 
                      }
                    },
                    required: ["wake", "sleep", "maxHours", "breakMin"]
                  }
                },
                required: ["tasks", "constraints"]
              }
            }
          ]
        }
      ];

      const geminiContents = updatedMessages.map(m => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));

      const modelFallbacks = [
        "gemini-2.5-flash",
        "gemini-3.5-flash",
        "gemini-3.1-flash-lite",
        "gemini-2.0-flash",
        "gemini-1.5-flash",
        "gemini-1.5-flash-latest"
      ];
      
      let res = null;
      let data = null;
      let modelUsed = "";
      
      for (const modelName of modelFallbacks) {
        try {
          res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "x-goog-api-key": apiKey
            },
            body: JSON.stringify({
              contents: geminiContents,
              systemInstruction: {
                parts: [{ text: systemPrompt }]
              },
              tools,
              generationConfig: {
                temperature: 0.7
              }
            })
          });
          data = await res.json();
          
          if (data.error) {
            const errMsg = data.error.message || "";
            if (
              errMsg.includes("not found") || 
              errMsg.includes("not supported") || 
              errMsg.includes("Quota") || 
              errMsg.includes("quota") ||
              errMsg.includes("limit")
            ) {
              console.warn(`Model ${modelName} failed (quota/not found), trying fallback...`);
              continue;
            } else {
              throw new Error(errMsg);
            }
          }
          
          modelUsed = modelName;
          break;
        } catch (err) {
          console.error(`Error with model ${modelName}:`, err);
          if (modelName === modelFallbacks[modelFallbacks.length - 1]) {
            throw err;
          }
        }
      }
      
      if (!res || !data || data.error) {
        throw new Error("All Gemini models failed to generate content.");
      }

      console.log("Gemini API Response:", data);

      const candidate = data.candidates?.[0];
      const modelContent = candidate?.content;
      const modelPart = modelContent?.parts?.[0];
      let reply = modelPart?.text || "";

      if (modelPart?.functionCall) {
        const functionCall = modelPart.functionCall;
        if (functionCall.name === "update_user_timetable") {
          const args = functionCall.args;
          const calculatedTable = generateTimetableLocally(args.tasks, args.constraints);
          
          localStorage.setItem(`apx_tt_tasks_${user.id}`, JSON.stringify(args.tasks));
          localStorage.setItem(`apx_tt_con_${user.id}`, JSON.stringify(args.constraints));
          localStorage.setItem(`apx_timetable_${user.id}`, JSON.stringify(calculatedTable));

          window.dispatchEvent(new Event("storage"));

          const followUpRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelUsed}:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                ...geminiContents,
                modelContent,
                {
                  role: "function",
                  parts: [{
                    functionResponse: {
                      name: "update_user_timetable",
                      response: { output: "Timetable generated and saved to LocalStorage database successfully." }
                    }
                  }]
                }
              ],
              systemInstruction: {
                parts: [{ text: systemPrompt }]
              },
              generationConfig: {
                temperature: 0.7
              }
            })
          });

          const followUpData = await followUpRes.json();
          if (followUpData.error) throw new Error(followUpData.error.message);
          
          const followUpCandidate = followUpData.candidates?.[0];
          reply = followUpCandidate?.content?.parts?.[0]?.text || "Your timetable has been successfully optimized! Open the Timetable tab to view it.";
        }
      }

      if (!reply && !modelPart?.functionCall) {
        reply = `Debug Info: ${JSON.stringify(data)}`;
      }

      const aiMsg = { role: "assistant", content: reply || "Successfully processed request.", id: uid() };
      setChats(prev => prev.map(c => c.id === chat.id ? { ...c, messages: [...updatedMessages, aiMsg] } : c));
    } catch (e) {
      const errMsg = { role: "assistant", content: `Error: ${e.message}. Please check your Gemini API key and connection settings.`, id: uid() };
      setChats(prev => prev.map(c => c.id === chat.id ? { ...c, messages: [...updatedMessages, errMsg] } : c));
    }
    setLoading(false);
  };

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [activeChat?.messages?.length, loading]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Chat list */}
      <div style={{ width: 240, borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 12px" }}>
          <Btn onClick={newChat} style={{ width: "100%" }}>+ New Chat</Btn>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "0 8px" }}>
          {chats.map(c => (
            <div key={c.id} onClick={() => setActiveChatId(c.id)}
              style={{ display: "flex", alignItems: "center", padding: "10px 10px", borderRadius: 8, cursor: "pointer", background: activeChatId === c.id ? "rgba(108,99,255,0.15)" : "transparent", marginBottom: 2 }}>
              <div style={{ flex: 1, overflow: "hidden" }}>
                <div style={{ fontSize: 13, fontWeight: activeChatId === c.id ? 600 : 400, color: activeChatId === c.id ? "#a78bfa" : "#aaa", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.title}</div>
                <div style={{ fontSize: 11, color: "#555" }}>{fmtDate(c.createdAt)}</div>
              </div>
              <button onClick={e => { e.stopPropagation(); deleteChat(c.id); }} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", padding: 2, fontSize: 14 }}>×</button>
            </div>
          ))}
        </div>
        <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <button onClick={() => setShowKeyModal(true)} style={{ background: "none", border: "none", color: "#666", cursor: "pointer", fontSize: 12 }}>
            🔑 {apiKey ? "Gemini API Key Set ✓" : "Set Gemini API Key"}
          </button>
        </div>
      </div>
      {/* Chat area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontWeight: 700, fontSize: 16 }}>{activeChat ? activeChat.title : "VedAI"}</div>
          <div style={{ marginLeft: "auto" }}>
            <Btn small variant="secondary" onClick={() => send("Analyze my productivity data and suggest improvements for my schedule and habits.")}>🔍 Analyze My Data</Btn>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {!activeChat && (
            <div style={{ textAlign: "center", paddingTop: 40 }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🤖</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#a78bfa", marginBottom: 8 }}>VedAI Productivity Coach</div>
              <div style={{ color: "#666", fontSize: 14, marginBottom: 24 }}>Analyzing your logs & sync-updating your Timetable in real-time.</div>
              {[
                "📊 Analyze Weekend Slump & Streaks",
                "✨ Auto-Optimize Study Timetable",
                "💡 Review Habits & Collaboration Logs",
                "🎯 Prioritize Exam Deadlines in Timetable"
              ].map(p => (
                <button key={p} onClick={() => { newChat(); setTimeout(() => send(p), 100); }}
                  style={{ display: "block", width: "100%", maxWidth: 420, margin: "0 auto 10px", padding: "12px 16px", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 10, color: "#a78bfa", cursor: "pointer", fontSize: 14, textAlign: "left", transition: "0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(108,99,255,0.2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(108,99,255,0.1)"}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
          {activeChat?.messages?.map(m => (
            <div key={m.id} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
              <div style={{ 
                maxWidth: "75%", 
                background: m.role === "user" ? "linear-gradient(135deg,#6c63ff,#8b5cf6)" : "rgba(255, 255, 255, 0.01)", 
                backdropFilter: m.role === "user" ? "none" : "blur(16px)",
                border: m.role === "user" ? "none" : "1px solid rgba(255, 255, 255, 0.04)", 
                borderLeft: m.role === "user" ? "none" : "4px solid #38bdf8",
                borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "4px 16px 16px 16px", 
                padding: m.role === "user" ? "12px 18px" : "18px 22px", 
                color: m.role === "user" ? "#fff" : "#cbd5e1", 
                fontSize: 14, 
                lineHeight: 1.6, 
                whiteSpace: "pre-wrap", 
                wordBreak: "break-word",
                boxShadow: m.role === "user" ? "0 4px 16px rgba(108,99,255,0.25)" : "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
                animation: "slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards"
              }}>
                {m.role === "user" ? m.content : <EHMarkdown text={m.content} />}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px 16px 16px 4px", padding: "12px 16px" }}>
                <div style={{ display: "flex", gap: 4 }}>
                  {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#6c63ff", animation: `bounce ${0.6}s ${i*0.2}s infinite alternate` }} />)}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
        <div style={{ padding: "12px 24px 20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", gap: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "8px 12px" }}>
            <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Ask VedAI anything... (Enter to send)" rows={1}
              style={{ flex: 1, background: "none", border: "none", color: "#f1f5f9", fontSize: 14, resize: "none", outline: "none", lineHeight: 1.6, maxHeight: 120, overflowY: "auto" }} />
            <button onClick={() => send()} disabled={!input.trim() || loading}
              style={{ background: "linear-gradient(135deg,#6c63ff,#8b5cf6)", border: "none", borderRadius: 8, color: "#fff", padding: "6px 14px", cursor: "pointer", fontWeight: 700, opacity: (!input.trim() || loading) ? 0.5 : 1 }}>↑</button>
          </div>
        </div>
      </div>
      <Modal open={showKeyModal} onClose={() => setShowKeyModal(false)} title="Set Gemini API Key" width={420}>
        <p style={{ color: "#888", fontSize: 14, marginTop: 0 }}>Enter your Gemini API key to enable VedAI. You can obtain a free key from Google AI Studio. It's stored locally in your browser.</p>
        <Field label="Gemini API Key"><Inp value={apiKey} onChange={setApiKey} type="password" placeholder="AIzaSy..." /></Field>
        <Btn onClick={() => setShowKeyModal(false)} style={{ width: "100%" }}>Save Key</Btn>
      </Modal>
      <style>{`@keyframes bounce{to{transform:translateY(-4px)}} @keyframes slideUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  );
}

// ─── REMINDERS ────────────────────────────────────────────────────────────────
function Reminders({ user, reminders = [], setReminders }) {
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", datetime: "", urgency: "normal" });
  const [now, setNow] = useState(new Date());
  const [editingReminderId, setEditingReminderId] = useState(null);
  
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDayMissions, setSelectedDayMissions] = useState(null);

  const startEditReminder = (r) => {
    setForm({
      title: r.title,
      description: r.description,
      datetime: r.datetime,
      urgency: r.urgency || "normal"
    });
    setEditingReminderId(r.id);
    setShowAdd(true);
  };

  const closeAddModal = () => {
    setShowAdd(false);
    setEditingReminderId(null);
    setForm({ title: "", description: "", datetime: "", urgency: "normal" });
  };

  useEffect(() => {
    const t = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const addReminder = () => {
    if (!form.title || !form.datetime) return;
    const capTitle = form.title.charAt(0).toUpperCase() + form.title.slice(1);
    if (editingReminderId) {
      setReminders(reminders.map(x => x.id === editingReminderId ? { 
        ...x, 
        title: capTitle, 
        description: form.description, 
        datetime: form.datetime, 
        urgency: form.urgency,
        triggered: false 
      } : x));
      setEditingReminderId(null);
    } else {
      setReminders([...reminders, { ...form, title: capTitle, id: uid(), done: false, triggered: false }]);
    }
    setForm({ title: "", description: "", datetime: "", urgency: "normal" });
    setShowAdd(false);
  };

  const getCountdown = (dt) => {
    const diff = new Date(dt) - now;
    if (diff <= 0) return "Now!";
    const totalMinutes = Math.floor(diff / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ${hours % 24}h`;
    return `${hours}h ${totalMinutes % 60}m`;
  };

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const monthLabel = currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' });

  const handleDateClick = (day) => {
    const dStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayMissions = reminders.filter(r => r.datetime.startsWith(dStr));
    if (dayMissions.length > 0) setSelectedDayMissions({ day, missions: dayMissions });
    else {
      setForm({ ...form, datetime: `${dStr}T10:00` });
      setShowAdd(true);
    }
  };

  const upcoming = reminders.filter(r => !r.done).sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  const done = reminders.filter(r => r.done);

  return (
    <div style={{ animation: "fadeIn 0.6s ease-out", background: "#050508", minHeight: "100vh" }}>
      {/* 🟢 CUSTOM CYBER ANIMATIONS */}
      <style>{`
        @keyframes cyberPulse {
          0% { box-shadow: 0 0 5px rgba(34, 211, 238, 0.2); }
          50% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
          100% { box-shadow: 0 0 5px rgba(34, 211, 238, 0.2); }
        }
        .day-cell { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
        .day-cell:hover { transform: translateY(-5px) scale(1.02); background: rgba(34, 211, 238, 0.15) !important; border-color: #22d3ee !important; z-index: 10; }
        .active-mission-day { animation: cyberPulse 2s infinite ease-in-out; }
        .calendar-container { animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>

      <PageHeader title="Mission Reminders" subtitle="Strategic focal point for your objectives"
        actions={<Btn className="click-scale" onClick={() => setShowAdd(true)} style={{boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)"}}>+ Add Mission</Btn>} />
      
      <div style={{ padding: "0 32px 32px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 32 }}>
        
        {/* LEFT: ENLARGED TACTICAL CALENDAR */}
        <div className="calendar-container">
          <div style={{ background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", borderRadius: 32, padding: 40, border: "1px solid rgba(34, 211, 238, 0.1)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#22d3ee", letterSpacing: 3, textShadow: "0 0 10px rgba(34, 211, 238, 0.3)" }}>{monthLabel.toUpperCase()}</div>
              <div style={{ display: 'flex', gap: 15 }}>
                 <button className="click-scale" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))} style={{ background: "#0f172a", border: "1px solid #1e293b", color: "#fff", padding: "10px 18px", borderRadius: 12, cursor: "pointer", fontWeight: 900 }}>‹</button>
                 <button className="click-scale" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))} style={{ background: "#0f172a", border: "1px solid #1e293b", color: "#fff", padding: "10px 18px", borderRadius: 12, cursor: "pointer", fontWeight: 900 }}>›</button>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 18 }}>
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(d => (
                <div key={d} style={{ textAlign: "center", fontSize: 12, fontWeight: 900, color: "#475569", letterSpacing: 1.5 }}>{d}</div>
              ))}
              {Array(firstDay).fill(null).map((_, i) => <div key={i} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const activeOnDay = reminders.some(r => r.datetime.startsWith(dStr) && !r.done);
                
                return (
                  <div key={day} 
                    onClick={() => handleDateClick(day)} 
                    className={`day-cell click-scale ${activeOnDay ? 'active-mission-day' : ''} reveal-item`}
                    style={{ 
                      animationDelay: `${i * 0.01}s`,
                      aspectRatio: "1.1", borderRadius: 20, display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", 
                      background: activeOnDay ? "rgba(34, 211, 238, 0.08)" : "rgba(255,255,255,0.01)", 
                      border: activeOnDay ? "2px solid rgba(34, 211, 238, 0.5)" : "1px solid rgba(255,255,255,0.03)",
                      cursor: "pointer"
                    }}>
                    <span style={{ fontSize: 22, fontWeight: 900, color: activeOnDay ? "#22d3ee" : "#fff" }}>{day}</span>
                    {activeOnDay && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", marginTop: 8, boxShadow: "0 0 12px #22d3ee" }} />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT: TIMELINE SIDEBAR */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: "#22d3ee", letterSpacing: 2, borderLeft: "3px solid #22d3ee", paddingLeft: 10 }}>ACTIVE_MISSIONS</div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {upcoming.map((r, i) => (
              <Card key={r.id} className="reveal-item hover-lift" style={{ animationDelay: `${i * 0.1}s`, background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(255,255,255,0.03)", borderLeft: "4px solid #3b82f6", padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <div style={{ fontWeight: 900, fontSize: 18, color: "#08b1f9", letterSpacing: 0.5 }}>{r.title.toUpperCase()}</div>
                  <div style={{ fontSize: 10, fontWeight: 900, color: "#475569", fontFamily: "monospace" }}>{new Date(r.datetime).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>
                </div>
                <div style={{ color: "#94a3b8", fontSize: 13, marginBottom: 20, lineHeight: 1.5 }}>{r.description}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                   <div>
                      <div style={{ fontSize: 9, fontWeight: 900, color: "#475569", letterSpacing: 1 }}>TIME_REMAINING</div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{getCountdown(r.datetime)}</div>
                   </div>
                   <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <Btn small variant="secondary" className="click-scale" onClick={() => startEditReminder(r)}>EDIT</Btn>
                      <Btn small variant="secondary" className="click-scale" onClick={() => setReminders(reminders.map(x => x.id === r.id ? {...x, done: true} : x))}>DISMISS</Btn>
                      <button className="click-scale" onClick={() => setReminders(reminders.filter(x => x.id !== r.id))} style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: 20, padding: "0 6px" }} title="Delete Reminder">🗑</button>
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* MISSION DIALOGS */}
      <Modal open={showAdd} onClose={closeAddModal} title={editingReminderId ? "UPDATE_MISSION" : "INITIALIZE_MISSION"}>
        <div style={{ animation: "revealUp 0.4s ease-out" }}>
           <Field label="DESIGNATION"><Inp value={form.title} onChange={v => setForm({...form, title: v})} placeholder="Mission Name" /></Field>
           <Field label="TEMPORAL_MARK"><Inp type="datetime-local" value={form.datetime} onChange={v => setForm({...form, datetime: v})} /></Field>
           <Field label="INTEL_BRIEF"><Inp value={form.description} onChange={v => setForm({...form, description: v})} placeholder="Objective details..." /></Field>
           <Btn className="click-scale" onClick={addReminder} style={{ width: "100%", marginTop: 15, padding: 15, fontWeight: 900 }}>{editingReminderId ? "UPDATE MISSION" : "DEPLOY MISSION"}</Btn>
        </div>
      </Modal>

      <Modal open={!!selectedDayMissions} onClose={() => setSelectedDayMissions(null)} title={`DAY_${selectedDayMissions?.day}_INTEL`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          {selectedDayMissions?.missions.map((m, i) => (
            <div key={m.id} className="reveal-item" style={{ animationDelay: `${i*0.1}s`, padding: 20, background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontWeight: 900, color: m.done ? '#475569' : '#22d3ee', fontSize: 16 }}>{m.title}</div>
              <div style={{ fontSize: 11, color: '#64748b', marginTop: 5, fontFamily: 'monospace' }}>{new Date(m.datetime).toLocaleTimeString()}</div>
            </div>
          ))}
          <Btn className="click-scale" onClick={() => { setForm({...form, datetime: `${currentMonth.getFullYear()}-${String(currentMonth.getMonth()+1).padStart(2,'0')}-${String(selectedDayMissions.day).padStart(2,'0')}T10:00` }); setSelectedDayMissions(null); setShowAdd(true); }}>+ ADD NEW OBJECTIVE</Btn>
        </div>
      </Modal>

    </div>
  );
}

// ─── STICKY NOTES ─────────────────────────────────────────────────────────────
// --- 1. DRAWING MODULE ---
const DrawingCanvas = ({ onSave, onCancel, initialColor }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState(initialColor || "#3b82f6");
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState("pencil");

  useEffect(() => {
    resetCanvas();
  }, []);

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = "#ffffff"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const getCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  const startDrawing = (e) => {
    const { x, y } = getCoords(e);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { x, y } = getCoords(e);
    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = tool === "eraser" ? "#ffffff" : color;
    ctx.lineWidth = brushSize;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  return (
    <div style={{ width: "100%", maxWidth: "1000px", background: "#0f172a", padding: "20px", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 50px 100px rgba(0,0,0,0.8)" }}>
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px", justifyContent: "center", alignItems: "center", flexWrap: 'wrap' }}>
        <button onClick={() => setTool("pencil")} style={{ background: tool === "pencil" ? "#3b82f6" : "#1f2937", border: "none", color: "white", padding: "10px 18px", borderRadius: "12px", cursor: "pointer" }}>🖋️ Pencil</button>
        <button onClick={() => setTool("eraser")} style={{ background: tool === "eraser" ? "#3b82f6" : "#1f2937", border: "none", color: "white", padding: "10px 18px", borderRadius: "12px", cursor: "pointer" }}>🧽 Eraser</button>
        <button onClick={resetCanvas} style={{ background: "#ef4444", border: "none", color: "white", padding: "10px 18px", borderRadius: "12px", cursor: "pointer" }}>🗑️ Reset</button>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{ width: "40px", height: "40px", border: "none", background: "none", cursor: "pointer" }} />
        <div style={{ flex: 1, minWidth: '150px', display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "12px", opacity: 0.6 }}>Size</span>
          <input type="range" min="1" max="60" value={brushSize} onChange={(e) => setBrushSize(e.target.value)} style={{ flex: 1 }} />
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={1200} 
        height={800} 
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={() => setIsDrawing(false)}
        onMouseLeave={() => setIsDrawing(false)}
        style={{ width: "100%", height: "auto", maxHeight: '60vh', background: "white", borderRadius: "16px", cursor: "crosshair", display: "block", touchAction: "none" }}
      />

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end", gap: "12px" }}>
        <button onClick={onCancel} style={{ padding: "12px 24px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "white", cursor: "pointer" }}>Cancel</button>
        <button onClick={() => onSave(canvasRef.current.toDataURL("image/jpeg", 0.6))} style={{ padding: "12px 30px", borderRadius: "14px", border: "none", background: "linear-gradient(135deg, #06b6d4, #3b82f6)", color: "white", fontWeight: "bold", cursor: "pointer" }}>Save Drawing</button>
      </div>
    </div>
  );
};

// --- 2. MAIN STICKY NOTES COMPONENT ---
function StickyNotes({ user }) {
  const [notes, setNotes] = useLS(`apx_notes_v5_${user.id}`, []);
  const [archived, setArchived] = useLS(`apx_vault_v5_${user.id}`, []);
  const [vaultPass, setVaultPass] = useLS(`apx_vpass_v5_${user.id}`, null);
  
  const [view, setView] = useState("active"); 
  const [showAdd, setShowAdd] = useState(false);
  const [vaultLocked, setVaultLocked] = useState(true);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [passInput, setPassInput] = useState("");
  const [newPass, setNewPass] = useState("");
  const [form, setForm] = useState({ title: "", content: "", image: null, color: "#6c63ff" });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.src = ev.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 600;
        const scale = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setForm({ ...form, image: canvas.toDataURL('image/jpeg', 0.7) });
      };
    };
    reader.readAsDataURL(file);
  };

  const saveNote = () => {
    if (!form.title && !form.content && !form.image) return;
    if (editId) {
      const updateFn = (list) => list.map(n => n.id === editId ? { ...n, ...form } : n);
      view === "active" ? setNotes(updateFn(notes)) : setArchived(updateFn(archived));
    } else {
      const newNote = { ...form, id: Date.now(), timestamp: new Date().toLocaleDateString("en-IN") };
      setNotes([newNote, ...notes]);
    }
    closeModal();
  };

  const openEdit = (note) => {
    setEditId(note.id);
    setForm({ title: note.title, content: note.content, image: note.image, color: note.color });
    setShowAdd(true);
  };

  const closeModal = () => {
    setShowAdd(false);
    setIsDrawingMode(false);
    setEditId(null);
    setForm({ title: "", content: "", image: null, color: "#6c63ff" });
  };

  const moveToVault = (note) => {
    setArchived([note, ...archived]);
    setNotes(notes.filter(n => n.id !== note.id));
  };

  const restoreFromVault = (note) => {
    setNotes([note, ...notes]);
    setArchived(archived.filter(n => n.id !== note.id));
  };

  const deleteNote = (id, isVault) => {
    if (window.confirm("Delete permanently?")) {
      if (isVault) setArchived(archived.filter(n => n.id !== id));
      else setNotes(notes.filter(n => n.id !== id));
    }
  };

  const initializeVault = () => {
    if (newPass.length < 3) return alert("Password too short!");
    setVaultPass(newPass);
    setVaultLocked(false);
  };

  return (
    <div style={{ padding: "24px 32px", minHeight: "100vh", background: "#020817", color: "#fff" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontWeight: 900 }}>{view === "active" ? "Tactical Intel" : "Deep Vault"}</h1>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={() => { setView(view === "active" ? "vault" : "active"); setVaultLocked(true); setPassInput(""); }} style={{ padding: "10px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, color: "#fff", cursor: "pointer", fontWeight: 800 }}>
            {view === "active" ? "🛡️ VAULT" : "⬅ ACTIVE"}
          </button>
          <button onClick={() => setShowAdd(true)} style={{ padding: "12px 24px", background: "linear-gradient(135deg, #06b6d4, #3b82f6)", borderRadius: 12, color: "#fff", border: 'none', cursor: 'pointer', fontWeight: 900 }}>+ NEW MISSION</button>
        </div>
      </div>

      {/* VAULT UI */}
      {view === "vault" && (
        !vaultPass ? (
          <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: 40, borderRadius: 32, border: '1px solid rgba(255,255,255,0.1)', maxWidth: 420, margin: '100px auto', boxSizing: 'border-box' }}>
            <h2 style={{ fontWeight: 900, marginBottom: 20 }}>Initialize Vault</h2>
            <input 
              type="password" 
              placeholder="Set Access Code" 
              value={newPass} 
              onChange={e => setNewPass(e.target.value)} 
              style={{ width: '100%', padding: 16, borderRadius: 16, background: 'rgba(0,0,0,0.3)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', marginBottom: 20, boxSizing: 'border-box', outline: 'none' }} 
            />
            <button onClick={initializeVault} style={{ width: '100%', padding: 16, background: '#22c55e', color: '#fff', borderRadius: 16, border: 'none', fontWeight: 900, cursor: 'pointer' }}>ACTIVATE</button>
          </div>
        ) : vaultLocked ? (
          <div style={{ textAlign: 'center', background: 'rgba(15,23,42,0.3)', backdropFilter: 'blur(40px)', padding: 50, borderRadius: 32, border: '1px solid rgba(34,211,238,0.2)', maxWidth: 420, margin: '100px auto', boxSizing: 'border-box' }}>
            <h2 style={{ fontWeight: 900, marginBottom: 25 }}>Authorization Required</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={passInput} 
                onChange={e => setPassInput(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && (passInput === vaultPass ? setVaultLocked(false) : alert("Access Denied"))} 
                style={{ padding: 18, borderRadius: 16, background: 'rgba(255,255,255,0.03)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', width: '100%', fontSize: 22, boxSizing: 'border-box', outline: 'none' }} 
              />
              <button 
                onClick={() => passInput === vaultPass ? setVaultLocked(false) : alert("Access Denied")} 
                style={{ width: '100%', padding: 18, background: 'linear-gradient(to right, #3b82f6, #06b6d4)', color: '#fff', borderRadius: 16, border: 'none', fontWeight: 900, cursor: 'pointer', letterSpacing: 1 }}
              >
                DECRYPT
              </button>
            </div>
          </div>
        ) : null
      )}

      {(view === "active" || (view === "vault" && !vaultLocked)) && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24, marginTop: 40 }}>
          {(view === "active" ? notes : archived).map((n) => (
            <div key={n.id} style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 28, padding: 24, overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
                <span style={{ fontSize: 10, color: '#475569' }}>{n.timestamp}</span>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => openEdit(n)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✏️</button>
                  <button onClick={() => view === "active" ? moveToVault(n) : restoreFromVault(n)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>{view === "active" ? "🔒" : "🔓"}</button>
                  <button onClick={() => deleteNote(n.id, view === "vault")} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🗑️</button>
                </div>
              </div>
              <h3 style={{ margin: '0 0 10px 0' }}>{n.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: 14 }}>{n.content}</p>
              {n.image && <img src={n.image} style={{ width: 'calc(100% + 48px)', margin: '15px -24px -24px -24px', borderRadius: '0 0 28px 28px' }} />}
            </div>
          ))}
        </div>
      )}

      {showAdd && (
        <div style={{ 
          position: "fixed", 
          inset: 0, 
          marginLeft: window.innerWidth > 1024 ? "260px" : "0", 
          background: "rgba(2,8,23,0.9)", 
          backdropFilter: "blur(25px)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          zIndex: 10000 
        }}>
          <div style={{ 
            width: isDrawingMode ? "90%" : "450px", 
            maxWidth: isDrawingMode ? "1100px" : "450px",
            transition: "all 0.4s ease",
            display: 'flex',
            justifyContent: 'center'
          }}>
            {!isDrawingMode ? (
              <div style={{ background: "#0f172a", padding: 30, borderRadius: 36, border: "1px solid rgba(255,255,255,0.12)", width: '100%', boxSizing: 'border-box' }}>
                <h2 style={{ marginBottom: 25, fontWeight: 900 }}>{editId ? "Edit Objective" : "New Intel"}</h2>
                <input placeholder="Objective Name" value={form.title} onChange={e => setForm({...form, title: e.target.value})} style={{ width: "100%", padding: 16, marginBottom: 15, borderRadius: 14, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", boxSizing: 'border-box' }} />
                <textarea placeholder="Details..." value={form.content} onChange={e => setForm({...form, content: e.target.value})} style={{ width: "100%", height: 100, padding: 16, marginBottom: 15, borderRadius: 14, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", resize: 'none', boxSizing: 'border-box' }} />
                
                <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                  <button onClick={() => document.getElementById('note-img-up').click()} style={{ flex: 1, padding: 12, borderRadius: 12, background: "rgba(255,255,255,0.05)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>📎 ATTACH</button>
                  <button onClick={() => setIsDrawingMode(true)} style={{ flex: 1, padding: 12, borderRadius: 12, background: "rgba(59,130,246,0.1)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.3)", cursor: "pointer" }}>🎨 DRAW</button>
                  <input type="file" id="note-img-up" hidden accept="image/*" onChange={handleImageUpload} />
                </div>

                <button onClick={saveNote} style={{ width: "100%", padding: 18, background: "linear-gradient(135deg, #3b82f6, #06b6d4)", borderRadius: 16, border: "none", color: "#fff", fontWeight: 900, cursor: 'pointer' }}>
                  {editId ? "UPDATE INTEL" : "SAVE NOTE"}
                </button>
                <button onClick={closeModal} style={{ width: "100%", marginTop: 15, background: "none", border: "none", color: "#64748b", cursor: 'pointer' }}>Cancel</button>
              </div>
            ) : (
              <DrawingCanvas 
                initialColor={form.color}
                onCancel={() => setIsDrawingMode(false)}
                onSave={(img) => { setForm({...form, image: img}); setIsDrawingMode(false); }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Friend Circle ─────────────────────────────────────────────────────────────
// --- 👥 FRIEND CIRCLES MAIN COMPONENT ---
function FriendCircles({ user }) {
  // ... (Keep existing State/LS/Shared logic exactly as is)
  const [rooms, setRooms] = useLS(`apx_rooms_${user.id}`, []);
  const [allRooms, setAllRooms] = useShared("apx_all_rooms", []);
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [activeRoomId, setActiveRoomId] = useState(null);
  
  const [form, setForm] = useState({ name: "", password: "" });
  const [joinForm, setJoinForm] = useState({ id: "", password: "" });
  const [joinErr, setJoinErr] = useState("");

  const createRoom = () => {
    if (!form.name.trim()) return;
    const newId = uid();
    const newRoom = { 
      id: newId, name: form.name, password: form.password, creator: user.id, 
      members: [{ id: user.id, name: user.name }], tasks: [], messages: [], streak: 0,
      restoreState: null, previousStreak: 0 
    };
    setAllRooms(prev => [...prev.filter(r => r.id !== newId), newRoom]);
    setRooms(prev => [...new Set([...prev, newId])]);
    setShowCreate(false);
    setActiveRoomId(newId);
  };

  const joinRoom = () => {
    const room = allRooms.find(r => r.id === joinForm.id);
    if (!room) return setJoinErr("Room not found.");
    if (room.password && room.password !== joinForm.password) return setJoinErr("Wrong password.");
    if (room.members.some(m => m.id === user.id)) {
        setActiveRoomId(room.id);
        setShowJoin(false);
        return;
    }
    const updated = { ...room, members: [...room.members, { id: user.id, name: user.name }] };
    setAllRooms(prev => prev.map(r => r.id === room.id ? updated : r));
    setRooms(prev => [...new Set([...prev, room.id])]);
    setShowJoin(false);
    setActiveRoomId(room.id);
  };

  const myRooms = allRooms.filter(r => rooms.includes(r.id));
  const activeRoom = allRooms.find(r => r.id === activeRoomId);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", animation: "fadeIn 0.3s ease" }}>
      <PageHeader 
        title="Friend Circles" 
        subtitle="Collaborate and stay accountable together"
        actions={<><Btn variant="secondary" onClick={() => setShowJoin(true)}>Join Room</Btn><Btn onClick={() => setShowCreate(true)}>+ Create Room</Btn></>} 
      />
      <div style={{ display: "flex", flex: 1, overflow: "hidden", padding: "20px 32px", gap: 24 }}>
        <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 12, overflowY: "auto" }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: "#444", textTransform: "uppercase", letterSpacing: 1 }}>Your Circles</div>
          {myRooms.map(room => (
            <div key={room.id} onClick={() => setActiveRoomId(room.id)} 
              style={{ padding: 16, background: activeRoomId === room.id ? "rgba(59, 130, 246, 0.1)" : "rgba(255,255,255,0.03)", border: activeRoomId === room.id ? "1.5px solid #3b82f6" : "1px solid rgba(255,255,255,0.08)", borderRadius: 14, cursor: "pointer", transition: "all 0.2s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: activeRoomId === room.id ? "#3b82f6" : "#fff" }}>{room.name}</div>
                <div style={{ background: "rgba(245, 158, 11, 0.2)", color: "#f59e0b", padding: "2px 8px", borderRadius: 10, fontSize: 10, fontWeight: 900 }}>{room.restoreState ? "💀 0" : `🔥 ${room.streak || 0}`}</div>
              </div>
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(room.id);
                  alert("Squad ID copied!");
                }}
                style={{ fontSize: 10, color: "#475569", marginTop: 6, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
                title="Click to copy full ID"
              >
                📋 ID: {room.id.slice(0,8)}... • {room.members.length} members
              </div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 20, overflow: "hidden" }}>
          {activeRoom ? <RoomView room={activeRoom} user={user} allRooms={allRooms} setAllRooms={setAllRooms} /> : <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}><div style={{ fontSize: 40, opacity: 0.2 }}>👥</div><div style={{ color: "#444", fontWeight: 600 }}>Select a circle to start collaborating</div></div>}
        </div>
      </div>
      <Modal open={showCreate} onClose={() => setShowCreate(false)} title="Create Room">
        <Field label="Room Name"><Inp value={form.name} onChange={v => setForm({...form, name: v})} /></Field>
        <Field label="Password (optional)"><Inp type="password" value={form.password} onChange={v => setForm({...form, password: v})} /></Field>
        <Btn onClick={createRoom} style={{ width: "100%" }}>Launch Room</Btn>
      </Modal>
      <Modal open={showJoin} onClose={() => setShowJoin(false)} title="Join Room">
        <Field label="Room ID"><Inp value={joinForm.id} onChange={v => setJoinForm({...joinForm, id: v})} /></Field>
        <Field label="Password"><Inp type="password" value={joinForm.password} onChange={v => setJoinForm({...joinForm, password: v})} /></Field>
        {joinErr && <div style={{ color: "#ef4444", fontSize: 12, marginBottom: 10 }}>{joinErr}</div>}
        <Btn onClick={joinRoom} style={{ width: "100%" }}>Join Room</Btn>
      </Modal>
    </div>
  );
}

function RoomView({ room, user, allRooms, setAllRooms }) {
  const SHOW_SIMULATOR = false;
  const [tab, setTab] = useState("tasks"); 
  const [msg, setMsg] = useState("");
  const [editingMsgId, setEditingMsgId] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);
  const [taskForm, setTaskForm] = useState({ title: "", type: "daily", deadline: "" });
  const [contextMenu, setContextMenu] = useState(null);
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const bottomRef = useRef(null);
  const fileInputRef = useRef(null);

  const restorePrice = (() => {
    if (!room.restoreState) return 0;
    const d = today();
    if (d === room.restoreState.brokenDate) return 15;
    if (d === addDays(room.restoreState.brokenDate, 1)) return 25;
    return 0;
  })();

  const failedMembers = room.restoreState ? room.restoreState.failedMembers || [] : [];

  // 🟢 1. LOAD RAZORPAY SDK (Necessary for payment to work)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // --- 🟢 STREAK ENGINE LOGIC ---
  useEffect(() => {
    const runCycleCheck = () => {
      const d = today();
      const yDate = yesterday();

      let r = { ...room };
      let updated = false;

      // 1. Roll over check: if we haven't run the check for today 'd' yet
      if (r.lastCheckDate !== d) {
        // Evaluate if yesterday was successful
        const hasTasks = r.tasks && r.tasks.length > 0;
        const yesterdaySuccess = hasTasks && r.tasks.every(t => 
          r.members.every(m => t.logs?.[yDate]?.[m.id] === true)
        );

        if (!yesterdaySuccess) {
          // If yesterday was NOT successful, and streak > 0, the streak breaks!
          if (r.streak > 0) {
            // Find who failed to complete tasks yesterday
            const failedIds = r.members.filter(m => 
              r.tasks.some(t => t.logs?.[yDate]?.[m.id] !== true)
            ).map(m => m.id);

            const payments = {};
            failedIds.forEach(id => { payments[id] = false; });

            r.restoreState = {
              failedDate: yDate,
              brokenDate: d,
              backupStreak: r.streak + 1, // Restores to what it would have been if they succeeded
              failedMembers: failedIds,
              payments: payments
            };
            r.streak = 0;
            updated = true;
          }
        }

        // 2. Check if active restoreState has expired
        if (r.restoreState) {
          const expiryDate = addDays(r.restoreState.brokenDate, 2);
          if (d >= expiryDate) {
            // Restoring has expired (Day 7 onwards)! Wipe it out.
            r.restoreState = null;
            updated = true;
          }
        }

        r.lastCheckDate = d;
        updated = true;
      }

      if (updated) {
        setAllRooms(prev => prev.map(item => item.id === room.id ? r : item));
      }
    };

    runCycleCheck();
    const interval = setInterval(runCycleCheck, 15000); 
    return () => clearInterval(interval);
  }, [room, allRooms]);

  const sync = (updatedRoom) => {
    const d = today();
    let r = { ...updatedRoom };
    const hasTasks = r.tasks && r.tasks.length > 0;
    const everyoneFinishedToday = hasTasks && r.tasks.every(t => 
      r.members.every(m => t.logs?.[d]?.[m.id] === true)
    );
    if (everyoneFinishedToday && r.lastStreakUpdate !== d) {
      r.streak = (r.streak || 0) + 1;
      r.lastStreakUpdate = d;
    } 
    setAllRooms(prev => prev.map(item => item.id === room.id ? r : item));
  };

  // 🟢 2. UPDATED RESTORE LOGIC WITH PAYMENT GATEWAY (₹15 / ₹25)
  const handleRestore = (price) => {
    if (!window.Razorpay) {
      alert("Payment gateway is loading... please try again in a second.");
      return;
    }

    const options = {
      key: "rzp_test_SebP7w5lLEyj7I", 
      amount: price * 100, // Price in paise
      currency: "INR",
      name: "ApexLink Squad",
      description: `Restore Streak Fee (₹${price})`,
      handler: function (response) {
        // Only executes if payment is successful
        let r = { ...room };
        if (!r.restoreState) return;

        // Mark this user as paid
        r.restoreState.payments[user.id] = true;

        // Check if all failed members have paid
        const allPaid = r.restoreState.failedMembers.every(id => r.restoreState.payments[id] === true);

        if (allPaid) {
          r.streak = r.restoreState.backupStreak;
          r.lastStreakUpdate = r.restoreState.failedDate;
          r.restoreState = null;
          alert("🎉 STREAK SUCCESSFULLY RESTORED! Streak count set to +" + r.streak);
        } else {
          alert("👍 Payment of ₹" + price + " successful! Waiting for remaining failed members to pay.");
        }

        setAllRooms(prev => prev.map(item => item.id === room.id ? r : item));
      },
      prefill: { name: user.name },
      theme: { color: "#3b82f6" }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  // --- 🎤 MIC RECORDING (As it was) ---
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks = [];
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setAudioBlob(blob);
        setRecording(false);
      };
      mediaRecorder.start();
      setRecording(true);
    } catch (err) { alert("Microphone access denied."); }
  };
  const stopRecording = () => { if (mediaRecorderRef.current) mediaRecorderRef.current.stop(); };
  const sendAudio = () => {
    if (!audioBlob) return;
    const reader = new FileReader();
    reader.onload = () => { 
      sendMsg("", 'audio/webm', `Voice_Note_${Date.now()}.webm`, reader.result); 
      setAudioBlob(null); 
    };
    reader.readAsDataURL(audioBlob);
  };

  // --- 💬 CHAT & FILES (As they were) ---
  const sendMsg = (text = null, fType = null, fName = null, fileData = null) => {
    const finalMsg = text !== null ? text : msg;
    if (!finalMsg.trim() && !fileData) return;
    
    if (editingMsgId) {
      const updatedMessages = (room.messages || []).map(m => 
        m.id === editingMsgId ? { ...m, text: finalMsg, isEdited: true, editTime: new Date().toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' }) } : m
      );
      sync({ ...room, messages: updatedMessages });
      setEditingMsgId(null);
    } else {
      const m = { 
        id: uid(), userId: user.id, userName: user.name, text: finalMsg, 
        file: fileData, fType, fName, 
        time: new Date().toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };
      sync({ ...room, messages: [...(room.messages || []), m] });
    }
    setMsg("");
  };

  const deleteMsg = (id) => { sync({ ...room, messages: room.messages.filter(m => m.id !== id) }); setContextMenu(null); };
  const startEdit = (m) => { setEditingMsgId(m.id); setMsg(m.text); setContextMenu(null); };
  const handleInteraction = (e, m) => {
    if (m.userId !== user.id) return;
    e.preventDefault();
    const x = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    const y = e.clientY || (e.touches ? e.touches[0].clientY : 0);
    setContextMenu({ x, y, m });
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => sendMsg("", file.type, file.name, reader.result);
    reader.readAsDataURL(file);
  };

  const renderFile = (m) => {
    if (!m.file) return null;
    const s = { maxWidth: "100%", borderRadius: 12, marginTop: 10, border: "1px solid rgba(255,255,255,0.1)", display: "block" };
    if (m.fType?.startsWith("image/")) return <img src={m.file} style={s} alt={m.fName} />;
    if (m.fType?.startsWith("video/")) return <video src={m.file} controls style={s} />;
    if (m.fType?.startsWith("audio/")) return (
      <div style={{ marginTop: 10, background: "rgba(0,0,0,0.2)", padding: "10px", borderRadius: 10, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 18 }}>🎧</span>
        <audio src={m.file} controls style={{ flex: 1, height: 32 }} />
      </div>
    );
    return (
      <a href={m.file} download={m.fName} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", padding: "10px 14px", borderRadius: 10, color: "#3b82f6", marginTop: 10, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
        <span style={{ fontSize: 20 }}>📄</span>
        <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.fName}</div>
      </a>
    );
  };

  useEffect(() => {
    const hide = () => setContextMenu(null);
    window.addEventListener('click', hide);
    return () => window.removeEventListener('click', hide);
  }, []);

  useEffect(() => { if (tab === "chat") bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [room.messages?.length, tab]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 180px)", background: "#0a0a0f", borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
      <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <div style={{ fontWeight: 800, display: "flex", alignItems: "center", gap: 12 }}>
          <span>{room.name}</span>
          <span style={{ color: "#f59e0b" }}>{room.restoreState ? "💀 0" : `🔥 ${room.streak || 0}`}</span>
          <span 
            onClick={() => {
              navigator.clipboard.writeText(room.id);
              alert("Squad ID copied to clipboard!");
            }}
            style={{ 
              fontSize: 12, background: "rgba(59, 130, 246, 0.12)", border: "1px solid rgba(59, 130, 246, 0.3)", 
              borderRadius: 8, padding: "3px 10px", color: "#60a5fa", cursor: "pointer", fontWeight: 700, 
              display: "flex", alignItems: "center", gap: 4 
            }}
            title="Click to copy Room ID"
          >
            📋 ID: {room.id}
          </span>
        </div>
        <div style={{ display: "flex", gap: 15 }}>
          {["Tasks", "Chat", "Members"].map(t => (
            <span key={t} onClick={() => setTab(t.toLowerCase())} style={{ cursor: "pointer", fontSize: 12, color: tab === t.toLowerCase() ? "#3b82f6" : "#666", fontWeight: 700 }}>{t.toUpperCase()}</span>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
        {room.restoreState && restorePrice > 0 && (
          <div style={{ 
            marginBottom: 20, 
            padding: "20px", 
            background: "rgba(239, 68, 68, 0.08)", 
            border: "1px solid rgba(239, 68, 68, 0.3)", 
            borderRadius: 16, 
            display: "flex", 
            flexDirection: "column", 
            gap: 12 
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20 }}>⚠️</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "#f87171" }}>
                    Streak Broken! (Previous Streak: +{room.restoreState.backupStreak - 1})
                  </div>
                  <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>
                    Failed members missed tasks on <strong style={{ color: "#fff" }}>{room.restoreState.failedDate}</strong>.
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: restorePrice === 15 ? "#fbbf24" : "#f87171" }}>
                  {restorePrice === 15 ? "⏳ 1ST CHANCE (DAY 5)" : "🚨 FINAL CHANCE (DAY 6)"}
                </div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>
                  Fee: ₹{restorePrice} per person
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(0, 0, 0, 0.2)", borderRadius: 10, padding: 12, fontSize: 13 }}>
              <div style={{ fontWeight: 700, color: "#cbd5e1", marginBottom: 6 }}>Payment Status:</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {failedMembers.map(id => {
                  const m = room.members.find(x => x.id === id);
                  const name = m ? m.name : "Unknown";
                  const paid = room.restoreState.payments?.[id] === true;
                  return (
                    <div key={id} style={{ 
                      padding: "4px 10px", 
                      borderRadius: 8, 
                      fontSize: 11, 
                      fontWeight: 700, 
                      background: paid ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)",
                      color: paid ? "#4ade80" : "#f87171",
                      border: `1.5px solid ${paid ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"}`
                    }}>
                      {name}: {paid ? "✅ Paid" : "⏳ Pending"}
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
              <div style={{ fontSize: 13, color: "#cbd5e1" }}>
                {failedMembers.includes(user.id) ? (
                  room.restoreState.payments?.[user.id] === true ? (
                    <span style={{ color: "#4ade80", fontWeight: 700 }}>✅ You have paid. Waiting for other failed members to restore streak.</span>
                  ) : (
                    <span style={{ color: "#fbbf24", fontWeight: 700 }}>👉 Action Required: You must pay ₹{restorePrice} to restore the team streak to +{room.restoreState.backupStreak}.</span>
                  )
                ) : (
                  <span style={{ color: "#94a3b8" }}>Waiting for failed members to restore streak to +{room.restoreState.backupStreak}.</span>
                )}
              </div>
              {failedMembers.includes(user.id) && room.restoreState.payments?.[user.id] !== true && (
                <Btn onClick={() => handleRestore(restorePrice)} style={{ background: "#22c55e", border: "none", boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)" }}>
                  Pay ₹{restorePrice}
                </Btn>
              )}
            </div>
          </div>
        )}

        {tab === "tasks" && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: '#444' }}>SQUAD OBJECTIVES</div>
                <Btn onClick={() => setShowAddTask(true)} small>+ New Task</Btn>
              </div>
              {(room.tasks || []).map(t => (
                <div key={t.id} style={{ padding: 18, background: "rgba(255,255,255,0.02)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.04)", marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                      <div style={{ fontWeight: 700, color: '#fff' }}>{t.title}</div>
                      <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                        {room.members.map(m => {
                          const isDone = t.logs?.[today()]?.[m.id];
                          return <div key={m.id} style={{ width: 30, height: 30, borderRadius: '50%', background: isDone ? "rgba(34, 197, 94, 0.2)" : "#111", border: `1px solid ${isDone ? "#22c55e" : "#333"}`, color: isDone ? "#22c55e" : "#666", display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800 }}>{m.name[0].toUpperCase()}</div>;
                        })}
                      </div>
                  </div>
                  <button onClick={() => {
                    const d = today();
                    const current = t.logs?.[d]?.[user.id] || false;
                    const updatedTasks = room.tasks.map(task => task.id === t.id ? { ...task, logs: { ...task.logs, [d]: { ...task.logs?.[d], [user.id]: !current } } } : task);
                    sync({ ...room, tasks: updatedTasks });
                  }} style={{ padding: "10px 20px", borderRadius: 10, background: t.logs?.[today()]?.[user.id] ? "#22c55e" : "#1e293b", color: "#fff", border: "none", fontWeight: 800, cursor: 'pointer' }}>
                    {t.logs?.[today()]?.[user.id] ? "DONE" : "MARK DONE"}
                  </button>
                </div>
              ))}
            </div>
        )}

        {tab === "chat" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "10px 0" }}>
            <div style={{ alignSelf: "center", background: "rgba(255,255,255,0.05)", padding: "4px 12px", borderRadius: 8, fontSize: 11, color: "#64748b", marginBottom: 10, fontWeight: 800 }}>MESSAGES ARE LOCALLY ENCRYPTED</div>
            {(room.messages || []).map(m => {
              const isMe = m.userId === user.id;
              return (
                <div 
                  key={m.id} 
                  onContextMenu={(e) => handleInteraction(e, m)} 
                  style={{ alignSelf: isMe ? "flex-end" : "flex-start", maxWidth: "85%", minWidth: "90px", position: "relative", animation: "msgReveal 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
                >
                  <div style={{ 
                    padding: "10px 14px", 
                    paddingBottom: "22px",
                    background: isMe ? "linear-gradient(135deg, #2563eb, #1d4ed8)" : "#1e293b", 
                    borderRadius: isMe ? "18px 18px 2px 18px" : "18px 18px 18px 2px", 
                    color: "#f1f5f9", 
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    position: "relative",
                    border: isMe ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.05)"
                  }}>
                    {!isMe && <div style={{ fontSize: 11, fontWeight: 900, color: "#60a5fa", marginBottom: 6, letterSpacing: 0.5 }}>{m.userName.toUpperCase()}</div>}
                    <div style={{ fontSize: 14, lineHeight: "1.5", wordBreak: "break-word", fontWeight: 500 }}>
                      {m.text}
                      {renderFile(m)}
                    </div>
                    <div style={{ position: "absolute", bottom: 6, right: 10, fontSize: 10, color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 5, fontWeight: 700 }}>
                      {m.isEdited && <span style={{ opacity: 0.8 }}>Edited</span>}
                      {m.time}
                      {isMe && <span style={{ color: "#93c5fd", fontSize: 13 }}>✓✓</span>}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={bottomRef} />
            <style>{`
              @keyframes msgReveal { from { opacity: 0; transform: translateY(10px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
            `}</style>
          </div>
        )}

        {tab === "members" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
            {(room.members || []).map(m => (
              <div key={m.id} style={{ padding: 12, background: "rgba(255,255,255,0.02)", borderRadius: 12, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>{m.name[0]}</div>
                <div style={{ fontWeight: 600 }}>{m.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {tab === "chat" && (
        <div style={{ padding: "12px 24px", background: "#0f172a", borderTop: "1px solid rgba(255,255,255,0.05)", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-end", maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ flex: 1, background: "#1e293b", borderRadius: 24, padding: "8px 18px", display: "flex", alignItems: "center", gap: 14, minHeight: 48, border: "1px solid rgba(255,255,255,0.05)" }}>
               <button onClick={() => fileInputRef.current.click()} style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: 20, padding: 0 }}>📎</button>
               <input type="file" ref={fileInputRef} onChange={handleFile} style={{ display: "none" }} />
               <input 
                 value={msg} 
                 onChange={e => setMsg(e.target.value)} 
                 onKeyDown={e => e.key === "Enter" && sendMsg()} 
                 placeholder={editingMsgId ? "Revise message..." : "Type a message"} 
                 style={{ flex: 1, background: "none", border: "none", color: "#f8fafc", outline: "none", fontSize: 15, padding: "4px 0" }} 
               />
               <button onClick={recording ? stopRecording : startRecording} style={{ background: "none", border: "none", color: recording ? "#ef4444" : "#64748b", cursor: "pointer", fontSize: 20, padding: 0 }}>
                 {recording ? "⏹" : "🎙️"}
               </button>
            </div>
            <button 
              onClick={() => sendMsg()} 
              style={{ 
                width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #2563eb)", border: "none", 
                display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                boxShadow: "0 4px 15px rgba(37, 99, 235, 0.4)", flexShrink: 0, transition: "0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              {editingMsgId ? (
                <span style={{ color: "#fff", fontSize: 18 }}>✓</span>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>
          </div>
          {audioBlob && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, background: '#1e293b', padding: "10px 18px", borderRadius: 16, animation: "fadeIn 0.3s", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
              <div style={{ flex: 1, fontSize: 13, color: '#60a5fa', fontWeight: 800 }}>🎙️ VOCAL COMMAND READY</div>
              <button onClick={() => setAudioBlob(null)} style={{ background: "none", border: "none", color: "#ef4444", fontWeight: 700, cursor: "pointer", fontSize: 12 }}>DISCARD</button>
              <button onClick={sendAudio} style={{ background: "#3b82f6", border: "none", padding: "8px 18px", borderRadius: 10, color: "#fff", fontWeight: 700, cursor: "pointer" }}>SEND</button>
            </div>
          )}
        </div>
      )}

      {contextMenu && (
        <div style={{ position: 'fixed', top: contextMenu.y, left: contextMenu.x, background: '#233138', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '6px', zIndex: 9999, boxShadow: "0 10px 30px rgba(0,0,0,0.5)", minWidth: 160 }}>
          <button onClick={() => startEdit(contextMenu.m)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', background: 'none', border: 'none', color: '#e9edef', textAlign: 'left', cursor: 'pointer', fontSize: 14, width: '100%', borderRadius: 8 }} className="hover-highlight">
            <span>✎</span> Edit Message
          </button>
          <button onClick={() => deleteMsg(contextMenu.m.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', background: 'none', border: 'none', color: '#f87171', textAlign: 'left', cursor: 'pointer', fontSize: 14, width: '100%', borderRadius: 8 }} className="hover-highlight">
            <span>🗑</span> Delete
          </button>
          <style>{`.hover-highlight:hover { background: rgba(255,255,255,0.05); }`}</style>
        </div>
      )}

      <Modal open={showAddTask} onClose={() => setShowAddTask(false)} title="New Objective">
        <Field label="Task Title"><Inp value={taskForm.title} onChange={v => setTaskForm({...taskForm, title: v})} /></Field>
        <Btn onClick={() => { if(!taskForm.title) return; sync({ ...room, tasks: [...(room.tasks || []), { id: uid(), ...taskForm, logs: {} }] }); setShowAddTask(false); }} style={{ width: "100%" }}>Launch</Btn>
      </Modal>

      {/* 🛠️ DEVELOPER SIMULATION CONSOLE */}
      {SHOW_SIMULATOR && (
        <div style={{ 
          padding: "12px 20px", 
          background: "rgba(255, 255, 255, 0.02)", 
          borderTop: "1.5px dashed rgba(255,255,255,0.08)", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          flexShrink: 0 
        }}>
          <div style={{ fontSize: 12, color: "#64748b", display: "flex", alignItems: "center", gap: 6 }}>
            <span>🧪 <strong>Simulated Date:</strong> {today()}</span>
            {Number(localStorage.getItem("apx_date_offset") || 0) > 0 && (
              <span style={{ color: "#fbbf24", fontWeight: 700 }}>(+{localStorage.getItem("apx_date_offset")} days)</span>
            )}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {Number(localStorage.getItem("apx_date_offset") || 0) > 0 && (
              <Btn small onClick={() => {
                localStorage.removeItem("apx_date_offset");
                window.location.reload();
              }} style={{ background: "rgba(239, 68, 68, 0.15)", color: "#ef4444", border: "1px solid rgba(239, 68, 68, 0.3)", padding: "4px 10px", fontSize: 11 }}>
                🔄 Reset Date
              </Btn>
            )}
            <Btn small onClick={() => {
              const currentOffset = Number(localStorage.getItem("apx_date_offset") || 0);
              localStorage.setItem("apx_date_offset", currentOffset + 1);
              window.location.reload();
            }} style={{ padding: "4px 10px", fontSize: 11 }}>
              ⚡ Fast Forward 24h
            </Btn>
          </div>
        </div>
      )}
    </div>
  );
}
// ═══════════════════════════════════════════════════════════════════════════════
// ─── EXECUTION HUB (replaces Corporate Work) ─────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

// ── Shared data store ────────────────────────────────────────────────────────
const EH_KEY = "apx_eh_v1";
function useEH() { return useShared(EH_KEY, { workspaces: [], members: [], joinRequests: [], tasks: [], comments: [], logs: [] }); }

const EH_PRIMARY = "#00B8D9";
const EH_BG      = "#0a0c0e";
const EH_PANEL   = "#111418";
const EH_BORDER  = "#1f2226";

const EH_STATUS = {
  Backlog:     { label: "Backlog",     color: "#94a3b8", bg: "rgba(148,163,184,0.1)", icon: "📥", wip: 15 },
  Todo:        { label: "To Do",       color: "#34b7f1", bg: "rgba(52,183,241,0.1)",  icon: "⭕", wip: 10 },
  InProgress:  { label: "In Progress", color: "#f59e0b", bg: "rgba(245,158,11,0.1)",  icon: "🔵", wip: 5  },
  Review:      { label: "Review",      color: "#8b5cf6", bg: "rgba(139,92,246,0.1)",  icon: "👁️", wip: 8  },
  Done:        { label: "Done",        color: "#22c55e", bg: "rgba(34,197,94,0.1)",   icon: "✅", wip: 99 },
};

const EH_PRIORITY = { 
  High:   { label: "High",   color: "#ef4444", icon: "▲" },
  Medium: { label: "Medium", color: "#f59e0b", icon: "▬" },
  Low:    { label: "Low",    color: "#22c55e", icon: "▼" }
};

function EHLabel({ children }) {
  return <div style={{ fontSize: 9, fontWeight: 900, color: "#475569", letterSpacing: 1.5, marginBottom: 8, fontFamily: "monospace" }}>{typeof children === 'string' ? children.toUpperCase() : children}</div>;
}
const EH_ROLE_C   = { Admin: "#00B8D9", Manager: "#3b82f6", Member: "#6c63ff", Observer: "#94a3b8" };

function EHTag({ label, color, bg }) {
  return <span style={{ fontSize: 10, fontWeight: 800, color: color, background: bg || color+"15", padding: "1px 8px", borderRadius: 4, letterSpacing: 0.5, border: `1px solid ${color}33`, whiteSpace: "nowrap" }}>{label.toUpperCase()}</span>;
}

// ── Small helpers ─────────────────────────────────────────────────────────────
function EHAvatar({ name = "?", size = 28 }) {
  const palette = ["#6c63ff","#3b82f6","#22c55e","#f59e0b","#00B8D9","#8b5cf6"];
  const c = palette[(name.charCodeAt(0)||0) % palette.length];
  return (
    <div style={{ width:size, height:size, borderRadius:6, background:`linear-gradient(135deg,${c},${c}99)`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:size*0.4, color:"#fff", border:"1px solid rgba(255,255,255,0.1)" }}>
      {String(name)[0]?.toUpperCase()}
    </div>
  );
}

function EHBadge({ label, color }) {
  return <span style={{ fontSize:11, fontWeight:700, color, background:color+"22", padding:"2px 9px", borderRadius:20 }}>{label}</span>;
}

function EHPieChart({ slices, size = 130 }) {
  const total = slices.reduce((s,x) => s + x.value, 0) || 1;
  let a = -Math.PI/2;
  const cx = size/2, cy = size/2, r = size*0.4, ir = size*0.23;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {slices.map((sl, i) => {
        const sweep = (sl.value/total)*2*Math.PI;
        const x1=cx+r*Math.cos(a), y1=cy+r*Math.sin(a);
        a += sweep;
        const x2=cx+r*Math.cos(a), y2=cy+r*Math.sin(a);
        const ix1=cx+ir*Math.cos(a-sweep), iy1=cy+ir*Math.sin(a-sweep);
        const ix2=cx+ir*Math.cos(a), iy2=cy+ir*Math.sin(a);
        const lg = sweep>Math.PI?1:0;
        const d=`M${ix1} ${iy1} L${x1} ${y1} A${r} ${r} 0 ${lg} 1 ${x2} ${y2} L${ix2} ${iy2} A${ir} ${ir} 0 ${lg} 0 ${ix1} ${iy1}Z`;
        return sl.value>0 ? <path key={i} d={d} fill={sl.color} opacity="0.92" /> : null;
      })}
    </svg>
  );
}



function EHDonut({ pct=0, size=100, color="#00B8D9", label }) {
  const r=size*0.38, cx=size/2, cy=size/2, circ=2*Math.PI*r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth={size*0.08}/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={size*0.08}
        strokeDasharray={`${(pct/100)*circ} ${circ}`} strokeDashoffset={circ/4} strokeLinecap="round" filter="url(#glow)"/>
      <text x={cx} y={cy-4} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize={size*0.22} fontWeight="900" style={{ fontFamily: 'Orbitron' }}>{pct}%</text>
      {label && <text x={cx} y={cy+size*0.18} textAnchor="middle" fill="#555" fontSize={size*0.1} fontWeight={800}>{label.toUpperCase()}</text>}
    </svg>
  );
}

// ═══ ENTRY: Execution Hub ═════════════════════════════════════════════════════


function EHIntelligence({ user, ws, eh, setEH, members }) {
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState(null);
  const feed = (eh.intelFeed || []).filter(f => f.workspaceId === ws.id).reverse();
  const transmit = () => {
    if (!msg.trim() && !file) return;
    const entry = { id: uid(), workspaceId: ws.id, userId: user.id, userName: user.name, text: msg, file: file?.data, fType: file?.type, fName: file?.name, timestamp: new Date().toISOString() };
    setEH(prev => ({ ...prev, intelFeed: [...(prev.intelFeed || []), entry] }));
    setMsg(""); setFile(null);
  };
  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setFile({ data: r.result, type: f.type, name: f.name });
    r.readAsDataURL(f);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "0 40px" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "30px 0", display: "flex", flexDirection: "column", gap: 30 }}>
        {feed.map(entry => (
          <div key={entry.id} style={{ display: "flex", gap: 16 }}>
            <EHAvatar name={entry.userName} size={36} />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: EH_PRIMARY }}>{entry.userName.toUpperCase()}</span>
                <span style={{ fontSize: 9, color: "#333", fontWeight: 900 }}>TRANSMISSION â€¢ {new Date(entry.timestamp).toLocaleTimeString()}</span>
              </div>
              <div style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.6 }}>{entry.text}</div>
              {entry.file && (
                <div style={{ marginTop: 12 }}>
                  {entry.fType?.startsWith("image/") ? <img src={entry.file} style={{ maxWidth: 400, borderRadius: 12, border: `1px solid ${EH_BORDER}` }} /> :
                   <a href={entry.file} download={entry.fName} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 16px", background: "rgba(255,255,255,0.03)", borderRadius: 10, color: EH_PRIMARY, textDecoration: "none", fontSize: 12, fontWeight: 800, border: `1px solid ${EH_PRIMARY}33` }}>ðŸ“„ {entry.fName}</a>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "30px 0", borderTop: `1px solid ${EH_BORDER}` }}>
        <div style={{ background: "#111418", border: `1px solid ${EH_BORDER}`, borderRadius: 16, padding: "8px 16px", display: "flex", alignItems: "center", gap: 15 }}>
          <button onClick={() => document.getElementById("eh-intel-file").click()} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#444" }}>ðŸ“Ž</button>
          <input type="file" id="eh-intel-file" onChange={handleFile} style={{ display: "none" }} />
          <input value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={e=>e.key==="Enter"&&transmit()} placeholder="AUGMENT INTELLIGENCE..." style={{ flex: 1, background: "none", border: "none", color: "#fff", fontSize: 13, padding: "12px 0", outline: "none" }} />
          <button onClick={transmit} style={{ background: EH_PRIMARY, border: "none", color: "#000", fontWeight: 900, padding: "6px 16px", borderRadius: 8, cursor: "pointer" }}>TRANSMIT</button>
        </div>
      </div>
    </div>
  );
}

function CorporateWork({ user }) {         // keep fn name so App router works
  const [eh, setEH] = useEH();
  const [view, setView] = useState("dash");    // dash | create | workspace | join
  const [activeWsId, setActiveWsId] = useState(null);

  // Filter workspaces and remove duplicates by ID
const myWorkspacesRaw = (eh.workspaces||[]).filter(w =>
  w.createdBy === user.id ||
  (eh.members||[]).some(m => m.workspaceId===w.id && m.userId===user.id && m.status==="Approved")
);

// 🛡️ FIX: Force unique workspaces only
const myWorkspaces = Array.from(new Map(myWorkspacesRaw.map(w => [w.id, w])).values());

  const openWs = (id) => { setActiveWsId(id); setView("workspace"); };

  if (view==="create") return <EHCreateWorkspace user={user} eh={eh} setEH={setEH} onDone={id=>{setActiveWsId(id);setView("workspace");}} onCancel={()=>setView("dash")} />;
  if (view==="join")   return <EHJoinWorkspace   user={user} eh={eh} setEH={setEH} onDone={()=>setView("dash")} onCancel={()=>setView("dash")} />;
  if (view==="workspace" && activeWsId) {
    const ws = (eh.workspaces||[]).find(w=>w.id===activeWsId);
    if (!ws) { setView("dash"); return null; }
    return <EHWorkspaceView user={user} ws={ws} eh={eh} setEH={setEH} onBack={()=>setView("dash")} />;
  }

  // ── Dashboard ──────────────────────────────────────────────────────────────
  const pendingReqs = (eh.joinRequests||[]).filter(r =>
    myWorkspaces.some(w => w.id===r.workspaceId && w.createdBy===user.id) && r.status==="Pending"
  ).length;

  return (
    <div>
      <PageHeader title="Execution Hub" subtitle="Manage your workspaces and team execution"
        actions={
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={()=>setView("join")} style={{ padding:"9px 18px", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:10, color:"#e2e8f0", fontWeight:600, fontSize:13, cursor:"pointer" }}>Join Workspace</button>
            <button onClick={()=>setView("create")} style={{ padding:"9px 20px", background:"linear-gradient(135deg,#3b82f6,#6c63ff)", border:"none", borderRadius:10, color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer" }}>+ New Workspace</button>
          </div>
        }
      />
      <div style={{ padding:"24px 32px" }}>
        {pendingReqs>0 && (
          <div style={{ background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.25)", borderRadius:10, padding:"10px 16px", marginBottom:20, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontSize:16 }}>🔔</span>
            <span style={{ color:"#f59e0b", fontSize:13, fontWeight:600 }}>{pendingReqs} pending join request{pendingReqs>1?"s":""} — open a workspace to review them.</span>
          </div>
        )}
        {myWorkspaces.length===0 ? (
          <div style={{ textAlign:"center", padding:"60px 0", color:"#555" }}>
            <div style={{ fontSize:52, marginBottom:14 }}>🚀</div>
            <div style={{ fontSize:17, color:"#888", marginBottom:20 }}>No workspaces yet.</div>
            <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
              <button onClick={()=>setView("create")} style={{ padding:"10px 24px", background:"#3b82f6", border:"none", borderRadius:10, color:"#fff", fontWeight:700, cursor:"pointer" }}>Create Workspace</button>
              <button onClick={()=>setView("join")} style={{ padding:"10px 24px", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:10, color:"#e2e8f0", fontWeight:600, cursor:"pointer" }}>Join Workspace</button>
            </div>
          </div>
        ) : (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:16 }}>
            {myWorkspaces.map(ws => {
              const wsTasks   = (eh.tasks||[]).filter(t=>t.workspaceId===ws.id);
              const wsMembers = (eh.members||[]).filter(m=>m.workspaceId===ws.id&&m.status==="Approved");
              const done      = wsTasks.filter(t=>t.status==="Done").length;
              const pct       = wsTasks.length ? Math.round((done/wsTasks.length)*100) : 0;
              const myRole    = ws.createdBy===user.id?"Admin":(wsMembers.find(m=>m.userId===user.id)?.role||"Member");
              return (
                <div 
                  key={ws.id} 
                  onClick={()=>openWs(ws.id)} 
                  style={{ 
                    background:"rgba(255,255,255,0.01)", 
                    backdropFilter: "blur(16px)",
                    border:"1px solid rgba(255,255,255,0.06)", 
                    borderRadius:16, 
                    padding:"22px", 
                    cursor:"pointer", 
                    transition:"all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
                  }}
                  onMouseEnter={e=>{
                    e.currentTarget.style.borderColor = "rgba(0,184,217,0.4)";
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,184,217,0.15)";
                  }}
                  onMouseLeave={e=>{
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
                    <div style={{ fontWeight:800, fontSize:15, color:"#f1f5f9" }}>{ws.name}</div>
                    <EHBadge label={myRole} color={EH_ROLE_C[myRole]||"#6c63ff"} />
                  </div>
                  {ws.description && <div style={{ fontSize:12, color:"#64748b", marginBottom:10, lineHeight:1.5 }}>{ws.description}</div>}
                  <div style={{ height:4, background:"rgba(255,255,255,0.07)", borderRadius:2, overflow:"hidden", marginBottom:10 }}>
                    <div style={{ height:"100%", width:`${pct}%`, background:pct>=80?"#22c55e":pct>=40?"#f59e0b":"#3b82f6", borderRadius:2, transition:"width 0.4s" }} />
                  </div>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:16, borderTop:"1px solid rgba(255,255,255,0.03)", paddingTop:12 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                      <span style={{ fontSize:12, color:"#64748b", fontWeight:700 }}>📋 {wsTasks.length} tasks</span>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {[ws.createdByName, ...wsMembers.map(m=>m.name)].slice(0, 4).map((name, idx) => (
                          <div key={idx} style={{ marginLeft: idx === 0 ? 0 : -8, border: "2px solid #08090a", borderRadius: "50%", overflow: "hidden" }} title={name}>
                            <EHAvatar name={name} size={22} />
                          </div>
                        ))}
                        {[ws.createdByName, ...wsMembers.map(m=>m.name)].length > 4 && (
                          <span style={{ fontSize: 10, color: "#64748b", marginLeft: 6, fontWeight: 800 }}>
                            +{[ws.createdByName, ...wsMembers.map(m=>m.name)].length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    <span style={{ fontWeight:800, fontSize:13, color:pct>=80?"#22c55e":pct>=40?"#f59e0b":"#3b82f6" }}>{pct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ═══ CREATE WORKSPACE ════════════════════════════════════════════════════════
function EHCreateWorkspace({ user, eh, setEH, onDone, onCancel }) {
  const [form, setForm] = useState({ name:"", description:"", startDate:today(), endDate:"" });
  const [err, setErr] = useState("");

  const create = () => {
    if (!form.name.trim()) return setErr("Workspace name is required.");
    if (!form.endDate)     return setErr("End date is required.");
    if (new Date(form.endDate) < new Date(form.startDate)) {
      return setErr("End date cannot be earlier than the start date.");
    }
    setErr("");
  
  const wsId = uid();
  const accessCode = Math.random().toString(36).slice(2,8).toUpperCase();
  
  const ws = { ...form, id:wsId, accessCode, createdBy:user.id, createdByName:user.name, createdAt:new Date().toISOString() };
  const adminMember = { id:uid(), workspaceId:wsId, userId:user.id, name:user.name, email:user.email||"", role:"Admin", status:"Approved", timestamp:new Date().toISOString() };
  const log = { id:uid(), workspaceId:wsId, userId:user.id, action:"Workspace created", timestamp:new Date().toISOString() };
  
  setEH(prev => {
    // 🛡️ FIX: Check if workspace ID already exists before adding
    const isDup = (prev.workspaces || []).some(w => w.id === wsId);
    if (isDup) return prev;

    return { 
      ...prev, 
      workspaces: [...(prev.workspaces || []), ws], 
      members: [...(prev.members || []), adminMember], 
      logs: [...(prev.logs || []), log] 
    };
  });
  
  onDone(wsId);
};

  return (
    <div>
      <PageHeader title="Create Workspace" subtitle="Set up your Execution Hub workspace" actions={<Btn variant="secondary" onClick={onCancel}>← Cancel</Btn>} />
      <div style={{ padding:"28px 32px", maxWidth:560 }}>
        <Card>
          <div style={{ fontWeight:700, fontSize:15, color:"#f1f5f9", marginBottom:18 }}>Workspace Details</div>
          {err && <div style={{ background:"rgba(239,68,68,0.1)", border:"1px solid #ef444433", borderRadius:8, padding:"8px 12px", color:"#f87171", fontSize:13, marginBottom:14 }}>{err}</div>}
          <Field label="Workspace Name *"><Inp value={form.name} onChange={v=>setForm({...form,name:v})} placeholder="e.g. Website Redesign" /></Field>
          <Field label="Description">
            <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="What is this workspace for?" rows={3}
              style={{ width:"100%", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:8, padding:"9px 12px", color:"#fff", fontSize:14, resize:"vertical", boxSizing:"border-box", outline:"none", fontFamily:"inherit" }} />
          </Field>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <Field label="Start Date"><Inp type="date" value={form.startDate} onChange={v=>setForm({...form,startDate:v})} /></Field>
            <Field label="End Date *"><Inp type="date" value={form.endDate} onChange={v=>setForm({...form,endDate:v})} /></Field>
          </div>
          <div style={{ background:"rgba(59,130,246,0.08)", border:"1px solid rgba(59,130,246,0.2)", borderRadius:8, padding:"10px 14px", marginBottom:16, fontSize:13, color:"#94a3b8" }}>
            💡 After creating, you'll get a <strong style={{color:"#3b82f6"}}>Workspace ID</strong> + <strong style={{color:"#3b82f6"}}>Access Code</strong> to invite members.
          </div>
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={onCancel} style={{ flex:1, padding:"11px 0", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, color:"#ccc", fontWeight:600, cursor:"pointer" }}>Cancel</button>
            <button onClick={create} style={{ flex:2, padding:"11px 0", background:"linear-gradient(135deg,#3b82f6,#6c63ff)", border:"none", borderRadius:10, color:"#fff", fontWeight:700, cursor:"pointer" }}>Create Workspace</button>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ═══ JOIN WORKSPACE ══════════════════════════════════════════════════════════
function EHJoinWorkspace({ user, eh, setEH, onDone, onCancel }) {
  const [form, setForm] = useState({ id: "", accessCode: "" });
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const join = () => {
    if (!form.id.trim()) return setErr("Workspace ID is required.");
    if (!form.accessCode.trim()) return setErr("Access Code is required.");
    setErr("");

    const targetWs = (eh.workspaces || []).find(w => w.id === form.id.trim());
    if (!targetWs) return setErr("Workspace not found. Check the ID.");

    if (targetWs.accessCode !== form.accessCode.trim()) {
      return setErr("Incorrect Access Code.");
    }

    if (targetWs.createdBy === user.id) {
      return setErr("You are the creator of this workspace.");
    }

    const isApprovedMember = (eh.members || []).some(
      m => m.workspaceId === targetWs.id && m.userId === user.id && m.status === "Approved"
    );
    if (isApprovedMember) {
      return setErr("You are already an approved member of this workspace.");
    }

    const hasPendingRequest = (eh.joinRequests || []).some(
      r => r.workspaceId === targetWs.id && r.userId === user.id && r.status === "Pending"
    );
    if (hasPendingRequest) {
      return setErr("A join request is already pending approval from the admin.");
    }

    // Create new join request
    const reqId = uid();
    const newRequest = {
      id: reqId,
      workspaceId: targetWs.id,
      userId: user.id,
      userName: user.name,
      userEmail: user.email || "",
      status: "Pending",
      createdAt: new Date().toISOString()
    };

    setEH(prev => ({
      ...prev,
      joinRequests: [...(prev.joinRequests || []), newRequest]
    }));

    setSuccess(`Successfully requested to join "${targetWs.name}". Waiting for Admin approval.`);
    setTimeout(() => {
      onDone();
    }, 2000);
  };

  return (
    <div>
      <PageHeader title="Join Workspace" subtitle="Access an existing Execution Hub workspace" actions={<Btn variant="secondary" onClick={onCancel}>← Cancel</Btn>} />
      <div style={{ padding:"28px 32px", maxWidth:560 }}>
        <Card>
          <div style={{ fontWeight:700, fontSize:15, color:"#f1f5f9", marginBottom:18 }}>Join Workspace Details</div>
          {err && <div style={{ background:"rgba(239,68,68,0.1)", border:"1px solid #ef444433", borderRadius:8, padding:"8px 12px", color:"#f87171", fontSize:13, marginBottom:14 }}>{err}</div>}
          {success && <div style={{ background:"rgba(34,197,94,0.1)", border:"1px solid #22c55e33", borderRadius:8, padding:"8px 12px", color:"#4ade80", fontSize:13, marginBottom:14 }}>{success}</div>}
          
          <Field label="Workspace ID *">
            <Inp value={form.id} onChange={v=>setForm({...form,id:v})} placeholder="e.g. k8s9p2w1" />
          </Field>
          <Field label="Access Code *">
            <Inp value={form.accessCode} onChange={v=>setForm({...form,accessCode:v})} placeholder="e.g. A3FG79" />
          </Field>

          <div style={{ display:"flex", gap:10, marginTop:20 }}>
            <button onClick={onCancel} style={{ flex:1, padding:"11px 0", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, color:"#ccc", fontWeight:600, cursor:"pointer" }}>Cancel</button>
            <button onClick={join} style={{ flex:2, padding:"11px 0", background:"linear-gradient(135deg,#00B8D9,#008AA1)", border:"none", borderRadius:10, color:"#fff", fontWeight:700, cursor:"pointer" }}>Submit Request</button>
          </div>
        </Card>
      </div>
    </div>
  );
}


// ═══ WORKSPACE VIEW ═══════════════════════════════════════════════════════════
function EHWorkspaceView({ user, ws, eh, setEH, onBack }) {
  const [tab, setTab] = useState("pipeline");
  const [selectedTask, setSelectedTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedText, setCopiedText] = useState("");

  const tasks   = (eh.tasks||[]).filter(t=>t.workspaceId===ws.id);
  const members = (() => {
    const unique = [];
    const seen = new Set();
    const raw = (eh.members || []).filter(m => m.workspaceId === ws.id && m.status === "Approved");
    raw.forEach(m => {
      if (!seen.has(m.userId)) {
        seen.add(m.userId);
        unique.push(m);
      }
    });
    return unique;
  })();
  const myRole  = ws.createdBy===user.id?"Admin":(members.find(m=>m.userId===user.id)?.role||"Member");
  const isAdmin = myRole==="Admin"||myRole==="Manager";

  const addLog = (action) => {
    const e = { id:uid(), workspaceId:ws.id, userId:user.id, userName:user.name, action, timestamp:new Date().toISOString() };
    setEH(prev=>({...prev,logs:[...(prev.logs||[]),e]}));
  };

  const liveTask = selectedTask ? (eh.tasks||[]).find(t=>t.id===selectedTask.id) : null;
  const WORKSPACE_TABS = [["pipeline","Board"],["timeline","Roadmap"],["chat","Control"],["team","Team"],["insights","Reports"]];

  return (
    <div style={{ display:"flex", background: "#08090a", height:"100vh", color: "#f1f5f9", overflow: "hidden", fontFamily: "'Inter', sans-serif" }}>

      {/* Main High-Definition Workspace */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
        
        {/* Superior Top Header */}
        <div style={{ padding: "16px 40px", borderBottom: `1px solid ${EH_BORDER}`, background: "rgba(8,9,10,0.85)", backdropFilter: "blur(20px)", zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 10, color: "#475569", marginBottom: 8, fontWeight: 800, letterSpacing: 1 }}>
            <span onClick={onBack} style={{ cursor: "pointer", color: EH_PRIMARY }}>APEX</span> <span>∕</span> 
            <span>CHAMBERS</span> <span>∕</span> 
            <span style={{ color: "#fff" }}>{ws.name.toUpperCase()}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <h1 style={{ margin: 0, fontSize: 28, fontWeight: 900, fontFamily: 'Orbitron', letterSpacing: -1, color: "#fff", textShadow: `0 0 20px ${EH_PRIMARY}33`, display: "flex", alignItems: "center", gap: 12 }}>
                {ws.name}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(ws.name);
                    setCopiedText("name");
                    setTimeout(() => setCopiedText(""), 2000);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: copiedText === "name" ? "#22c55e" : "#475569",
                    cursor: "pointer",
                    fontSize: 16,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.2s",
                    padding: 4,
                    borderRadius: 4
                  }}
                  title="Copy Workspace Name"
                  onMouseEnter={e => { if (copiedText !== "name") e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { if (copiedText !== "name") e.currentTarget.style.color = "#475569"; }}
                >
                  {copiedText === "name" ? "✓" : "📋"}
                </button>
              </h1>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div 
                  onClick={() => {
                    navigator.clipboard.writeText(ws.id);
                    setCopiedText("id");
                    setTimeout(() => setCopiedText(""), 2000);
                  }}
                  style={{
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    color: copiedText === "id" ? "#22c55e" : EH_PRIMARY,
                    background: copiedText === "id" ? "rgba(34,197,94,0.15)" : `${EH_PRIMARY}22`,
                    padding: "2px 9px",
                    borderRadius: 20,
                    transition: "0.2s",
                    border: copiedText === "id" ? "1px solid rgba(34,197,94,0.4)" : "1px solid transparent"
                  }}
                  title="Click to copy workspace ID"
                  onMouseEnter={e => { if (copiedText !== "id") e.currentTarget.style.background = `${EH_PRIMARY}44`; }}
                  onMouseLeave={e => { if (copiedText !== "id") e.currentTarget.style.background = `${EH_PRIMARY}22`; }}
                >
                  <span>ID: {ws.id}</span>
                  <span>{copiedText === "id" ? "✓" : "📋"}</span>
                </div>
                <div 
                  onClick={() => {
                    navigator.clipboard.writeText(ws.accessCode);
                    setCopiedText("code");
                    setTimeout(() => setCopiedText(""), 2000);
                  }}
                  style={{
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    color: copiedText === "code" ? "#22c55e" : "#f59e0b",
                    background: copiedText === "code" ? "rgba(34,197,94,0.15)" : "rgba(245,158,11,0.15)",
                    padding: "2px 9px",
                    borderRadius: 20,
                    transition: "0.2s",
                    border: copiedText === "code" ? "1px solid rgba(34,197,94,0.4)" : "1px solid transparent"
                  }}
                  title="Click to copy invite code"
                  onMouseEnter={e => { if (copiedText !== "code") e.currentTarget.style.background = "rgba(245,158,11,0.25)"; }}
                  onMouseLeave={e => { if (copiedText !== "code") e.currentTarget.style.background = "rgba(245,158,11,0.15)"; }}
                >
                  <span>CODE: {ws.accessCode}</span>
                  <span>{copiedText === "code" ? "✓" : "📋"}</span>
                </div>
                {copiedText === "id" && <span style={{ fontSize: 9, color: "#22c55e", fontWeight: 800, fontFamily: "monospace", letterSpacing: 0.5 }}>ID COPIED!</span>}
                {copiedText === "code" && <span style={{ fontSize: 9, color: "#22c55e", fontWeight: 800, fontFamily: "monospace", letterSpacing: 0.5 }}>CODE COPIED!</span>}
                {copiedText === "name" && <span style={{ fontSize: 9, color: "#22c55e", fontWeight: 800, fontFamily: "monospace", letterSpacing: 0.5 }}>NAME COPIED!</span>}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ position: "relative" }}>
                <input id="eh-search" value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} placeholder="SEARCH SYSTEM..." style={{ background: "#111316", border: `1px solid ${EH_BORDER}`, borderRadius: 8, padding: "10px 16px", width: 260, fontSize: 11, fontWeight: 800, color: "#fff", outline: "none", letterSpacing: 1 }} />
              </div>
              <button style={{ padding: "10px 24px", background: EH_PRIMARY, border: "none", borderRadius: 8, color: "#000", fontWeight: 900, fontSize: 12, cursor: "pointer", boxShadow: `0 10px 20px ${EH_PRIMARY}33` }}>INITIALIZE</button>
            </div>
          </div>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 6, 
          padding: "0 40px", 
          background: "#0d0f11", 
          borderBottom: `1px solid ${EH_BORDER}`,
          flexShrink: 0
        }}>
          {WORKSPACE_TABS.map(([id, lbl]) => (
            <div key={id} onClick={() => setTab(id)} style={{ 
              display: "flex", alignItems: "center", gap: 10, padding: "14px 20px", 
              cursor: "pointer", borderBottom: tab === id ? `3px solid ${EH_PRIMARY}` : "3px solid transparent",
              color: tab === id ? EH_PRIMARY : "#94a3b8", transition: "0.2s",
              fontWeight: 800, fontSize: 12, letterSpacing: 1
            }}
            onMouseEnter={e => { if (tab !== id) e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { if (tab !== id) e.currentTarget.style.color = "#94a3b8"; }}
            >
              <span style={{ fontSize: 18 }}>{id === "pipeline" ? "⚛" : id === "timeline" ? "⎙" : id === "chat" ? "⌨" : id === "team" ? "⧉" : "⌬"}</span>
              <span>{lbl.toUpperCase()}</span>
            </div>
          ))}
        </div>

        {/* Tab Body with depth */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative", background: "radial-gradient(circle at 50% 50%, #0d0f11 0%, #08090a 100%)" }}>
          {tab==="pipeline"  && <EHPipeline  user={user} ws={ws} tasks={tasks.filter(t=>t.title.toLowerCase().includes(searchQuery.toLowerCase()))} members={members} isAdmin={isAdmin} setEH={setEH} addLog={addLog} onSelectTask={setSelectedTask} selectedTaskId={liveTask?.id} />}
          {tab==="timeline"  && <EHTimeline  tasks={tasks} ws={ws} members={members} />}
          {tab==="chat"      && <EHChat user={user} ws={ws} eh={eh} setEH={setEH} addLog={addLog} />}
          {tab==="team"      && <EHTeam      user={user} ws={ws} eh={eh} members={members} isAdmin={isAdmin} setEH={setEH} addLog={addLog} />}
          {tab==="insights"  && <EHInsights  tasks={tasks} members={members} ws={ws} eh={eh} />}
        </div>
      </div>

      {/* 3. Right Intelligence Drawer */}
      <div style={{ 
        position: "fixed", top: 0, right: liveTask ? 0 : -520, width: 520, height: "100vh", 
        background: "#0d0f11", borderLeft: `1px solid ${EH_BORDER}`, zIndex: 1000, 
        transition: "right 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)", boxShadow: "-40px 0 100px rgba(0,0,0,0.8)"
      }}>
        {liveTask && <EHTaskDetail task={liveTask} members={members} user={user} isAdmin={isAdmin} setEH={setEH} addLog={addLog} eh={eh} onClose={()=>setSelectedTask(null)} />}
      </div>
    </div>
  );
}

// ═══ PIPELINE VIEW ═══════════════════════════════════════════════════════════
function EHPipeline({ user, ws, tasks, members, isAdmin, setEH, addLog, onSelectTask, selectedTaskId }) {
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ title:"", description:"", assignedTo:"", priority:"Medium", deadline:"", type: "Task" });

  const createTask = () => {
    if (!form.title.trim()) return;
    
    const maxNum = tasks.reduce((max, task) => {
      const parts = (task.key || "").split("-");
      const num = parseInt(parts[1], 10);
      return (!isNaN(num) && num > max) ? num : max;
    }, 100);
    const nextKey = `${ws.name.slice(0,2).toUpperCase()}-${maxNum + 1}`;
    
    const t = { id:uid(), workspaceId:ws.id, ...form, status:"Backlog", createdAt:new Date().toISOString(), updatedAt:new Date().toISOString(), key: nextKey };
    setEH(prev=>({...prev,tasks:[...(prev.tasks||[]),t]}));
    addLog(`Initialized Issue: ${form.title}`);
    setForm({ title:"", description:"", assignedTo:"", priority:"Medium", deadline:"", type: "Task" });
    setShowCreate(false);
  };

  const handleDrop = (e, statusKey) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    if (!taskId) return;
    
    setEH(prev => {
      const updatedTasks = (prev.tasks || []).map(t => {
        if (t.id === taskId) {
          if (t.status !== statusKey) {
            addLog(`Moved task "${t.title}" to ${EH_STATUS[statusKey].label}`);
            return { ...t, status: statusKey, updatedAt: new Date().toISOString() };
          }
        }
        return t;
      });
      return { ...prev, tasks: updatedTasks };
    });
  };

  return (
    <div style={{ height: "100%", display: "flex", gap: 24, padding: "24px 40px", overflowX: "auto", scrollbarWidth: "none" }}>
      {Object.keys(EH_STATUS).map(statusKey => {
        const colTasks = tasks.filter(t => t.status === statusKey || (!t.status && statusKey === "Backlog"));
        const meta = EH_STATUS[statusKey];
        const isOverWIP = colTasks.length > meta.wip;

        return (
          <div 
            key={statusKey} 
            onDragOver={e => e.preventDefault()}
            onDrop={e => handleDrop(e, statusKey)}
            style={{ 
              width: 320, minWidth: 320, background: "rgba(255,255,255,0.02)", borderRadius: 16, display: "flex", flexDirection: "column",
              border: `1px solid ${isOverWIP ? "#ef4444" : EH_BORDER}`, transition: "0.3s",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
          >
            <div style={{ padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${EH_BORDER}`, background: "rgba(255,255,255,0.01)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 900, color: meta.color, letterSpacing: 1.5, fontFamily: 'Orbitron' }}>{meta.label.toUpperCase()}</span>
                <span style={{ fontSize: 11, background: meta.color+"22", padding: "1px 8px", borderRadius: 4, color: meta.color, fontWeight: 900 }}>{colTasks.length}</span>
              </div>
              {meta.wip < 99 && <span style={{ fontSize: 10, fontWeight: 800, color: isOverWIP ? "#ef4444" : "#444" }}>LIMIT: {meta.wip}</span>}
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 14 }}>
              {colTasks.map(t => (
                <EHCard 
                  key={t.id} 
                  task={t} 
                  members={members} 
                  onSelect={() => onSelectTask(t)} 
                  active={selectedTaskId === t.id} 
                  onDragStart={e => e.dataTransfer.setData("text/plain", t.id)}
                />
              ))}
              {isAdmin && statusKey === "Backlog" && (
                 <button onClick={() => setShowCreate(true)} style={{ background: "rgba(255,255,255,0.02)", border: `1px dashed ${EH_BORDER}`, color: "#475569", padding: "14px", borderRadius: 12, cursor: "pointer", fontSize: 11, fontWeight: 900, letterSpacing: 1, transition: "0.2s" }} onMouseEnter={e=>e.currentTarget.style.borderColor=EH_PRIMARY}>+ CREATE ISSUE</button>
              )}
            </div>
          </div>
        );
      })}

      <Modal open={showCreate} onClose={()=>setShowCreate(false)} title="Mission Initialization" width={520} style={{ fontFamily: 'Orbitron' }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16, marginBottom: 20 }}>
          <Sel value={form.type} onChange={v=>setForm({...form,type:v})}>
            <option>Task</option><option>Story</option><option>Bug</option><option>Epic</option>
          </Sel>
          <Inp value={form.title} onChange={v=>setForm({...form,title:v})} placeholder="Primary Directive..." style={{ fontSize: 18, fontWeight: 900 }} />
        </div>
        <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="Technical specs and operational details..." rows={5}
          style={{ width:"100%", background:"rgba(0,0,0,0.3)", border:`1px solid ${EH_BORDER}`, borderRadius:12, padding:"16px", color:"#fff", fontSize:14, resize:"vertical", outline:"none", fontFamily:"inherit" }} />
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16, marginTop: 20 }}>
          <Sel value={form.assignedTo} onChange={v=>setForm({...form,assignedTo:v})}>
            <option value="">Unassigned</option>
            {members.map(m=><option key={m.id} value={m.userId}>{m.name}</option>)}
          </Sel>
          <Sel value={form.priority} onChange={v=>setForm({...form,priority:v})}>
            {Object.keys(EH_PRIORITY).map(p=><option key={p}>{p}</option>)}
          </Sel>
          <div style={{ position:"relative" }}>
             <Inp type="date" value={form.deadline} onChange={v=>setForm({...form,deadline:v})} />
             <div style={{ position:"absolute", top:-7, left:12, background:"#0d0f11", fontSize:9, fontWeight:900, color:"#94a3b8", padding:"0 4px", letterSpacing:1 }}>DEADLINE</div>
          </div>
        </div>
        <button onClick={createTask} style={{ width:"100%", marginTop:24, background: EH_PRIMARY, border: "none", color: "#000", padding: "14px", borderRadius: 12, fontWeight: 900, fontSize: 14, cursor: "pointer", boxShadow: `0 10px 30px ${EH_PRIMARY}33` }}>INITIALIZE MISSION</button>
      </Modal>
    </div>
  );
}

function EHCard({ task, members, onSelect, active, onDragStart }) {
  const p = EH_PRIORITY[task.priority] || EH_PRIORITY.Medium;
  const assignee = members.find(m=>m.userId===task.assignedTo);

  return (
    <div 
      draggable
      onDragStart={onDragStart}
      onClick={onSelect}
      style={{ 
        padding: "16px", background: active ? "linear-gradient(135deg, #1c2126, #111316)" : "#0d0f11", border: `1px solid ${active ? EH_PRIMARY : EH_BORDER}`,
        borderRadius: 14, cursor: "pointer", transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)", 
        boxShadow: active ? `0 10px 40px ${EH_PRIMARY}22` : "none",
        transform: active ? "scale(1.02) translateX(4px)" : "none"
      }}
      onMouseEnter={e => { if(!active) { e.currentTarget.style.borderColor = "#3bacd6"; e.currentTarget.style.transform = "translateY(-4px)"; } }}
      onMouseLeave={e => { if(!active) { e.currentTarget.style.borderColor = EH_BORDER; e.currentTarget.style.transform = "none"; } }}
    >
      <div style={{ display:"flex", justifyContent: "space-between", marginBottom:12 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ fontSize: 10, fontWeight: 900, color: "#475569", fontFamily: "monospace", letterSpacing: 1 }}>{task.key || "UN-???"}</span>
          <EHTag label={task.type || "Task"} color={task.type === "Bug" ? "#ef4444" : task.type === "Story" ? "#34b7f1" : "#475569"} />
        </div>
        <span style={{ color: p.color, fontSize: 13, fontWeight: 900 }}>{p.icon}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom:14, lineHeight: 1.4, lineClamp: 2, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        {task.title}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", borderTop: `1px solid rgba(255,255,255,0.03)`, paddingTop: 10 }}>
        <EHAvatar name={assignee?.name||"?"} size={26} />
      </div>
    </div>
  );
}

// ═══ TASK DETAIL PANEL ═══════════════════════════════════════════════════════
function EHTaskDetail({ task, members, user, isAdmin, setEH, addLog, eh, onClose }) {
  const [comment, setComment] = useState("");
  const [editing, setEditing] = useState(false);
  const [editDesc, setEditDesc] = useState(task.description||"");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [file, setFile] = useState(null);
  const [drawerTab, setDrawerTab] = useState("chat");
  const fileInputRef = useRef(null);
  const chatEndRef = useRef(null);

  const comments = (eh.comments||[]).filter(c=>c.taskId===task.id);
  const meta = EH_STATUS[task.status]||EH_STATUS.Backlog;
  const assignee = members.find(m=>m.userId===task.assignedTo);
  const p = EH_PRIORITY[task.priority] || EH_PRIORITY.Medium;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  const startEditComment = (c) => {
    setComment(c.comment);
    setEditingCommentId(c.id);
    setContextMenu(null);
  };

  const deleteComment = (cId) => {
    setEH(prev => ({ ...prev, comments: prev.comments.filter(x => x.id !== cId) }));
    setContextMenu(null);
  };

  const handleCommentInteraction = (e, c) => {
    if (c.userId !== user.id) return;
    e.preventDefault();
    const x = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    const y = e.clientY || (e.touches ? e.touches[0].clientY : 0);
    setContextMenu({ x, y, c });
  };

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setFile({ data: r.result, type: f.type, name: f.name });
    r.readAsDataURL(f);
  };

  const sendComment = () => {
    if (!comment.trim() && !file) return;
    if (editingCommentId) {
      setEH(prev => ({
        ...prev,
        comments: prev.comments.map(x => x.id === editingCommentId ? { ...x, comment: comment.trim(), isEdited: true } : x)
      }));
      setEditingCommentId(null);
    } else {
      const c = { id: uid(), taskId: task.id, userId: user.id, userName: user.name, comment: comment.trim(), file: file?.data, fType: file?.type, fName: file?.name, createdAt: new Date().toISOString() };
      setEH(prev => ({ ...prev, comments: [...(prev.comments || []), c] }));
      addLog(`Transmitted report for: ${task.title}`);
    }
    setComment("");
    setFile(null);
  };

  const updateStatus = (status) => {
    setEH(prev=>({...prev,tasks:prev.tasks.map(t=>t.id===task.id?{...t,status,updatedAt:new Date().toISOString()}:t)}));
    addLog(`Task status  ${status}`);
  };
  const saveDesc = () => {
    setEH(prev=>({...prev,tasks:prev.tasks.map(t=>t.id===task.id?{...t,description:editDesc}:t)}));
    setEditing(false);
  };
  const updateField = (field, value) => {
    setEH(prev=>({...prev,tasks:prev.tasks.map(t=>t.id===task.id?{...t,[field]:value,updatedAt:new Date().toISOString()}:t)}));
    addLog(`Task ${field} updated`);
  };

  useEffect(() => {
    const hide = () => setContextMenu(null);
    window.addEventListener('click', hide);
    return () => window.removeEventListener('click', hide);
  }, []);

  const renderFile = (c, isMe) => {
    if (!c.file) return null;
    const s = { maxWidth: "100%", borderRadius: 12, marginTop: 10, border: "1px solid rgba(255,255,255,0.1)", display: "block" };
    if (c.fType?.startsWith("image/")) return (
      <div style={{ marginTop: 12, position: "relative", overflow: "hidden", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
        <img src={c.file} style={{ ...s, cursor: "zoom-in", transition: "transform 0.3s ease" }} alt={c.fName} onClick={() => window.setGlobalLightboxImg?.(c.file)} onMouseEnter={e=>e.currentTarget.style.transform="scale(1.03)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1.0)"} />
      </div>
    );
    if (c.fType?.startsWith("video/")) return <video src={c.file} controls style={s} />;
    if (c.fType?.startsWith("audio/")) return (
      <div style={{ marginTop: 10, background: isMe ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.2)", padding: "10px", borderRadius: 10, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 18 }}>🎧</span>
        <audio src={c.file} controls style={{ flex: 1, height: 32 }} />
      </div>
    );
    return (
      <a href={c.file} download={c.fName} style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 12, 
        background: isMe ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.03)", 
        border: isMe ? "1px solid rgba(0,0,0,0.08)" : `1px solid ${EH_BORDER}`,
        padding: "12px 16px", 
        borderRadius: 12, 
        color: isMe ? "#050505" : "#00B8D9", 
        marginTop: 12, 
        textDecoration: "none", 
        fontSize: 13, 
        fontWeight: 800,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
        transition: "0.2s" 
      }}
      onMouseEnter={e => { e.currentTarget.style.background = isMe ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.06)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = isMe ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.03)"; }}
      >
        <div style={{ width: 36, height: 36, borderRadius: 8, background: isMe ? "rgba(0,0,0,0.15)" : "rgba(0,184,217,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18 }}>📄</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", fontSize: 12 }}>{c.fName}</div>
          <div style={{ fontSize: 9, opacity: 0.6, marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>DOCUMENT FILE</div>
        </div>
        <div style={{ fontSize: 12, opacity: 0.8 }}>📥</div>
      </a>
    );
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background: EH_PANEL }}>
      <div style={{ padding: "24px 30px", borderBottom: `1px solid ${EH_BORDER}`, background: "rgba(255,255,255,0.01)", flexShrink: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: "#444", fontFamily: "monospace", letterSpacing: 2 }}>{task.key || "EH-???"}</span>
                <EHTag label={task.type?.toUpperCase() || "TASK"} color={EH_PRIMARY} />
            </div>
            <button onClick={onClose} style={{ background: "none", border: "none", color: "#444", cursor: "pointer", fontSize: 24, padding: 0 }}>✕</button>
        </div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>{task.title}</h1>
        
        {/* Glowing Tab Header */}
        <div style={{ display: "flex", gap: 10, borderBottom: `1px solid ${EH_BORDER}`, margin: "0 -30px -25px", padding: "0 30px" }}>
          {[["chat", "Discussion"], ["details", "Details"]].map(([id, label]) => (
            <div 
              key={id} 
              onClick={() => setDrawerTab(id)}
              style={{
                padding: "12px 16px",
                cursor: "pointer",
                fontSize: 11,
                fontWeight: 900,
                color: drawerTab === id ? EH_PRIMARY : "#64748b",
                borderBottom: drawerTab === id ? `3px solid ${EH_PRIMARY}` : "3px solid transparent",
                transition: "0.2s",
                letterSpacing: 1
              }}
            >
              {label.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {drawerTab === "details" ? (
        <div style={{ flex: 1, overflowY: "auto", padding: "30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "24px 10px", marginBottom: 30, borderBottom: `1px solid ${EH_BORDER}`, paddingBottom: 30 }}>
              <EHLabel>ASSIGNEE</EHLabel>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <EHAvatar name={assignee?.name||"?"} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0" }}>{assignee?.name || "UNASSIGNED"}</span>
              </div>
              <EHLabel>STATUS</EHLabel>
              <select value={task.status} onChange={e=>updateStatus(e.target.value)} style={{ background: "#0c0e10", border: `1px solid ${EH_BORDER}`, borderRadius: 8, color: meta.color, fontWeight: 900, fontSize: 10, padding: "6px 12px", width: "fit-content", outline: "none" }}>
                  {Object.keys(EH_STATUS).map(s => <option key={s} value={s}>{EH_STATUS[s].label}</option>)}
              </select>
              <EHLabel>PRIORITY</EHLabel>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: p.color, fontSize: 16 }}>{p.icon}</span>
                  <span style={{ color: p.color, fontSize: 12, fontWeight: 900 }}>{p.label}</span>
              </div>
              <EHLabel>DEADLINE</EHLabel>
              <input type="date" value={task.deadline || ""} onChange={e=>updateField("deadline", e.target.value)} style={{ background: "#0c0e10", border: `1px solid ${EH_BORDER}`, borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 11, padding: "6px 12px", outline: "none", fontFamily: "monospace", width: "fit-content" }} />
          </div>
          <div style={{ marginBottom: 30 }}>
              <EHLabel>DESCRIPTION</EHLabel>
              {editing ? <textarea value={editDesc} onChange={e=>setEditDesc(e.target.value)} onBlur={saveDesc} autoFocus rows={8} style={{ width:"100%", background:"#0c0e10", border:`1px solid ${EH_PRIMARY}`, borderRadius:12, padding:"16px", color:"#fff", fontSize:14, outline:"none", fontFamily: "inherit", lineHeight: 1.6 }} /> : 
              <div onClick={()=>setEditing(true)} style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, background: "rgba(255,255,255,0.01)", padding: "20px", borderRadius: 12, border: `1px solid ${EH_BORDER}`, cursor: "text", minHeight: 150 }}>{task.description || "Intelligence missing..."}</div>}
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
          <style>{`
            .cyber-chat-pane::-webkit-scrollbar { width: 6px; }
            .cyber-chat-pane::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); }
            .cyber-chat-pane::-webkit-scrollbar-thumb { background: rgba(0, 184, 217, 0.2); border-radius: 10px; }
            .cyber-chat-pane::-webkit-scrollbar-thumb:hover { background: rgba(0, 184, 217, 0.5); }
            .cyber-bubble { position: relative; transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1); }
            .cyber-bubble:hover { transform: translateY(-1px); }
            .cyber-bubble:hover .bubble-actions-trigger { opacity: 1 !important; transform: scale(1) !important; }
            .cyber-input:focus-within { border-color: ${EH_PRIMARY}aa !important; box-shadow: 0 0 15px ${EH_PRIMARY}33, inset 0 2px 10px rgba(0,0,0,0.6) !important; }
          `}</style>
          {/* WhatsApp-Style Chat body */}
          <div 
            className="cyber-chat-pane" 
            style={{ 
              flex: 1, 
              overflowY: "auto", 
              padding: "30px", 
              display: "flex", 
              flexDirection: "column", 
              gap: 20, 
              background: "radial-gradient(circle at top right, rgba(0, 184, 217, 0.04), transparent 45%), radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.04), transparent 45%), #090b0d",
              position: "relative"
            }}
          >
              {comments.map((c, idx) => {
                  const isMe = c.userId === user.id;
                  return (
                  <div 
                    key={c.id} 
                    onContextMenu={(e) => handleCommentInteraction(e, c)}
                    style={{ display: "flex", gap: 14, alignSelf: isMe ? "flex-end" : "flex-start", maxWidth: "80%", flexDirection: isMe ? "row-reverse" : "row", animation: "msgSlide 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)" }}
                  >
                      <EHAvatar name={c.userName} size={32} />
                      <div className="cyber-bubble" style={{ display: "flex", flexDirection: "column", alignItems: isMe ? "flex-end" : "flex-start", flex: 1, position: "relative" }}>
                          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6, flexDirection: isMe ? "row-reverse" : "row" }}>
                              <span style={{ fontSize: 10, fontWeight: 900, color: isMe ? EH_PRIMARY : "#64748b", letterSpacing: 1.5 }}>{c.userName.toUpperCase()}</span>
                              <span style={{ fontSize: 8, color: "#475569", fontFamily: "monospace", fontWeight: 700 }}>{new Date(c.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                          </div>
                          
                          {/* Quick Options Overlay Menu */}
                          {isMe && (
                            <div className="bubble-actions-trigger" style={{
                              position: "absolute",
                              top: 24,
                              [isMe ? "left" : "right"]: -36,
                              display: "flex",
                              gap: 2,
                              opacity: 0,
                              transform: "scale(0.85)",
                              transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                              background: "#0c0e10",
                              border: `1px solid ${EH_BORDER}`,
                              borderRadius: 20,
                              padding: "2px 6px",
                              zIndex: 10,
                              boxShadow: "0 10px 20px rgba(0,0,0,0.5)"
                            }}>
                              <button onClick={(e) => { e.stopPropagation(); startEditComment(c); }} style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: 10, padding: "4px" }} title="Edit">✎</button>
                              <button onClick={(e) => { e.stopPropagation(); deleteComment(c.id); }} style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: 10, padding: "4px" }} title="Delete">🗑</button>
                            </div>
                          )}

                          <div style={{ 
                              fontSize: 13, 
                              color: isMe ? "#050505" : "#e2e8f0", 
                              lineHeight: 1.6, 
                              background: isMe ? `linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)` : "rgba(255, 255, 255, 0.02)", 
                              padding: "14px 18px", 
                              borderRadius: isMe ? "18px 4px 18px 18px" : "4px 18px 18px 18px", 
                              border: isMe ? "none" : `1px solid rgba(255,255,255,0.04)`,
                              boxShadow: isMe ? `0 8px 24px rgba(0, 242, 254, 0.15)` : "0 8px 32px rgba(0,0,0,0.25)",
                              wordBreak: "break-word",
                              paddingBottom: c.isEdited ? "22px" : "14px",
                              position: "relative",
                              fontWeight: isMe ? 800 : 500
                          }}>
                              <div>{c.comment}</div>
                              {renderFile(c, isMe)}
                              {c.isEdited && (
                                <span style={{ fontSize: 8, color: isMe ? "rgba(5,5,5,0.5)" : "rgba(255,255,255,0.3)", position: "absolute", bottom: 4, right: 8, fontWeight: 900, letterSpacing: 0.5, textTransform: "uppercase" }}>Edited</span>
                              )}
                          </div>
                      </div>
                  </div>
              )})}
              <div ref={chatEndRef} />
              {comments.length === 0 && <div style={{ margin: "auto", color: "#555", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>NO MISSION LOGS RECORDED.</div>}
          </div>
          
          {/* Footer attachments and input */}
          <div style={{ padding: "20px 30px", borderTop: `1px solid ${EH_BORDER}`, flexShrink: 0, background: "rgba(17, 20, 24, 0.4)", backdropFilter: "blur(20px)" }}>
            {file && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, background: 'rgba(0,184,217,0.1)', padding: "10px 18px", borderRadius: 12, border: `1px solid rgba(0,184,217,0.2)`, backdropFilter: "blur(10px)", animation: "msgSlide 0.25s ease-out" }}>
                <span style={{ fontSize: 14 }}>📎</span>
                <div style={{ flex: 1, fontSize: 11, color: '#00B8D9', fontWeight: 900, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', letterSpacing: 0.5 }}>{file.name.toUpperCase()}</div>
                <button onClick={() => setFile(null)} style={{ background: "none", border: "none", color: "#ef4444", fontWeight: 800, cursor: "pointer", fontSize: 11, letterSpacing: 1 }}>DISCARD</button>
              </div>
            )}
            <div className="cyber-input" style={{ display: "flex", gap: 12, background: "#06080a", border: `1px solid rgba(255,255,255,0.05)`, borderRadius: 18, padding: "8px 12px", alignItems: "center", boxShadow: "inset 0 2px 10px rgba(0,0,0,0.6)", transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)" }}>
                <button onClick={() => fileInputRef.current.click()} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#475569", transition: "0.2s" }} onMouseEnter={e=>e.currentTarget.style.color=EH_PRIMARY} onMouseLeave={e=>e.currentTarget.style.color="#475569"}>📎</button>
                <input type="file" ref={fileInputRef} onChange={handleFile} style={{ display: "none" }} />
                <input value={comment} onChange={e=>setComment(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendComment()} placeholder={editingCommentId ? "Revise transmission report..." : "Transmit intelligence report..."} style={{ flex: 1, background: "transparent", border: "none", color: "#fff", fontSize: 13, outline: "none", padding: "8px", fontWeight: 500 }} />
                <button onClick={sendComment} style={{ width: 36, height: 36, borderRadius: "50%", background: EH_PRIMARY, border: "none", color: "#000", fontWeight: 900, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 15px ${EH_PRIMARY}44`, transition: "0.2s" }} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1)";e.currentTarget.style.boxShadow=`0 4px 20px ${EH_PRIMARY}66`;}} onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow=`0 4px 15px ${EH_PRIMARY}44`;}}>{editingCommentId ? "✓" : "↵"}</button>
            </div>
          </div>
        </div>
      )}

      {contextMenu && (
        <div style={{ position: 'fixed', top: contextMenu.y, left: contextMenu.x, background: '#111316', border: `1px solid ${EH_BORDER}`, borderRadius: 10, padding: '6px', zIndex: 9999, boxShadow: "0 10px 30px rgba(0,0,0,0.5)", minWidth: 160 }}>
          <button onClick={() => startEditComment(contextMenu.c)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', background: 'none', border: 'none', color: '#e9edef', textAlign: 'left', cursor: 'pointer', fontSize: 13, width: '100%', borderRadius: 6, fontWeight: 700 }} className="eh-ctx-btn">
            <span>✎</span> Edit Transmission
          </button>
          <button onClick={() => deleteComment(contextMenu.c.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', background: 'none', border: 'none', color: '#ef4444', textAlign: 'left', cursor: 'pointer', fontSize: 13, width: '100%', borderRadius: 6, fontWeight: 700 }} className="eh-ctx-btn">
            <span>🗑</span> Delete
          </button>
        </div>
      )}
    </div>
  );
}

// ═══ TIMELINE (GANTT) ════════════════════════════════════════════════════════
// ═══ MISSION CONTROL: TECHNICAL CHAT ══════════════════════════════════════
function EHChat({ user, ws, eh, setEH, addLog }) {
  const [msg, setMsg] = useState("");
  const [editingMsgId, setEditingMsgId] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const fileInputRef = useRef(null);
  const bottomRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const roomMsgs = (eh.chat || []).filter(c => c.workspaceId === ws.id);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks = [];
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setAudioBlob(blob);
        setRecording(false);
      };
      mediaRecorder.start();
      setRecording(true);
    } catch (err) { alert("Microphone access denied."); }
  };
  const stopRecording = () => { if (mediaRecorderRef.current) mediaRecorderRef.current.stop(); };
  const sendAudio = () => {
    if (!audioBlob) return;
    const reader = new FileReader();
    reader.onload = () => { 
      send(null, 'audio/webm', `Voice_Note_${Date.now()}.webm`, reader.result); 
      setAudioBlob(null); 
    };
    reader.readAsDataURL(audioBlob);
  };

  const send = (text = null, fType = null, fName = null, fData = null) => {
    const finalMsg = text !== null ? text : msg;
    if (!finalMsg.trim() && !fData) return;
    
    if (editingMsgId) {
      const updatedChat = (eh.chat || []).map(m => 
        m.id === editingMsgId ? { ...m, text: finalMsg, isEdited: true, editTime: new Date().toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' }) } : m
      );
      setEH(prev => ({ ...prev, chat: updatedChat }));
      setEditingMsgId(null);
    } else {
      const c = { id:uid(), workspaceId:ws.id, userId:user.id, userName:user.name, text:finalMsg, file:fData, fType, fName, time:new Date().toLocaleTimeString("en-IN",{hour:'2-digit',minute:'2-digit'}), timestamp:new Date().toISOString() };
      setEH(prev=>({...prev, chat:[...(prev.chat||[]),c]}));
    }
    setMsg("");
    setTimeout(()=>bottomRef.current?.scrollIntoView({ behavior:"smooth" }),100);
  };

  const deleteMsg = (id) => { 
    setEH(prev => ({ ...prev, chat: prev.chat.filter(m => m.id !== id) })); 
    setContextMenu(null); 
  };
  const startEdit = (m) => { setEditingMsgId(m.id); setMsg(m.text); setContextMenu(null); };
  
  const handleInteraction = (e, m) => {
    if (m.userId !== user.id) return;
    e.preventDefault();
    const x = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    const y = e.clientY || (e.touches ? e.touches[0].clientY : 0);
    setContextMenu({ x, y, m });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => send(null, file.type, file.name, reader.result);
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const hide = () => setContextMenu(null);
    window.addEventListener('click', hide);
    return () => window.removeEventListener('click', hide);
  }, []);

  const renderFile = (m, isMe) => {
    if (!m.file) return null;
    const s = { maxWidth: "100%", borderRadius: 12, marginTop: 10, border: "1px solid rgba(255,255,255,0.1)", display: "block" };
    if (m.fType?.startsWith("image/")) return <img src={m.file} style={{ ...s, cursor: "zoom-in" }} alt={m.fName} onClick={() => window.setGlobalLightboxImg?.(m.file)} />;
    if (m.fType?.startsWith("video/")) return <video src={m.file} controls style={s} />;
    if (m.fType?.startsWith("audio/")) return (
      <div style={{ marginTop: 10, background: isMe ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.2)", padding: "10px", borderRadius: 10, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 18 }}>🎧</span>
        <audio src={m.file} controls style={{ flex: 1, height: 32 }} />
      </div>
    );
    return (
      <a href={m.file} download={m.fName} style={{ display: "flex", alignItems: "center", gap: 10, background: isMe ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.05)", padding: "10px 14px", borderRadius: 10, color: isMe ? "#000" : EH_PRIMARY, marginTop: 10, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
        <span style={{ fontSize: 20 }}>📄</span>
        <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.fName}</div>
      </a>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "transparent", position: "relative" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 40px", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ alignSelf: "center", fontSize: 10, fontWeight: 900, color: "#475569", letterSpacing: 2, marginBottom: 20, background: "rgba(255,255,255,0.03)", padding: "4px 12px", borderRadius: 4 }}>MISSION CHANNEL ENCRYPTED // END-TO-END</div>
        {roomMsgs.map((m, idx) => {
          const isMe = m.userId === user.id;
          const isSameUser = idx > 0 && roomMsgs[idx-1].userId === m.userId;
          return (
            <div 
              key={m.id} 
              onContextMenu={(e) => handleInteraction(e, m)}
              style={{ alignSelf: isMe ? "flex-end" : "flex-start", maxWidth: "80%", marginBottom: isSameUser ? -12 : 0, animation: "msgSlide 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)" }}
            >
              {!isSameUser && !isMe && <div style={{ fontSize: 11, fontWeight: 900, color: EH_PRIMARY, marginBottom: 4, letterSpacing: 0.5 }}>{m.userName.toUpperCase()}</div>}
              <div style={{ 
                padding: "12px 16px", paddingBottom: "20px", borderRadius: isMe ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                background: isMe ? "linear-gradient(135deg, #00B8D9, #008AA1)" : "#16191c", 
                border: `1px solid ${isMe ? "rgba(255,255,255,0.1)" : EH_BORDER}`,
                color: isMe ? "#000" : "#d1d5db", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                position: "relative",
                cursor: isMe ? "context-menu" : "default"
              }}>
                <div style={{ fontSize: 14, lineHeight: "1.6", fontWeight: isMe ? 600 : 500, wordBreak: "break-word" }}>
                  {m.text}
                  {renderFile(m, isMe)}
                </div>
                <div style={{ position: "absolute", bottom: 6, right: 10, fontSize: 10, color: isMe ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 5, fontWeight: 800 }}>
                  {m.isEdited && <span style={{ opacity: 0.8 }}>Edited</span>}
                  {m.time}
                  {isMe && <span style={{ fontSize: 12 }}>✓✓</span>}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {audioBlob && (
        <div style={{ padding: "0 40px", marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#111316', padding: "10px 18px", borderRadius: 12, border: `1px solid ${EH_BORDER}`, animation: "msgSlide 0.3s" }}>
            <div style={{ flex: 1, fontSize: 12, color: EH_PRIMARY, fontWeight: 800, letterSpacing: 1 }}>🎙️ VOCAL REPORT READY</div>
            <button onClick={() => setAudioBlob(null)} style={{ background: "none", border: "none", color: "#ef4444", fontWeight: 900, cursor: "pointer", fontSize: 11, letterSpacing: 1 }}>DISCARD</button>
            <button onClick={sendAudio} style={{ background: EH_PRIMARY, border: "none", padding: "6px 16px", borderRadius: 8, color: "#000", fontWeight: 900, cursor: "pointer", fontSize: 11, letterSpacing: 1 }}>SEND</button>
          </div>
        </div>
      )}

      <div style={{ padding: "16px 40px", background: "rgba(8,9,10,0.8)", borderTop: `1px solid ${EH_BORDER}`, backdropFilter: "blur(20px)" }}>
        <div style={{ display: "flex", gap: 12, background: "#111316", padding: "8px 16px", borderRadius: 18, border: `1px solid rgba(255,255,255,0.05)`, alignItems: "center", boxShadow: "inset 0 2px 10px rgba(0,0,0,0.3)" }}>
          <button onClick={()=>fileInputRef.current.click()} style={{ background:"none", border:"none", color:"#475569", cursor:"pointer", fontSize:20 }}>📎</button>
          <input type="file" ref={fileInputRef} onChange={handleFile} style={{ display: "none" }} />
          <input 
            value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send(null)}
            placeholder={editingMsgId ? "REVISE MISSION REPORT..." : "TYPE MISSION REPORT..."} 
            style={{ flex: 1, background: "none", border: "none", color: "#fff", outline: "none", fontSize: 14, fontWeight: 600, letterSpacing: 0.5, padding: "8px 0" }} 
          />
          <button onClick={recording ? stopRecording : startRecording} style={{ background: "none", border: "none", color: recording ? "#ef4444" : "#475569", cursor: "pointer", fontSize: 20 }}>
            {recording ? "⏹" : "🎙️"}
          </button>
          <button onClick={()=>send(null)} style={{ background: editingMsgId ? "#3b82f6" : EH_PRIMARY, border: "none", width: 40, height: 40, borderRadius: 12, color: "#000", fontWeight: 900, cursor: "pointer", transition: "0.2s", display: "flex", alignItems: "center", justifyContent: "center" }} onMouseEnter={e=>e.currentTarget.style.transform="scale(1.05)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
            {editingMsgId ? "✓" : "↵"}
          </button>
        </div>
      </div>

      {contextMenu && (
        <div style={{ position: 'fixed', top: contextMenu.y, left: contextMenu.x, background: '#111316', border: `1px solid ${EH_BORDER}`, borderRadius: 10, padding: '6px', zIndex: 9999, boxShadow: "0 10px 30px rgba(0,0,0,0.5)", minWidth: 160 }}>
          <button onClick={() => startEdit(contextMenu.m)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', background: 'none', border: 'none', color: '#e9edef', textAlign: 'left', cursor: 'pointer', fontSize: 13, width: '100%', borderRadius: 6, fontWeight: 700 }} className="eh-ctx-btn">
            <span>✎</span> Edit Report
          </button>
          <button onClick={() => deleteMsg(contextMenu.m.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', background: 'none', border: 'none', color: '#ef4444', textAlign: 'left', cursor: 'pointer', fontSize: 13, width: '100%', borderRadius: 6, fontWeight: 700 }} className="eh-ctx-btn">
            <span>🗑</span> Delete
          </button>
        </div>
      )}

      <style>{`
        @keyframes msgSlide { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .eh-ctx-btn:hover { background: rgba(255,255,255,0.05); }
      `}</style>
    </div>
  );
}

// ═══ TIMELINE (GANTT) ════════════════════════════════════════════════════════
function EHTimeline({ tasks, ws, members }) {
  const dated = tasks.filter(t=>t.deadline);
  const start = new Date(ws.startDate||today());
  const end   = new Date(ws.endDate||new Date(Date.now()+30*86400000));
  const totalMs = Math.max(end-start, 86400000);
  const toX = (d) => Math.max(0, Math.min(100, ((new Date(d)-start)/totalMs)*100));

  return (
    <div style={{ display: "flex", height: "100%", borderTop: `1px solid ${EH_BORDER}` }}>
      {/* List Pane */}
      <div style={{ width: 340, borderRight: `1px solid ${EH_BORDER}`, background: "rgba(255,255,255,0.01)", overflowY: "auto" }}>
        <div style={{ padding: "20px", borderBottom: `1px solid ${EH_BORDER}`, fontSize: 10, fontWeight: 900, color: "#475569", letterSpacing: 2 }}>OPERATIONAL ISSUES</div>
        {dated.map(t => (
          <div key={t.id} style={{ padding: "16px 20px", borderBottom: `1px solid ${EH_BORDER}`, fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ color: EH_PRIMARY, fontSize: 10, fontFamily: "monospace", minWidth: 40 }}>{t.key?.split("-")[1]}</span>
            <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#cbd5e1" }}>{t.title}</span>
          </div>
        ))}
        {dated.length===0 && <div style={{ padding: 40, textAlign:"center", fontSize:12, color:"#333" }}>NO DIRECTIVES LOGGED</div>}
      </div>
      {/* Timeline Pane */}
      <div style={{ flex: 1, overflowX: "auto", position: "relative" }}>
        <div style={{ display: "flex", height: 50, borderBottom: `1px solid ${EH_BORDER}`, background: "rgba(255,255,255,0.02)" }}>
          {[0,0.2,0.4,0.6,0.8,1].map(p => {
             const d = new Date(start.getTime() + p * totalMs);
             return <div key={p} style={{ flex: 1, borderRight: `1px solid ${EH_BORDER}`, fontSize: 10, color: "#475569", padding: "18px 0", textAlign: "center", fontWeight: 800 }}>{d.toLocaleDateString("en-IN",{month:'short',day:'2-digit'}).toUpperCase()}</div>
          })}
        </div>
        <div style={{ padding: "20px 0" }}>
          {dated.map((t, idx) => {
            const tx1 = toX(t.createdAt || start);
            const tx2 = toX(t.deadline);
            const w = Math.max(2, tx2 - tx1);
            return (
              <div key={t.id} style={{ height: 38, position: "relative" }}>
                 <div style={{ 
                   position: "absolute", left: `${tx1}%`, width: `${w}%`, top: 8, height: 22, 
                   background: `${EH_PRIMARY}22`, border: `1px solid ${EH_PRIMARY}88`, borderRadius: 12,
                   display: "flex", alignItems: "center", gap: 8, fontSize: 10, padding: "0 12px", color: EH_PRIMARY, fontWeight: 900,
                   boxShadow: `0 0 20px ${EH_PRIMARY}11`
                 }}>
                   <span style={{ opacity: 0.6 }}>{t.key}</span>
                   <span style={{ whiteSpace: "nowrap", overflow:"hidden" }}>{t.title}</span>
                 </div>
              </div>
            );
          })}
          {dated.length===0 && <div style={{ textAlign:"center", padding:100, fontSize:12, color:"#444", fontWeight:800 }}>ATTACH DEADLINES TO VISUALIZE TIMELINE</div>}
        </div>
      </div>
    </div>
  );
}

// ═══ TEAM MANAGEMENT ═════════════════════════════════════════════════════════
function EHTeam({ user, ws, eh, members, isAdmin, setEH, addLog }) {
  const pendingReqs = [];
  const seenUserIds = new Set();
  const rawPending = (eh.joinRequests || []).filter(r => r.workspaceId === ws.id && r.status === "Pending");
  [...rawPending].reverse().forEach(r => {
    if (!seenUserIds.has(r.userId)) {
      seenUserIds.add(r.userId);
      pendingReqs.unshift(r);
    }
  });

  const approveReq = (reqId, userName) => {
    const req = (eh.joinRequests || []).find(r => r.id === reqId);
    if (!req) return;
    const newMember = { id: uid(), workspaceId: ws.id, userId: req.userId, name: req.userName, email: req.userEmail || "", role: "Member", status: "Approved", joinedAt: new Date().toISOString() };
    const isAlreadyMember = (eh.members || []).some(m => m.userId === req.userId && m.workspaceId === ws.id);
    
    setEH(prev => ({
      ...prev,
      joinRequests: prev.joinRequests.map(r => 
        (r.userId === req.userId && r.workspaceId === ws.id && r.status === "Pending") 
          ? { ...r, status: "Approved" } 
          : r
      ),
      members: isAlreadyMember ? (prev.members || []) : [...(prev.members || []), newMember]
    }));
    addLog(`Approved: ${userName}`);
  };

  const rejectReq = (reqId, userName) => {
    const req = (eh.joinRequests || []).find(r => r.id === reqId);
    if (!req) return;
    setEH(prev => ({
      ...prev,
      joinRequests: prev.joinRequests.map(r => 
        (r.userId === req.userId && r.workspaceId === ws.id && r.status === "Pending") 
          ? { ...r, status: "Rejected" } 
          : r
      )
    }));
    addLog(`Rejected: ${userName}`);
  };

  const removeMember = (memberId, name) => {
    setEH(prev=>({...prev,members:prev.members.filter(m=>m.id!==memberId)}));
    addLog(`Removed member: ${name}`);
  };

  const updateRole = (memberId, role) => {
    setEH(prev=>({...prev,members:prev.members.map(m=>m.id===memberId?{...m,role}:m)}));
  };

  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
        <div style={{ fontWeight:700, fontSize:17, color:"#f1f5f9" }}>Team Management</div>
        <div style={{ fontSize:13, color:"#64748b" }}>{members.length+1} member{members.length!==0?"s":""}</div>
      </div>

      {/* Pending join requests */}
      {isAdmin && pendingReqs.length>0 && (
        <Card style={{ marginBottom:20, border:"1px solid rgba(245,158,11,0.3)" }}>
          <div style={{ fontWeight:700, fontSize:13, color:"#f59e0b", marginBottom:12, display:"flex", alignItems:"center", gap:6 }}>
            🔔 Pending Requests ({pendingReqs.length})
          </div>
          {pendingReqs.map(r=>(
            <div key={r.id} style={{ display:"flex", alignItems:"center", gap:12, padding:"10px 0", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
              <EHAvatar name={r.userName} size={34} />
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:13, color:"#f1f5f9" }}>{r.userName}</div>
                <div style={{ fontSize:11, color:"#64748b" }}>Requested {fmtDate(r.requestedAt||r.createdAt||"")}</div>
              </div>
              <div style={{ display:"flex", gap:8 }}>
                <button onClick={()=>approveReq(r.id,r.userName)} style={{ padding:"5px 14px", background:"rgba(34,197,94,0.12)", border:"1px solid rgba(34,197,94,0.3)", borderRadius:8, color:"#22c55e", fontSize:12, fontWeight:700, cursor:"pointer" }}>Approve</button>
                <button onClick={()=>rejectReq(r.id,r.userName)}  style={{ padding:"5px 14px", background:"rgba(239,68,68,0.08)",  border:"1px solid rgba(239,68,68,0.2)",   borderRadius:8, color:"#f87171", fontSize:12, fontWeight:700, cursor:"pointer" }}>Reject</button>
              </div>
            </div>
          ))}
        </Card>
      )}

      {/* Members table */}
      <Card>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
          <span style={{ fontWeight:700, fontSize:14, color:"#f1f5f9" }}>Team</span>
        </div>
        {/* Table header */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 100px 1fr 100px", gap:8, padding:"6px 0 10px", borderBottom:"1px solid rgba(255,255,255,0.07)", fontSize:11, fontWeight:700, color:"#475569", textTransform:"uppercase", letterSpacing:0.5 }}>
          <span>Member</span><span>Role</span><span>Status</span><span>Actions</span>
        </div>
        {/* Creator row */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 100px 1fr 100px", gap:8, padding:"12px 0", alignItems:"center", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <EHAvatar name={user.name} size={34} online />
            <div>
              <div style={{ fontWeight:700, fontSize:13, color:"#f1f5f9" }}>{user.name} (You)</div>
              <div style={{ fontSize:11, color:"#64748b" }}>{user.email||""}</div>
            </div>
          </div>
          <EHBadge label="Admin" color={EH_ROLE_C.Admin} />
          <span style={{ fontSize:12, color:"#22c55e" }}>● Active</span>
          <span style={{ fontSize:11, color:"#555" }}>Creator</span>
        </div>
        {members.filter(m=>m.userId!==user.id).map(m=>(
          <div key={m.id} style={{ display:"grid", gridTemplateColumns:"1fr 100px 1fr 100px", gap:8, padding:"12px 0", alignItems:"center", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <EHAvatar name={m.name} size={34} />
              <div>
                <div style={{ fontWeight:700, fontSize:13, color:"#f1f5f9" }}>{m.name}</div>
                <div style={{ fontSize:11, color:"#64748b" }}>{m.email||"Team member"}</div>
              </div>
            </div>
            {isAdmin ? (
              <select value={m.role} onChange={e=>updateRole(m.id,e.target.value)}
                style={{ background:"#1a1a2e", border:"1px solid rgba(255,255,255,0.1)", borderRadius:8, padding:"4px 8px", color:EH_ROLE_C[m.role]||"#fff", fontSize:11, fontWeight:700 }}>
                {["Member","Manager","Admin","Observer"].map(r=><option key={r}>{r}</option>)}
              </select>
            ) : (
              <EHBadge label={m.role} color={EH_ROLE_C[m.role]||"#6c63ff"} />
            )}
            <span style={{ fontSize:12, color:"#22c55e" }}>● Active</span>
            {isAdmin ? (
              <button onClick={()=>removeMember(m.id,m.name)} style={{ padding:"4px 12px", background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.2)", borderRadius:7, color:"#f87171", fontSize:11, fontWeight:600, cursor:"pointer" }}>Remove</button>
            ) : <span />}
          </div>
        ))}
        {members.filter(m=>m.userId!==user.id).length===0 && (
          <div style={{ textAlign:"center", padding:"20px 0", color:"#3a3a5c", fontSize:13 }}>No other members yet. Share the Workspace ID and Access Code to invite people.</div>
        )}
      </Card>

      {/* Share info box */}
      <div style={{ marginTop:16, background:"rgba(59,130,246,0.07)", border:"1px solid rgba(59,130,246,0.2)", borderRadius:10, padding:"14px 18px" }}>
        <div style={{ fontSize:12, fontWeight:700, color:"#3b82f6", marginBottom:8 }}>🔗 Invite Members</div>
        <div style={{ display:"flex", gap:20, fontSize:13 }}>
          <div><span style={{ color:"#64748b" }}>Workspace ID: </span><span style={{ color:"#f1f5f9", fontWeight:700, letterSpacing:1 }}>{ws.id}</span></div>
          <div><span style={{ color:"#64748b" }}>Access Code: </span><span style={{ color:"#3b82f6", fontWeight:800, letterSpacing:2 }}>{ws.accessCode}</span></div>
        </div>
        <div style={{ fontSize:11, color:"#475569", marginTop:6 }}>Share these credentials with team members so they can join.</div>
      </div>
    </div>
  );
}

// ═══ INSIGHTS DASHBOARD ══════════════════════════════════════════════════════
function EHInsights({ tasks, members, ws, eh }) {
  const total      = tasks.length;
  const backlog    = tasks.filter(t=>t.status==="Backlog").length;
  const todo       = tasks.filter(t=>t.status==="Todo").length;
  const inProgress = tasks.filter(t=>t.status==="InProgress").length;
  const review     = tasks.filter(t=>t.status==="Review").length;
  const done       = tasks.filter(t=>t.status==="Done").length;
  
  const overdue    = tasks.filter(t=>t.deadline && new Date(t.deadline)<new Date() && t.status!=="Done").length;
  const pct        = total ? Math.round((done/total)*100) : 0;
  const reqs       = (eh.joinRequests||[]).filter(r=>r.workspaceId===ws.id);
  const approved   = reqs.filter(r=>r.status==="Approved").length;
  const rejected   = reqs.filter(r=>r.status==="Rejected").length;

  const memberStats = members.map(m=>{
    const mt = tasks.filter(t=>t.assignedTo===m.userId);
    const md = mt.filter(t=>t.status==="Done").length;
    return { ...m, assigned:mt.length, done:md, eff:mt.length?Math.round((md/mt.length)*100):0 };
  }).sort((a,b)=>b.done-a.done);

  const overallEff = memberStats.length ? Math.round(memberStats.reduce((s,m)=>s+m.eff,0)/memberStats.length) : 0;

  return (
    <div>
      <div style={{ fontWeight:700, fontSize:17, color:"#f1f5f9", marginBottom:20 }}>Insights</div>
      {/* Task Overview cards */}
      <div style={{ marginBottom:8, fontWeight:700, fontSize:13, color:"#94a3b8", textTransform:"uppercase", letterSpacing:0.5 }}>Task Overview</div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:24 }}>
        {[
          ["Total",       total,    "#6c63ff", "Scoring smart"],
          ["Completed",   done,     "#22c55e", "Autoespace"],
          ["Approved",    approved, "#3b82f6", "Approved"],
          ["Completion",  pct+"%",  "#f59e0b", "Completion"],
        ].map(([l,v,c,sub])=>(
          <Card key={l} style={{ border:`1px solid ${c}22` }}>
            <div style={{ fontSize:26, fontWeight:800, color:c, marginBottom:2 }}>{v}</div>
            <div style={{ fontSize:12, color:"#888", marginBottom:4 }}>{l}</div>
            <div style={{ height:3, background:"rgba(255,255,255,0.05)", borderRadius:2, overflow:"hidden" }}>
              <div style={{ height:"100%", width:typeof v === "number" ? `${Math.min(100,(v/Math.max(total,1))*100)}%` : `${pct}%`, background:c, borderRadius:2 }} />
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
        {/* Status pie + delayed */}
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          <Card>
            <div style={{ fontWeight:700, fontSize:14, color:"#f1f5f9", marginBottom:14 }}>Status Distribution</div>
            <div style={{ display:"flex", alignItems:"center", gap:20 }}>
              <EHPieChart size={120} slices={[
                { value:backlog,    color:"#94a3b8" },
                { value:todo,       color:"#34b7f1" },
                { value:inProgress, color:"#f59e0b" },
                { value:review,     color:"#8b5cf6" },
                { value:done,       color:"#22c55e" },
              ].filter(s=>s.value>0)} />
              <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                {[
                  ["#94a3b8", "Backlog", backlog],
                  ["#34b7f1", "To Do", todo],
                  ["#f59e0b", "In Progress", inProgress],
                  ["#8b5cf6", "Review", review],
                  ["#22c55e", "Done", done]
                ].map(([c,l,v])=>(
                  <div key={l} style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <div style={{ width:8, height:8, borderRadius:2, background:c, flexShrink:0 }} />
                    <span style={{ fontSize:12, color:"#94a3b8", minWidth:90 }}>{l}</span>
                    <span style={{ fontSize:13, fontWeight:700, color:"#f1f5f9" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card>
            <div style={{ fontWeight:700, fontSize:14, color:"#f1f5f9", marginBottom:14 }}>Delayed & Overdue Tasks</div>
            <div style={{ display:"flex", alignItems:"center", gap:20 }}>
              <div>
                <div style={{ fontSize:40, fontWeight:800, color:"#ef4444" }}>{overdue}</div>
                <div style={{ fontSize:12, color:"#888", marginTop:2 }}>Overdue Tasks</div>
              </div>
              <EHDonut pct={total?Math.round(((total-overdue)/total)*100):100} size={90} color="#22c55e" />
            </div>
          </Card>
        </div>

        {/* Team productivity */}
        <Card>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
            <span style={{ fontWeight:700, fontSize:14, color:"#f1f5f9" }}>Team Productivity</span>
            <EHDonut pct={overallEff} size={70} color="#3b82f6" />
          </div>
          {memberStats.slice(0,6).map(m=>(
            <div key={m.id} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
              <EHAvatar name={m.name} size={28} />
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
                  <span style={{ fontSize:12, color:"#e2e8f0", fontWeight:600 }}>{m.name.split(" ")[0]}</span>
                  <span style={{ fontSize:12, fontWeight:700, color:"#f1f5f9" }}>{m.done}</span>
                </div>
                <div style={{ height:4, background:"rgba(255,255,255,0.07)", borderRadius:2, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:`${m.eff}%`, background:"#3b82f6", borderRadius:2, transition:"width 0.4s" }} />
                </div>
              </div>
            </div>
          ))}
          {memberStats.length===0 && <div style={{ color:"#555", fontSize:13 }}>Add members to see productivity metrics.</div>}
          {/* Join stats */}
          <div style={{ marginTop:16, paddingTop:14, borderTop:"1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ fontSize:11, fontWeight:700, color:"#555", textTransform:"uppercase", letterSpacing:0.5, marginBottom:8 }}>Join Requests</div>
            <div style={{ display:"flex", gap:12 }}>
              {[["Approved",approved,"#22c55e"],["Pending",reqs.filter(r=>r.status==="Pending").length,"#f59e0b"],["Rejected",rejected,"#ef4444"]].map(([l,v,c])=>(
                <div key={l} style={{ textAlign:"center" }}>
                  <div style={{ fontSize:20, fontWeight:800, color:c }}>{v}</div>
                  <div style={{ fontSize:10, color:"#64748b" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}


// ─── HABIT TRACKER ────────────────────────────────────────────────────────────
function HabitTracker({ user }) {
  const [myHabits, setMyHabits] = useLS(`apx_custom_habits_${user.id}`, [
    { id: "water", icon: "💧", label: "Water", type: "numeric", unit: "glasses", target: 8, color: "#38bdf8" },
    { id: "meditation", icon: "🧘", label: "Meditation", type: "positive", color: "#a78bfa" },
    { id: "mobile", icon: "📱", label: "Avoid Mobile", type: "negative", color: "#ef4444" }
  ]);
  
  const [logs, setLogs] = useLS(`apx_habits_${user.id}`, {});
  const [showAdd, setShowAdd] = useState(false);
  const [newHabit, setNewHabit] = useState({ label: "", icon: "🎯", type: "numeric", unit: "times", target: 10, color: "#6c63ff" });
  const [chartView, setChartView] = useState("week"); // "day" or "week"
  const d = today();

  const getVal = (date, id) => logs[date]?.[id] ?? 0;
  const updateHabit = (id, val) => setLogs(prev => ({ ...prev, [d]: { ...(prev[d] || {}), [id]: val } }));

  const calculatePct = (h, val) => {
    if (h.type === "numeric") return Math.min(100, Math.round((val / h.target) * 100));
    if (h.type === "positive") return val === "yes" ? 100 : 0;
    if (h.type === "negative") return val === "no" ? 100 : 0;
    return 0;
  };

  const addHabit = () => {
    if (!newHabit.label.trim()) return;
    setMyHabits([...myHabits, { ...newHabit, id: uid() }]);
    setNewHabit({ label: "", icon: "🎯", type: "numeric", unit: "times", target: 10, color: "#6c63ff" });
    setShowAdd(false);
  };

  const deleteHabit = (id) => {
    if (window.confirm("Permanently delete this habit?")) {
      setMyHabits(prev => prev.filter(h => h.id !== id));
    }
  };

  const getStreak = (habitId) => {
    let streak = 0; let checkDate = new Date();
    while (true) {
      const dateStr = checkDate.toISOString().split('T')[0];
      const val = logs[dateStr]?.[habitId] ?? 0;
      const h = myHabits.find(x => x.id === habitId);
      if (h && calculatePct(h, val) === 100) { streak++; checkDate.setDate(checkDate.getDate() - 1); } 
      else break;
    }
    return streak;
  };

  // Get Monday-to-Sunday dates for the current week
  const getWeekDates = () => {
    const current = new Date();
    const day = current.getDay();
    const diff = current.getDate() - day + (day === 0 ? -6 : 1);
    return Array.from({ length: 7 }, (_, i) => {
      const dateObj = new Date(current);
      dateObj.setDate(diff + i);
      return dateObj;
    });
  };
  const weekDates = getWeekDates();

  const getAverageScoreForDays = (daysAgoStart, daysAgoEnd) => {
    let totalScore = 0;
    let daysCount = 0;
    for (let i = daysAgoStart; i <= daysAgoEnd; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dailyScore = myHabits.length ? myHabits.reduce((sum, h) => sum + calculatePct(h, logs[dateStr]?.[h.id] ?? 0), 0) / myHabits.length : 0;
      totalScore += dailyScore;
      daysCount++;
    }
    return daysCount ? Math.round(totalScore / daysCount) : 0;
  };

  const weeklyComparison = [
    { label: "3 Weeks Ago", score: getAverageScoreForDays(21, 27) },
    { label: "2 Weeks Ago", score: getAverageScoreForDays(14, 20) },
    { label: "1 Week Ago", score: getAverageScoreForDays(7, 13) },
    { label: "Current Week", score: getAverageScoreForDays(0, 6) }
  ];

  return (
    <div style={{ padding: "24px 32px", background: "#050508", minHeight: "100vh" }}>
      <PageHeader title="Warrior Discipline" subtitle="Forge your character through repetition" 
        actions={<button onClick={() => setShowAdd(true)} style={{ padding: "12px 24px", background: "linear-gradient(135deg, #6c63ff, #3b82f6)", border: "none", borderRadius: 12, color: "#fff", fontWeight: 800, cursor: "pointer" }}>+ New Habit</button>} />
      
      {/* ─── BAR CHART ANALYTICS ─── */}
      <Card style={{ marginBottom: 32, padding: "24px", background: "rgba(10,10,15,0.8)", border: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          <div style={{ fontSize: 16, fontWeight: 900, color: "#fff" }}>📊 DISCIPLINE TRAJECTORY</div>
          <div style={{ display: "flex", gap: 6, background: "rgba(0,0,0,0.4)", padding: 4, borderRadius: 10, border: "1px solid rgba(255,255,255,0.05)" }}>
            <button 
              onClick={() => setChartView("day")} 
              style={{ padding: "6px 12px", background: chartView === "day" ? "linear-gradient(135deg, #6c63ff, #3b82f6)" : "none", border: "none", borderRadius: 8, color: "#fff", fontSize: 10, fontWeight: 900, cursor: "pointer", transition: "0.2s", letterSpacing: 0.5 }}
            >
              DAILY (THIS WEEK)
            </button>
            <button 
              onClick={() => setChartView("week")} 
              style={{ padding: "6px 12px", background: chartView === "week" ? "linear-gradient(135deg, #6c63ff, #3b82f6)" : "none", border: "none", borderRadius: 8, color: "#fff", fontSize: 10, fontWeight: 900, cursor: "pointer", transition: "0.2s", letterSpacing: 0.5 }}
            >
              WEEKLY COMPARISON
            </button>
          </div>
        </div>
        <div style={{ display: "flex", height: 200, position: 'relative' }}>
          
          {/* Vertical Y-Axis (0-100%) */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", paddingRight: 15, color: "#444", fontSize: 10, fontWeight: 800, textAlign: "right", width: 40, borderRight: '1px solid #222' }}>
            <span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span>
          </div>

          {/* Bar Chart Container */}
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: 12, paddingLeft: 10, borderBottom: '1px solid #222' }}>
            {chartView === "day" ? (
              weekDates.map((dateObj, i) => {
                const dateStr = dateObj.toISOString().split('T')[0];
                const score = myHabits.length ? Math.round(myHabits.reduce((s, h) => s + calculatePct(h, logs[dateStr]?.[h.id] ?? 0), 0) / myHabits.length) : 0;
                const isToday = dateStr === d;
                const dayLabel = dateObj.toLocaleDateString("en-IN", { weekday: 'short' });
                return (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end", position: 'relative' }}>
                    <div style={{ 
                      width: "100%", height: `${Math.max(score, 2)}%`, 
                      background: score === 100 ? "#22c55e" : `linear-gradient(to top, #6c63ff, #3b82f6)`, 
                      borderRadius: "4px 4px 0 0", transition: "height 0.8s ease",
                      opacity: isToday ? 1 : 0.6,
                      boxShadow: isToday ? `0 0 15px #6c63ff55` : "none"
                    }} />
                    {/* Horizontal X-Axis (Day of Month + Name) */}
                    <div style={{ fontSize: 9, fontWeight: 800, color: isToday ? EH_PRIMARY : "#444", marginTop: 10, position: 'absolute', bottom: -25, textAlign: 'center', whiteSpace: 'nowrap' }}>
                      {dayLabel.toUpperCase()} {dateObj.getDate()}
                    </div>
                  </div>
                );
              })
            ) : (
              weeklyComparison.map((item, i) => {
                return (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end", position: 'relative' }}>
                    <div style={{ 
                      width: "100%", height: `${Math.max(item.score, 2)}%`, 
                      background: item.score === 100 ? "#22c55e" : `linear-gradient(to top, #8b5cf6, #3b82f6)`, 
                      borderRadius: "4px 4px 0 0", transition: "height 0.8s ease",
                      opacity: i === 3 ? 1 : 0.6,
                      boxShadow: i === 3 ? `0 0 15px #8b5cf655` : "none"
                    }} />
                    {/* Horizontal X-Axis (Week labels) */}
                    <div style={{ fontSize: 9, fontWeight: 800, color: i === 3 ? EH_PRIMARY : "#444", marginTop: 10, position: 'absolute', bottom: -25, whiteSpace: 'nowrap' }}>
                      {item.label.toUpperCase()}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div style={{ marginTop: 30 }} /> {/* Spacer for X-axis labels */}
      </Card>

      {/* ─── HABIT CARDS ─── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
        {myHabits.map(h => {
          const val = getVal(d, h.id);
          const pct = calculatePct(h, val);
          const streak = getStreak(h.id);
          return (
            <Card key={h.id} style={{ border: `1px solid ${pct === 100 ? h.color + '44' : 'rgba(255,255,255,0.05)'}` }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 24 }}>{h.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 900, color: "#fff" }}>{h.label}</div>
                  <div style={{ fontSize: 11, color: "#64748b" }}>{h.type === "numeric" ? `${h.target} ${h.unit.toUpperCase()}` : "MISSION"}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  {streak > 0 && <span style={{ color: "#f59e0b", fontSize: 12, fontWeight: 900 }}>🔥 {streak}</span>}
                  <button onClick={() => deleteHabit(h.id)} style={{ background: "none", border: "none", color: "#444", cursor: "pointer", fontSize: 18 }}>🗑️</button>
                </div>
              </div>

              {h.type === "numeric" ? (
                <div style={{ marginBottom: 16 }}>
                  <input type="range" min="0" max={h.target} value={val} onChange={e => updateHabit(h.id, Number(e.target.value))} style={{ width: "100%", accentColor: h.color }} />
                  <div style={{ textAlign: "right", fontSize: 13, fontWeight: 900, color: h.color }}>{val} / {h.target}</div>
                </div>
              ) : (
                <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
                  <button onClick={() => updateHabit(h.id, "yes")} style={{ flex: 1, padding: 10, borderRadius: 8, background: val === "yes" ? h.color : "#111", border: "1px solid #222", color: "#fff", fontWeight: 700 }}>YES</button>
                  <button onClick={() => updateHabit(h.id, "no")} style={{ flex: 1, padding: 10, borderRadius: 8, background: val === "no" ? h.color : "#111", border: "1px solid #222", color: "#fff", fontWeight: 700 }}>NO</button>
                </div>
              )}
              {/* Mini Weekly Chart (Mon-Sun) */}
              <div style={{ marginTop: 20, marginBottom: 20, borderTop: "1px dashed rgba(255,255,255,0.05)", paddingTop: 16 }}>
                <div style={{ fontSize: 9, fontWeight: 900, color: "#475569", marginBottom: 12, letterSpacing: 0.5 }}>WEEKLY PROGRESSION</div>
                <div style={{ display: "flex", gap: 6, height: 40, alignItems: "flex-end" }}>
                  {weekDates.map((dateObj, idx) => {
                    const dateStr = dateObj.toISOString().split('T')[0];
                    const dayVal = logs[dateStr]?.[h.id] ?? 0;
                    const dayPct = calculatePct(h, dayVal);
                    const isToday = dateStr === d;
                    const initials = ["M", "T", "W", "T", "F", "S", "S"][idx];
                    return (
                      <div key={idx} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
                        <div style={{ 
                          width: 8, 
                          height: `${Math.max(dayPct * 0.4, 2)}px`, // max height 40px
                          background: dayPct === 100 ? "#22c55e" : h.color,
                          borderRadius: 2,
                          opacity: isToday ? 1 : 0.4
                        }} title={`${dateStr}: ${dayPct}%`} />
                        <span style={{ fontSize: 8, fontWeight: 900, color: isToday ? EH_PRIMARY : "#444", marginTop: 4 }}>{initials}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{ height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${pct}%`, background: pct === 100 ? "#22c55e" : h.color, borderRadius: 2, transition: "width 0.4s" }} />
              </div>
            </Card>
          );
        })}
      </div>

      {/* ─── NEW HABIT MODAL ─── */}
      {showAdd && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10000 }}>
          <div style={{ width: 400, background: "#11111a", border: "1px solid #222", borderRadius: 24, padding: "32px" }}>
            <h2 style={{ marginTop: 0, color: "#fff", fontWeight: 900 }}>Initialize Discipline</h2>
            
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 11, fontWeight: 800, color: "#64748b", display: "block", marginBottom: 8 }}>NAME</label>
              <input value={newHabit.label} onChange={e => setNewHabit({...newHabit, label: e.target.value})} style={{ width: "100%", background: "#000", border: "1px solid #333", padding: 12, borderRadius: 10, color: "#fff", boxSizing: "border-box" }} placeholder="e.g. Java Coding" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 800, color: "#64748b", display: "block", marginBottom: 8 }}>TYPE</label>
                <select value={newHabit.type} onChange={e => setNewHabit({...newHabit, type: e.target.value})} style={{ width: "100%", background: "#000", border: "1px solid #333", padding: 12, borderRadius: 10, color: "#fff" }}>
                  <option value="numeric">Numeric</option>
                  <option value="positive">Positive</option>
                  <option value="negative">Avoidance</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 800, color: "#64748b", display: "block", marginBottom: 8 }}>COLOR</label>
                <input type="color" value={newHabit.color} onChange={e => setNewHabit({...newHabit, color: e.target.value})} style={{ width: "100%", height: 44, background: "none", border: "none", cursor: "pointer" }} />
              </div>
            </div>

            {newHabit.type === "numeric" && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                <input type="number" placeholder="Target" onChange={e => setNewHabit({...newHabit, target: Number(e.target.value)})} style={{ width: "100%", background: "#000", border: "1px solid #333", padding: 12, borderRadius: 10, color: "#fff" }} />
                <input placeholder="Unit" onChange={e => setNewHabit({...newHabit, unit: e.target.value})} style={{ width: "100%", background: "#000", border: "1px solid #333", padding: 12, borderRadius: 10, color: "#fff" }} />
              </div>
            )}

            <button onClick={addHabit} style={{ width: "100%", padding: 16, background: "#6c63ff", border: "none", borderRadius: 12, color: "#fff", fontWeight: 800, cursor: "pointer" }}>Save Habit</button>
            <button onClick={() => setShowAdd(false)} style={{ width: "100%", marginTop: 10, background: "none", border: "none", color: "#444", cursor: "pointer" }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
// ─── WARRIOR MODE ─────────────────────────────────────────────────────────────
function Warrior({ user, exp, setExp, pomo, setPomo, stopwatch, setStopwatch, counter, setCounter }) {

  // ─── 1. CORE DATA & STATE ───────────────────────────────────────────

  const WARRIOR_QUOTES = [
  // --- ANCIENT STRATEGY & BURN THE SHIPS (1-40) ---
  "Jack of all is a Master of none",
  "If you want to take the island, burn the ships.",
  "The more you sweat in peace, the less you bleed in war.",
  "Fortune favors the bold.",
  "He who has a why to live can bear almost any how.",
  "Know thy self, know thy enemy. A thousand battles, a thousand victories.",
  "First, learn to become a warrior. Then, learn to become a saint.",
  "The sword remains in the scabbard until the moment of absolute necessity.",
  "A warrior does not seek the path of least resistance.",
  "Steel is forged in the hottest fire.",
  "Empty your cup so that it may be filled.",
  "The best defense is a good offense.",
  "Regard your soldiers as your children, and they will follow you into the deepest valleys.",
  "Victorious warriors win first and then go to war.",
  "In the midst of chaos, there is also opportunity.",
  "The greatest victory is that which requires no battle.",
  "Do not repeat the tactics which have gained you one victory.",
  "Strategy without tactics is the slowest route to victory.",
  "Plan for what is difficult while it is easy.",
  "He who is prudent and lies in wait for an enemy who is not, will be victorious.",
  "There is no instance of a nation benefiting from prolonged warfare.",
  "Conquer yourself rather than the world.",
  "The purpose of the weapon is the prevention of the weapon.",
  "A samurai chooses to serve, but a warrior chooses to conquer.",
  "Yield not to misfortunes, but advance all the more boldly against them.",
  "The only way to win is to refuse to lose.",
  "Attack is the secret of defense; defense is the planning of an attack.",
  "Great results can be achieved with small forces.",
  "Treat your men as you would your own beloved sons.",
  "Let your plans be dark and impenetrable as night.",
  "In war, the way to avoid what is strong is to strike what is weak.",
  "If the mind is willing, the flesh could go on and on without many things.",
  "The art of war is of vital importance to the State.",
  "All warfare is based on deception.",
  "Move swift as the Wind and closely-formed as the Wood.",
  "Be subtle to the point of formlessness.",
  "If you wait by the river long enough, the bodies of your enemies will float by.",
  "Victory belongs to the most persevering.",
  "To win one hundred victories in one hundred battles is not the acme of skill.",
  "The general who advances without coveting fame is a jewel of the kingdom.",
  "Discipline is the soul of an army.",

  // --- DISCIPLINE & CONSISTENCY (41-80) ---
  "Discipline is the bridge between goals and accomplishment.",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  "The pain of discipline is far less than the pain of regret.",
  "Motivation gets you going, but discipline keeps you growing.",
  "Freedom is found in the structure of your discipline.",
  "Small daily improvements over time lead to stunning results.",
  "The only easy day was yesterday.",
  "Discipline is doing what needs to be done, even if you don't want to.",
  "Mastery requires the discipline of a thousand boring days.",
  "Consistent effort is the only way to build a legacy.",
  "A disciplined mind leads to happiness.",
  "Self-discipline is the magic power that makes you virtually unstoppable.",
  "Suffering is the training ground of the great.",
  "Discipline is choosing between what you want now and what you want most.",
  "He who cannot obey himself will be commanded.",
  "Rules for the world, discipline for the self.",
  "The foundation of any great life is built with the bricks of discipline.",
  "Character is the result of two things: mental attitude and the way we spend our time.",
  "It is not enough to be busy; so are the ants. The question is: what are we busy about?",
  "Work as if you were to live 100 years. Pray as if you were to die tomorrow.",
  "Consistency is the true foundation of trust.",
  "Without discipline, there is no life at all.",
  "You will never always be motivated, so you must learn to be disciplined.",
  "Discipline is the refining fire by which talent becomes ability.",
  "The price of excellence is discipline.",
  "One day at a time. One task at a time.",
  "A warrior’s discipline is shown in the smallest actions.",
  "Fall in love with the process and the results will come.",
  "Discipline and freedom are not mutually exclusive; they are roommates.",
  "The power to control yourself is the only power that matters.",
  "Only the disciplined are truly free.",
  "Your level of success will rarely exceed your level of self-discipline.",
  "Great works are performed not by strength but by perseverance.",
  "Discipline over everything.",
  "Be the master of your habits, or they will master you.",
  "Consistency is what transforms average into excellence.",
  "Do it today, even if it hurts.",
  "If you lack discipline, you lack power.",
  "Show up every single day.",
  "The hard way is the only way.",

  // --- PRODUCTIVITY & FOCUS (81-120) ---
  "The secret of getting ahead is getting started.",
  "Focus on being productive instead of busy.",
  "Action is the foundational key to all success.",
  "Deep work is the superpower of the 21st century.",
  "Efficiency is doing things right; effectiveness is doing the right things.",
  "Your output depends on your focus, not your hours.",
  "Don't count the days, make the days count.",
  "Concentrate all your thoughts upon the work at hand.",
  "Multi-tasking is the art of doing many things poorly.",
  "Single-minded focus is the shortcut to mastery.",
  "The sun’s rays do not burn until brought to a focus.",
  "Starve your distractions. Feed your focus.",
  "Be like a postage stamp—stick to one thing until you get there.",
  "Silence the noise to hear the truth.",
  "You cannot build a reputation on what you are going to do.",
  "Start where you are. Use what you have. Do what you can.",
  "Execution is everything.",
  "The goal is not to be better than the other man, but your previous self.",
  "Don't let the best be the enemy of the good.",
  "The successful warrior is the average man, with laser-like focus.",
  "Energy flows where attention goes.",
  "Amateurs wait for inspiration. Professionals get to work.",
  "Distraction is the enemy of greatness.",
  "Do the hard task first thing in the morning.",
  "One hour of deep focus is worth ten hours of distraction.",
  "Where focus goes, energy flows.",
  "Focus is a muscle. Train it.",
  "Say no to the good so you can say yes to the great.",
  "Clarity is power.",
  "Your future is created by what you do today, not tomorrow.",
  "Simple can be harder than complex.",
  "Take the risk or lose the chance.",
  "Productivity is never an accident.",
  "The essence of strategy is choosing what not to do.",
  "Less but better.",
  "Eliminate the non-essential.",
  "Keep the main thing the main thing.",
  "A lack of focus is often a lack of courage.",
  "Finish what you start.",
  "Action cures fear.",

  // --- ANTI-PROCRASTINATION (121-160) ---
  "Procrastination is the thief of time.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Tomorrow is the place where most of your potential goes to die.",
  "Stop thinking. Start doing.",
  "The cost of delay is always higher than the cost of action.",
  "Later is a lie.",
  "Kill the hesitation. Move.",
  "Procrastination is the arrogant assumption that God owes you another chance.",
  "Don't wait. The time will never be just right.",
  "Begin now.",
  "One year from now you will wish you had started today.",
  "A task left for tomorrow is a weight carried today.",
  "Do it now.",
  "Hesitation creates gaps through which the enemy enters.",
  "While we waste our time hesitating and postponing, life is accelerating.",
  "You don't have to be great to start, but you have to start to be great.",
  "Overthinking is the suicide of action.",
  "Stop talking. Start acting.",
  "Dreams don't work unless you do.",
  "Procrastination makes easy things hard and hard things harder.",
  "Just start.",
  "The hardest part is the first five minutes.",
  "Action is the antidote to anxiety.",
  "Do something today that your future self will thank you for.",
  "If you want to make an easy job seem mighty hard, just keep putting off doing it.",
  "The way to get started is to quit talking and begin doing.",
  "A journey of a thousand miles begins with a single step.",
  "Don't wait for permission to be great.",
  "Your mind will try to protect you from work. Ignore it.",
  "Discomfort is the price of admission to a meaningful life.",
  "If it’s important, you’ll find a way. If not, you’ll find an excuse.",
  "Never leave that till tomorrow which you can do today.",
  "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
  "There is no such thing as a convenient time to work hard.",
  "Success is buried under the things you are putting off.",
  "Every delay is a decay.",
  "Action destroys overthinking.",
  "Start before you are ready.",
  "The time is now.",
  "Don't postpone your life.",

  // --- HARD WORK & GRIT (161-200) ---
  "Hard work beats talent when talent doesn't work hard.",
  "The only place where success comes before work is in the dictionary.",
  "There are no shortcuts to any place worth going.",
  "Great things come from hard work and perseverance. No excuses.",
  "The hustle is quiet. The results are loud.",
  "Success is 1% inspiration and 99% perspiration.",
  "Grind now, shine later.",
  "Work while they sleep. Learn while they party. Live like they dream.",
  "A diamond is just a piece of charcoal that handled stress exceptionally well.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Success isn't always about greatness. It's about consistency.",
  "Do not pray for an easy life, pray for the strength to endure a difficult one.",
  "Grit is that ‘extra something’ that separates the most successful from the rest.",
  "Fall seven times, stand up eight.",
  "Endure and persist.",
  "Hard work is the only way to get where you want to be.",
  "There is no substitute for hard work.",
  "Sweat is the cologne of accomplishment.",
  "I am a great believer in luck, and I find the harder I work the more I have of it.",
  "Quality is not an act, it is a habit.",
  "Chop your own wood and it will warm you twice.",
  "Dreams are free. The hustle is sold separately.",
  "Don't stop when you're tired. Stop when you're done.",
  "Pain is temporary. Pride is forever.",
  "If it was easy, everyone would do it.",
  "He who sweats more in training bleeds less in war.",
  "Hard work pays off.",
  "Hustle until your haters ask if you're hiring.",
  "Blood, sweat, and respect. First two you give, last one you earn.",
  "Ambition is the path to success. Persistence is the vehicle you arrive in.",
  "Make it happen.",
  "Pressure creates diamonds.",
  "Keep going.",
  "Stay hungry.",
  "Your work is going to fill a large part of your life.",
  "Excellence is not a skill. It is an attitude.",
  "The road to success is always under construction.",
  "Keep grinding.",
  "Believe you can and you're halfway there.",
  "Strength does not come from winning.",

  // --- MINDSET & STOICISM (201-240) ---
  "You have power over your mind, not outside events.",
  "The impediment to action advances action. What stands in the way becomes the way.",
  "He who conquers himself is the mightiest warrior.",
  "It is not death that a man should fear, but he should fear never beginning to live.",
  "Your mind is a weapon. Keep it loaded.",
  "Don't explain your philosophy. Embody it.",
  "The calm mind is the ultimate weapon.",
  "Stop complaining and start commanding your own life.",
  "Pain is inevitable. Suffering is optional.",
  "The soul becomes dyed with the color of its thoughts.",
  "A man is but the product of his thoughts. What he thinks, he becomes.",
  "Wealth consists not in having great possessions, but in having few wants.",
  "If it is not right, do not do it; if it is not true, do not say it.",
  "Waste no more time arguing about what a good man should be. Be one.",
  "Very little is needed to make a happy life.",
  "Everything we hear is an opinion, not a fact.",
  "The best revenge is to be unlike him who performed the injury.",
  "The object of life is not to be on the side of the majority.",
  "Accept the things to which fate binds you.",
  "First say to yourself what you would be; and then do what you have to do.",
  "Control your perceptions.",
  "Direct your actions properly.",
  "Willingly accept what's outside your control.",
  "Think of yourself as dead. You have lived your life. Now, take what's left and live it properly.",
  "He who is brave is free.",
  "Difficulty is what wakes up the genius.",
  "A ship should not ride on a single anchor.",
  "Learn to be indifferent to what makes no difference.",
  "External things are not the problem. It’s your assessment of them.",
  "You are a little soul carrying around a corpse.",
  "Man is affected not by events, but by the view he takes of them.",
  "It is the power of the mind to be unconquerable.",
  "Freedom is the only worthy goal in life.",
  "Don't demand that things happen as you wish.",
  "If someone is able to show me that what I think or do is not right, I will happily change.",
  "Life is short. Do not forget it.",
  "Look within. Within is the fountain of good.",
  "Be like the cliff against which the waves continually break.",
  "Adapt or perish.",
  "The mind is its own place.",

  // --- MOTIVATION & AMBITION (241-280) ---
  "Success is the courage to continue when others stop.",
  "Build your own dreams, or someone else will hire you to build theirs.",
  "The only person you are destined to become is the person you decide to be.",
  "Don't decrease the goal. Increase the effort.",
  "Your ambition must be greater than your fear.",
  "Be so good they can’t ignore you.",
  "Stay foolish.",
  "Winning is not a sometime thing; it's an all the time thing.",
  "You miss 100% of the shots you don’t take.",
  "Whether you think you can or think you can't, you're right.",
  "The only way to do great work is to love what you do.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Your time is limited, don't waste it living someone else's life.",
  "The best way to predict the future is to create it.",
  "Everything you've ever wanted is on the other side of fear.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Aim for the moon. If you miss, you may hit a star.",
  "Whatever you are, be a good one.",
  "Opportunities don't happen. You create them.",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  "I find that the harder I work, the more luck I seem to have.",
  "Success is not final, failure is not fatal.",
  "Do one thing every day that scares you.",
  "Don't be afraid to give up the good to go for the great.",
  "If you are going through hell, keep going.",
  "Hard times never last, but hard people do.",
  "Limitless.",
  "Born for greatness.",
  "Believe in yourself.",
  "Push yourself.",
  "Nothing is impossible.",
  "The word itself says 'I'm possible'.",
  "Go the extra mile.",
  "Make it count.",
  "Focus on the vision.",
  "Never look back.",
  "Your potential is endless.",
  "Rise and grind.",

  // --- WISDOM & LIFE LESSONS (281-320) ---
  "Character is what you do when no one is watching.",
  "Doubt kills more dreams than failure ever will.",
  "Life begins at the end of your comfort zone.",
  "Hard times create strong men. Strong times create weak men.",
  "You cannot fail if you do not quit.",
  "Make your life a masterpiece.",
  "Be the master of your fate, the captain of your soul.",
  "The legacy you leave is the life you lead.",
  "Silence is a source of great strength.",
  "Truth is simple.",
  "Knowledge is power.",
  "Wisdom begins in wonder.",
  "The unexamined life is not worth living.",
  "He who knows others is wise. He who knows himself is enlightened.",
  "Knowing is not enough; we must apply.",
  "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
  "The secret of happiness is freedom.",
  "Freedom is the will to be responsible to ourselves.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "Integrity is doing the right thing, even when no one is watching.",
  "Kindness is a strength.",
  "Humility is the foundation of all virtues.",
  "Patience is bitter, but its fruit is sweet.",
  "Experience is the teacher of all things.",
  "An investment in knowledge pays the best interest.",
  "The only true wisdom is in knowing you know nothing.",
  "Beware the barrenness of a busy life.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Be kind, for everyone you meet is fighting a hard battle.",
  "You only live once, but if you do it right, once is enough.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "If you tell the truth, you don't have to remember anything.",
  "A friend to all is a friend to none.",
  "Character is destiny.",
  "Everything has beauty, but not everyone sees it.",
  "Wisdom is the reward you get for a lifetime of listening.",
  "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  "The journey is the reward.",
  "Live as if you were to die tomorrow.",
  "Learn as if you were to live forever.",

  // --- LEADERSHIP & AUTHORITY (321-365) ---
  "Lead by example, not by command.",
  "Power is given only to those who are willing to stoop and pick it up.",
  "A leader is one who knows the way, goes the way, and shows the way.",
  "He who cannot obey, cannot command.",
  "True power is restraint.",
  "Respect is earned. Honesty is appreciated. Trust is gained.",
  "A king is not born, he is made through battle.",
  "Protect the vision at all costs.",
  "A leader is a dealer in hope.",
  "Innovation distinguishes between a leader and a follower.",
  "Leadership is influence.",
  "The function of leadership is to produce more leaders.",
  "Before you are a leader, success is all about growing yourself.",
  "When you are a leader, success is all about growing others.",
  "Earn your leadership every day.",
  "Great leaders are almost always great simplifiers.",
  "Leadership is the capacity to translate vision into reality.",
  "The challenge of leadership is to be strong, but not rude.",
  "A genuine leader is not a searcher for consensus but a molder of consensus.",
  "Be a leader with a ladder, not a leader with a boss mentality.",
  "Don't find fault, find a remedy.",
  "The speed of the boss is the speed of the team.",
  "A good leader takes a little more than his share of the blame.",
  "A good leader takes a little less than his share of the credit.",
  "To lead people, walk behind them.",
  "Average leaders raise the bar on themselves.",
  "Good leaders raise the bar for others.",
  "Great leaders inspire others to raise their own bar.",
  "Lead from the front.",
  "A leader's job is to look into the future and see the organization.",
  "Management is doing things right; leadership is doing the right things.",
  "Example is not the main thing in influencing others. It is the only thing.",
  "Leadership is the art of giving people a platform for spreading ideas that work.",
  "If your actions inspire others to dream more, you are a leader.",
  "The best leader is the one who has sense enough to pick good men.",
  "No man will make a great leader who wants to do it all himself.",
  "Great leaders can see the glory in the grind.",
  "Forge the path.",
  "The lion does not turn around when a small dog barks.",
  "Strength and Honor.",
  "Be ruthless with systems, but kind with people.",
  "Command respect through your work ethic.",
  "A warrior leads through action.",
  "Own the outcome.",
  "Stay the course."
];

  const [tasks, setTasks] = useLS(`apx_tasks_${user?.id}`, []);
  // ─── NEW WARRIOR STATE DECLARATIONS (10 PRODUCTIVITY FEATURES) ───
  const [ikigai, setIkigai] = useLS(`apx_warrior_ikigai_${user?.id}`, { love: "", goodAt: "", paidFor: "", worldNeeds: "" });
  const [stoicPlan, setStoicPlan] = useLS(`apx_stoic_plan_${user?.id}`, { goal: "", obstacle: "", response: "", date: "" });
  const [commandments, setCommandments] = useLS(`apx_commandments_${user?.id}`, [
    { id: 1, label: "Wake up by 6:00 AM", completed: false },
    { id: 2, label: "No social media first hour", completed: false },
    { id: 3, label: "15 minutes visualization", completed: false },
    { id: 4, label: "Drink 3L of water", completed: false },
    { id: 5, label: "Review daily main targets", completed: false },
    { id: 6, label: "Read 10 pages of a book", completed: false },
    { id: 7, label: "30 minutes physical training", completed: false },
    { id: 8, label: "Complete primary Quest", completed: false },
    { id: 9, label: "Clean work environment", completed: false },
    { id: 10, label: "Log Nightly Combat Debrief", completed: false }
  ]);
  const [debrief, setDebrief] = useLS(`apx_debrief_${user?.id}`, { conquest: "", defeat: "", tomorrow: "", date: "" });
  const [visionPins, setVisionPins] = useLS(`apx_vision_pins_${user?.id}`, []);
  const [lastReflectedStoryDate, setLastReflectedStoryDate] = useLS(`apx_last_reflected_story_${user?.id}`, "");
  const [showPinModal, setShowPinModal] = useState(false);
  const [tempCoords, setTempCoords] = useState(null);
  const [newPin, setNewPin] = useState({ name: "", notes: "", deadline: "", action: "" });
  const [pomoShieldBroke, setPomoShieldBroke] = useState(false);
  const [creatorActive, setCreatorActive] = useState(false);
  const [creatorLayout, setCreatorLayout] = useLS(`apx_vboard_layout_${user?.id}`, 'grid2x2');
  const [creatorTheme, setCreatorTheme] = useLS(`apx_vboard_theme_${user?.id}`, 'space');
  const [creatorSpacing, setCreatorSpacing] = useLS(`apx_vboard_spacing_${user?.id}`, 10);
  const [creatorBorderColor, setCreatorBorderColor] = useLS(`apx_vboard_border_col_${user?.id}`, '#3bacd6');
  const [creatorBorderGlow, setCreatorBorderGlow] = useLS(`apx_vboard_border_glow_${user?.id}`, true);
  const [creatorSlots, setCreatorSlots] = useLS(`apx_vboard_slots_${user?.id}`, [
    { type: 'text', content: 'Focus on the execution, not the outcome.', title: 'CORE VALUE', font: 'serif', color: '#ffffff', glowColor: '#3bacd6', image: null },
    { type: 'image', content: '', title: 'TARGET VISUAL', font: 'sans-serif', color: '#ffffff', glowColor: '#00f2fe', image: null },
    { type: 'text', content: 'Consistency builds empires. Excuses burn them.', title: 'AFFIRMATION', font: 'monospace', color: '#ffffff', glowColor: '#a78bfa', image: null },
    { type: 'image', content: '', title: 'DAILY DRIVE', font: 'sans-serif', color: '#ffffff', glowColor: '#10b981', image: null }
  ]);
  const [editingSlotIdx, setEditingSlotIdx] = useState(null);

  const CREATOR_THEMES = [
    { id: 'space', name: '🌌 Deep Space', gradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #020617 100%)' },
    { id: 'sunset', name: '🌅 Retrowave Sunset', gradient: 'linear-gradient(135deg, #881337 0%, #4c0519 50%, #f43f5e 100%)' },
    { id: 'cyber', name: '⚔️ Stealth Shogun', gradient: 'linear-gradient(135deg, #111827 0%, #030712 100%)' },
    { id: 'gold', name: '🏆 Gladiator Gold', gradient: 'linear-gradient(135deg, #451a03 0%, #1a0c02 100%)' }
  ];

  const AI_AFFIRMATIONS = {
    career: [
      "I code with absolute precision; my systems run flawlessly.",
      "Every bug I conquer elevates my level as an architect.",
      "My solutions are simple, performant, and resilient."
    ],
    focus: [
      "My focus is a fortress; obstacles dissolve before my actions.",
      "I command respect through my work ethic and consistency.",
      "No excuses. I start before I am ready."
    ],
    power: [
      "My energy is infinite; I master my body and mind daily.",
      "Discomfort is the price of admission to my goals.",
      "Consistency beats talent. I execute relentlessly."
    ]
  };

  const handleCompileVisionBoard = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    let grad = ctx.createLinearGradient(0, 0, 1200, 800);
    if (creatorTheme === 'space') {
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(0.5, '#1e1b4b');
      grad.addColorStop(1, '#020617');
    } else if (creatorTheme === 'sunset') {
      grad.addColorStop(0, '#881337');
      grad.addColorStop(0.5, '#4c0519');
      grad.addColorStop(1, '#f43f5e');
    } else if (creatorTheme === 'cyber') {
      grad.addColorStop(0, '#111827');
      grad.addColorStop(1, '#030712');
    } else {
      grad.addColorStop(0, '#451a03');
      grad.addColorStop(1, '#1a0c02');
    }
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 800);

    const gap = creatorSpacing;
    let slotCoords = [];

    if (creatorLayout === 'grid2x2') {
      const w = (1200 - 3 * gap) / 2;
      const h = (800 - 3 * gap) / 2;
      slotCoords = [
        { x: gap, y: gap, w, h },
        { x: 2 * gap + w, y: gap, w, h },
        { x: gap, y: 2 * gap + h, w, h },
        { x: 2 * gap + w, y: 2 * gap + h, w, h }
      ];
    } else if (creatorLayout === 'grid3') {
      const w = (1200 - 4 * gap) / 3;
      const h = 800 - 2 * gap;
      slotCoords = [
        { x: gap, y: gap, w, h },
        { x: 2 * gap + w, y: gap, w, h },
        { x: 3 * gap + 2 * w, y: gap, w, h }
      ];
    } else {
      const w1 = (1200 - 3 * gap) * 0.6;
      const w2 = (1200 - 3 * gap) * 0.4;
      const h1 = 800 - 2 * gap;
      const h2 = (800 - 3 * gap) / 2;
      slotCoords = [
        { x: gap, y: gap, w: w1, h: h1 },
        { x: 2 * gap + w1, y: gap, w: w2, h: h2 },
        { x: 2 * gap + w1, y: 2 * gap + h2, w: w2, h: h2 }
      ];
    }

    const drawPromises = slotCoords.map((coord, idx) => {
      return new Promise((resolve) => {
        const slot = creatorSlots[idx] || { type: 'text', content: 'Goal Target' };
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
        ctx.fillRect(coord.x, coord.y, coord.w, coord.h);

        ctx.lineWidth = 3;
        ctx.strokeStyle = creatorBorderColor;
        ctx.strokeRect(coord.x, coord.y, coord.w, coord.h);

        if (creatorBorderGlow) {
          ctx.shadowColor = creatorBorderColor;
          ctx.shadowBlur = 20;
          ctx.strokeRect(coord.x, coord.y, coord.w, coord.h);
          ctx.shadowBlur = 0;
        }

        if (slot.type === 'image' && slot.image) {
          const img = new Image();
          img.src = slot.image;
          img.onload = () => {
            const imgAspect = img.width / img.height;
            const slotAspect = coord.w / coord.h;
            let sx, sy, sw, sh;
            if (imgAspect > slotAspect) {
              sh = img.height;
              sw = sh * slotAspect;
              sx = (img.width - sw) / 2;
              sy = 0;
            } else {
              sw = img.width;
              sh = sw / slotAspect;
              sx = 0;
              sy = (img.height - sh) / 2;
            }
            ctx.drawImage(img, sx, sy, sw, sh, coord.x, coord.y, coord.w, coord.h);

            if (slot.title) {
              ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
              ctx.fillRect(coord.x, coord.y + coord.h - 45, coord.w, 45);
              
              ctx.fillStyle = '#ffffff';
              ctx.font = 'bold 15px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(slot.title, coord.x + coord.w / 2, coord.y + coord.h - 18);
            }
            resolve();
          };
          img.onerror = () => resolve();
        } else {
          if (slot.title) {
            ctx.fillStyle = slot.glowColor || '#3bacd6';
            ctx.font = 'bold 12px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(slot.title.toUpperCase(), coord.x + coord.w / 2, coord.y + 40);
          }

          const text = slot.content || "ENTER AFFIRMATION DIRECTIVE";
          ctx.fillStyle = slot.color || '#ffffff';
          
          let fontName = 'sans-serif';
          if (slot.font === 'serif') fontName = 'Georgia, serif';
          if (slot.font === 'monospace') fontName = 'Courier New, monospace';
          
          ctx.font = `italic ${coord.w < 350 ? '16px' : '22px'} ${fontName}`;
          ctx.textAlign = 'center';

          const words = text.split(' ');
          let line = '';
          let lines = [];
          const maxWidth = coord.w - 50;
          
          for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && n > 0) {
              lines.push(line);
              line = words[n] + ' ';
            } else {
              line = testLine;
            }
          }
          lines.push(line);

          const startY = coord.y + coord.h / 2 - ((lines.length - 1) * 15);
          for (let j = 0; j < lines.length; j++) {
            ctx.fillText(lines[j], coord.x + coord.w / 2, startY + (j * 32));
          }
          resolve();
        }
      });
    });

    Promise.all(drawPromises).then(() => {
      const dataURL = canvas.toDataURL('image/jpeg', 0.95);
      setVision({ ...vision, image: dataURL });
      setCreatorActive(false);
      new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3").play().catch(()=>{});
    });
  };


  const STORIES = [
    {
      title: "The Samurai's Focus",
      story: "A young samurai asked his Zen master how to remain focused in battle. The master filled a cup to the brim with oil and told him to walk through a crowded marketplace without spilling a single drop. Behind the samurai walked two guards with drawn swords. If he spilled a drop, his head would be cut off. The samurai successfully completed the walk. The master asked: 'Did you see the musicians? The beggars? The shops?' The samurai replied: 'No, my mind was only on the oil.' The master smiled: 'That is focus. When your purpose is a matter of life and death, distractions disappear.'",
      moral: "Ultimate focus is achieved when you treat your daily goals as non-negotiable priorities."
    },
    {
      title: "The Carpenter's House",
      story: "An elderly carpenter was ready to retire. He told his employer of his plans to leave the house-building business. The contractor was sorry to see his good worker go and asked if he could build just one more house as a personal favor. The carpenter agreed, but his heart was not in his work. He resorted to shoddy workmanship and used inferior materials. When the carpenter finished his work, the employer handed him the front-door key. 'This is your house,' he said, 'my gift to you!' The carpenter was shocked. Had he known he was building his own house, he would have done it so differently.",
      moral: "You build your own life, one day at a time. Build with excellence, not shortcuts."
    },
    {
      title: "The Two Wolves",
      story: "An old Cherokee chief was teaching his grandson about life. 'A fight is going on inside me,' he said to the boy. 'It is a terrible fight between two wolves. One is evil - he is anger, envy, sorrow, regret, greed, arrogance, self-pity, guilt, resentment, inferiority, lies, false pride, superiority, and ego. The other is good - he is joy, peace, love, hope, serenity, humility, kindness, benevolence, empathy, generosity, truth, compassion, and faith. The same fight is going on inside you – and inside every other person, too.' The grandson thought about it for a minute and then asked his grandfather, 'Which wolf will win?' The old Cherokee simply replied, 'The one you feed.'",
      moral: "Your mind becomes what you choose to feed it daily. Feed your discipline, starve your excuses."
    },
    {
      title: "The Power of the Water Drop",
      story: "A traveler saw water dripping slowly onto a hard rock in a cave. Over hundreds of years, the soft water had carved a deep hollow inside the solid stone. The traveler realized that strength is not about sudden bursts of force, but the relentless consistency of small efforts. The water drop does not break the stone by force, but by falling often.",
      moral: "Consistency beats talent. Relentless daily repetition conquers the hardest obstacles."
    },
    {
      title: "The Cracked Pot",
      story: "A water bearer had two large pots. One pot was perfect, but the other had a crack and leaked half its water on the long walk home. The cracked pot felt ashamed of its imperfection. The bearer said to it: 'Look at the side of the path. Notice the beautiful flowers? They only grow on your side because I knew your leak and planted seeds there. You watered them every day.'",
      moral: "Every flaw or struggle in your path is an opportunity to cultivate unique growth and beauty."
    },
    {
      title: "The Zen Archer",
      story: "An archer became famous for his perfect bullseyes. He challenged a Zen master to a test of skill. The master took him to a deep chasm bridged by a single slippery log. The master stepped onto the log, shot a perfect arrow into a far tree, and said: 'Now, you.' The archer was terrified of the drop and couldn't even draw his bow. The master said: 'You have great skill with the bow, but you have no skill with the mind that lets go of the fear of falling.'",
      moral: "External skills are useless without the internal poise to face adversity and uncertainty."
    },
    {
      title: "The Farmer's Horse",
      story: "A farmer's horse ran away. Neighbors said, 'Such bad luck!' The farmer replied, 'Maybe.' The next day, the horse returned with three wild horses. Neighbors said, 'Wonderful luck!' The farmer replied, 'Maybe.' Then the farmer's son broke his leg taming one. Neighbors condoled. The next day, the army came to draft young men, but skipped the son. Neighbors cheered. The farmer said: 'Maybe.'",
      moral: "Do not judge the temporary setbacks of your journey. Maintain neutral focus and keep executing."
    }
  ];

  const videoRef = React.useRef(null);
  const audioObjRef = React.useRef(null);
  
  const [vision, setVision] = useLS(`apx_vboard_v3_${user?.id}`, { image: null, isWarriorMode: false, zoom: 1 });

  const [activeTask, setActiveTask] = useState(null);
  const [showMotivation, setShowMotivation] = useState(true);
  const [breath, setBreath] = useState("Inhale");
  const [subTab, setSubTab] = useState("battle");
  const [playingAudio, setPlayingAudio] = useState(null);
  const [showLevelUpAlert, setShowLevelUpAlert] = useState(false);

  // Looping Cyber-ambient soundtrack loops
  const FOCUS_TRACKS = [
    { id: "rain", label: "🌧️ Cyber Rain Focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: "drone", label: "🌌 Deep Space Drone", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: "drums", label: "🥁 Cinematic Battle Drums", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
  ];

  const playTrack = (track) => {
    if (playingAudio === track.id) {
      if (audioObjRef.current) {
        audioObjRef.current.pause();
      }
      setPlayingAudio(null);
    } else {
      if (audioObjRef.current) {
        audioObjRef.current.pause();
      }
      audioObjRef.current = new Audio(track.url);
      audioObjRef.current.loop = true;
      audioObjRef.current.volume = 0.4;
      audioObjRef.current.play().catch(e => console.log("Audio play error", e));
      setPlayingAudio(track.id);
    }
  };

  useEffect(() => {
    return () => {
      if (audioObjRef.current) {
        audioObjRef.current.pause();
      }
    };
  }, []);

  // ─── ENGINE LOGIC ───
  const level = Math.floor((exp || 0) / 1000) + 1;
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const quote = WARRIOR_QUOTES[dayOfYear % WARRIOR_QUOTES.length];

  const getRank = (lvl) => {
    if (lvl <= 2) return { title: "RECRUIT IN TRAINING", color: "#94a3b8" };
    if (lvl <= 5) return { title: "BATTLE-HARDENED KNIGHT", color: "#38bdf8" };
    if (lvl <= 9) return { title: "GLADIATOR OF FOCUS", color: "#f59e0b" };
    if (lvl <= 14) return { title: "CYBER ELITE COMMANDER", color: "#ec4899" };
    return { title: "SHOGUN OF THE DIGITAL WARPLANE", color: "#10b981" };
  };
  const rank = getRank(level);

  const completeQuest = (tId) => {
    setExp(prev => {
      const nextExp = prev + 100;
      const prevLvl = Math.floor(prev / 1000) + 1;
      const nextLvl = Math.floor(nextExp / 1000) + 1;
      if (nextLvl > prevLvl) {
        setShowLevelUpAlert(true);
        setTimeout(() => setShowLevelUpAlert(false), 4000);
      }
      return nextExp;
    });
    new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3").play().catch(e=>{});
    setTasks(prev => prev.filter(t => t.id !== tId));
    setActiveTask(null);
  };

  useEffect(() => {
    const cycle = setInterval(() => setBreath(prev => prev === "Inhale" ? "Hold" : prev === "Hold" ? "Exhale" : "Inhale"), 4000);
    return () => clearInterval(cycle);
  }, []);

  const fmt = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;

  const handleVBRoute = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.src = ev.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        const scale = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scale;
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        setVision({ ...vision, image: canvas.toDataURL('image/jpeg', 0.8) });
      };
    };
    reader.readAsDataURL(file);
  };

  if (showMotivation) return (
    <div style={{ padding: 40, textAlign: 'center', minHeight: '94vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#050508', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url('/samurai.png')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.4, zIndex: 0 }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle, transparent 20%, #050508 90%)', zIndex: 1 }}></div>
      <div style={{ maxWidth: 800, zIndex: 2, position: 'relative' }}>
        <div style={{ fontSize: 14, fontWeight: 900, color: '#3bacd6', letterSpacing: 8, marginBottom: 30, textShadow: '0 0 15px #1e6fa8' }}>BATTLE COMMENCE</div>
        <h1 style={{ fontSize: 42, color: '#fff', fontStyle: 'italic', fontWeight: 200, lineHeight: 1.4, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>"{quote}"</h1>
        <button onClick={() => setShowMotivation(false)} style={{ marginTop: 60, padding: '18px 50px', background: 'rgba(59, 172, 214, 0.1)', border: '1px solid #3bacd6', borderRadius: 4, color: '#3bacd6', fontWeight: 900, cursor: 'pointer', letterSpacing: 3, textTransform: 'uppercase', transition: '0.3s', backdropFilter: 'blur(5px)' }}>Initialize Command Center</button>
      </div>
    </div>
  );

  const circleBtn = { width: 40, height: 40, borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer', fontWeight: 900, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' };

  return (
    <div style={{ padding: "20px 30px", background: "transparent", minHeight: "100vh", backdropFilter: "blur(10px)" }}>
      {/* 🧭 NAVIGATION OVERHAUL */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 25, borderBottom: '1px solid var(--border)', overflowX: 'auto', paddingBottom: 5 }}>
        <button onClick={() => setSubTab("battle")} style={{ padding: '15px 10px', background: 'none', border: 'none', borderBottom: subTab === "battle" ? '3px solid #3bacd6' : '3px solid transparent', color: subTab === "battle" ? 'var(--text)' : 'var(--text-dim)', fontWeight: 900, fontSize: 13, cursor: 'pointer', letterSpacing: 1.5, transition: '0.2s' }}>⚔️ BATTLE STATION</button>
        <button onClick={() => setSubTab("quests")} style={{ padding: '15px 10px', background: 'none', border: 'none', borderBottom: subTab === "quests" ? '3px solid #38bdf8' : '3px solid transparent', color: subTab === "quests" ? 'var(--text)' : 'var(--text-dim)', fontWeight: 900, fontSize: 13, cursor: 'pointer', letterSpacing: 1.5, transition: '0.2s' }}>🛡️ QUEST DIRECTORY</button>
        <button onClick={() => setSubTab("purpose")} style={{ padding: '15px 10px', background: 'none', border: 'none', borderBottom: subTab === "purpose" ? '3px solid #f59e0b' : '3px solid transparent', color: subTab === "purpose" ? 'var(--text)' : 'var(--text-dim)', fontWeight: 900, fontSize: 13, cursor: 'pointer', letterSpacing: 1.5, transition: '0.2s' }}>🌸 PURPOSE & STORY</button>
        <button onClick={() => setSubTab("vision")} style={{ padding: '15px 10px', background: 'none', border: 'none', borderBottom: subTab === "vision" ? '3px solid #a78bfa' : '3px solid transparent', color: subTab === "vision" ? 'var(--text)' : 'var(--text-dim)', fontWeight: 900, fontSize: 13, cursor: 'pointer', letterSpacing: 1.5, transition: '0.2s' }}>🖼️ VISION BOARD</button>
      </div>

      {subTab === "battle" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {/* LEVEL BAR & WARRIOR RANK */}
          <div style={{ gridColumn: 'span 3', background: 'radial-gradient(circle at top right, rgba(0, 184, 217, 0.08), transparent 45%), rgba(10,10,15,0.7)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px 30px', backdropFilter: 'blur(20px)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                {/* 🛡️ DYNAMIC POMODORO FOCUS SHIELD */}
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: pomoShieldBroke ? 'rgba(239, 68, 68, 0.15)' : pomo.active ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255,255,255,0.02)',
                  border: pomoShieldBroke ? '2px dashed #ef4444' : pomo.active ? '2px solid #22c55e' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: pomoShieldBroke ? 'none' : pomo.active ? '0 0 15px rgba(34, 197, 94, 0.4)' : 'none',
                  animation: pomo.active && !pomoShieldBroke ? 'pulse 2s infinite' : 'none'
                }}>
                  <span style={{ fontSize: 20 }}>{pomoShieldBroke ? "⚠️" : pomo.active ? "🛡️" : "⚔️"}</span>
                </div>
                <div>
                  <span style={{ fontSize: 10, fontWeight: 900, color: rank.color, letterSpacing: 2 }}>{rank.title}</span>
                  <h2 style={{ margin: '4px 0 0 0', fontSize: 24, fontWeight: 900, color: '#fff' }}>LEVEL {level}</h2>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: '#475569', letterSpacing: 1 }}>EXPERIENCE POINTS</span>
                <div style={{ fontSize: 18, fontWeight: 900, color: EH_PRIMARY }}>{exp} <span style={{ fontSize: 12, color: '#475569', fontWeight: 500 }}>/ {level * 1000}</span></div>
              </div>
            </div>
            
            <div style={{ width: '100%', height: 8, background: '#000', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
              <div style={{ height: '100%', width: `${(exp % 1000) / 10}%`, background: `linear-gradient(90deg, ${EH_PRIMARY}, #8b5cf6)`, boxShadow: `0 0 12px ${EH_PRIMARY}`, borderRadius: 4, transition: 'width 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)' }} />
            </div>

            {pomoShieldBroke && (
              <div style={{ fontSize: 11, fontWeight: 800, color: '#ef4444', animation: 'pulse 1.5s infinite', display: 'flex', alignItems: 'center', gap: 6 }}>
                ❌ FOCUS SHIELD SHATTERED (PENALTY APPLIED - ENGAGE TIMER TO RESTORE SHIELD)
              </div>
            )}
            
            {/* Quick stats indicators */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 8, borderTop: '1px dashed rgba(255,255,255,0.05)', paddingTop: 16 }}>
              <div>
                <div style={{ fontSize: 10, color: '#64748b', fontWeight: 800 }}>⚔️ STRENGTH STAT</div>
                <div style={{ fontSize: 14, color: '#f1f5f9', fontWeight: 900, marginTop: 4 }}>{Math.round(exp / 4)} XP</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: '#64748b', fontWeight: 800 }}>👁️ FOCUS RATIO</div>
                <div style={{ fontSize: 14, color: '#f1f5f9', fontWeight: 900, marginTop: 4 }}>{Math.round(pomo.time / 60)} MINS</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: '#64748b', fontWeight: 800 }}>⚡ AGILITY STAT</div>
                <div style={{ fontSize: 14, color: '#f1f5f9', fontWeight: 900, marginTop: 4 }}>{counter} REPS</div>
              </div>
            </div>
          </div>

          {/* Pomodoro Timer with interactive penalties */}
          <Card style={{ background: 'rgba(15, 23, 42, 0.35)', border: pomo.active ? '1px solid #6c63ff' : pomoShieldBroke ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.05)', textAlign: 'center', backdropFilter: 'blur(10px)', padding: '24px 20px', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.3)', transition: 'all 0.3s' }}>
            <div style={{ fontSize: 10, fontWeight: 900, color: '#6c63ff', marginBottom: 15, letterSpacing: 1.5 }}>T-MINUS (POMODORO)</div>
            <div style={{ fontSize: 48, fontWeight: 900, fontFamily: 'monospace', color: '#fff', letterSpacing: 2, textShadow: pomo.active ? '0 0 15px rgba(108, 99, 255, 0.4)' : 'none' }}>{fmt(pomo.time)}</div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button onClick={() => {
                if (pomo.active) {
                  setPomoShieldBroke(true);
                  setExp(e => Math.max(0, e - 50));
                } else {
                  setPomoShieldBroke(false);
                }
                setPomo({ ...pomo, active: !pomo.active, lastTick: Date.now() });
              }} style={{ flex: 1, padding: '10px 16px', background: pomo.active ? 'rgba(239, 68, 68, 0.2)' : 'rgba(108, 99, 255, 0.2)', border: pomo.active ? '1px solid #ef4444' : '1px solid #6c63ff', borderRadius: 10, color: pomo.active ? '#ef4444' : '#c084fc', fontWeight: 900, fontSize: 11, cursor: 'pointer', transition: 'all 0.2s' }}>{pomo.active ? "PAUSE SHIELD" : "ENGAGE TIMER"}</button>
              <button onClick={() => {
                setPomoShieldBroke(true);
                setExp(e => Math.max(0, e - 50));
                setPomo({ ...pomo, time: 1500, active: false, lastTick: Date.now() });
              }} style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10, color: '#94a3b8', fontWeight: 900, fontSize: 11, cursor: 'pointer' }}>RESET</button>
            </div>
          </Card>

          {/* Stopwatch */}
          <Card style={{ background: 'rgba(5, 46, 22, 0.15)', border: stopwatch.active ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.05)', textAlign: 'center', backdropFilter: 'blur(10px)', padding: '24px 20px', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.3)', transition: 'border 0.3s' }}>
            <div style={{ fontSize: 10, fontWeight: 900, color: '#22c55e', marginBottom: 15, letterSpacing: 1.5 }}>MISSION DURATION</div>
            <div style={{ fontSize: 48, fontWeight: 900, color: '#22c55e', fontFamily: 'monospace', letterSpacing: 2, textShadow: stopwatch.active ? '0 0 15px rgba(34, 197, 94, 0.4)' : 'none' }}>{fmt(stopwatch.time)}</div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button onClick={() => setStopwatch({ ...stopwatch, active: !stopwatch.active, lastTick: Date.now() })} style={{ flex: 1, padding: '10px 16px', background: stopwatch.active ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)', border: stopwatch.active ? '1px solid #ef4444' : '1px solid #22c55e', borderRadius: 10, color: stopwatch.active ? '#ef4444' : '#4ade80', fontWeight: 900, fontSize: 11, cursor: 'pointer', transition: 'all 0.2s' }}>{stopwatch.active ? "STOP" : "RECORD"}</button>
              <button onClick={() => setStopwatch({ ...stopwatch, time: 0, active: false, lastTick: Date.now() })} style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10, color: '#94a3b8', fontWeight: 900, fontSize: 11, cursor: 'pointer' }}>CLEAR</button>
            </div>
          </Card>

          {/* Rep Counter */}
          <Card style={{ background: 'rgba(120, 53, 4, 0.15)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', backdropFilter: 'blur(10px)', padding: '24px 20px', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: 10, fontWeight: 900, color: '#f59e0b', marginBottom: 15, letterSpacing: 1.5 }}>REP/ACTION COUNTER</div>
            <div style={{ fontSize: 48, fontWeight: 900, color: '#f59e0b', fontFamily: 'monospace' }}>{counter}</div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button onClick={() => setCounter(counter + 1)} style={{ flex: 1, padding: '10px 16px', fontSize: 18, background: 'rgba(245, 158, 11, 0.2)', border: '#f59e0b 1px solid', borderRadius: 10, color: '#fbbf24', fontWeight: 900, cursor: 'pointer', transition: 'all 0.2s' }}>+</button>
              <button onClick={() => setCounter(0)} style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10, color: '#94a3b8', fontWeight: 900, cursor: 'pointer' }}>0</button>
            </div>
          </Card>

          {/* Focus Audio Center with Binaural Beats */}
          <Card style={{ background: 'rgba(10,10,15,0.6)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderRadius: 16, padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: '#a78bfa', letterSpacing: 1.5 }}>🔊 CYBER-AMBIENT SOUND DECK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 220, overflowY: 'auto', paddingRight: 4 }}>
              {FOCUS_TRACKS.map(track => {
                const isActive = playingAudio === track.id;
                return (
                  <div 
                    key={track.id} 
                    onClick={() => playTrack(track)} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      padding: '10px 14px', 
                      background: isActive ? 'rgba(167, 139, 250, 0.15)' : 'rgba(255,255,255,0.02)', 
                      border: isActive ? '1px solid #a78bfa' : '1px solid rgba(255,255,255,0.05)', 
                      borderRadius: 10, 
                      cursor: 'pointer',
                      transition: 'all 0.2s' 
                    }}
                  >
                    <span style={{ fontSize: 12, fontWeight: 800, color: isActive ? '#fff' : '#94a3b8' }}>{track.label}</span>
                    <span style={{ fontSize: 12 }}>{isActive ? "⏸️" : "▶️"}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Breathing Visualizer */}
          <Card style={{ 
            textAlign: 'center', 
            background: 'radial-gradient(circle, rgba(30, 27, 75, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%)', 
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: 16,
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{ fontSize: 10, fontWeight: 900, color: '#3bacd6', marginBottom: 20, letterSpacing: 2 }}>CALM COMPOSE COOL</div>
            
            <div style={{ 
              position: 'relative', 
              width: 130, 
              height: 130, 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              {/* 🧬 PRECISION GLOW RING */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid #3bacd6',
                boxShadow: '0 0 20px rgba(59, 172, 214, 0.5), inset 0 0 15px rgba(59, 172, 214, 0.2)',
                animation: 'pulse 4s infinite ease-in-out',
                zIndex: 2,
                pointerEvents: 'none' 
              }} />

              {/* 📹 SEAMLESS LOOP FEED */}
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                disablePictureInPicture
                controls={false}
                controlsList="nodownload nofullscreen noremoteplayback"
                onContextMenu={(e) => e.preventDefault()}
                onPause={(e) => e.target.play()} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '50%', 
                  objectFit: 'cover',
                  zIndex: 1,
                  filter: 'contrast(1.2) brightness(1.1) saturate(1.2)',
                  pointerEvents: 'none',
                  userSelect: 'none',
                  background: 'transparent'
                }}
              >
                <source src="/breath-visual.mp4" type="video/mp4" />
              </video>
            </div>
            
            <div style={{ marginTop: 16, fontSize: 12, color: '#3bacd6', fontWeight: 900, letterSpacing: 1.5, textTransform: 'uppercase', animation: 'pulse 2s infinite' }}>{breath}</div>
          </Card>

          {/* Active Quest & Targets list */}
          <Card style={{ gridColumn: 'span 2', background: 'rgba(10,10,15,0.7)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: '#38bdf8', letterSpacing: 1.5 }}>⚔️ ACTIVE QUEST DIARY</div>
            
            {activeTask ? (
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, transparent 100%)', 
                border: '1px solid rgba(56, 189, 248, 0.15)', 
                borderRadius: 14, 
                padding: '20px', 
                position: 'relative',
                animation: 'fadeIn 0.3s ease-out'
              }}>
                <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <span style={{ fontSize: 9, fontWeight: 900, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: 1 }}>CURRENT QUEST</span>
                    <h3 style={{ margin: '4px 0 0 0', fontSize: 18, color: '#fff', fontWeight: 900 }}>{activeTask.name}</h3>
                  </div>
                  <button onClick={() => setActiveTask(null)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 11, fontWeight: 700 }}>Deselect</button>
                </div>
                
                <p style={{ fontSize: 12, color: '#94a3b8', margin: '0 0 20px 0', lineHeight: 1.5 }}>{activeTask.notes || "No extra directives provided for this mission."}</p>
                
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <button 
                    onClick={() => completeQuest(activeTask.id)} 
                    style={{ 
                      flex: 1, 
                      padding: '14px 20px', 
                      background: 'linear-gradient(135deg, #00f2fe, #4facfe)', 
                      border: 'none', 
                      borderRadius: 10, 
                      color: '#000', 
                      fontWeight: 900, 
                      fontSize: 12, 
                      cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(0, 242, 254, 0.35)',
                      transition: 'all 0.2s' 
                    }}
                    onMouseEnter={e=>e.currentTarget.style.transform='scale(1.02)'}
                    onMouseLeave={e=>e.currentTarget.style.transform='none'}
                  >
                    COMPLETE QUEST (+100 EXP)
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: 160, border: '2px dashed rgba(255,255,255,0.03)', borderRadius: 14, padding: '20px' }}>
                <span style={{ fontSize: 24, marginBottom: 8 }}>⚔️</span>
                <span style={{ fontSize: 12, color: '#475569', fontWeight: 800 }}>NO QUEST SELECTED</span>
                <span style={{ fontSize: 10, color: '#3bacd6', cursor: 'pointer', marginTop: 4, fontWeight: 700 }}>Select a target below to begin</span>
              </div>
            )}

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 900, color: '#475569', marginBottom: 12, letterSpacing: 1 }}>CHOOSE TARGET OBJECTIVE</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {tasks.slice(0, 6).map(t => (
                  <div 
                    key={t.id} 
                    onClick={() => setActiveTask(t)} 
                    style={{ 
                      padding: '12px 16px', 
                      borderRadius: 10, 
                      background: activeTask?.id === t.id ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255,255,255,0.02)', 
                      border: activeTask?.id === t.id ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.05)', 
                      color: activeTask?.id === t.id ? '#38bdf8' : '#e2e8f0', 
                      cursor: 'pointer', 
                      fontWeight: 800, 
                      fontSize: 12,
                      transition: 'all 0.2s' 
                    }}
                    onMouseEnter={e => { if (activeTask?.id !== t.id) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                    onMouseLeave={e => { if (activeTask?.id !== t.id) e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                  >
                    {t.name}
                  </div>
                ))}
                {tasks.length === 0 && (
                  <div style={{ gridColumn: 'span 2', textAlign: 'center', fontSize: 11, color: '#475569', fontWeight: 800, padding: 12 }}>YOUR TIMETABLE LOG IS CLEAR.</div>
                )}
              </div>
            </div>
          </Card>

          {/* Brain Dump Card */}
          <Card style={{ gridColumn: 'span 3', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: "var(--text-dim)", marginBottom: 10 }}>WARRIOR BRAIN DUMP</div>
            <textarea placeholder="Immediate thoughts here..." style={{ width: '100%', height: 80, background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text)', padding: 15, outline: 'none' }} />
          </Card>
        </div>
      )}

      {/* 🛡️ QUEST DIRECTORY SUBTAB (Commandments, Stoic Plan, Boss Health, Debrief) */}
      {subTab === "quests" && (() => {
        const completedCount = tasks.filter(t => t.completed).length;
        const totalCount = tasks.length;
        const bossHP = totalCount === 0 ? 100 : Math.max(0, Math.round(((totalCount - completedCount) / totalCount) * 100));

        // Count completed commandments
        const commCompletedCount = commandments.filter(c => c.completed).length;

        return (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {/* Challenger Boss Health card */}
            <div style={{ gridColumn: 'span 3', background: 'radial-gradient(circle at top right, rgba(239, 68, 68, 0.08), transparent 45%), rgba(10,10,15,0.85)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 16, padding: '24px 30px', backdropFilter: 'blur(20px)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: 10, fontWeight: 900, color: '#ef4444', letterSpacing: 2 }}>CHALLENGER BOSS</span>
                  <h2 style={{ margin: '4px 0 0 0', fontSize: 20, fontWeight: 900, color: '#fff' }}>🐉 THE PROCRASTINATOR DRAGON</h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: '#64748b', letterSpacing: 1 }}>BOSS INTEGRITY</span>
                  <div style={{ fontSize: 18, fontWeight: 900, color: '#ef4444' }}>{bossHP}% <span style={{ fontSize: 12, color: '#64748b', fontWeight: 500 }}>HP</span></div>
                </div>
              </div>
              
              <div style={{ width: '100%', height: 12, background: '#000', borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ height: '100%', width: `${bossHP}%`, background: 'linear-gradient(90deg, #ef4444, #f59e0b)', boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)', borderRadius: 6, transition: 'width 0.6s ease' }} />
              </div>
              
              <p style={{ margin: 0, fontSize: 12, color: '#94a3b8', lineHeight: 1.5 }}>
                ⚔️ **Tactical Directive:** Complete your daily Timetable tasks to inflict damage on the dragon. When the boss HP reaches **0%**, you will conquer the weekly battle and claim a massive **+300 EXP** bonus!
                {bossHP === 0 && (
                  <button onClick={() => {
                    setExp(e => e + 300);
                    // Reset completed task statuses to prevent double claims
                    setTasks(prev => prev.map(t => ({ ...t, completed: false })));
                    new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3").play().catch(()=>{});
                    alert("⚔️ VICTORY ACHIEVED! You received +300 EXP.");
                  }} style={{ display: 'block', marginTop: 10, padding: '8px 16px', background: '#22c55e', color: '#000', fontWeight: 900, border: 'none', borderRadius: 6, cursor: 'pointer' }}>CLAIM VICTORY REWARD</button>
                )}
              </p>
            </div>

            {/* Daily Commandments */}
            <Card style={{ background: 'rgba(10,10,15,0.7)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 900, color: '#38bdf8', letterSpacing: 1.5 }}>⚔️ 10 COMMANDMENTS</div>
                <span style={{ fontSize: 11, fontWeight: 800, color: commCompletedCount === 10 ? '#22c55e' : '#64748b' }}>{commCompletedCount}/10</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto', maxHeight: 280, paddingRight: 4 }}>
                {commandments.map(c => (
                  <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input 
                      type="checkbox" 
                      checked={c.completed} 
                      onChange={(e) => {
                        const updated = commandments.map(item => item.id === c.id ? { ...item, completed: e.target.checked } : item);
                        setCommandments(updated);
                        if (updated.filter(x => x.completed).length === 10) {
                          setExp(exp => exp + 100);
                          new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3").play().catch(()=>{});
                        }
                      }}
                      style={{ cursor: 'pointer', accentColor: '#38bdf8' }}
                    />
                    <span style={{ fontSize: 12, color: c.completed ? 'var(--text-dim)' : '#f1f5f9', textDecoration: c.completed ? 'line-through' : 'none', fontWeight: 700 }}>
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>

              {commCompletedCount === 10 && (
                <div style={{ padding: 10, background: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', borderRadius: 8, fontSize: 10, color: '#4ade80', fontWeight: 900, textAlign: 'center' }}>
                  🛡️ COMMANDMENTS COMMENDED (+100 EXP CLAIMED)
                </div>
              )}
            </Card>

            {/* Stoic Obstacles Planner */}
            <Card style={{ background: 'rgba(10,10,15,0.7)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: '#f59e0b', letterSpacing: 1.5 }}>🛡️ PREMEDITATIO MALORUM</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 900, color: '#64748b', display: 'block', marginBottom: 4 }}>TARGET GOAL</label>
                  <input 
                    type="text" 
                    value={stoicPlan.goal} 
                    onChange={(e) => setStoicPlan({ ...stoicPlan, goal: e.target.value, date: new Date().toLocaleDateString() })}
                    placeholder="What must be conquered today?" 
                    style={{ width: '100%', padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 8, color: '#fff', fontSize: 12, outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 900, color: '#64748b', display: 'block', marginBottom: 4 }}>WORST OBSTACLE / DISTRACTION</label>
                  <input 
                    type="text" 
                    value={stoicPlan.obstacle} 
                    onChange={(e) => setStoicPlan({ ...stoicPlan, obstacle: e.target.value })}
                    placeholder="What might pull you away?" 
                    style={{ width: '100%', padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 8, color: '#fff', fontSize: 12, outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 900, color: '#64748b', display: 'block', marginBottom: 4 }}>DISCIPLINED COUNTER-RESPONSE</label>
                  <textarea 
                    value={stoicPlan.response} 
                    onChange={(e) => setStoicPlan({ ...stoicPlan, response: e.target.value })}
                    placeholder="How will you bypass this?" 
                    style={{ width: '100%', height: 60, padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 8, color: '#fff', fontSize: 12, outline: 'none', resize: 'none' }}
                  />
                </div>
              </div>
            </Card>

            {/* Nightly Combat Debrief */}
            <Card style={{ background: 'rgba(10,10,15,0.7)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: '#a78bfa', letterSpacing: 1.5 }}>📓 NIGHTLY COMBAT DEBRIEF</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 900, color: '#64748b', display: 'block', marginBottom: 4 }}>WHAT DID I CONQUER? (WINS)</label>
                  <input 
                    type="text" 
                    value={debrief.conquest} 
                    onChange={(e) => setDebrief({ ...debrief, conquest: e.target.value, date: new Date().toLocaleDateString() })}
                    placeholder="Identify today's wins..." 
                    style={{ width: '100%', padding: '8px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 8, color: '#fff', fontSize: 12, outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 900, color: '#64748b', display: 'block', marginBottom: 4 }}>WHERE DID I FALL SHORT? (LESSONS)</label>
                  <input 
                    type="text" 
                    value={debrief.defeat} 
                    onChange={(e) => setDebrief({ ...debrief, defeat: e.target.value })}
                    placeholder="Identify weaknesses..." 
                    style={{ width: '100%', padding: '8px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 8, color: '#fff', fontSize: 12, outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 900, color: '#64748b', display: 'block', marginBottom: 4 }}>TOMORROW'S PRIMARY DIRECTIVE</label>
                  <input 
                    type="text" 
                    value={debrief.tomorrow} 
                    onChange={(e) => setDebrief({ ...debrief, tomorrow: e.target.value })}
                    placeholder="The single main target..." 
                    style={{ width: '100%', padding: '8px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 8, color: '#fff', fontSize: 12, outline: 'none' }}
                  />
                </div>
                
                <button onClick={() => {
                  if (!debrief.conquest || !debrief.tomorrow) return alert("Please fill wins & tomorrow's directive.");
                  setExp(e => e + 50);
                  new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3").play().catch(()=>{});
                  alert("📓 COMBAT DEBRIEF SIGNED & LOGGED (+50 EXP)");
                }} style={{ marginTop: 5, width: '100%', padding: 12, background: 'rgba(167, 139, 250, 0.2)', border: '1px solid #a78bfa', borderRadius: 8, color: '#c084fc', fontWeight: 900, fontSize: 11, cursor: 'pointer', transition: '0.2s' }}>
                  SIGN & CLOSE COMBAT LOG
                </button>
              </div>
            </Card>
          </div>
        );
      })()}

      {/* 🌸 PURPOSE & STORY TAB (Ikigai Finder & Daily moral stories) */}
      {subTab === "purpose" && (() => {
        const activeStory = STORIES[dayOfYear % STORIES.length];
        const isAlreadyClaimed = lastReflectedStoryDate === new Date().toDateString();

        return (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {/* Interactive Ikigai Finder */}
            <Card style={{ gridColumn: 'span 2', background: 'rgba(10,10,15,0.7)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: '#f59e0b', letterSpacing: 1.5 }}>🌸 INTERACTIVE IKIGAI FINDER</div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 900, color: '#f59e0b', display: 'block', marginBottom: 4 }}>❤️ WHAT YOU LOVE</label>
                  <textarea 
                    value={ikigai.love} 
                    onChange={(e) => setIkigai({ ...ikigai, love: e.target.value })}
                    placeholder="Your passions, hobbies, what makes you feel alive..." 
                    style={{ width: '100%', height: 70, padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 8, color: '#fff', fontSize: 12, outline: 'none', resize: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 900, color: '#10b981', display: 'block', marginBottom: 4 }}>💪 WHAT YOU ARE GOOD AT</label>
                  <textarea 
                    value={ikigai.goodAt} 
                    onChange={(e) => setIkigai({ ...ikigai, goodAt: e.target.value })}
                    placeholder="Your talents, unique skills, execution strengths..." 
                    style={{ width: '100%', height: 70, padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 8, color: '#fff', fontSize: 12, outline: 'none', resize: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 900, color: '#38bdf8', display: 'block', marginBottom: 4 }}>🪙 WHAT YOU CAN GET PAID FOR</label>
                  <textarea 
                    value={ikigai.paidFor} 
                    onChange={(e) => setIkigai({ ...ikigai, paidFor: e.target.value })}
                    placeholder="Skills you possess that hold monetary/market value..." 
                    style={{ width: '100%', height: 70, padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 8, color: '#fff', fontSize: 12, outline: 'none', resize: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 900, color: '#a78bfa', display: 'block', marginBottom: 4 }}>🌍 WHAT THE WORLD NEEDS</label>
                  <textarea 
                    value={ikigai.worldNeeds} 
                    onChange={(e) => setIkigai({ ...ikigai, worldNeeds: e.target.value })}
                    placeholder="Problems you want to solve, contributions you want to make..." 
                    style={{ width: '100%', height: 70, padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: 8, color: '#fff', fontSize: 12, outline: 'none', resize: 'none' }}
                  />
                </div>
              </div>

              {/* Intersected Statement Generator */}
              <div style={{ marginTop: 12, padding: 16, background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%)', border: '1px dashed rgba(245, 158, 11, 0.2)', borderRadius: 12 }}>
                <span style={{ fontSize: 9, fontWeight: 900, color: '#f59e0b', display: 'block', letterSpacing: 1 }}>INTERSECTED IKIGAI DIRECTIVE</span>
                <p style={{ margin: '6px 0 0 0', fontSize: 13, color: '#f8fafc', fontWeight: 700, fontStyle: 'italic', lineHeight: 1.5 }}>
                  {ikigai.love || ikigai.goodAt || ikigai.paidFor || ikigai.worldNeeds ? (
                    `I will conquer my objectives by leveraging my skill in ${ikigai.goodAt || "..."} to support my love for ${ikigai.love || "..."} while serving ${ikigai.worldNeeds || "..."} and building a career in ${ikigai.paidFor || "..."}.`
                  ) : "Declare your Ikigai components above to unlock your purpose directive."}
                </p>
              </div>
            </Card>

            {/* Daily Character Story Card */}
            <Card style={{ background: 'rgba(10,10,15,0.7)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: '#10b981', letterSpacing: 1.5 }}>📖 DAILY FORGE OF CHARACTER</div>
              
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 style={{ margin: 0, fontSize: 16, color: '#fff', fontWeight: 900 }}>{activeStory.title}</h3>
                <p style={{ margin: 0, fontSize: 11, color: '#94a3b8', lineHeight: 1.6, fontStyle: 'italic', overflowY: 'auto', maxHeight: 180 }}>
                  "{activeStory.story}"
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 10 }}>
                  <span style={{ fontSize: 9, fontWeight: 900, color: '#10b981', display: 'block', letterSpacing: 1 }}>MORAL DIRECTIVE</span>
                  <p style={{ margin: '4px 0 0 0', fontSize: 11, color: '#e2e8f0', fontWeight: 800 }}>{activeStory.moral}</p>
                </div>
              </div>

              <button 
                disabled={isAlreadyClaimed}
                onClick={() => {
                  setExp(e => e + 50);
                  setLastReflectedStoryDate(new Date().toDateString());
                  new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3").play().catch(()=>{});
                  alert("🌟 STORY REFLECTED! +50 EXP rewarded.");
                }}
                style={{ 
                  width: '100%', 
                  padding: 12, 
                  background: isAlreadyClaimed ? 'rgba(255,255,255,0.02)' : 'rgba(16, 185, 129, 0.2)', 
                  border: isAlreadyClaimed ? '1px solid rgba(255,255,255,0.05)' : '1px solid #10b981', 
                  color: isAlreadyClaimed ? '#475569' : '#34d399', 
                  fontWeight: 900, 
                  fontSize: 11, 
                  borderRadius: 8, 
                  cursor: isAlreadyClaimed ? 'default' : 'pointer',
                  transition: '0.2s'
                }}
              >
                {isAlreadyClaimed ? "DIRECTIVE REFLECTED FOR TODAY" : "REFLECT & CLAIM EXP (+50 EXP)"}
              </button>
            </Card>
          </div>
        );
      })()}

      {/* 🖼️ VISION BOARD SUBTAB (With clickable Coordinate Pin Dropping!) */}
      {subTab === "vision" && (
        !vision.image ? (
          <div style={{ padding: 60, textAlign: 'center', border: '2px dashed var(--border)', borderRadius: 30, margin: '20px auto', maxWidth: 800, backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <div style={{ fontSize: 60 }}>🖼️</div>
            <h2 style={{ fontWeight: 900, margin: 0 }}>MANIFEST YOUR FUTURE</h2>
            <p style={{ color: 'var(--text-dim)', margin: '0 0 10px 0', lineHeight: 1.6 }}>Upload your vision board to display it continuously in high definition.</p>
            <input type="file" id="vb-upload" style={{ display: 'none' }} onChange={handleVBRoute} accept="image/*" />
            <Btn onClick={() => document.getElementById('vb-upload').click()} style={{ padding: '18px 45px' }}>ADD VISION BOARD</Btn>
          </div>
        ) : (
          <div style={{ animation: 'fadeIn 0.5s ease', position: 'relative', background: 'rgba(0, 0, 0, 0.4)', borderRadius: 24, padding: 20, backdropFilter: 'blur(10px)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', gap: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <button onClick={() => setVision({...vision, image: null})} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: 13, fontWeight: 800 }}>DELETE BOARD</button>
            </div>
            
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}>
              <img src={vision.image} alt="Vision Board" style={{ width: '100%', maxHeight: '82vh', objectFit: 'contain' }} />
            </div>
          </div>
        )
      )}

      {/* Target Pin Creation Modal */}
      

      {showLevelUpAlert && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(5,5,8,0.85)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 100000, animation: "fadeIn 0.3s ease" }}>
          <div style={{ 
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, rgba(10,10,15,0.95) 100%)', 
            border: '2px solid #a78bfa', 
            boxShadow: '0 0 50px rgba(167, 139, 250, 0.4), inset 0 0 30px rgba(167, 139, 250, 0.2)',
            borderRadius: 24, 
            padding: '40px 60px', 
            textAlign: 'center',
            maxWidth: 500,
            animation: "msgSlide 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          }}>
            <div style={{ fontSize: 50, marginBottom: 20 }}>⚔️</div>
            <h1 style={{ margin: 0, fontSize: 32, fontWeight: 900, color: '#fff', letterSpacing: 2 }}>LEVEL UP!</h1>
            <p style={{ fontSize: 14, color: '#a78bfa', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 10 }}>WARRIOR RANKS COMMENDED</p>
            <p style={{ fontSize: 13, color: '#94a3b8', margin: '20px 0 0 0', lineHeight: 1.6 }}>You have advanced to Level {level}! Your power ratio and efficiency metrics have been elevated.</p>
          </div>
        </div>
      )}
    </div>
  );
}
  
// ─── SETTINGS ─────────────────────────────────────────────────────────────────
function Settings({ user, users, setUsers, onLogout, scanlinesActive, setScanlinesActive, appThemeAccent, setAppThemeAccent }) {
  const [activeSetTab, setActiveSetTab] = useState("profile");
  const [form, setForm] = useState({ name: user.name, email: user.email });
  const [pwForm, setPwForm] = useState({ current: "", newPw: "", confirm: "" });
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [alarmVolume, setAlarmVolume] = useLS(`apx_alarm_volume_${user?.id}`, 0.8);
  const [alarmSound, setAlarmSound] = useLS(`apx_alarm_sound_${user?.id}`, "siren");

  const saveProfile = (updatedFields = {}) => {
    setMsg(""); setErr("");
    const updatedUser = { ...user, ...updatedFields };
    setUsers(users.map(u => u.id === user.id ? { ...u, ...updatedFields } : u));
    setMsg("Profile customized successfully!");
  };

  const changePassword = () => {
    setMsg(""); setErr("");
    if (pwForm.current !== user.password) return setErr("Current password incorrect.");
    if (pwForm.newPw.length < 6) return setErr("New password must be at least 6 characters.");
    if (pwForm.newPw !== pwForm.confirm) return setErr("Passwords don't match.");
    setUsers(users.map(u => u.id === user.id ? { ...u, password: pwForm.newPw } : u));
    setPwForm({ current: "", newPw: "", confirm: "" });
    setMsg("Password changed successfully!");
  };

  // Preset Avatars Helper
  const PRESET_AVATARS = [
    { label: "🥷 Samurai", emoji: "🥷", color: "#3bacd6" },
    { label: "Netrunner", emoji: "👩‍💻", color: "#c084fc" },
    { label: "Gladiator", emoji: "👾", color: "#ef4444" },
    { label: "Arch-Bot", emoji: "🤖", color: "#10b981" }
  ];

  // Sound Alarm Options
  const ALARM_SOUNDS = [
    { id: "siren", label: "🚨 Tactical Battle Siren", url: "https://assets.mixkit.co/active_storage/sfx/911/911-preview.mp3" },
    { id: "laser", label: "🔫 Cyber Laser Pulse", url: "https://assets.mixkit.co/active_storage/sfx/1086/1086-preview.mp3" },
    { id: "beep", label: "📟 Monospace Digital Alarm", url: "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" }
  ];

  // Backup Operations
  const exportProfileBackup = () => {
    const backupData = {
      version: "1.0",
      timestamp: Date.now(),
      users: localStorage.getItem("apx_users"),
      currentUser: localStorage.getItem("apx_current_user"),
      tasks: localStorage.getItem(`apx_tasks_${user.id}`),
      habits: localStorage.getItem(`apx_habits_${user.id}`),
      vision: localStorage.getItem(`apx_vision_${user.id}`),
      exp: localStorage.getItem(`apx_warrior_exp_${user.id}`)
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ApexLink_Backup_${user.name}_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    setMsg("Backup file downloaded successfully!");
  };

  const importProfileBackup = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.users) localStorage.setItem("apx_users", data.users);
        if (data.currentUser) localStorage.setItem("apx_current_user", data.currentUser);
        if (data.tasks) localStorage.setItem(`apx_tasks_${user.id}`, data.tasks);
        if (data.habits) localStorage.setItem(`apx_habits_${user.id}`, data.habits);
        if (data.vision) localStorage.setItem(`apx_vision_${user.id}`, data.vision);
        if (data.exp) localStorage.setItem(`apx_warrior_exp_${user.id}`, data.exp);
        alert("Restoration successful! The page will now reload.");
        window.location.reload();
      } catch (err) {
        setErr("Invalid backup file structure.");
      }
    };
    reader.readAsText(file);
  };

  // LocalStorage capacity utility
  const getStorageSize = () => {
    let total = 0;
    for (let x in localStorage) {
      if (localStorage.hasOwnProperty(x)) {
        total += (localStorage[x].length * 2);
      }
    }
    return (total / 1024).toFixed(2);
  };

  return (
    <div>
      <PageHeader title="Settings" subtitle="System Control Panel & Customization Desk" />
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 30, padding: "24px 32px", minHeight: '80vh' }}>
        
        {/* Left Side Tab bar */}
        <Card style={{ background: 'rgba(10,10,15,0.7)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: 10, padding: 16, height: 'fit-content' }}>
          <div style={{ fontSize: 10, fontWeight: 900, color: '#64748b', letterSpacing: 1.5, marginBottom: 10, paddingLeft: 8 }}>MENU CATEGORIES</div>
          <button onClick={() => setActiveSetTab("profile")} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: activeSetTab === "profile" ? 'var(--accent-bg)' : 'transparent', border: 'none', borderLeft: activeSetTab === "profile" ? '3px solid var(--accent)' : '3px solid transparent', color: activeSetTab === "profile" ? 'var(--text-h)' : '#64748b', borderRadius: '0 8px 8px 0', fontSize: 13, fontWeight: 900, cursor: 'pointer', textAlign: 'left', transition: '0.2s' }}>👤 PROFILE CARD</button>
          <button onClick={() => setActiveSetTab("themes")} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: activeSetTab === "themes" ? 'var(--accent-bg)' : 'transparent', border: 'none', borderLeft: activeSetTab === "themes" ? '3px solid var(--accent)' : '3px solid transparent', color: activeSetTab === "themes" ? 'var(--text-h)' : '#64748b', borderRadius: '0 8px 8px 0', fontSize: 13, fontWeight: 900, cursor: 'pointer', textAlign: 'left', transition: '0.2s' }}>🎨 NEON THEMES</button>
          <button onClick={() => setActiveSetTab("sounds")} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: activeSetTab === "sounds" ? 'var(--accent-bg)' : 'transparent', border: 'none', borderLeft: activeSetTab === "sounds" ? '3px solid var(--accent)' : '3px solid transparent', color: activeSetTab === "sounds" ? 'var(--text-h)' : '#64748b', borderRadius: '0 8px 8px 0', fontSize: 13, fontWeight: 900, cursor: 'pointer', textAlign: 'left', transition: '0.2s' }}>🔊 SOUND & ALARMS</button>
          <button onClick={() => setActiveSetTab("backup")} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: activeSetTab === "backup" ? 'var(--accent-bg)' : 'transparent', border: 'none', borderLeft: activeSetTab === "backup" ? '3px solid var(--accent)' : '3px solid transparent', color: activeSetTab === "backup" ? 'var(--text-h)' : '#64748b', borderRadius: '0 8px 8px 0', fontSize: 13, fontWeight: 900, cursor: 'pointer', textAlign: 'left', transition: '0.2s' }}>💾 DATA ARCHIVE</button>
          <button onClick={() => setActiveSetTab("diagnostics")} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: activeSetTab === "diagnostics" ? 'var(--accent-bg)' : 'transparent', border: 'none', borderLeft: activeSetTab === "diagnostics" ? '3px solid var(--accent)' : '3px solid transparent', color: activeSetTab === "diagnostics" ? 'var(--text-h)' : '#64748b', borderRadius: '0 8px 8px 0', fontSize: 13, fontWeight: 900, cursor: 'pointer', textAlign: 'left', transition: '0.2s' }}>⚙️ SYSTEM HEALTH</button>
        </Card>

        {/* Right Side Content Pane */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {msg && <div style={{ background: "rgba(34,197,94,0.1)", border: "1px solid #22c55e33", borderRadius: 12, padding: "12px 16px", color: "#22c55e", fontSize: 14, animation: 'fadeIn 0.2s' }}>{msg}</div>}
          {err && <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid #ef444433", borderRadius: 12, padding: "12px 16px", color: "#f87171", fontSize: 14, animation: 'fadeIn 0.2s' }}>{err}</div>}

          {/* tab: Profile Card */}
          {activeSetTab === "profile" && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Profile Card Header */}
              <Card style={{ display: 'flex', gap: 24, alignItems: 'center', background: 'radial-gradient(circle at top right, var(--accent-bg), transparent 60%), rgba(10,10,15,0.7)', padding: 24 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.3)',
                    border: '3px solid var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 40,
                    overflow: 'hidden',
                    boxShadow: '0 0 15px var(--accent)'
                  }}>
                    {user.avatar ? (
                      user.avatar.length > 2 ? (
                        <img src={user.avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        user.avatar
                      )
                    ) : "🥷"}
                  </div>
                </div>
                
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: 'var(--accent)', letterSpacing: 1.5 }}>ACTIVE PILOT PROFILE</span>
                  <h2 style={{ margin: '4px 0 6px 0', fontSize: 24, fontWeight: 900, color: '#fff' }}>{user.name}</h2>
                  <div style={{ fontSize: 12, color: 'var(--text-dim)', fontWeight: 800 }}>ID: {user.email}</div>
                </div>
              </Card>

              {/* Avatar Preset Grid */}
              <Card>
                <div style={{ fontSize: 12, fontWeight: 900, color: '#64748b', marginBottom: 12, letterSpacing: 1 }}>SELECT SYSTEM AVATAR</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 15 }}>
                  {PRESET_AVATARS.map(pres => (
                    <div 
                      key={pres.label}
                      onClick={() => saveProfile({ avatar: pres.emoji })}
                      style={{ 
                        padding: 16, 
                        background: 'rgba(255,255,255,0.02)', 
                        border: user.avatar === pres.emoji ? `2px solid ${pres.color}` : '1px solid rgba(255,255,255,0.05)', 
                        borderRadius: 12, 
                        textAlign: 'center', 
                        cursor: 'pointer',
                        transition: '0.2s'
                      }}
                      onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}
                      onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.02)'}
                    >
                      <div style={{ fontSize: 32, marginBottom: 8 }}>{pres.emoji}</div>
                      <div style={{ fontSize: 10, fontWeight: 900, color: '#fff' }}>{pres.label.toUpperCase()}</div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 20, paddingTop: 20 }}>
                  <label style={{ fontSize: 11, fontWeight: 900, color: '#64748b', display: 'block', marginBottom: 10 }}>UPLOAD CUSTOM AVATAR</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onload = (ev) => saveProfile({ avatar: ev.target.result });
                      reader.readAsDataURL(file);
                    }}
                    style={{ fontSize: 12, color: '#94a3b8' }}
                  />
                </div>
              </Card>

              {/* Profile details */}
              <Card>
                <div style={{ fontSize: 12, fontWeight: 900, color: '#64748b', marginBottom: 16, letterSpacing: 1 }}>ACCOUNT INFORMATION</div>
                <Field label="Full Name"><Inp value={form.name} onChange={v => setForm({...form, name: v})} /></Field>
                <Field label="Email"><Inp value={form.email} onChange={() => {}} style={{ opacity: 0.5 }} disabled /></Field>
                <div style={{ fontSize: 11, color: "#475569", marginBottom: 12, fontWeight: 700 }}>Registered profile email is permanent and cannot be modified.</div>
                <Btn onClick={() => saveProfile({ name: form.name })}>Save Profile</Btn>
              </Card>

              {/* Change Password Card */}
              <Card>
                <div style={{ fontSize: 12, fontWeight: 900, color: '#64748b', marginBottom: 16, letterSpacing: 1 }}>AUTHENTICATION PASSWORD</div>
                <Field label="Current Password"><Inp type="password" value={pwForm.current} onChange={v => setPwForm({...pwForm, current: v})} /></Field>
                <Field label="New Password"><Inp type="password" value={pwForm.newPw} onChange={v => setPwForm({...pwForm, newPw: v})} /></Field>
                <Field label="Confirm New Password"><Inp type="password" value={pwForm.confirm} onChange={v => setPwForm({...pwForm, confirm: v})} /></Field>
                <Btn onClick={changePassword}>Update Password</Btn>
              </Card>
            </div>
          )}

          {/* tab: Themes */}
          {activeSetTab === "themes" && (
            <Card style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 900, color: '#64748b', letterSpacing: 1 }}>INTERFACE COLOR SCHEME</div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 15 }}>
                {[
                  { name: '💜 Royal Violet', code: '#c084fc' },
                  { name: '💙 Cyber Blue', code: '#3bacd6' },
                  { name: '❤️ Blood Ruby', code: '#ef4444' },
                  { name: '💚 Matrix Green', code: '#10b981' },
                  { name: '💛 Amber Grid', code: '#f59e0b' }
                ].map(theme => (
                  <div 
                    key={theme.code}
                    onClick={() => setAppThemeAccent(theme.code)}
                    style={{ 
                      padding: 16, 
                      background: 'rgba(0,0,0,0.3)', 
                      border: appThemeAccent === theme.code ? `2px solid ${theme.code}` : '1px solid rgba(255,255,255,0.05)', 
                      borderRadius: 12, 
                      textAlign: 'center', 
                      cursor: 'pointer',
                      boxShadow: appThemeAccent === theme.code ? `0 0 10px ${theme.code}44` : 'none'
                    }}
                  >
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: theme.code, margin: '0 auto 8px' }} />
                    <div style={{ fontSize: 10, fontWeight: 900, color: '#fff' }}>{theme.name.toUpperCase()}</div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: '#fff' }}>📟 CRT SCANLINE FILTER EFFECT</div>
                  <div style={{ fontSize: 11, color: '#64748b', marginTop: 4, fontWeight: 700 }}>Overlays a retro matrix display filter across the application interface.</div>
                </div>
                <input 
                  type="checkbox" 
                  checked={scanlinesActive}
                  onChange={(e) => setScanlinesActive(e.target.checked)}
                  style={{ accentColor: 'var(--accent)', cursor: 'pointer', width: 20, height: 20 }}
                />
              </div>
            </Card>
          )}

          {/* tab: Sounds */}
          {activeSetTab === "sounds" && (
            <Card style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 900, color: '#64748b', letterSpacing: 1 }}>ALARM AUDIO ALERTS</div>

              <div>
                <label style={{ fontSize: 10, fontWeight: 900, color: '#64748b', display: 'block', marginBottom: 8 }}>ALARM ALERT SOUND</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {ALARM_SOUNDS.map(sound => (
                    <div 
                      key={sound.id}
                      onClick={() => setAlarmSound(sound.id)}
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        padding: '12px 16px', 
                        background: alarmSound === sound.id ? 'var(--accent-bg)' : 'rgba(255,255,255,0.02)', 
                        border: alarmSound === sound.id ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.05)', 
                        borderRadius: 10, 
                        cursor: 'pointer' 
                      }}
                    >
                      <span style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>{sound.label}</span>
                      <button onClick={(e) => {
                        e.stopPropagation();
                        new Audio(sound.url).play().catch(()=>{});
                      }} style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: 12, cursor: 'pointer', fontWeight: 900 }}>⚡ TEST</button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontSize: 10, fontWeight: 900, color: '#64748b', display: 'block', marginBottom: 6 }}>ALARM AUDIO VOLUME ({Math.round(alarmVolume * 100)}%)</label>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.05"
                  value={alarmVolume} 
                  onChange={(e) => setAlarmVolume(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--accent)' }}
                />
              </div>
            </Card>
          )}

          {/* tab: Data backup */}
          {activeSetTab === "backup" && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Card style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                <div style={{ fontSize: 12, fontWeight: 900, color: '#64748b', letterSpacing: 1 }}>EXPORT DATA ARCHIVE</div>
                <p style={{ fontSize: 12, color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                  Download a complete backup log of your profiles, active habits, timelines, and battle quest experience records to a JSON file.
                </p>
                <Btn onClick={exportProfileBackup} style={{ width: 'fit-content' }}>📤 Export Backup File</Btn>
              </Card>

              <Card style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                <div style={{ fontSize: 12, fontWeight: 900, color: '#64748b', letterSpacing: 1 }}>IMPORT DATA ARCHIVE</div>
                <p style={{ fontSize: 12, color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                  Upload a previously exported backup file to restore your full profile state.
                </p>
                <input 
                  type="file" 
                  accept=".json"
                  onChange={importProfileBackup}
                  style={{ fontSize: 12, color: '#94a3b8' }}
                />
              </Card>

              <Card style={{ border: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', flexDirection: 'column', gap: 15 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: '#ef4444' }}>🚨 HARD RESET (NUKE DIRECTIVE)</div>
                  <p style={{ fontSize: 11, color: '#64748b', marginTop: 4, fontWeight: 700 }}>Permanently erases all tasks, habits, and profile progress from your local storage.</p>
                </div>
                <Btn variant="danger" onClick={() => {
                  if (confirm("Are you absolutely sure you want to nuke your entire local profile and erase all data? This cannot be undone.")) {
                    localStorage.clear();
                    onLogout();
                  }
                }} style={{ width: 'fit-content' }}>🧨 Nuke Local Profiles</Btn>
              </Card>
            </div>
          )}

          {/* tab: Diagnostics */}
          {activeSetTab === "diagnostics" && (
            <Card style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 900, color: '#64748b', letterSpacing: 1 }}>SYSTEM DIAGNOSTICS & TELEMETRY</div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15 }}>
                {[
                  ["LOCAL STORAGE USAGE", `${getStorageSize()} KB`],
                  ["TIMETABLE QUESTS DEFINED", JSON.parse(localStorage.getItem(`apx_tasks_${user.id}`) || "[]").length],
                  ["HABIT TRACKERS ENGAGED", JSON.parse(localStorage.getItem(`apx_habits_${user.id}`) || "[]").length],
                  ["USER EXPERIENCE POINTS", `${localStorage.getItem(`apx_warrior_exp_${user.id}`) || 0} XP`],
                  ["SYSTEM DRIVER VERSION", "v2.0.4 - Release (Stable)"],
                  ["PILOT AUTHENTICATION", "Secure SSL Key Token"]
                ].map(([label, value]) => (
                  <div key={label} style={{ padding: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10 }}>
                    <div style={{ fontSize: 9, color: '#64748b', fontWeight: 900, letterSpacing: 1 }}>{label}</div>
                    <div style={{ fontSize: 14, color: '#fff', fontWeight: 800, marginTop: 4 }}>{value}</div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Sign Out Trigger */}
          <Card style={{ background: 'rgba(239, 68, 68, 0.05)', border: "1px solid rgba(239,68,68,0.2)", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 900, color: '#ef4444' }}>EXIT COMMAND CENTER</div>
              <div style={{ fontSize: 11, color: '#64748b', marginTop: 2, fontWeight: 700 }}>Safely sign out of your local session.</div>
            </div>
            <Btn variant="danger" onClick={onLogout}>Sign Out</Btn>
          </Card>

        </div>

      </div>
    </div>
  );
}
// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [users, setUsers] = useLS("apx_users", []);
  const [currentUser, setCurrentUser] = useLS("apx_current_user", null);
  const [tab, setTab] = useState("dashboard");
  const [scanlinesActive, setScanlinesActive] = useLS(`apx_scanlines_${currentUser?.id}`, false);
  const [appThemeAccent, setAppThemeAccent] = useLS(`apx_theme_accent_${currentUser?.id}`, '#c084fc');

  useEffect(() => {
    if (currentUser && appThemeAccent) {
      document.documentElement.style.setProperty('--accent', appThemeAccent);
      document.documentElement.style.setProperty('--accent-border', appThemeAccent + '88');
      document.documentElement.style.setProperty('--accent-bg', appThemeAccent + '22');
    }
  }, [currentUser, appThemeAccent]);


  const [exp, setExp] = useLS(`apx_warrior_exp_${currentUser?.id}`, 0);
  const [pomo, setPomo] = useLS(`apx_warrior_pomo_${currentUser?.id}`, { time: 1500, active: false, lastTick: Date.now() });
  const [stopwatch, setStopwatch] = useLS(`apx_warrior_stop_${currentUser?.id}`, { time: 0, active: false, lastTick: Date.now() });
  const [counter, setCounter] = useLS(`apx_warrior_count_${currentUser?.id}`, 0);

  const [reminders, setReminders] = useLS(`apx_rem_${currentUser?.id}`, []);
  const [triggered, setTriggered] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);
  window.setGlobalLightboxImg = setLightboxImg;

  useEffect(() => {
    if (!currentUser) return;
    const t = setInterval(() => {
      const n = new Date();
      reminders.forEach(r => {
        if (!r.done && !r.triggered) {
          const rTime = new Date(r.datetime);
          if (n >= rTime) {
            setReminders(prev => prev.map(x => x.id === r.id ? { ...x, triggered: true } : x));
            setTriggered(r);
            if (window.activeAlarmAudio) {
              try { window.activeAlarmAudio.pause(); } catch(e) {}
            }
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/911/911-preview.mp3');
            audio.loop = true;
            audio.play().catch(e => {});
            window.activeAlarmAudio = audio;
          }
        }
      });
    }, 1000);
    return () => clearInterval(t);
  }, [reminders, currentUser, setReminders]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (pomo.active) {
        setPomo(prev => {
          const elapsed = Math.floor((now - prev.lastTick) / 1000);
          if (elapsed < 1) return prev;
          const newTime = Math.max(0, prev.time - elapsed);
          if (newTime === 0 && prev.time > 0) setExp(e => e + 100);
          return { ...prev, time: newTime, lastTick: now };
        });
      }
      if (stopwatch.active) {
        setStopwatch(prev => {
          const elapsed = Math.floor((now - prev.lastTick) / 1000);
          if (elapsed < 1) return prev;
          return { ...prev, time: prev.time + elapsed, lastTick: now };
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [pomo.active, stopwatch.active, setPomo, setStopwatch, setExp]);
  
  // NEW VIEW ENGINE
  const [view, setView] = useState(currentUser ? "app" : "landing");
  const [authMode, setAuthMode] = useState("login");

  const handleLogin = (user) => { 
    setCurrentUser(user); 
    setView("app"); 
  };
  
  const handleLogout = () => { 
    setCurrentUser(null); 
    setView("landing"); 
    setTab("dashboard"); 
  };

  const handleEnterAuth = (mode) => {
    setAuthMode(mode);
    setView("auth");
  };

  const liveUser = currentUser ? (users.find(u => u.id === currentUser.id) || currentUser) : null;

  // ROUTING LOGIC
  if (view === "landing") return <LandingPage onEnterAuth={handleEnterAuth} />;
  
  if (view === "auth") return <AuthPage onLogin={handleLogin} users={users} setUsers={setUsers} initialMode={authMode} />;

  const renderTab = () => {
    switch (tab) {
      case "dashboard": return <Dashboard user={liveUser} pomo={pomo} setPomo={setPomo} />;
      case "timetable": return <TimetableBuilder user={liveUser} />;
      case "vedai": return <VedAI user={liveUser} />;
      case "reminders": return <Reminders user={liveUser} reminders={reminders} setReminders={setReminders} />;
      case "notes": return <StickyNotes user={liveUser} />;
      case "friends": return <FriendCircles user={liveUser} />;
      case "corporate": return <CorporateWork user={liveUser} />;
      case "habits": return <HabitTracker user={liveUser} />;
      case "warrior": return <Warrior user={liveUser} exp={exp} setExp={setExp} pomo={pomo} setPomo={setPomo} stopwatch={stopwatch} setStopwatch={setStopwatch} counter={counter} setCounter={setCounter} />;
      case "settings": return <Settings user={liveUser} users={users} setUsers={setUsers} onLogout={handleLogout} scanlinesActive={scanlinesActive} setScanlinesActive={setScanlinesActive} appThemeAccent={appThemeAccent} setAppThemeAccent={setAppThemeAccent} />;
      default: return <Dashboard user={liveUser} />;
    }
  };

  return (
    <>
      <Layout 
        user={liveUser} tab={tab} setTab={setTab} onLogout={handleLogout}
        pomo={pomo} setPomo={setPomo} stopwatch={stopwatch} setStopwatch={setStopwatch} counter={counter} setCounter={setCounter}
      >
        {renderTab()}
      </Layout>

      {/* 🚨 MISSION CRITICAL ALARM MODAL */}
      {triggered && (
        <Modal open={true} onClose={() => {
          if (window.activeAlarmAudio) {
            try { window.activeAlarmAudio.pause(); } catch(e) {}
            window.activeAlarmAudio = null;
          }
          setTriggered(null);
        }} title="🚨 CRITICAL ALARM STATUS">
          <div style={{ padding: 10, textAlign: 'center' }}>
            <div style={{ fontSize: 50, animation: "bounce 1s infinite", marginBottom: 15 }}>⏰</div>
            <h3 style={{ fontSize: 20, color: '#f87171', margin: '0 0 10px', fontWeight: 900 }}>{triggered.title.toUpperCase()}</h3>
            <p style={{ color: '#94a3b8', fontSize: 13, marginBottom: 25, lineHeight: 1.5 }}>{triggered.description || "Mission objective timeline reached!"}</p>
            <Btn onClick={() => {
              if (window.activeAlarmAudio) {
                try { window.activeAlarmAudio.pause(); } catch(e) {}
                window.activeAlarmAudio = null;
              }
              // Dismiss the reminder (mark as done)
              setReminders(prev => prev.map(x => x.id === triggered.id ? { ...x, done: true } : x));
              setTriggered(null);
            }} style={{ background: '#ef4444', border: 'none', width: '100%', padding: '14px', fontWeight: 900, borderRadius: 12 }}>
              DISMISS & SILENCE ALARM
            </Btn>
          </div>
        </Modal>
      )}

      {/* 🖼️ IMAGE PREVIEW LIGHTBOX MODAL */}
      {lightboxImg && (
        <Modal open={true} onClose={() => setLightboxImg(null)} title="👁️ IMAGE PREVIEW" width={800}>
          <div style={{ padding: 10, textAlign: 'center', background: '#090a0c', borderRadius: 16 }}>
            <img src={lightboxImg} style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: 12, objectFit: 'contain', border: '1px solid rgba(255,255,255,0.08)' }} alt="Preview" />
            <Btn onClick={() => setLightboxImg(null)} style={{ marginTop: 20, width: '100%' }}>CLOSE PREVIEW</Btn>
          </div>
        </Modal>
      )}
      {scanlinesActive && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%)',
          backgroundSize: '100% 4px',
          pointerEvents: 'none',
          zIndex: 999999,
          opacity: 0.65
        }} />
      )}
    </>
  );
}


