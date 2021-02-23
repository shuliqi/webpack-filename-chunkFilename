module.exports = {
  entry: {
    index: './src/index.js',
    common: '/src/common.js'
  },
  output: {
    filename: '[hash]_[name].js'
  }
}