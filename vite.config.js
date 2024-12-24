import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
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
    target: 'es2015', // Changed from esnext for better compatibility
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) {
              return 'icons';
            }
            return 'vendor';
          }
        }
      }
    },
    sourcemap: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})
