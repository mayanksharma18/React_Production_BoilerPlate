const webpack = require('webpack');
const merge = require('webpack-merge');
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
        compress: true,
        inline: true,
        contentBase: './build',
        port: '3007',
      },
})