import { useState, useRef, useEffect, useCallback } from 'react'
import { getStrings, detectLanguage, type Strings } from '../i18n'
import {
  findAnswer, getFallbackAnswer, generateTicketId,
  suggestionsEn, suggestionsZh,
  type AnswerCard, type SuggestedQ,
} from '../mock/data'

interface Message { id: string; role: 'user' | 'assistant'; text?: string; card?: AnswerCard }
interface Ticket { id: string; status: string; summary: string }

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [ticket, setTicket] = useState<Ticket | null>(null)
  const [handoffLoading, setHandoffLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const endRef = useRef<HTMLDivElement>(null)
  const strings = getStrings(lang)

  useEffect(() => {
    if (open && messages.length === 0)
      setMessages([{ id: 'welcome', role: 'assistant', text: strings.welcome }])
  }, [open])

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, loading, handoffLoading])

  const send = useCallback(async (text: string) => {
    if (!text.trim() || loading) return
    const detected = detectLanguage(text)
    if (detected !== lang) setLang(detected)

    setMessages(prev => [...prev, { id: `u-${Date.now()}`, role: 'user', text }])
    setInput('')
    setShowSuggestions(false)
    setLoading(true)

    await new Promise(r => setTimeout(r, 800 + Math.random() * 800))

    const card = findAnswer(text, detected) || getFallbackAnswer(detected)
    setMessages(prev => [...prev, { id: `a-${Date.now()}`, role: 'assistant', card }])
    setLoading(false)
  }, [loading, lang])

  const handleHandoff = useCallback(async () => {
    if (handoffLoading || ticket) return
    setHandoffLoading(true)
    await new Promise(r => setTimeout(r, 2000))
    setTicket({
      id: generateTicketId(),
      status: lang === 'zh' ? '等待分配' : 'Waiting for agent',
      summary: lang === 'zh'
        ? '用户咨询了客服问题，AI 已提供初步回答，用户要求转接人工客服。'
        : 'User inquired about a support issue. AI provided initial guidance. User requested human agent transfer.',
    })
    setHandoffLoading(false)
  }, [handoffLoading, ticket, lang])

  const suggestions = lang === 'zh' ? suggestionsZh : suggestionsEn

  // ── Float Button ──
  if (!open) {
    return (
      <button className="bm-float-btn" onClick={() => setOpen(true)}>
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        AI Support
        <span className="bm-dot" />
      </button>
    )
  }

  // ── Panel ──
  return (
    <div className="bm-panel">
      {/* Header */}
      <div className="bm-header">
        <div className="bm-header-left">
          <div className="bm-header-icon">
            <svg width="18" height="18" fill="none" stroke="#00D4AA" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          </div>
          <div>
            <div className="bm-header-title">{strings.aiSupport}</div>
            <div className="bm-header-status">
              <span className="bm-online" />
              Online
            </div>
          </div>
        </div>
        <button className="bm-close-btn" onClick={() => setOpen(false)}>
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="bm-messages">
        {messages.map(msg => (
          <div key={msg.id}>
            {msg.text && (
              <div className={`bm-msg ${msg.role === 'user' ? 'bm-msg-user' : ''}`}>
                <div className={`bm-avatar ${msg.role === 'user' ? 'bm-avatar-user' : 'bm-avatar-ai'}`}>
                  {msg.role === 'user' ? 'U' : 'AI'}
                </div>
                <div className={`bm-bubble ${msg.role === 'user' ? 'bm-bubble-user' : 'bm-bubble-ai'}`}>
                  {msg.text}
                </div>
              </div>
            )}
            {msg.card && (
              <div className="bm-msg">
                <div className="bm-avatar bm-avatar-ai">AI</div>
                <CardView card={msg.card} strings={strings} onHandoff={handleHandoff} />
              </div>
            )}
          </div>
        ))}

        {showSuggestions && messages.length > 0 && (
          <SuggestionsView questions={suggestions} strings={strings} onSelect={send} />
        )}

        {loading && (
          <div className="bm-typing">
            <div className="bm-avatar bm-avatar-ai">AI</div>
            <div className="bm-typing-dots">
              <span className="bm-typing-dot" />
              <span className="bm-typing-dot" />
              <span className="bm-typing-dot" />
            </div>
          </div>
        )}

        {(handoffLoading || ticket) && (
          <HandoffView loading={handoffLoading} ticket={ticket} strings={strings} />
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="bm-input-area">
        {!ticket && (
          <button className="bm-handoff-link" onClick={handleHandoff} disabled={handoffLoading || messages.length < 2}>
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {strings.talkToHuman}
          </button>
        )}
        <div className="bm-input-row">
          <input
            className="bm-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder={strings.inputPlaceholder}
            disabled={loading || !!ticket}
          />
          <button className="bm-send-btn" onClick={() => send(input)} disabled={!input.trim() || loading || !!ticket}>
            {strings.send}
          </button>
        </div>
        <div className="bm-powered">{strings.poweredBy}</div>
      </div>
    </div>
  )
}

/* ═══ Card ═══ */
function CardView({ card, strings, onHandoff }: { card: AnswerCard; strings: Strings; onHandoff: () => void }) {
  return (
    <div className="bm-card">
      <div className="bm-card-conclusion">{card.conclusion}</div>

      {card.steps.length > 0 && (
        <div className="bm-card-section">
          <div className="bm-card-label">
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            {strings.steps}
          </div>
          <ol className="bm-card-steps">
            {card.steps.map((s, i) => (
              <li key={i}>
                <span className="bm-step-num">{i + 1}</span>
                <div>
                  <span>{s}</span>
                  {/* Show step illustration for first 2 steps */}
                  {i < 2 && card.steps.length > 2 && (
                    <div className="bm-step-img">
                      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {card.warnings.length > 0 && (
        <div className="bm-card-section">
          <div className="bm-card-label">
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            {strings.warnings}
          </div>
          {card.warnings.map((w, i) => (
            <div key={i} className="bm-card-warning">
              <span className="bm-warn-icon">⚠</span>
              <span>{w}</span>
            </div>
          ))}
        </div>
      )}

      {card.articles.length > 0 && (
        <div className="bm-card-section bm-card-articles">
          <div className="bm-card-label">
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            {strings.relatedArticles}
          </div>
          {card.articles.map((a, i) => (
            <a key={i} href={a.url} target="_blank" rel="noopener noreferrer">
              <span className="bm-article-icon">
                <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
              {a.title}
            </a>
          ))}
        </div>
      )}

      <div className="bm-card-handoff">
        <button onClick={onHandoff}>
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {strings.talkToHuman}
        </button>
      </div>
    </div>
  )
}

/* ═══ Suggestions ═══ */
function SuggestionsView({ questions, strings, onSelect }: { questions: SuggestedQ[]; strings: Strings; onSelect: (t: string) => void }) {
  return (
    <div className="bm-suggestions">
      <div className="bm-suggestions-title">{strings.commonQuestions}</div>
      {questions.map(q => (
        <button key={q.id} className="bm-suggestion-btn" onClick={() => onSelect(q.text)}>{q.text}</button>
      ))}
    </div>
  )
}

/* ═══ Handoff ═══ */
function HandoffView({ loading, ticket, strings }: { loading: boolean; ticket: Ticket | null; strings: Strings }) {
  if (loading) return (
    <div className="bm-handoff">
      <div className="bm-handoff-card">
        <div className="bm-handoff-loading">
          <div className="bm-spinner" />
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#F1F5F9' }}>{strings.transferring}</div>
            <div style={{ fontSize: 11, color: '#64748B', marginTop: 3 }}>Please wait...</div>
          </div>
        </div>
      </div>
    </div>
  )
  if (!ticket) return null
  return (
    <div className="bm-handoff">
      <div className="bm-handoff-card">
        <div className="bm-handoff-done">
          <div className="bm-success-row">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {strings.ticketCreated}
          </div>
          <div className="bm-ticket-id">
            <div className="bm-ticket-label">Ticket ID</div>
            <div className="bm-ticket-value">{ticket.id}</div>
          </div>
          <div className="bm-badge">{ticket.status}</div>
          <div>
            <div className="bm-ticket-label">{strings.ticketSummary}</div>
            <div className="bm-summary">{ticket.summary}</div>
          </div>
          <div className="bm-reassure">
            <span>ℹ️</span>
            <span>{strings.reassurance}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
