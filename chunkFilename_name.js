module.exports= {
  entry: {
    chunkfilename: './src/chunkFilename.js',
  },
  output: {
    filename: 'main.js',
    chunkFilename: '[name].js'
  }
}