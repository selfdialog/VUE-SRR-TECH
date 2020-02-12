// const docsloader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    // 去除多余的空格设置
    preserveWhitepace: true,
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: false, //根据环境变量生成
    // loaders: {
    //     'docs': docsloader,
    // },
    // //先用这个loader解析
    // preLoader: {
    //     js: 'coffe-loader',
    // },
    // postLoader
  }
}
