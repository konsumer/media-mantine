// config for demo

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { URL } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'media-mantine': path.resolve(new URL('.', import.meta.url).pathname, './src/index.jsx')
    }
  },
  base: '.'
})
