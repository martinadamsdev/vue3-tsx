import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

const alias = (path: string) => {
  return resolve(__dirname, path);
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': alias('./src'),
      '@components': alias('./src/components'),
      '@views': alias('./src/views'),
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    },
    open: true,
  },
  plugins: [vue(), vueJsx()]
})
