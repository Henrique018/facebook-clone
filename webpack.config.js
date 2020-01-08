const path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename:'bundle.js'
  },
  devServer: {
    contentBase:path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx$)/,
        exclude:/node_modules/,
        use: {
          loader:'babel-loader',
        },
      }, 
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader:'file-loader'
        }
      }
    ]
  }


}