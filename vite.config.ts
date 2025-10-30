import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src/pages'),
      '@shared': resolve(__dirname, 'src/shared'),
      '@features': resolve(__dirname, 'src/features'),
      '@components': resolve(__dirname, 'src/components'),
      '@services': resolve(__dirname, 'src/services'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@theme': resolve(__dirname, 'src/theme'),
      '@': resolve(__dirname, 'src')
    }
  }
})
