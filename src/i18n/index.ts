export interface Strings {
  welcome: string
  inputPlaceholder: string
  send: string
  talkToHuman: string
  transferring: string
  ticketCreated: string
  ticketSummary: string
  commonQuestions: string
  conclusion: string
  steps: string
  warnings: string
  relatedArticles: string
  poweredBy: string
  aiSupport: string
  reassurance: string
}

const en: Strings = {
  welcome: "Hi, I'm BitMart AI Support. How can I help you today?",
  inputPlaceholder: "Type your question...",
  send: "Send",
  talkToHuman: "Talk to human support",
  transferring: "Connecting you to a support agent...",
  ticketCreated: "Support ticket created",
  ticketSummary: "Conversation summary",
  commonQuestions: "Common Questions",
  conclusion: "Answer",
  steps: "Steps",
  warnings: "Important",
  relatedArticles: "Related Articles",
  poweredBy: "Powered by BitMart AI",
  aiSupport: "BitMart AI Support",
  reassurance: "Your conversation history has been shared with our support team. No need to repeat your issue. An agent will contact you within 24 hours.",
}

const zh: Strings = {
  welcome: "你好，我是 BitMart AI 客服助手，请问有什么可以帮到您？",
  inputPlaceholder: "输入您的问题...",
  send: "发送",
  talkToHuman: "联系人工客服",
  transferring: "正在为您转接人工客服...",
  ticketCreated: "已生成服务请求",
  ticketSummary: "对话摘要",
  commonQuestions: "常见问题",
  conclusion: "回答",
  steps: "操作步骤",
  warnings: "注意事项",
  relatedArticles: "相关文章",
  poweredBy: "由 BitMart AI 提供支持",
  aiSupport: "BitMart AI 客服",
  reassurance: "您的对话记录已同步给客服团队，无需重复描述问题。客服会在 24 小时内与您联系。",
}

export function getStrings(lang: string): Strings {
  if (lang.startsWith('zh')) return zh
  return en
}

export function detectLanguage(text: string): string {
  const zhPattern = /[\u4e00-\u9fff\u3400-\u4dbf]/
  if (zhPattern.test(text)) return 'zh'
  return 'en'
}
