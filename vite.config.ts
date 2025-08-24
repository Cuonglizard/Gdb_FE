import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const backendPort = env.VITE_BACKEND_PORT || '5000'
  const backendHost = env.VITE_BACKEND_HOST || 'localhost'
  const backendUrl = `http://${backendHost}:${backendPort}`

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/js'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'gdbgui.html'),
          dashboard: path.resolve(__dirname, 'dashboard.html'),
        },
      },
      outDir: 'dist',
    },
    server: {
      port: 3000,
      open: '/gdbgui.html',
      hmr: {
        overlay: true,
      },
      proxy: {
        '/gdb_listener': {
          target: backendUrl,
          changeOrigin: true,
          ws: true, // Enable WebSocket proxy
        },
        // Proxy the default Socket.IO handshake path so that the polling/websocket upgrade
        // happens through the Vite dev server origin (http://localhost:3000) and avoids CORS.
        '/socket.io': {
          target: backendUrl,
          changeOrigin: true,
          ws: true,
        },
        '/api': {
          target: backendUrl,
          changeOrigin: true,
        },
        '/get_csrf_token': { target: 'http://localhost:5000', changeOrigin: true },
      },
    },
    css: {
      postcss: './postcss.config.js',
    },
  }
})
