export interface AnswerCard {
  conclusion: string
  steps: string[]
  warnings: string[]
  articles: { title: string; url: string }[]
}

export interface Scenario {
  keywords: string[]
  answer: AnswerCard
}

export interface SuggestedQ {
  id: string
  text: string
}

// === English ===
export const suggestionsEn: SuggestedQ[] = [
  { id: 'withdrawal', text: "Why hasn't my withdrawal arrived?" },
  { id: 'deposit', text: 'My deposit has not been credited' },
  { id: 'kyc', text: 'How do I complete identity verification?' },
  { id: 'login', text: 'I cannot log into my account' },
]

export const scenariosEn: Scenario[] = [
  {
    keywords: ['withdraw', 'withdrawal', 'not arrived', 'pending', 'txid'],
    answer: {
      conclusion: 'Your withdrawal may be delayed due to blockchain network confirmation. Most withdrawals complete within 30 minutes to a few hours depending on the network.',
      steps: [
        'Go to Assets → Withdrawal History',
        'Find the transaction and check its status',
        'If status shows "Completed", copy the TXID',
        'Search the TXID on a blockchain explorer (e.g., Etherscan for ERC-20)',
        'If still "Processing" after 6 hours, please contact human support',
      ],
      warnings: [
        'Make sure the withdrawal network matches the receiving address network. Mismatched networks may result in permanent loss of funds.',
        'Different networks have different confirmation times: ERC-20 (~12 blocks), TRC-20 (~20 blocks), BTC (~3 blocks).',
        'Check minimum withdrawal amounts and fees on the withdrawal page.',
      ],
      articles: [
        { title: 'How to Withdraw Cryptocurrency from BitMart', url: 'https://bitmart.zendesk.com/hc/en-us/articles/withdrawal' },
        { title: 'Withdrawal Processing Times', url: 'https://bitmart.zendesk.com/hc/en-us/articles/processing-times' },
        { title: 'How to Find Your Transaction ID (TXID)', url: 'https://bitmart.zendesk.com/hc/en-us/articles/txid' },
      ],
    },
  },
  {
    keywords: ['deposit', 'credit', 'not received', 'transfer', 'top up'],
    answer: {
      conclusion: 'Deposit delays are usually caused by insufficient blockchain confirmations. Please check the required number of confirmations for your chosen network.',
      steps: [
        'Go to Assets → Deposit History',
        'Check if the deposit shows in your history',
        'If it appears with status "Confirming", wait for the required confirmations',
        'If no record exists, verify the deposit address and network on the blockchain explorer',
        'Ensure you deposited to the correct address and selected the correct network',
      ],
      warnings: [
        'Depositing tokens via the wrong network (e.g., sending ERC-20 tokens to a TRC-20 address) may result in permanent loss.',
        'Some tokens require both an address and a MEMO/Tag. Missing the MEMO will delay or prevent crediting.',
        'Minimum deposit amounts apply — deposits below the minimum will not be credited.',
      ],
      articles: [
        { title: 'How to Deposit Cryptocurrency to BitMart', url: 'https://bitmart.zendesk.com/hc/en-us/articles/deposit' },
        { title: 'Why Is My Deposit Not Credited?', url: 'https://bitmart.zendesk.com/hc/en-us/articles/deposit-not-credited' },
      ],
    },
  },
  {
    keywords: ['kyc', 'verification', 'identity', 'verify', 'passport', 'id card'],
    answer: {
      conclusion: 'BitMart requires identity verification (KYC) for withdrawal limits above the basic tier. Most verifications are completed within 1-3 business days.',
      steps: [
        'Go to Account → Identity Verification',
        'Select your verification level (Level 1 or Level 2)',
        'Prepare a valid government-issued ID (passport, national ID, or driver\'s license)',
        'Take clear photos of the front and back of your ID',
        'Complete the facial recognition step',
        'Submit and wait for review (1-3 business days)',
      ],
      warnings: [
        'Photos must be clear, well-lit, and show all four corners of the document.',
        'The name on your ID must match the name on your BitMart account.',
        'Do not use expired documents — they will be rejected.',
        'If rejected, check the rejection reason and resubmit with corrected documents.',
      ],
      articles: [
        { title: 'How to Complete KYC Identity Verification', url: 'https://bitmart.zendesk.com/hc/en-us/articles/kyc' },
        { title: 'KYC Verification Requirements', url: 'https://bitmart.zendesk.com/hc/en-us/articles/kyc-requirements' },
      ],
    },
  },
  {
    keywords: ['login', 'log in', 'password', '2fa', 'authenticator', 'locked', 'cannot access', 'security'],
    answer: {
      conclusion: 'Login issues are commonly caused by incorrect passwords, expired 2FA codes, or account security locks. Here\'s how to troubleshoot.',
      steps: [
        'Verify you are using the correct email address',
        'Try resetting your password via "Forgot Password"',
        'If using Google Authenticator, ensure your device time is synced (Settings → Time → Auto sync)',
        'If 2FA codes still don\'t work, you may need to reset your 2FA',
        'For locked accounts, submit an unlock request through the security center',
      ],
      warnings: [
        'Never share your password, 2FA codes, or recovery keys with anyone — BitMart staff will never ask for these.',
        'If you lost access to your 2FA device, you\'ll need to verify your identity to reset it.',
        'Enable email notifications for login alerts to monitor unauthorized access.',
      ],
      articles: [
        { title: 'How to Reset Your Password', url: 'https://bitmart.zendesk.com/hc/en-us/articles/reset-password' },
        { title: 'How to Reset Google 2FA Authenticator', url: 'https://bitmart.zendesk.com/hc/en-us/articles/reset-2fa' },
        { title: 'Account Security Best Practices', url: 'https://bitmart.zendesk.com/hc/en-us/articles/security' },
      ],
    },
  },
]

// === Chinese ===
export const suggestionsZh: SuggestedQ[] = [
  { id: 'withdrawal', text: '我的提现为什么还没到账？' },
  { id: 'deposit', text: '充值未到账怎么办？' },
  { id: 'kyc', text: '如何完成身份认证？' },
  { id: 'login', text: '无法登录我的账户' },
]

export const scenariosZh: Scenario[] = [
  {
    keywords: ['提现', '提币', '到账', '未到账', 'txid', '未收到'],
    answer: {
      conclusion: '您的提现可能因区块链网络确认延迟尚未到账。大多数提现会在 30 分钟至数小时内完成，具体取决于所选网络。',
      steps: [
        '进入【资产】→【提现记录】',
        '找到对应的提现记录，查看状态',
        '如状态显示"已完成"，复制 TXID',
        '在区块链浏览器中搜索 TXID 查看确认进度（如 ERC-20 用 Etherscan）',
        '如超过 6 小时仍为"处理中"，请联系人工客服',
      ],
      warnings: [
        '提现网络必须与收款地址网络一致，网络不匹配可能导致资产永久丢失。',
        '不同网络确认时间不同：ERC-20 约需 12 个区块确认，TRC-20 约需 20 个，BTC 约需 3 个。',
        '请注意最低提现金额和手续费，详见提现页面说明。',
      ],
      articles: [
        { title: '如何从 BitMart 提现加密货币', url: 'https://bitmart.zendesk.com/hc/zh-cn/articles/withdrawal' },
        { title: '提现处理时间说明', url: 'https://bitmart.zendesk.com/hc/zh-cn/articles/processing-times' },
        { title: '如何查找交易哈希（TXID）', url: 'https://bitmart.zendesk.com/hc/zh-cn/articles/txid' },
      ],
    },
  },
  {
    keywords: ['充值', '充币', '入金', '未到账', '没收到', '转入'],
    answer: {
      conclusion: '充值延迟通常是因为区块链确认数不足。请检查所选网络要求的确认数，耐心等待。',
      steps: [
        '进入【资产】→【充值记录】',
        '检查充值是否在记录中显示',
        '如状态为"确认中"，等待达到所需确认数',
        '如无记录，请在区块链浏览器中验证充值地址和网络',
        '确认您使用了正确的充值地址和正确的网络',
      ],
      warnings: [
        '通过错误网络充值（如将 ERC-20 代币发送到 TRC-20 地址）可能导致资产永久丢失。',
        '部分代币需要同时填写地址和 MEMO/Tag，缺少 MEMO 会导致充值延迟或无法到账。',
        '低于最低充值金额的充值将不会被入账。',
      ],
      articles: [
        { title: '如何向 BitMart 充值加密货币', url: 'https://bitmart.zendesk.com/hc/zh-cn/articles/deposit' },
        { title: '充值未到账的常见原因', url: 'https://bitmart.zendesk.com/hc/zh-cn/articles/deposit-not-credited' },
      ],
    },
  },
  {
    keywords: ['kyc', '认证', '身份', '验证', '实名', '护照', '身份证'],
    answer: {
      conclusion: 'BitMart 要求完成身份认证（KYC）以提升提现额度。大多数认证会在 1-3 个工作日内完成审核。',
      steps: [
        '进入【账户】→【身份认证】',
        '选择认证等级（Level 1 或 Level 2）',
        '准备有效的政府签发证件（护照、身份证或驾驶证）',
        '拍摄证件正反面的清晰照片',
        '完成人脸识别步骤',
        '提交并等待审核（1-3 个工作日）',
      ],
      warnings: [
        '照片必须清晰、光线充足，且能看到证件的四个角。',
        '证件上的姓名必须与 BitMart 账户注册姓名一致。',
        '不要使用过期证件，否则会被拒绝。',
        '如认证被拒，请查看拒绝原因并重新提交正确的材料。',
      ],
      articles: [
        { title: '如何完成 KYC 身份认证', url: 'https://bitmart.zendesk.com/hc/zh-cn/articles/kyc' },
        { title: '身份认证要求说明', url: 'https://bitmart.zendesk.com/hc/zh-cn/articles/kyc-requirements' },
      ],
    },
  },
  {
    keywords: ['登录', '密码', '2fa', '验证器', '锁定', '无法登录', '安全'],
    answer: {
      conclusion: '登录问题通常由密码错误、2FA 验证码过期或账户安全锁定导致。以下是排查步骤。',
      steps: [
        '确认您使用的邮箱地址是否正确',
        '通过"忘记密码"重置密码',
        '如使用 Google Authenticator，确保手机时间已同步（设置→时间→自动同步）',
        '如 2FA 验证码仍然无效，可能需要重置 2FA',
        '账户被锁定时，请通过安全中心提交解锁申请',
      ],
      warnings: [
        '切勿将密码、2FA 验证码或恢复密钥分享给任何人——BitMart 工作人员绝不会索要这些信息。',
        '如丢失 2FA 设备，需要通过身份验证来重置。',
        '建议开启登录邮件提醒，以便监控未授权的登录行为。',
      ],
      articles: [
        { title: '如何重置密码', url: 'https://bitmart.zendesk.com/hc/zh-cn/articles/reset-password' },
        { title: '如何重置 Google 2FA 验证器', url: 'https://bitmart.zendesk.com/hc/zh-cn/articles/reset-2fa' },
        { title: '账户安全最佳实践', url: 'https://bitmart.zendesk.com/hc/zh-cn/articles/security' },
      ],
    },
  },
]

// === Service ===
export function findAnswer(text: string, lang: string): AnswerCard | null {
  const scenarios = lang.startsWith('zh') ? scenariosZh : scenariosEn
  const lower = text.toLowerCase()
  for (const s of scenarios) {
    if (s.keywords.some(kw => lower.includes(kw.toLowerCase()))) {
      return s.answer
    }
  }
  return null
}

export function getFallbackAnswer(lang: string): AnswerCard {
  if (lang.startsWith('zh')) {
    return {
      conclusion: '抱歉，我暂时无法准确回答这个问题。您可以尝试换个说法描述问题，或者直接联系人工客服获得帮助。',
      steps: [
        '尝试使用更具体的关键词描述您的问题',
        '浏览我们的帮助中心文章',
        '点击下方"联系人工客服"按钮获取人工帮助',
      ],
      warnings: [],
      articles: [
        { title: 'BitMart 帮助中心', url: 'https://bitmart.zendesk.com/hc/zh-cn' },
      ],
    }
  }
  return {
    conclusion: "I'm sorry, I couldn't find a specific answer to your question. You can try rephrasing, or contact our human support team for further assistance.",
    steps: [
      'Try using more specific keywords to describe your issue',
      'Browse our Help Center articles',
      'Click "Talk to human support" below for personalized help',
    ],
    warnings: [],
    articles: [
      { title: 'BitMart Help Center', url: 'https://bitmart.zendesk.com/hc/en-us' },
    ],
  }
}

export function generateTicketId(): string {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const num = String(Math.floor(Math.random() * 999) + 1).padStart(3, '0')
  return `#BM-${date}-${num}`
}
