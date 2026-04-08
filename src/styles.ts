export function injectStyles() {
  if (document.getElementById('bm-cs-styles')) return
  const s = document.createElement('style')
  s.id = 'bm-cs-styles'
  s.textContent = CSS
  document.head.appendChild(s)
}

const CSS = `
/* ═══ BitMart CS Widget v2 — Dark Theme ═══ */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --bm-bg-deep: #0B1426;
  --bm-bg-card: #111D35;
  --bm-bg-elevated: #162040;
  --bm-bg-input: #1A2744;
  --bm-accent: #00D4AA;
  --bm-accent-dim: rgba(0,212,170,0.12);
  --bm-accent-glow: rgba(0,212,170,0.25);
  --bm-blue: #3B82F6;
  --bm-blue-dim: rgba(59,130,246,0.12);
  --bm-text: #F1F5F9;
  --bm-text-secondary: #94A3B8;
  --bm-text-muted: #64748B;
  --bm-border: rgba(255,255,255,0.06);
  --bm-border-hover: rgba(255,255,255,0.12);
  --bm-glass: rgba(17,29,53,0.85);
  --bm-radius: 16px;
  --bm-radius-sm: 12px;
  --bm-radius-xs: 8px;
  --bm-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
  --bm-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

@keyframes bm-in { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
@keyframes bm-scale { from { opacity:0; transform:scale(.92) translateY(12px); } to { opacity:1; transform:scale(1) translateY(0); } }
@keyframes bm-slide { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
@keyframes bm-dot { 0%,80%,100%{transform:scale(0)} 40%{transform:scale(1)} }
@keyframes bm-spin { to{transform:rotate(360deg)} }
@keyframes bm-glow { 0%,100%{box-shadow:0 0 12px var(--bm-accent-glow)} 50%{box-shadow:0 0 24px var(--bm-accent-glow)} }
@keyframes bm-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
@keyframes bm-shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }

#bitmart-cs-widget-root * { box-sizing:border-box; margin:0; padding:0; }
#bitmart-cs-widget-root { font-family:var(--bm-font); -webkit-font-smoothing:antialiased; }

/* ── Float Button ── */
.bm-float-btn {
  position:fixed; bottom:24px; right:24px;
  display:flex; align-items:center; gap:10px;
  background: linear-gradient(135deg, #00D4AA 0%, #00B894 100%);
  color:#0B1426; border:none;
  padding:14px 22px 14px 18px;
  border-radius:50px; cursor:pointer;
  font:600 14px/1 var(--bm-font);
  box-shadow: 0 8px 32px rgba(0,212,170,0.35), 0 0 0 1px rgba(0,212,170,0.2);
  transition:all .25s cubic-bezier(.4,0,.2,1);
  animation:bm-in .4s ease-out;
}
.bm-float-btn:hover {
  transform:translateY(-2px) scale(1.03);
  box-shadow: 0 12px 40px rgba(0,212,170,0.45), 0 0 0 1px rgba(0,212,170,0.3);
}
.bm-float-btn .bm-dot {
  position:absolute; top:-3px; right:-3px;
  width:12px; height:12px;
  background:#fff; border-radius:50%;
  border:2px solid #00D4AA;
  animation:bm-pulse 2s infinite;
}

/* ── Chat Panel ── */
.bm-panel {
  position:fixed; bottom:24px; right:24px;
  width:420px; height:640px; max-height:85vh;
  background:var(--bm-bg-deep);
  border-radius:var(--bm-radius);
  box-shadow:var(--bm-shadow);
  display:flex; flex-direction:column;
  overflow:hidden;
  border:1px solid var(--bm-border);
  animation:bm-scale .3s cubic-bezier(.4,0,.2,1);
  backdrop-filter:blur(20px);
}

/* ── Header ── */
.bm-header {
  background: linear-gradient(135deg, var(--bm-bg-card) 0%, var(--bm-bg-elevated) 100%);
  padding:18px 20px;
  display:flex; align-items:center; justify-content:space-between;
  flex-shrink:0;
  border-bottom:1px solid var(--bm-border);
}
.bm-header-left { display:flex; align-items:center; gap:12px; }
.bm-header-icon {
  width:36px; height:36px;
  background:var(--bm-accent-dim);
  border-radius:10px;
  display:flex; align-items:center; justify-content:center;
  border:1px solid rgba(0,212,170,0.15);
}
.bm-header-title { font:600 14px/1.2 var(--bm-font); color:var(--bm-text); }
.bm-header-status { display:flex; align-items:center; gap:6px; font-size:11px; color:var(--bm-text-muted); margin-top:2px; }
.bm-header-status .bm-online { width:6px; height:6px; background:var(--bm-accent); border-radius:50%; animation:bm-glow 2s infinite; }
.bm-close-btn { background:none; border:none; color:var(--bm-text-muted); cursor:pointer; padding:6px; border-radius:8px; transition:all .15s; }
.bm-close-btn:hover { color:var(--bm-text); background:var(--bm-border-hover); }

/* ── Messages ── */
.bm-messages {
  flex:1; overflow-y:auto; padding:16px;
  display:flex; flex-direction:column; gap:14px;
  background: linear-gradient(180deg, var(--bm-bg-deep) 0%, #0E1A30 100%);
}
.bm-messages::-webkit-scrollbar { width:4px; }
.bm-messages::-webkit-scrollbar-track { background:transparent; }
.bm-messages::-webkit-scrollbar-thumb { background:var(--bm-border-hover); border-radius:10px; }

/* ── Message Bubbles ── */
.bm-msg { display:flex; gap:8px; animation:bm-in .3s ease-out; }
.bm-msg-user { flex-direction:row-reverse; }
.bm-avatar {
  width:28px; height:28px; border-radius:8px;
  display:flex; align-items:center; justify-content:center;
  flex-shrink:0; font:700 10px/1 var(--bm-font);
}
.bm-avatar-ai { background:var(--bm-accent-dim); color:var(--bm-accent); border:1px solid rgba(0,212,170,0.15); }
.bm-avatar-user { background:var(--bm-blue-dim); color:var(--bm-blue); border:1px solid rgba(59,130,246,0.15); }
.bm-bubble {
  max-width:82%; padding:12px 16px;
  font-size:13px; line-height:1.55; letter-spacing:0.01em;
}
.bm-bubble-ai {
  background:var(--bm-bg-card);
  color:var(--bm-text);
  border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-sm) var(--bm-radius-sm) var(--bm-radius-sm) 4px;
}
.bm-bubble-user {
  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  color:#fff;
  border-radius:var(--bm-radius-sm) var(--bm-radius-sm) 4px var(--bm-radius-sm);
}

/* ── Answer Card ── */
.bm-card {
  max-width:92%;
  background:var(--bm-bg-card);
  border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-sm) var(--bm-radius-sm) var(--bm-radius-sm) 4px;
  overflow:hidden;
  animation:bm-slide .45s cubic-bezier(.4,0,.2,1);
}
.bm-card-conclusion {
  padding:16px 18px;
  font:500 14px/1.6 var(--bm-font);
  color:var(--bm-text);
  background: linear-gradient(135deg, var(--bm-bg-elevated) 0%, var(--bm-bg-card) 100%);
  border-bottom:1px solid var(--bm-border);
  border-left:3px solid var(--bm-accent);
}
.bm-card-section {
  padding:14px 18px;
  border-top:1px solid var(--bm-border);
}
.bm-card-label {
  font:600 10px/1 var(--bm-font);
  text-transform:uppercase;
  letter-spacing:1px;
  color:var(--bm-text-muted);
  margin-bottom:10px;
  display:flex; align-items:center; gap:6px;
}
.bm-card-label svg { opacity:.6; }

/* Steps with visual indicators */
.bm-card-steps { list-style:none; }
.bm-card-steps li {
  display:flex; gap:12px; padding:8px 0;
  font-size:13px; color:var(--bm-text-secondary); line-height:1.55;
  position:relative;
}
.bm-card-steps li + li { border-top:1px solid var(--bm-border); }
.bm-step-num {
  width:24px; height:24px; flex-shrink:0;
  background:var(--bm-accent-dim);
  color:var(--bm-accent);
  border:1px solid rgba(0,212,170,0.2);
  border-radius:7px;
  display:flex; align-items:center; justify-content:center;
  font:600 11px/1 var(--bm-font);
  margin-top:1px;
}
/* Step illustration placeholder */
.bm-step-img {
  width:100%; height:80px;
  background: linear-gradient(135deg, var(--bm-bg-elevated), var(--bm-bg-deep));
  border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-xs);
  margin-top:8px;
  display:flex; align-items:center; justify-content:center;
  color:var(--bm-text-muted); font-size:11px;
  overflow:hidden; position:relative;
}
.bm-step-img::after {
  content:''; position:absolute; inset:0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
  background-size:200% 100%;
  animation:bm-shimmer 2s infinite;
}
.bm-step-img svg { opacity:.3; }

/* Warnings */
.bm-card-warning {
  display:flex; gap:10px; padding:8px 0;
  font-size:12px; color:#FBBF24; line-height:1.55;
}
.bm-card-warning + .bm-card-warning { border-top:1px solid var(--bm-border); }
.bm-warn-icon {
  width:20px; height:20px; flex-shrink:0;
  background:rgba(251,191,36,0.1);
  border:1px solid rgba(251,191,36,0.15);
  border-radius:6px;
  display:flex; align-items:center; justify-content:center;
  font-size:11px; margin-top:1px;
}

/* Articles */
.bm-card-articles a {
  display:flex; align-items:center; gap:8px; padding:8px 0;
  font-size:12px; color:var(--bm-accent); text-decoration:none;
  transition:all .15s;
}
.bm-card-articles a + a { border-top:1px solid var(--bm-border); }
.bm-card-articles a:hover { color:#00F5C4; transform:translateX(3px); }
.bm-article-icon {
  width:20px; height:20px; flex-shrink:0;
  background:var(--bm-accent-dim);
  border:1px solid rgba(0,212,170,0.1);
  border-radius:5px;
  display:flex; align-items:center; justify-content:center;
}

/* Handoff button in card */
.bm-card-handoff {
  padding:14px 18px;
  border-top:1px solid var(--bm-border);
  background:var(--bm-bg-elevated);
}
.bm-card-handoff button {
  width:100%; padding:10px 16px;
  background:transparent;
  border:1px solid var(--bm-border-hover);
  border-radius:var(--bm-radius-xs);
  color:var(--bm-text-secondary);
  font:500 12px/1 var(--bm-font);
  cursor:pointer;
  display:flex; align-items:center; justify-content:center; gap:8px;
  transition:all .2s;
}
.bm-card-handoff button:hover {
  border-color:var(--bm-accent);
  color:var(--bm-accent);
  background:var(--bm-accent-dim);
}

/* ── Suggestions ── */
.bm-suggestions { display:flex; flex-direction:column; gap:6px; animation:bm-in .4s ease-out; }
.bm-suggestions-title {
  font:600 10px/1 var(--bm-font);
  text-transform:uppercase; letter-spacing:1px;
  color:var(--bm-text-muted); margin-bottom:4px;
}
.bm-suggestion-btn {
  background:var(--bm-bg-card);
  border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-xs);
  padding:12px 16px;
  font:400 13px/1.4 var(--bm-font);
  color:var(--bm-text-secondary);
  cursor:pointer; text-align:left;
  transition:all .2s cubic-bezier(.4,0,.2,1);
}
.bm-suggestion-btn:hover {
  border-color:var(--bm-accent);
  color:var(--bm-accent);
  background:var(--bm-accent-dim);
  transform:translateX(4px);
}

/* ── Typing ── */
.bm-typing { display:flex; gap:8px; align-items:flex-start; animation:bm-in .3s; }
.bm-typing-dots {
  display:flex; gap:5px; padding:14px 18px;
  background:var(--bm-bg-card); border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-sm);
}
.bm-typing-dot {
  width:6px; height:6px; background:var(--bm-accent); border-radius:50%;
  animation:bm-dot 1.4s infinite ease-in-out both;
}
.bm-typing-dot:nth-child(1){animation-delay:-.32s}
.bm-typing-dot:nth-child(2){animation-delay:-.16s}

/* ── Handoff Flow ── */
.bm-handoff { animation:bm-in .3s; }
.bm-handoff-card {
  background:var(--bm-bg-card);
  border:1px solid rgba(0,212,170,0.15);
  border-radius:var(--bm-radius-sm);
  overflow:hidden; max-width:90%;
}
.bm-handoff-loading { display:flex; align-items:center; gap:14px; padding:18px; }
.bm-spinner {
  width:28px; height:28px;
  border:2px solid var(--bm-border);
  border-top-color:var(--bm-accent);
  border-radius:50%;
  animation:bm-spin .7s linear infinite;
}
.bm-handoff-done { padding:18px; }
.bm-handoff-done .bm-success-row { display:flex; align-items:center; gap:8px; font:500 13px/1 var(--bm-font); color:var(--bm-accent); }
.bm-ticket-id {
  background:var(--bm-accent-dim);
  border:1px solid rgba(0,212,170,0.1);
  padding:10px 14px; border-radius:var(--bm-radius-xs); margin:10px 0;
}
.bm-ticket-label { font-size:10px; color:var(--bm-text-muted); text-transform:uppercase; letter-spacing:.5px; }
.bm-ticket-value { font:600 15px/1.2 monospace; color:var(--bm-accent); margin-top:2px; }
.bm-badge {
  display:inline-block;
  background:rgba(251,191,36,0.1); border:1px solid rgba(251,191,36,0.15);
  color:#FBBF24; padding:3px 10px;
  border-radius:20px; font:500 11px/1 var(--bm-font); margin:8px 0;
}
.bm-summary { font-size:12px; color:var(--bm-text-secondary); line-height:1.6; margin:8px 0; }
.bm-reassure {
  border-top:1px solid var(--bm-border); padding-top:12px; margin-top:12px;
  font-size:11px; color:var(--bm-text-muted); line-height:1.6;
  display:flex; gap:8px;
}

/* ── Input Area ── */
.bm-input-area {
  border-top:1px solid var(--bm-border);
  background:var(--bm-bg-card);
  flex-shrink:0;
}
.bm-handoff-link {
  display:flex; align-items:center; gap:5px;
  padding:10px 18px 0; font:500 11px/1 var(--bm-font);
  color:var(--bm-text-muted); cursor:pointer;
  background:none; border:none;
  transition:color .15s;
}
.bm-handoff-link:hover { color:var(--bm-accent); }
.bm-handoff-link:disabled { color:var(--bm-border-hover); cursor:not-allowed; }
.bm-input-row { display:flex; align-items:center; gap:8px; padding:10px 14px 8px; }
.bm-input {
  flex:1;
  background:var(--bm-bg-input);
  border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-xs);
  padding:11px 14px;
  font:400 13px/1 var(--bm-font);
  color:var(--bm-text);
  outline:none;
  transition:border-color .15s;
}
.bm-input::placeholder { color:var(--bm-text-muted); }
.bm-input:focus { border-color:var(--bm-accent); }
.bm-send-btn {
  background: linear-gradient(135deg, #00D4AA 0%, #00B894 100%);
  color:var(--bm-bg-deep); border:none;
  padding:11px 18px; border-radius:var(--bm-radius-xs);
  font:600 13px/1 var(--bm-font);
  cursor:pointer; transition:all .2s; white-space:nowrap;
}
.bm-send-btn:hover { transform:translateY(-1px); box-shadow:0 4px 12px rgba(0,212,170,0.3); }
.bm-send-btn:disabled { opacity:.3; cursor:not-allowed; transform:none; box-shadow:none; }
.bm-powered { text-align:center; padding:4px 0 10px; font-size:10px; color:var(--bm-text-muted); opacity:.5; }

/* ── Grain overlay ── */
.bm-panel::before {
  content:''; position:absolute; inset:0; pointer-events:none; z-index:999;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity:.015; mix-blend-mode:overlay;
}
`
