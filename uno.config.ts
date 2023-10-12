import { defineConfig, presetIcons } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

// class前缀解决与其它原子化css产生冲突
const prefix = 'u_'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify({
  classPrefix: prefix
})

export default defineConfig({
  presets: [
    presetWeapp({
      transform: true, // 转换微信 class
      platform: 'uniapp', // 平台
      whRpx: true, // 使用 rpx 为默认单位
      prefix
    }),
    presetWeappAttributify() //vscode插件 autocomplete 提示
    // presetIcons({
    //   scale: 1.2,
    //   warn: true
    // })
  ],
  shortcuts: [
    {
      u_center: 'u_flex u_justify-center u_items-center'
    }
  ],
  transformers: [
    transformerAttributify(), // 支持 attributify mode
    transformerClass() // 转换转义类名
  ]
})
