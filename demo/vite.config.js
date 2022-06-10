import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'media-mantine': path.resolve(__dirname, '../src/index.jsx')
    }
  },
  plugins: [react()]
})
