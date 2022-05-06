const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'] // 注意:这里的数组是反向读取的（即从右向左）
    },
    { 
      test: /\.less$/, 
      use: ['style-loader', 'css-loader', 'less-loader']
    },{
      test: /\.(htm|html)$/,
      use: [
        'raw-loader'
      ]
    }]
  }
}