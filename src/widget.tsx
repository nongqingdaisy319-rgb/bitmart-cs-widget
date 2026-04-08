/**
 * BitMart AI Customer Support Widget
 * 
 * This is the entry point for the embeddable widget.
 * It creates its own shadow DOM container so styles don't conflict
 * with the host page (e.g., Zendesk Help Center).
 * 
 * Usage: Add <script src="bitmart-cs-widget.iife.js"></script> before </body>
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChatWidget } from './components/ChatWidget'
import { injectStyles } from './styles'

function init() {
  // Create container
  const container = document.createElement('div')
  container.id = 'bitmart-cs-widget-root'
  container.style.cssText = 'position:fixed;bottom:0;right:0;z-index:2147483647;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;'
  document.body.appendChild(container)

  // Inject styles into document head (scoped via prefix)
  injectStyles()

  // Mount React
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <ChatWidget />
    </React.StrictMode>
  )
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
