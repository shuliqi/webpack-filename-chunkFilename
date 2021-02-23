// 单个文件输出文件，可以把filename写成静态不可变的名称
module.exports = {
  entry: './src/index.js',
  output: {
    // 配置打包输出的文件名称为静态名称：index.js
    filename: 'index.js'
  }
}