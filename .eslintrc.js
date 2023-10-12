module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended'
  ],
  globals: {
    uni: 'readonly',
    wx: 'readonly',
    WechatMiniprogram: 'readonly',
    getCurrentPages: 'readonly',
    getApp: 'readonly',
    UniApp: 'readonly',
    UniHelper: 'readonly',
    App: 'readonly',
    Page: 'readonly',
    Component: 'readonly',
    AnyObject: 'readonly'
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'vue/multi-word-component-names': 'off', // 关闭多个单词组成的组件名检测
    '@typescript-eslint/no-unused-vars': 'off', // 关闭未使用变量检测
    'no-var': 'error' // 禁止使用var
  }
}
