const path =  require('path')

module.exports = {
  entry: path.resolve(__dirname,'./src/lodash.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[id].js"
  },
}