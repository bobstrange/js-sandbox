const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

const rootDir =  path.resolve(__dirname, 'dist')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: rootDir
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: rootDir
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'prefix-[hash]-[name].[ext]',
              outputPath: 'images/',
              publicPath: './images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
       title: 'title',
       filename: 'index.html',
       template: './index.html'
    })
  ]
}
