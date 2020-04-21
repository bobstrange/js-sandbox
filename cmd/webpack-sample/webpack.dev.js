const path = require('path')
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const webpack = require('webpack')

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8000,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
