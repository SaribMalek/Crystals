import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/assets/frontend/',
    build: {
        outDir: '../public/assets/frontend',
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: './src/main.jsx'
        }
    },
    server: {
        port: 5173,
        strictPort: true,
        origin: 'http://localhost:5173',
        host: '0.0.0.0',
        cors: true,
        hmr: {
            host: 'localhost'
        }
    }
})