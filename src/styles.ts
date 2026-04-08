/**
 * Injected styles for the widget.
 * All classes prefixed with .bm- to avoid conflicts with host page.
 */
export function injectStyles() {
  const style = document.createElement('style')
  style.id = 'bitmart-cs-widget-styles'
  style.textContent = CSS
  document.head.appendChild(style)
}

const CSS = `
/* === BitMart CS Widget Styles === */

@keyframes bm-fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bm-scale-in {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes bm-slide-up {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bm-pulse-dot {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
@keyframes bm-spin {
  to { transform: rotate(360deg); }
}
@keyframes bm-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

#bitmart-cs-widget-root * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Float button */
.bm-float-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1B2B4B;
  color: #fff;
  border: none;
  padding: 12px 20px 12px 16px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  box-shadow: 0 8px 32px rgba(27,43,75,0.3);
  transition: all 0.2s;
  animation: bm-fade-in 0.3s ease-out;
}
.bm-float-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 40px rgba(27,43,75,0.4);
}
.bm-float-btn .bm-dot {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 10px;
  height: 10px;
  background: #00D4AA;
  border-radius: 50%;
  animation: bm-pulse 2s infinite;
}

/* Chat panel */
.bm-panel {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 400px;
  height: 620px;
  max-height: 85vh;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 48px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #E2E8F0;
  animation: bm-scale-in 0.25s ease-out;
}

/* Header */
.bm-header {
  background: #1B2B4B;
  color: #fff;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.bm-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.bm-header-icon {
  width: 32px;
  height: 32px;
  background: rgba(0,212,170,0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bm-header-title {
  font-size: 14px;
  font-weight: 600;
}
.bm-header-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #CBD5E1;
}
.bm-header-status .bm-online-dot {
  width: 7px;
  height: 7px;
  background: #00D4AA;
  border-radius: 50%;
}
.bm-close-btn {
  background: none;
  border: none;
  color: #94A3B8;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.15s;
}
.bm-close-btn:hover { color: #fff; }

/* Messages area */
.bm-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: linear-gradient(180deg, #F8FAFC 0%, #fff 100%);
}
.bm-messages::-webkit-scrollbar { width: 4px; }
.bm-messages::-webkit-scrollbar-track { background: transparent; }
.bm-messages::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }

/* Message bubbles */
.bm-msg {
  display: flex;
  gap: 8px;
  animation: bm-fade-in 0.3s ease-out;
}
.bm-msg-user {
  flex-direction: row-reverse;
}
.bm-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 700;
}
.bm-avatar-ai {
  background: #1B2B4B;
  color: #fff;
}
.bm-avatar-user {
  background: #2563EB;
  color: #fff;
}
.bm-bubble {
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 13px;
  line-height: 1.5;
}
.bm-bubble-ai {
  background: #fff;
  color: #1E293B;
  border: 1px solid #E2E8F0;
  border-radius: 16px 16px 16px 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.bm-bubble-user {
  background: #2563EB;
  color: #fff;
  border-radius: 16px 16px 4px 16px;
}

/* Answer card */
.bm-card {
  max-width: 92%;
  background: #fff;
  border: 1px solid #E2E8F0;
  border-radius: 16px 16px 16px 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  animation: bm-slide-up 0.4s ease-out;
}
.bm-card-section {
  padding: 12px 16px;
}
.bm-card-section + .bm-card-section {
  border-top: 1px solid #F1F5F9;
}
.bm-card-label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #94A3B8;
  margin-bottom: 6px;
}
.bm-card-conclusion {
  font-size: 14px;
  font-weight: 500;
  color: #1E293B;
  line-height: 1.5;
  padding: 14px 16px;
  background: #F8FAFC;
  border-bottom: 1px solid #F1F5F9;
}
.bm-card-steps {
  list-style: none;
  counter-reset: steps;
}
.bm-card-steps li {
  counter-increment: steps;
  display: flex;
  gap: 10px;
  padding: 6px 0;
  font-size: 13px;
  color: #334155;
  line-height: 1.5;
}
.bm-card-steps li::before {
  content: counter(steps);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #2563EB;
  color: #fff;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 1px;
}
.bm-card-warning {
  display: flex;
  gap: 8px;
  padding: 4px 0;
  font-size: 12px;
  color: #92400E;
  line-height: 1.5;
}
.bm-card-warning::before {
  content: "⚠️";
  flex-shrink: 0;
}
.bm-card-articles a {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 0;
  font-size: 12px;
  color: #2563EB;
  text-decoration: none;
  transition: color 0.15s;
}
.bm-card-articles a:hover { color: #1D4ED8; text-decoration: underline; }
.bm-card-articles a::before { content: "📄"; }
.bm-card-handoff {
  padding: 12px 16px;
  background: #F8FAFC;
  border-top: 1px solid #F1F5F9;
}
.bm-card-handoff button {
  width: 100%;
  padding: 8px 16px;
  background: none;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  color: #64748B;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.15s;
  font-family: inherit;
}
.bm-card-handoff button:hover {
  border-color: #2563EB;
  color: #2563EB;
  background: #EFF6FF;
}

/* Suggested questions */
.bm-suggestions {
  display: flex;
  flex-direction: column;
  gap: 6px;
  animation: bm-fade-in 0.4s ease-out;
}
.bm-suggestions-title {
  font-size: 11px;
  font-weight: 600;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}
.bm-suggestion-btn {
  background: #fff;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 13px;
  color: #334155;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s;
  font-family: inherit;
  line-height: 1.4;
}
.bm-suggestion-btn:hover {
  border-color: #2563EB;
  background: #EFF6FF;
  color: #1D4ED8;
}

/* Typing indicator */
.bm-typing {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  animation: bm-fade-in 0.3s ease-out;
}
.bm-typing-dots {
  display: flex;
  gap: 4px;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
}
.bm-typing-dot {
  width: 6px;
  height: 6px;
  background: #94A3B8;
  border-radius: 50%;
  animation: bm-pulse-dot 1.4s infinite ease-in-out both;
}
.bm-typing-dot:nth-child(1) { animation-delay: -0.32s; }
.bm-typing-dot:nth-child(2) { animation-delay: -0.16s; }

/* Handoff */
.bm-handoff {
  animation: bm-fade-in 0.3s ease-out;
}
.bm-handoff-card {
  background: #fff;
  border: 1px solid #D1FAE5;
  border-radius: 16px;
  overflow: hidden;
  max-width: 90%;
}
.bm-handoff-loading {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
}
.bm-spinner {
  width: 28px;
  height: 28px;
  border: 2px solid #E2E8F0;
  border-top-color: #2563EB;
  border-radius: 50%;
  animation: bm-spin 0.8s linear infinite;
}
.bm-handoff-done {
  padding: 16px;
}
.bm-handoff-done .bm-ticket-id {
  background: #F0FDF4;
  padding: 8px 12px;
  border-radius: 8px;
  margin: 8px 0;
}
.bm-handoff-done .bm-ticket-id span {
  font-family: monospace;
  font-weight: 600;
  color: #16A34A;
  font-size: 14px;
}
.bm-handoff-done .bm-ticket-label {
  font-size: 11px;
  color: #94A3B8;
}
.bm-handoff-done .bm-badge {
  display: inline-block;
  background: #FEF3C7;
  color: #92400E;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  margin: 8px 0;
}
.bm-handoff-done .bm-summary {
  font-size: 12px;
  color: #64748B;
  line-height: 1.5;
  margin: 8px 0;
}
.bm-handoff-done .bm-reassure {
  border-top: 1px solid #F1F5F9;
  padding-top: 10px;
  margin-top: 10px;
  font-size: 11px;
  color: #94A3B8;
  line-height: 1.5;
}

/* Feedback */
.bm-feedback {
  font-size: 11px;
  color: #94A3B8;
  text-align: center;
  padding: 4px 0;
}

/* Input */
.bm-input-area {
  border-top: 1px solid #E2E8F0;
  background: #fff;
  flex-shrink: 0;
}
.bm-handoff-link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px 0;
  font-size: 11px;
  color: #2563EB;
  cursor: pointer;
  background: none;
  border: none;
  font-family: inherit;
  transition: color 0.15s;
}
.bm-handoff-link:hover { color: #1D4ED8; }
.bm-handoff-link:disabled { color: #CBD5E1; cursor: not-allowed; }
.bm-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px 6px;
}
.bm-input {
  flex: 1;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 13px;
  outline: none;
  font-family: inherit;
  transition: border-color 0.15s;
  color: #1E293B;
}
.bm-input::placeholder { color: #94A3B8; }
.bm-input:focus { border-color: #2563EB; }
.bm-send-btn {
  background: #1B2B4B;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;
  white-space: nowrap;
}
.bm-send-btn:hover { background: #2563EB; }
.bm-send-btn:disabled { background: #CBD5E1; cursor: not-allowed; }
.bm-powered {
  text-align: center;
  padding: 4px 0 8px;
  font-size: 10px;
  color: #CBD5E1;
}
`
