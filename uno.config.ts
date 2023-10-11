import { defineConfig, presetIcons } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify({
  classPrefix: 'u_'
})

export default defineConfig({
  presets: [
    presetWeapp({
      prefix: 'u_'
    }),
    presetWeappAttributify()
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
  transformers: [transformerAttributify(), transformerClass()]
})
