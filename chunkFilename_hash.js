module.exports = {
    entry: './src/chunkFilename.js',
    output: {
      filename:'main.js',
      chunkFilename: '[hash].js'
    }
}