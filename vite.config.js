import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { terser } from 'rollup-plugin-terser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/main" as *;`
      }
    }
  },
  build: {
    minify: 'terser',
    rollupOptions: {
      plugins: [
        terser({
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        })
      ]
    }
  }
})
