// 使用内部的chunk  id 作为输出的文件的名称
module.exports = {
  entry: {
    index: './src/index.js',
    common: './src/common.js',
  }, 
  output: {
    filename: '[id].js'
  }
}