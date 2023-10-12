// https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 120, // 每行最大字符数
  tabWidth: 2, // tab缩进大小
  useTabs: false, // 不使用tab缩进
  semi: false, // 不使用分号
  singleQuote: true, // 使用单引号
  quoteProps: 'consistent', // 对象字面量属性名称使用一致的引号
  jsxSingleQuote: true, // jsx中使用单引号
  trailingComma: 'none', // 不使用尾逗号
  bracketSpacing: true, // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格
  bracketSameLine: true, // html标签的 > 放在同一行
  jsxBracketSameLine: true, // jsx中的 > 放在同一行
  arrowParens: 'always', // 箭头函数参数使用圆括号
  endOfLine: 'auto' // 自动识别换行是LF还是CRLF,避免CRLF和LF格式问题导致的prettier报错
}
