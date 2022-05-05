const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig,{
    mode:"development",
    devtool: 'source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
          minimize: true,
        }),
      ],
      devServer: {
        historyApiFallback: true,
        compress: true,
        static: './build',
        port: '3000',
      },
})