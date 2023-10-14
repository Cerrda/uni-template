import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
// import { resolve } from 'path'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     '@': resolve('./src')
  //   },
  //   extensions: ['.js', '.json', '.ts', '.vue'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  // },
  build: {
    // 开发阶段启用源码映射
    sourcemap: process.env.NODE_ENV === 'development'
  },
  plugins: [uni(), UnoCSS()]
})
