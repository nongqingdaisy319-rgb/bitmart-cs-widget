export function injectStyles() {
  if (document.getElementById('bm-cs-styles')) return
  const s = document.createElement('style')
  s.id = 'bm-cs-styles'
  s.textContent = CSS
  document.head.appendChild(s)
}

const CSS = `
/* ═══ BitMart CS Widget v4 — Intercom-inspired 2C Design ═══ */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --bm-white: #FFFFFF;
  --bm-bg: #FAFBFC;
  --bm-bg-warm: #F6F8FA;
  --bm-primary: #1B2B4B;
  --bm-primary-gradient: linear-gradient(135deg, #1B2B4B 0%, #2D4A7A 100%);
  --bm-accent: #0EA47A;
  --bm-accent-hover: #0BBF8A;
  --bm-accent-bg: rgba(14,164,122,0.06);
  --bm-accent-border: rgba(14,164,122,0.18);
  --bm-blue: #4F7DF3;
  --bm-blue-bg: rgba(79,125,243,0.06);
  --bm-text: #1A2233;
  --bm-text-body: #3D4F65;
  --bm-text-muted: #8896A6;
  --bm-text-light: #B0BEC5;
  --bm-border: #E5EAF0;
  --bm-border-soft: #EEF1F5;
  --bm-warn-bg: #FFF8EB;
  --bm-warn-border: #FFE4A0;
  --bm-warn-text: #8B6914;
  --bm-warn-icon-bg: #FFF0CC;
  --bm-success: #0EA47A;
  --bm-radius: 20px;
  --bm-radius-md: 14px;
  --bm-radius-sm: 10px;
  --bm-radius-xs: 8px;
  --bm-shadow-panel: 0 25px 65px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.03);
  --bm-shadow-card: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02);
  --bm-shadow-hover: 0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03);
  --bm-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

@keyframes bm-in { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
@keyframes bm-scale { from{opacity:0;transform:scale(.92) translateY(12px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes bm-slide { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
@keyframes bm-dot { 0%,80%,100%{transform:scale(0)} 40%{transform:scale(1)} }
@keyframes bm-spin { to{transform:rotate(360deg)} }
@keyframes bm-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
@keyframes bm-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }

#bitmart-cs-widget-root * { box-sizing:border-box; margin:0; padding:0; }
#bitmart-cs-widget-root { font-family:var(--bm-font); -webkit-font-smoothing:antialiased; }

/* ── Float Button ── */
.bm-float-btn {
  position:fixed; bottom:24px; right:24px;
  width:60px; height:60px;
  background:var(--bm-primary-gradient);
  color:#fff; border:none; border-radius:50%;
  cursor:pointer; display:flex; align-items:center; justify-content:center;
  box-shadow: 0 6px 20px rgba(27,43,75,0.35), 0 0 0 4px rgba(27,43,75,0.08);
  transition:all .25s cubic-bezier(.4,0,.2,1);
  animation:bm-in .35s ease-out;
}
.bm-float-btn:hover {
  transform:scale(1.08);
  box-shadow: 0 8px 28px rgba(27,43,75,0.4), 0 0 0 4px rgba(27,43,75,0.12);
}
.bm-float-btn .bm-dot {
  position:absolute; top:0; right:0;
  width:14px; height:14px;
  background:var(--bm-accent); border:3px solid #fff;
  border-radius:50%; animation:bm-pulse 2s infinite;
}
.bm-float-btn svg { width:26px; height:26px; }

/* ── Panel ── */
.bm-panel {
  position:fixed; bottom:24px; right:24px;
  width:400px; height:640px; max-height:85vh;
  background:var(--bm-white);
  border-radius:var(--bm-radius);
  box-shadow:var(--bm-shadow-panel);
  display:flex; flex-direction:column;
  overflow:hidden;
  animation:bm-scale .28s cubic-bezier(.4,0,.2,1);
}

/* ── Header ── */
.bm-header {
  background:var(--bm-primary-gradient);
  padding:20px 20px 18px;
  flex-shrink:0;
  position:relative;
  overflow:hidden;
}
.bm-header::after {
  content:''; position:absolute; bottom:0; left:0; right:0; height:60px;
  background:linear-gradient(transparent, rgba(0,0,0,0.06));
  pointer-events:none;
}
.bm-header-top { display:flex; align-items:center; justify-content:space-between; position:relative; z-index:1; }
.bm-header-left { display:flex; align-items:center; gap:12px; }
.bm-header-avatar {
  width:40px; height:40px;
  background:rgba(255,255,255,0.15);
  border-radius:12px;
  display:flex; align-items:center; justify-content:center;
  backdrop-filter:blur(8px);
  border:1px solid rgba(255,255,255,0.1);
}
.bm-header-info {}
.bm-header-title { font:700 15px/1.2 var(--bm-font); color:#fff; }
.bm-header-status { display:flex; align-items:center; gap:5px; font:400 12px/1 var(--bm-font); color:rgba(255,255,255,.65); margin-top:3px; }
.bm-header-status .bm-online { width:7px; height:7px; background:#4ADE80; border-radius:50%; box-shadow:0 0 6px rgba(74,222,128,0.5); }
.bm-close-btn { background:rgba(255,255,255,0.1); border:none; color:rgba(255,255,255,.7); cursor:pointer; padding:8px; border-radius:10px; transition:all .15s; backdrop-filter:blur(8px); }
.bm-close-btn:hover { color:#fff; background:rgba(255,255,255,0.2); }
.bm-header-greeting {
  position:relative; z-index:1;
  margin-top:14px;
  font:400 13.5px/1.5 var(--bm-font);
  color:rgba(255,255,255,.85);
}

/* ── Messages ── */
.bm-messages {
  flex:1; overflow-y:auto; padding:16px 16px 8px;
  display:flex; flex-direction:column; gap:10px;
  background:var(--bm-bg);
}
.bm-messages::-webkit-scrollbar { width:4px; }
.bm-messages::-webkit-scrollbar-track { background:transparent; }
.bm-messages::-webkit-scrollbar-thumb { background:#D5DBE3; border-radius:10px; }

/* ── Bubbles ── */
.bm-msg { display:flex; gap:8px; animation:bm-in .3s ease-out; }
.bm-msg-user { flex-direction:row-reverse; }
.bm-avatar {
  width:28px; height:28px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  flex-shrink:0; font:700 10px/1 var(--bm-font);
}
.bm-avatar-ai { background:var(--bm-accent-bg); color:var(--bm-accent); border:1.5px solid var(--bm-accent-border); }
.bm-avatar-user { background:var(--bm-blue-bg); color:var(--bm-blue); border:1.5px solid rgba(79,125,243,0.18); }
.bm-bubble { max-width:82%; padding:11px 15px; font-size:13.5px; line-height:1.6; }
.bm-bubble-ai {
  background:var(--bm-white); color:var(--bm-text-body);
  border-radius:4px 18px 18px 18px;
  box-shadow:var(--bm-shadow-card);
}
.bm-bubble-user {
  background:var(--bm-primary); color:#fff;
  border-radius:18px 18px 4px 18px;
  box-shadow:0 2px 8px rgba(27,43,75,0.15);
}

/* ── Answer Card ── */
.bm-card {
  max-width:94%;
  background:var(--bm-white);
  border-radius:4px var(--bm-radius-md) var(--bm-radius-md) var(--bm-radius-md);
  overflow:hidden;
  box-shadow:var(--bm-shadow-card);
  animation:bm-slide .4s cubic-bezier(.4,0,.2,1);
}
.bm-card-conclusion {
  padding:16px 18px;
  font:400 13.5px/1.7 var(--bm-font);
  color:var(--bm-text-body);
  border-bottom:1px solid var(--bm-border-soft);
}

.bm-card-section { padding:14px 18px; }
.bm-card-section + .bm-card-section { border-top:1px solid var(--bm-border-soft); }

.bm-card-label {
  font:600 11px/1 var(--bm-font);
  text-transform:uppercase; letter-spacing:.6px;
  color:var(--bm-text-muted); margin-bottom:10px;
}

/* Steps */
.bm-card-steps { list-style:none; }
.bm-card-steps li {
  display:flex; gap:12px; padding:9px 0;
  font-size:13px; color:var(--bm-text-body); line-height:1.6;
}
.bm-card-steps li + li { border-top:1px solid var(--bm-border-soft); }
.bm-step-num {
  width:24px; height:24px; flex-shrink:0;
  background:var(--bm-accent-bg); color:var(--bm-accent);
  border:1.5px solid var(--bm-accent-border);
  border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  font:600 11px/1 var(--bm-font); margin-top:2px;
}

/* Citations */
.bm-cite {
  display:inline-flex; align-items:center; justify-content:center;
  min-width:18px; height:18px; padding:0 5px;
  background:var(--bm-accent-bg);
  color:var(--bm-accent);
  border:1.5px solid var(--bm-accent-border);
  border-radius:5px;
  font:600 10px/1 var(--bm-font);
  cursor:pointer; text-decoration:none;
  margin-left:5px; vertical-align:middle;
  transition:all .2s cubic-bezier(.4,0,.2,1);
  position:relative; top:-1px;
}
.bm-cite:hover {
  background:var(--bm-accent); color:#fff;
  border-color:var(--bm-accent);
  transform:translateY(-2px);
  box-shadow:0 3px 8px rgba(14,164,122,0.25);
}

/* Warnings */
.bm-card-warn-section {
  background:var(--bm-warn-bg);
  border-top:1px solid var(--bm-warn-border) !important;
}
.bm-card-warning {
  display:flex; gap:10px; padding:7px 0;
  font-size:12.5px; color:var(--bm-warn-text); line-height:1.6;
}
.bm-card-warning + .bm-card-warning { border-top:1px solid rgba(255,228,160,0.5); }
.bm-warn-icon {
  width:22px; height:22px; flex-shrink:0;
  background:var(--bm-warn-icon-bg);
  border:1px solid var(--bm-warn-border);
  border-radius:6px;
  display:flex; align-items:center; justify-content:center;
  font-size:11px; margin-top:1px;
}

/* References */
.bm-refs {
  padding:14px 18px;
  background:var(--bm-bg-warm);
  border-top:1px solid var(--bm-border-soft);
}
.bm-refs-title {
  font:600 11px/1 var(--bm-font);
  text-transform:uppercase; letter-spacing:.6px;
  color:var(--bm-text-muted); margin-bottom:10px;
}
.bm-ref-item {
  display:flex; align-items:center; gap:10px; padding:7px 0;
  font-size:12.5px; line-height:1.5;
}
.bm-ref-item + .bm-ref-item { border-top:1px solid var(--bm-border-soft); }
.bm-ref-num {
  display:inline-flex; align-items:center; justify-content:center;
  min-width:20px; height:20px; padding:0 5px;
  background:var(--bm-accent-bg); color:var(--bm-accent);
  border:1.5px solid var(--bm-accent-border);
  border-radius:5px;
  font:600 10px/1 var(--bm-font); flex-shrink:0;
}
.bm-ref-item a {
  color:var(--bm-accent); text-decoration:none; font-weight:500;
  transition:all .15s;
}
.bm-ref-item a:hover { color:#0BBF8A; text-decoration:underline; }

/* Handoff in card */
.bm-card-handoff { padding:14px 18px; border-top:1px solid var(--bm-border-soft); }
.bm-card-handoff button {
  width:100%; padding:10px 16px;
  background:var(--bm-bg); border:1.5px solid var(--bm-border);
  border-radius:var(--bm-radius-sm);
  color:var(--bm-text-muted); font:500 12.5px/1 var(--bm-font);
  cursor:pointer; display:flex; align-items:center; justify-content:center; gap:7px;
  transition:all .2s cubic-bezier(.4,0,.2,1);
}
.bm-card-handoff button:hover {
  border-color:var(--bm-accent); color:var(--bm-accent);
  background:var(--bm-accent-bg);
  box-shadow:0 2px 8px rgba(14,164,122,0.1);
}

/* ── Suggestions ── */
.bm-suggestions { display:flex; flex-direction:column; gap:7px; animation:bm-in .4s; }
.bm-suggestions-title {
  font:600 11px/1 var(--bm-font); text-transform:uppercase; letter-spacing:.6px;
  color:var(--bm-text-muted); margin-bottom:2px;
}
.bm-suggestion-btn {
  background:var(--bm-white);
  border:1.5px solid var(--bm-border);
  border-radius:var(--bm-radius-sm);
  padding:12px 16px;
  font:400 13.5px/1.4 var(--bm-font);
  color:var(--bm-text-body);
  cursor:pointer; text-align:left;
  transition:all .2s cubic-bezier(.4,0,.2,1);
  display:flex; align-items:center; gap:10px;
  box-shadow:var(--bm-shadow-card);
}
.bm-suggestion-btn:hover {
  border-color:var(--bm-accent);
  color:var(--bm-accent);
  background:var(--bm-accent-bg);
  box-shadow:var(--bm-shadow-hover);
  transform:translateY(-1px);
}
.bm-suggestion-btn .bm-q-icon {
  width:28px; height:28px; flex-shrink:0;
  background:var(--bm-accent-bg);
  border:1.5px solid var(--bm-accent-border);
  border-radius:8px;
  display:flex; align-items:center; justify-content:center;
}

/* ── Typing ── */
.bm-typing { display:flex; gap:8px; align-items:flex-start; animation:bm-in .3s; }
.bm-typing-dots {
  display:flex; gap:5px; padding:14px 18px;
  background:var(--bm-white); border-radius:4px 18px 18px 18px;
  box-shadow:var(--bm-shadow-card);
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
  background:var(--bm-white); border:1.5px solid #D1FAE5;
  border-radius:var(--bm-radius-md); overflow:hidden; max-width:90%;
  box-shadow:var(--bm-shadow-card);
}
.bm-handoff-loading { display:flex; align-items:center; gap:14px; padding:18px; }
.bm-spinner { width:26px; height:26px; border:2.5px solid var(--bm-border); border-top-color:var(--bm-accent); border-radius:50%; animation:bm-spin .7s linear infinite; }
.bm-handoff-done { padding:18px; }
.bm-success-row { display:flex; align-items:center; gap:7px; font:600 13.5px/1 var(--bm-font); color:var(--bm-success); }
.bm-ticket-id { background:#F0FDF4; border:1.5px solid #D1FAE5; padding:10px 14px; border-radius:var(--bm-radius-xs); margin:10px 0; }
.bm-ticket-label { font:500 10px/1 var(--bm-font); color:var(--bm-text-muted); text-transform:uppercase; letter-spacing:.5px; }
.bm-ticket-value { font:700 15px/1.3 'SF Mono',Monaco,monospace; color:var(--bm-success); margin-top:3px; }
.bm-badge { display:inline-block; background:#FEF3C7; color:#92400E; padding:3px 10px; border-radius:20px; font:500 11px/1.2 var(--bm-font); margin:8px 0; }
.bm-summary { font-size:12.5px; color:var(--bm-text-body); line-height:1.65; margin:8px 0; }
.bm-reassure { border-top:1px solid var(--bm-border-soft); padding-top:12px; margin-top:12px; font-size:11.5px; color:var(--bm-text-muted); line-height:1.6; display:flex; gap:7px; }

/* ── Input Area ── */
.bm-input-area { border-top:1px solid var(--bm-border); background:var(--bm-white); flex-shrink:0; }
.bm-handoff-link {
  display:flex; align-items:center; gap:5px; padding:10px 18px 0;
  font:500 11.5px/1 var(--bm-font); color:var(--bm-text-muted);
  cursor:pointer; background:none; border:none; transition:color .15s;
}
.bm-handoff-link:hover { color:var(--bm-accent); }
.bm-handoff-link:disabled { color:var(--bm-text-light); cursor:not-allowed; }
.bm-input-row { display:flex; align-items:center; gap:8px; padding:10px 14px 8px; }
.bm-input {
  flex:1; background:var(--bm-bg); border:1.5px solid var(--bm-border);
  border-radius:var(--bm-radius-sm); padding:11px 14px;
  font:400 13.5px/1 var(--bm-font); color:var(--bm-text); outline:none;
  transition:all .2s;
}
.bm-input::placeholder { color:var(--bm-text-light); }
.bm-input:focus { border-color:var(--bm-accent); box-shadow:0 0 0 3px rgba(14,164,122,0.1); }
.bm-send-btn {
  background:var(--bm-primary-gradient); color:#fff; border:none;
  width:42px; height:42px; border-radius:var(--bm-radius-sm);
  cursor:pointer; display:flex; align-items:center; justify-content:center;
  transition:all .2s; flex-shrink:0;
}
.bm-send-btn:hover { transform:translateY(-1px); box-shadow:0 4px 12px rgba(27,43,75,0.2); }
.bm-send-btn:disabled { opacity:.3; cursor:not-allowed; transform:none; box-shadow:none; }
.bm-send-btn svg { width:18px; height:18px; }
.bm-powered { text-align:center; padding:4px 0 10px; font:400 10px/1 var(--bm-font); color:var(--bm-text-light); }
`
