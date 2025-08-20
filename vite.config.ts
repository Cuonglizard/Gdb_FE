import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/js'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        gdbgui: path.resolve(__dirname, 'gdbgui.html'),
        dashboard: path.resolve(__dirname, 'dashboard.html'),
      },
    },
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
})
