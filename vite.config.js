import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Explicitly define env prefix to ensure .env variables are loaded
  envPrefix: 'VITE_',
  base: './', // Use relative paths for deployment
  build: {
    // Ensure proper MIME types for all assets
    assetsInlineLimit: 4096,
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Ensure proper file extensions
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Ensure proper module format
        format: 'es'
      }
    }
  },
  server: {
    // Ensure proper MIME types in development
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8'
    }
  }
})
