import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      imports: ["vue", "@vueuse/core", "pinia", "vue-router", "vue-i18n"],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: false,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      vueTemplate: true,
      // 导入函数类型声明文件路径 (false:关闭自动生成)
      // dts: false,
      // dts: "/auto-imports.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      // dts: false,
      // dts: "/components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8088,
    open: true,
    proxy: {
      // 代理 /dev-api 的请求
      '/api': {
        changeOrigin: true,
        target: 'http://localhost:3600',
        rewrite: (path) => path.replace(new RegExp("^" + '/api'), ""),
      },
    },
  },
})
