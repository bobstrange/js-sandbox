const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const outputDir = 'dist'

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, outputDir)
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
              publicPath: './dist/images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(outputDir)
  ]
}
