module.exports = {
  entry: './src/chunkFilename.js',
  output: {
    filename: 'main.js',
    // 没有列在entry 中， 但是又不得不打包的文件的命名
    chunkFilename: 'chunkFilename.js'
  }
}