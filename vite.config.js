import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react({
      swcOptions: {
        jsc: {
          target: 'es2021',
        }
      }
    }),
    compression()
  ],
  server: {
    https: true,
    headers: {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'accelerometer=(), camera=(), geolocation=(), microphone=()'
    }
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'icons': ['react-icons/fa', 'react-icons/si', 'react-icons/md', 'react-icons/vsc']
        }
      }
    }
  }
})
