// 打包输出的文件名称使用入口的文件名称
module.exports = {
  entry: {
    // 两个入口的名称分别为： main，common
    main: '/src/index.js',
    common: './src/index.js',
  },
  output: {
    // 打包输出的文件名称为： 入口名称（main，common） + '_name.js'
    filename: '[name]_name.js'
  }
}