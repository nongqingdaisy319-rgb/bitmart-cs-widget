import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Build as a single self-contained JS file (widget/plugin mode)
    lib: {
      entry: 'src/widget.tsx',
      name: 'BitmartCSWidget',
      fileName: 'bitmart-cs-widget',
      formats: ['iife'],
    },
    rollupOptions: {
      // Bundle everything into one file (no external deps)
    },
    cssCodeSplit: false,
  },
  // Dev server serves the demo page
  server: {
    host: '0.0.0.0',
    port: 5174,
  },
})
