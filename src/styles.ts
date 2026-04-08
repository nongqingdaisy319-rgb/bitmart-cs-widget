export function injectStyles() {
  if (document.getElementById('bm-cs-styles')) return
  const s = document.createElement('style')
  s.id = 'bm-cs-styles'
  s.textContent = CSS
  document.head.appendChild(s)
}

const CSS = `
/* ═══ BitMart CS Widget v3 — Light Theme + Citations ═══ */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --bm-bg: #FFFFFF;
  --bm-bg-soft: #F8FAFB;
  --bm-bg-hover: #F1F5F9;
  --bm-primary: #1B2B4B;
  --bm-accent: #00B894;
  --bm-accent-light: rgba(0,184,148,0.08);
  --bm-accent-mid: rgba(0,184,148,0.15);
  --bm-blue: #3B82F6;
  --bm-blue-light: rgba(59,130,246,0.08);
  --bm-text: #1E293B;
  --bm-text-secondary: #475569;
  --bm-text-muted: #94A3B8;
  --bm-border: #E8ECF1;
  --bm-border-light: #F1F5F9;
  --bm-warn: #F59E0B;
  --bm-warn-bg: rgba(245,158,11,0.06);
  --bm-warn-text: #92400E;
  --bm-radius: 16px;
  --bm-radius-sm: 12px;
  --bm-radius-xs: 8px;
  --bm-shadow: 0 12px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04);
  --bm-shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --bm-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

@keyframes bm-in { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
@keyframes bm-scale { from{opacity:0;transform:scale(.93) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes bm-slide { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
@keyframes bm-dot { 0%,80%,100%{transform:scale(0)} 40%{transform:scale(1)} }
@keyframes bm-spin { to{transform:rotate(360deg)} }
@keyframes bm-pulse { 0%,100%{opacity:1} 50%{opacity:.5} }

#bitmart-cs-widget-root * { box-sizing:border-box; margin:0; padding:0; }
#bitmart-cs-widget-root { font-family:var(--bm-font); -webkit-font-smoothing:antialiased; }

/* ── Float Button ── */
.bm-float-btn {
  position:fixed; bottom:24px; right:24px;
  display:flex; align-items:center; gap:9px;
  background:var(--bm-primary);
  color:#fff; border:none;
  padding:13px 20px 13px 16px;
  border-radius:50px; cursor:pointer;
  font:500 13.5px/1 var(--bm-font);
  box-shadow: 0 6px 24px rgba(27,43,75,0.28);
  transition:all .2s cubic-bezier(.4,0,.2,1);
  animation:bm-in .35s ease-out;
}
.bm-float-btn:hover {
  transform:translateY(-2px);
  box-shadow: 0 10px 32px rgba(27,43,75,0.35);
}
.bm-float-btn .bm-dot {
  position:absolute; top:-2px; right:-2px;
  width:10px; height:10px;
  background:var(--bm-accent); border:2px solid #fff;
  border-radius:50%; animation:bm-pulse 2s infinite;
}

/* ── Panel ── */
.bm-panel {
  position:fixed; bottom:24px; right:24px;
  width:400px; height:620px; max-height:85vh;
  background:var(--bm-bg);
  border-radius:var(--bm-radius);
  box-shadow:var(--bm-shadow);
  display:flex; flex-direction:column;
  overflow:hidden;
  animation:bm-scale .25s cubic-bezier(.4,0,.2,1);
}

/* ── Header ── */
.bm-header {
  background:var(--bm-primary);
  color:#fff;
  padding:16px 18px;
  display:flex; align-items:center; justify-content:space-between;
  flex-shrink:0;
}
.bm-header-left { display:flex; align-items:center; gap:11px; }
.bm-header-icon {
  width:34px; height:34px;
  background:rgba(255,255,255,0.1);
  border-radius:10px;
  display:flex; align-items:center; justify-content:center;
}
.bm-header-title { font:600 14px/1.2 var(--bm-font); }
.bm-header-status { display:flex; align-items:center; gap:5px; font-size:11px; color:rgba(255,255,255,.6); margin-top:2px; }
.bm-header-status .bm-online { width:6px; height:6px; background:var(--bm-accent); border-radius:50%; }
.bm-close-btn { background:none; border:none; color:rgba(255,255,255,.5); cursor:pointer; padding:5px; border-radius:6px; transition:all .15s; }
.bm-close-btn:hover { color:#fff; background:rgba(255,255,255,.1); }

/* ── Messages ── */
.bm-messages {
  flex:1; overflow-y:auto; padding:16px;
  display:flex; flex-direction:column; gap:12px;
  background:var(--bm-bg-soft);
}
.bm-messages::-webkit-scrollbar { width:4px; }
.bm-messages::-webkit-scrollbar-track { background:transparent; }
.bm-messages::-webkit-scrollbar-thumb { background:#D1D5DB; border-radius:10px; }

/* ── Bubbles ── */
.bm-msg { display:flex; gap:8px; animation:bm-in .3s ease-out; }
.bm-msg-user { flex-direction:row-reverse; }
.bm-avatar {
  width:26px; height:26px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  flex-shrink:0; font:700 9px/1 var(--bm-font);
}
.bm-avatar-ai { background:var(--bm-accent-light); color:var(--bm-accent); }
.bm-avatar-user { background:var(--bm-blue-light); color:var(--bm-blue); }
.bm-bubble { max-width:82%; padding:10px 14px; font-size:13px; line-height:1.55; }
.bm-bubble-ai {
  background:var(--bm-bg); color:var(--bm-text);
  border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-sm) var(--bm-radius-sm) var(--bm-radius-sm) 4px;
  box-shadow:var(--bm-shadow-sm);
}
.bm-bubble-user {
  background:var(--bm-primary); color:#fff;
  border-radius:var(--bm-radius-sm) var(--bm-radius-sm) 4px var(--bm-radius-sm);
}

/* ── Answer Card ── */
.bm-card {
  max-width:92%;
  background:var(--bm-bg);
  border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-sm) var(--bm-radius-sm) var(--bm-radius-sm) 4px;
  overflow:hidden; box-shadow:var(--bm-shadow-sm);
  animation:bm-slide .4s cubic-bezier(.4,0,.2,1);
}
.bm-card-conclusion {
  padding:14px 16px;
  font:400 13.5px/1.65 var(--bm-font);
  color:var(--bm-text);
  background:var(--bm-bg);
  border-bottom:1px solid var(--bm-border-light);
}
.bm-card-section { padding:12px 16px; }
.bm-card-section + .bm-card-section { border-top:1px solid var(--bm-border-light); }

/* Steps */
.bm-card-steps { list-style:none; }
.bm-card-steps li {
  display:flex; gap:10px; padding:7px 0;
  font-size:13px; color:var(--bm-text-secondary); line-height:1.55;
}
.bm-card-steps li + li { border-top:1px solid var(--bm-border-light); }
.bm-step-num {
  width:22px; height:22px; flex-shrink:0;
  background:var(--bm-accent-light); color:var(--bm-accent);
  border-radius:6px;
  display:flex; align-items:center; justify-content:center;
  font:600 11px/1 var(--bm-font); margin-top:1px;
}

/* ── Citation tags [1] [2] ── */
.bm-cite {
  display:inline-flex; align-items:center; justify-content:center;
  min-width:16px; height:16px; padding:0 4px;
  background:var(--bm-accent-light);
  color:var(--bm-accent);
  border:1px solid var(--bm-accent-mid);
  border-radius:4px;
  font:600 9.5px/1 var(--bm-font);
  cursor:pointer; text-decoration:none;
  margin-left:4px; vertical-align:middle;
  transition:all .15s;
  position:relative; top:-1px;
}
.bm-cite:hover {
  background:var(--bm-accent);
  color:#fff;
  border-color:var(--bm-accent);
  transform:translateY(-1px);
}

/* Warnings */
.bm-card-warn-section { background:var(--bm-warn-bg); }
.bm-card-label {
  font:600 10px/1 var(--bm-font);
  text-transform:uppercase; letter-spacing:.8px;
  color:var(--bm-text-muted); margin-bottom:8px;
}
.bm-card-warning {
  display:flex; gap:8px; padding:6px 0;
  font-size:12px; color:var(--bm-warn-text); line-height:1.55;
}
.bm-card-warning + .bm-card-warning { border-top:1px solid rgba(245,158,11,0.08); }
.bm-warn-icon {
  width:18px; height:18px; flex-shrink:0;
  background:rgba(245,158,11,0.1);
  border-radius:5px;
  display:flex; align-items:center; justify-content:center;
  font-size:10px; margin-top:1px;
}

/* ── References list (bottom of card) ── */
.bm-refs {
  padding:12px 16px;
  background:var(--bm-bg-soft);
  border-top:1px solid var(--bm-border-light);
}
.bm-refs-title {
  font:600 10px/1 var(--bm-font);
  text-transform:uppercase; letter-spacing:.8px;
  color:var(--bm-text-muted); margin-bottom:8px;
}
.bm-ref-item {
  display:flex; align-items:flex-start; gap:8px; padding:5px 0;
  font-size:12px; line-height:1.5;
}
.bm-ref-item + .bm-ref-item { border-top:1px solid var(--bm-border-light); }
.bm-ref-num {
  display:inline-flex; align-items:center; justify-content:center;
  min-width:18px; height:18px; padding:0 4px;
  background:var(--bm-accent-light); color:var(--bm-accent);
  border-radius:4px;
  font:600 9.5px/1 var(--bm-font); flex-shrink:0; margin-top:1px;
}
.bm-ref-item a {
  color:var(--bm-accent); text-decoration:none; transition:color .15s;
}
.bm-ref-item a:hover { color:#009B7D; text-decoration:underline; }

/* Handoff in card */
.bm-card-handoff { padding:12px 16px; border-top:1px solid var(--bm-border-light); }
.bm-card-handoff button {
  width:100%; padding:9px 14px;
  background:none; border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-xs);
  color:var(--bm-text-muted); font:500 12px/1 var(--bm-font);
  cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px;
  transition:all .15s;
}
.bm-card-handoff button:hover {
  border-color:var(--bm-accent); color:var(--bm-accent); background:var(--bm-accent-light);
}

/* ── Suggestions ── */
.bm-suggestions { display:flex; flex-direction:column; gap:5px; animation:bm-in .4s; }
.bm-suggestions-title { font:600 10px/1 var(--bm-font); text-transform:uppercase; letter-spacing:.8px; color:var(--bm-text-muted); margin-bottom:3px; }
.bm-suggestion-btn {
  background:var(--bm-bg); border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-xs); padding:10px 14px;
  font:400 13px/1.4 var(--bm-font); color:var(--bm-text-secondary);
  cursor:pointer; text-align:left; transition:all .15s;
}
.bm-suggestion-btn:hover {
  border-color:var(--bm-accent); color:var(--bm-accent);
  background:var(--bm-accent-light); transform:translateX(3px);
}

/* ── Typing ── */
.bm-typing { display:flex; gap:8px; align-items:flex-start; animation:bm-in .3s; }
.bm-typing-dots {
  display:flex; gap:4px; padding:12px 16px;
  background:var(--bm-bg); border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-sm); box-shadow:var(--bm-shadow-sm);
}
.bm-typing-dot {
  width:5px; height:5px; background:var(--bm-accent); border-radius:50%;
  animation:bm-dot 1.4s infinite ease-in-out both;
}
.bm-typing-dot:nth-child(1){animation-delay:-.32s}
.bm-typing-dot:nth-child(2){animation-delay:-.16s}

/* ── Handoff Flow ── */
.bm-handoff { animation:bm-in .3s; }
.bm-handoff-card {
  background:var(--bm-bg); border:1px solid #D1FAE5;
  border-radius:var(--bm-radius-sm); overflow:hidden; max-width:90%;
  box-shadow:var(--bm-shadow-sm);
}
.bm-handoff-loading { display:flex; align-items:center; gap:12px; padding:16px; }
.bm-spinner { width:24px; height:24px; border:2px solid var(--bm-border); border-top-color:var(--bm-accent); border-radius:50%; animation:bm-spin .7s linear infinite; }
.bm-handoff-done { padding:16px; }
.bm-success-row { display:flex; align-items:center; gap:6px; font:500 13px/1 var(--bm-font); color:#16A34A; }
.bm-ticket-id { background:#F0FDF4; border:1px solid #D1FAE5; padding:8px 12px; border-radius:var(--bm-radius-xs); margin:8px 0; }
.bm-ticket-label { font-size:10px; color:var(--bm-text-muted); text-transform:uppercase; letter-spacing:.5px; }
.bm-ticket-value { font:600 14px/1.2 monospace; color:#16A34A; margin-top:2px; }
.bm-badge { display:inline-block; background:#FEF3C7; color:#92400E; padding:2px 8px; border-radius:12px; font:500 11px/1 var(--bm-font); margin:6px 0; }
.bm-summary { font-size:12px; color:var(--bm-text-secondary); line-height:1.6; margin:6px 0; }
.bm-reassure { border-top:1px solid var(--bm-border-light); padding-top:10px; margin-top:10px; font-size:11px; color:var(--bm-text-muted); line-height:1.6; display:flex; gap:6px; }

/* ── Input ── */
.bm-input-area { border-top:1px solid var(--bm-border); background:var(--bm-bg); flex-shrink:0; }
.bm-handoff-link {
  display:flex; align-items:center; gap:4px; padding:8px 16px 0;
  font:500 11px/1 var(--bm-font); color:var(--bm-text-muted);
  cursor:pointer; background:none; border:none; transition:color .15s;
}
.bm-handoff-link:hover { color:var(--bm-accent); }
.bm-handoff-link:disabled { color:#D1D5DB; cursor:not-allowed; }
.bm-input-row { display:flex; align-items:center; gap:8px; padding:8px 12px 6px; }
.bm-input {
  flex:1; background:var(--bm-bg-soft); border:1px solid var(--bm-border);
  border-radius:var(--bm-radius-xs); padding:10px 12px;
  font:400 13px/1 var(--bm-font); color:var(--bm-text); outline:none;
  transition:border-color .15s;
}
.bm-input::placeholder { color:var(--bm-text-muted); }
.bm-input:focus { border-color:var(--bm-accent); }
.bm-send-btn {
  background:var(--bm-primary); color:#fff; border:none;
  padding:10px 16px; border-radius:var(--bm-radius-xs);
  font:500 13px/1 var(--bm-font); cursor:pointer;
  transition:all .15s; white-space:nowrap;
}
.bm-send-btn:hover { background:#2563EB; }
.bm-send-btn:disabled { background:#D1D5DB; cursor:not-allowed; }
.bm-powered { text-align:center; padding:3px 0 8px; font-size:10px; color:#CBD5E1; }
`
