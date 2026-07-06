const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const intelRegex = /function EHIntelligence\([\s\S]*?\n\s*\n/m;
const chatRegex = /\/\/ ═══ MISSION CONTROL: TECHNICAL CHAT ══════════════════════════════════════\nfunction EHChat\([\s\S]*?\n\s*\n/m;

// If we can't cleanly match them using simple regex from start to empty line, we can do block parsing.
function removeFunction(source, funcName) {
  const startIdx = source.indexOf(`function ${funcName}(`);
  if (startIdx === -1) return source;
  
  let braceCount = 0;
  let inString = false;
  let stringChar = null;
  let i = startIdx;
  
  while (i < source.length) {
    if (source[i] === '{' && !inString) {
      braceCount++;
    } else if (source[i] === '}' && !inString) {
      braceCount--;
      if (braceCount === 0) {
        return source.slice(0, startIdx) + source.slice(i + 1);
      }
    } else if ((source[i] === '"' || source[i] === "'" || source[i] === '`') && source[i-1] !== '\\') {
      if (!inString) {
        inString = true;
        stringChar = source[i];
      } else if (stringChar === source[i]) {
        inString = false;
      }
    }
    i++;
  }
  return source;
}

code = removeFunction(code, 'EHIntelligence');
code = removeFunction(code, 'EHChat');

// Replace {tab==="chat" && <EHIntelligence ... />} with {tab==="chat" && <EHControlSuite ... tasks={tasks} />}
code = code.replace(
  /\{tab\s*===\s*"chat"\s*&&\s*<EHIntelligence[^>]+>\}/,
  '{tab==="chat" && <EHControlSuite user={user} ws={ws} eh={eh} setEH={setEH} members={members} tasks={tasks} isAdmin={isAdmin} addLog={addLog} />}'
);

const newComponent = `
// ═══ EXECUTION HUB COMMUNICATION SUITE (CONTROL HUB) ═════════════════════════
function parseMarkdown(text, members) {
  const parts = text.split(/(\`\`\`[\\s\\S]*?\`\`\`|\`[^\`]+\`|@[a-zA-Z0-9_]+)/g);
  return parts.map((part, i) => {
    if (part.startsWith('\`\`\`') && part.endsWith('\`\`\`')) {
      const content = part.slice(3, -3);
      const firstNewline = content.indexOf('\\n');
      const code = firstNewline !== -1 ? content.slice(firstNewline + 1) : content;
      return <pre key={i} style={{ background: '#08090a', padding: 12, borderRadius: 8, overflowX: 'auto', border: \`1px solid \\\${EH_BORDER}\`, margin: '8px 0' }}><code style={{ fontFamily: 'monospace', color: '#e2e8f0', fontSize: 13 }}>{code}</code></pre>;
    }
    if (part.startsWith('\`') && part.endsWith('\`')) {
      return <code key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 4, fontFamily: 'monospace', fontSize: 12, color: '#fca5a5' }}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith('@')) {
      const alias = part.slice(1).toLowerCase();
      const match = members.some(m => m.name.toLowerCase().includes(alias));
      if (match) return <span key={i} style={{ color: '#00B8D9', fontWeight: 900, background: 'rgba(0,184,217,0.1)', padding: '2px 6px', borderRadius: 4 }}>{part}</span>;
      if (alias === 'admin') return <span key={i} style={{ color: '#f59e0b', fontWeight: 900, background: 'rgba(245,158,11,0.1)', padding: '2px 6px', borderRadius: 4 }}>{part}</span>;
      if (alias === 'everyone') return <span key={i} style={{ color: '#ef4444', fontWeight: 900, background: 'rgba(239,68,68,0.1)', padding: '2px 6px', borderRadius: 4 }}>{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

function EHControlSuite({ user, ws, eh, setEH, members, tasks, isAdmin, addLog }) {
  const [msg, setMsg] = useState("");
  const [viewMode, setViewMode] = useState("all"); 
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [isBroadcast, setIsBroadcast] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [attachedTask, setAttachedTask] = useState("");
  const [nudgeMenu, setNudgeMenu] = useState(null);

  const fileInputRef = useRef(null);
  const bottomRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const rawMsgs = (eh.controlHub || []).filter(c => c.workspaceId === ws.id);
  
  useEffect(() => {
    let changed = false;
    const upd = (eh.controlHub || []).map(m => {
      if (m.workspaceId === ws.id && !(m.readBy||[]).includes(user.id)) {
        changed = true;
        return { ...m, readBy: [...(m.readBy||[]), user.id] };
      }
      return m;
    });
    if (changed) setEH(prev => ({ ...prev, controlHub: upd }));
  }, [eh.controlHub, ws.id, user.id, setEH]);

  const msgs = rawMsgs.filter(m => {
    if (viewMode === "common") return m.isBroadcast;
    if (viewMode === "mentions") {
      const alias = user.name.split(' ')[0].toLowerCase();
      return m.text.toLowerCase().includes(\`@\${alias}\`) || m.text.toLowerCase().includes('@everyone') || (isAdmin && m.text.toLowerCase().includes('@admin'));
    }
    return true;
  });

  const send = (fType = null, fName = null, fData = null) => {
    if (!msg.trim() && !fData) return;
    const mentions = msg.match(/@\\w+/g) || [];
    const c = { 
      id: uid(), workspaceId: ws.id, userId: user.id, userName: user.name, 
      text: msg, file: fData, fType, fName, 
      time: new Date().toLocaleTimeString("en-IN",{hour:'2-digit',minute:'2-digit'}), 
      timestamp: new Date().toISOString(),
      readBy: [user.id], mentions, isBroadcast: (isAdmin && isBroadcast),
      attachedTaskId: attachedTask || null
    };
    setEH(prev => ({ ...prev, controlHub: [...(prev.controlHub||[]), c] }));
    setMsg(""); setAttachedTask("");
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior:"smooth" }), 100);
  };

  const startRecord = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks = [];
      mediaRecorder.ondataavailable = e => chunks.push(e.data);
      mediaRecorder.onstop = () => { setAudioBlob(new Blob(chunks, { type: 'audio/webm' })); setRecording(false); };
      mediaRecorder.start();
      setRecording(true);
    } catch { alert("MIC ACCESS DENIED."); }
  };
  const stopRecord = () => mediaRecorderRef.current?.stop();
  const sendAudio = () => {
    if (!audioBlob) return;
    const r = new FileReader();
    r.onload = () => { send(r.type, \`VOX_\${Date.now()}.webm\`, r.result); setAudioBlob(null); };
    r.readAsDataURL(audioBlob);
  };

  const handleFile = e => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader(); r.onload = () => send(f.type, f.name, r.result); r.readAsDataURL(f);
  };

  const renderFile = (m) => {
    if (!m.file) return null;
    const s = { maxWidth: "100%", borderRadius: 8, marginTop: 10, border: "1px solid rgba(255,255,255,0.1)", display: "block" };
    if (m.fType?.startsWith("image/")) return <img src={m.file} style={{...s, cursor:"zoom-in"}} onClick={() => setLightbox(m.file)} />;
    if (m.fType?.startsWith("video/")) return <video src={m.file} controls style={s} />;
    if (m.fType?.startsWith("audio/")) return (
      <div style={{ marginTop: 10, background: "rgba(0,0,0,0.3)", padding: "10px", borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 16 }}>📻</span><audio src={m.file} controls style={{ flex: 1, height: 28 }} />
      </div>
    );
    return (
      <a href={m.file} download={m.fName} style={{ display:"flex", alignItems:"center", gap:8, background:"rgba(0,0,0,0.2)", padding:"10px", borderRadius:8, color:EH_PRIMARY, marginTop:10, textDecoration:"none", fontSize:12, fontWeight:700 }}>
        <span>📄</span><div style={{ whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth: 200 }}>{m.fName.toUpperCase()}</div>
      </a>
    );
  };

  const sendNudge = (memId) => {
    const mem = members.find(m=>m.id===memId);
    if(mem) addLog(\`Nudged \${mem.name} to check communications.\`);
    setNudgeMenu(null);
  };

  return (
    <div style={{ display: "flex", height: "100%", background: "transparent", color: "#f8fafc" }}>
      {/* LEFT SIDEBAR: FILTERS & MEMBERS */}
      <div style={{ width: 280, borderRight: \`1px solid \${EH_BORDER}\`, background: "rgba(10,12,14,0.6)", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: 24, paddingBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 900, color: "#475569", letterSpacing: 2, marginBottom: 16 }}>CHANNELS</div>
          {[["all","ALL COMMS","#3b82f6"], ["mentions","MY MENTIONS","#00B8D9"], ["common","INSTRUCTIONS","#f59e0b"]].map(([k, label, col]) => (
            <div key={k} onClick={() => setViewMode(k)} style={{ padding: "12px 16px", background: viewMode === k ? col+"22" : "transparent", color: viewMode === k ? col : "#94a3b8", borderRadius: 10, fontWeight: 800, fontSize: 12, letterSpacing: 1, cursor: "pointer", marginBottom: 8, display: "flex", alignItems: "center", border: \`1px solid \${viewMode === k ? col+"44" : "transparent"}\` }}>
              {label}
            </div>
          ))}
        </div>
        <div style={{ padding: 24, flex: 1, overflowY: "auto" }}>
          <div style={{ fontSize: 10, fontWeight: 900, color: "#475569", letterSpacing: 2, marginBottom: 16, marginTop: 10 }}>SQUAD ONLINE ({members.length})</div>
          {members.map(m => (
            <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ position: "relative" }}>
                 <EHAvatar name={m.name} size={32} />
                 <div style={{ position: "absolute", bottom:-2, right:-2, width: 10, height: 10, background: "#10b981", borderRadius: "50%", border: "2px solid #0a0c0e" }} />
              </div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#e2e8f0" }}>{m.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CORE CHAT WINDOW */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
        <div style={{ flex: 1, overflowY: "auto", padding: "30px 40px", display: "flex", flexDirection: "column", gap: 24 }}>
          {msgs.map((m, idx) => {
            const isMe = m.userId === user.id;
            const seenCount = (m.readBy||[]).length;
            const taskHook = m.attachedTaskId ? tasks.find(t=>t.id===m.attachedTaskId) : null;
            return (
              <div key={m.id} style={{ alignSelf: isMe ? "flex-end" : "flex-start", maxWidth: "75%", display: "flex", flexDirection: "column", alignItems: isMe ? "flex-end" : "flex-start", animation: "msgFadeIn 0.3s ease-out" }}>
                {!isMe && <div style={{ fontSize: 11, fontWeight: 900, color: m.isBroadcast ? "#f59e0b" : EH_PRIMARY, marginBottom: 6, letterSpacing: 1 }}>{m.userName.toUpperCase()} {m.isBroadcast && "⚡ (GLOBAL)"}</div>}
                <div style={{ 
                  background: m.isBroadcast ? "linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(180, 83, 9, 0.2))" : isMe ? \`linear-gradient(135deg, \${EH_PRIMARY}, #008AA1)\` : "rgba(22, 25, 28, 0.8)",
                  border: m.isBroadcast ? "1px solid rgba(245,158,11,0.3)" : \`1px solid \${isMe ? "transparent" : EH_BORDER}\`,
                  padding: "16px 20px", borderRadius: isMe ? "18px 4px 18px 18px" : "4px 18px 18px 18px",
                  color: isMe ? "#000" : "#fff", boxShadow: m.isBroadcast ? "0 10px 40px rgba(245,158,11,0.1)" : isMe ? \`0 10px 30px \${EH_PRIMARY}22\` : "0 8px 25px rgba(0,0,0,0.2)",
                  position: "relative"
                }}>
                  <div style={{ fontSize: 14, lineHeight: "1.7", fontWeight: 500, wordBreak: "break-word" }}>
                    {parseMarkdown(m.text, members)}
                    {renderFile(m)}
                    {taskHook && (
                      <div style={{ marginTop: 14, background: "rgba(0,0,0,0.3)", padding: 12, borderRadius: 8, border: "1px dashed rgba(255,255,255,0.2)" }}>
                        <div style={{ fontSize: 9, color: "#fff", opacity: 0.6, letterSpacing: 1, marginBottom: 4 }}>ATTACHED DIRECTIVE</div>
                        <div style={{ fontSize: 13, fontWeight: 800, color: isMe ? "#111" : "#fff" }}>{taskHook.key} - {taskHook.title}</div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* READ RECEIPTS & TIME */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8, padding: "0 4px" }}>
                  <div style={{ fontSize: 10, color: "#64748b", fontWeight: 800, fontFamily: "monospace" }}>{m.time}</div>
                  {(isMe || isAdmin) && (
                    <div style={{ position: "relative" }}>
                      <div onClick={() => nudgeMenu === m.id ? setNudgeMenu(null) : setNudgeMenu(m.id)} style={{ fontSize: 10, color: seenCount===members.length ? "#10b981" : "#3b82f6", fontWeight: 800, cursor: "pointer", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 10 }}>
                        <span style={{ marginRight: 4 }}>👁️</span> {seenCount} / {members.length}
                      </div>
                      {nudgeMenu === m.id && isAdmin && (
                        <div style={{ position: "absolute", bottom: 24, right: isMe ? 0 : "auto", left: isMe ? "auto" : 0, background: "#111418", border: \`1px solid \${EH_BORDER}\`, borderRadius: 12, padding: 16, width: 220, zIndex: 100, boxShadow: "0 10px 40px rgba(0,0,0,0.8)" }}>
                           <div style={{ fontSize: 9, fontWeight: 900, color: "#64748b", marginBottom: 10 }}>PENDING ACKNOWLEDGMENT</div>
                           {members.filter(mem => !(m.readBy||[]).includes(mem.userId)).map(mem => (
                             <div key={mem.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                               <span style={{ fontSize: 12, color: "#fff", fontWeight: 700 }}>{mem.name}</span>
                               <button onClick={()=>sendNudge(mem.id)} style={{ background:"#ef4444", border:"none", color:"#fff", fontSize:10, borderRadius:4, padding:"4px 8px", fontWeight:900, cursor:"pointer" }}>NUDGE</button>
                             </div>
                           ))}
                           {members.filter(mem => !(m.readBy||[]).includes(mem.userId)).length === 0 && <div style={{ fontSize: 11, color: "#10b981", fontWeight: 700 }}>All objectives verified.</div>}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {audioBlob && (
          <div style={{ padding: "0 40px", marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#111316', padding: "12px 20px", borderRadius: 12, border: \`1px solid \${EH_PRIMARY}\` }}>
              <div style={{ flex: 1, fontSize: 13, color: EH_PRIMARY, fontWeight: 900, letterSpacing: 1 }}>🎙️ SYSTEM READY TO TRANSMIT</div>
              <button onClick={() => setAudioBlob(null)} style={{ background: "none", border: "none", color: "#ef4444", fontWeight: 900, cursor: "pointer", fontSize: 11 }}>DISCARD</button>
              <button onClick={sendAudio} style={{ background: EH_PRIMARY, border: "none", padding: "8px 20px", borderRadius: 8, color: "#000", fontWeight: 900, cursor: "pointer", fontSize: 11 }}>SEND</button>
            </div>
          </div>
        )}

        <div style={{ padding: "20px 40px", background: "rgba(8,9,10,0.85)", backdropFilter: "blur(20px)", borderTop: \`1px solid \${EH_BORDER}\` }}>
           
           {/* Context Attachments Header */}
           <div style={{ display: "flex", gap: 16, marginBottom: 12, alignItems: "center" }}>
             {isAdmin && (
                <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 11, fontWeight: 900, color: isBroadcast ? "#f59e0b" : "#475569" }}>
                  <input type="checkbox" checked={isBroadcast} onChange={e=>setIsBroadcast(e.target.checked)} style={{ accentColor: "#f59e0b" }} /> 
                  {isBroadcast ? "⚡ GLOBAL OVERRIDE ACTIVE" : "STANDARD COMMS"}
                </label>
             )}
             <select value={attachedTask} onChange={e=>setAttachedTask(e.target.value)} style={{ background: "rgba(255,255,255,0.05)", border: "none", color: attachedTask ? EH_PRIMARY : "#64748b", fontSize: 11, fontWeight: 800, padding: "4px 10px", borderRadius: 6, outline: "none" }}>
                <option value="">+ ATTACH DIRECTIVE</option>
                {tasks.map(t=><option key={t.id} value={t.id}>{t.key} - {t.title}</option>)}
             </select>
           </div>

           {/* Input Box */}
           <div style={{ display: "flex", alignItems: "flex-end", gap: 12, background: "#111418", borderRadius: 16, border: \`1px solid rgba(255,255,255,0.05)\`, padding: "10px 16px", boxShadow: "inset 0 4px 20px rgba(0,0,0,0.5)" }}>
              <button onClick={()=>fileInputRef.current.click()} style={{ background:"none", border:"none", color:"#475569", cursor:"pointer", fontSize:22, paddingBottom: 6 }}>📎</button>
              <input type="file" ref={fileInputRef} onChange={handleFile} style={{ display: "none" }} />
              <textarea 
                value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send()}}}
                placeholder="Initialize communications... (Markdown supported, use @ to mention)" 
                rows={Math.min(msg.split('\\n').length, 5)}
                style={{ flex: 1, background: "none", border: "none", color: "#f8fafc", outline: "none", fontSize: 14, fontWeight: 500, lineHeight: "1.5", resize: "none", padding: "6px 0", fontFamily: "inherit" }} 
              />
              <button onClick={recording ? stopRecord : startRecord} style={{ background: "none", border: "none", color: recording ? "#ef4444" : "#475569", cursor: "pointer", fontSize: 20, paddingBottom: 6 }}>{recording ? "⏹" : "🎙️"}</button>
              <button onClick={()=>send()} style={{ background: isBroadcast ? "#f59e0b" : EH_PRIMARY, border: "none", width: 44, height: 44, borderRadius: 12, color: "#000", fontWeight: 900, cursor: "pointer", transition: "0.2s", display: "flex", alignItems: "center", justifyContent: "center" }}>↵</button>
           </div>
        </div>
      </div>

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.9)", zIndex: 99999, display:"flex", alignItems:"center", justifyContent:"center", cursor:"zoom-out", backdropFilter:"blur(10px)" }}>
          <img src={lightbox} style={{ maxHeight: "90%", maxWidth: "90%", borderRadius: 12, boxShadow: "0 20px 100px rgba(0,0,0,0.8)" }} />
        </div>
      )}

      <style>{\`
        @keyframes msgFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      \`}</style>
    </div>
  );
}
`;

code = code.replace('// ═══ PIPELINE VIEW ═══════════════════════════════════════════════════════════', newComponent + '\n// ═══ PIPELINE VIEW ═══════════════════════════════════════════════════════════');

fs.writeFileSync('src/App.jsx', code);
