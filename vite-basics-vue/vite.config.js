import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  optimizeDeps: {
    // include: ['esm-dep']
  },
  cacheDir: './.cache',
  resolve: {
    alias: {
      '@styles': '/src/assets/styles'
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})







