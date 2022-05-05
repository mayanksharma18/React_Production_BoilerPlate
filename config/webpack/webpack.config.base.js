const webpack = require('webpack');
const paths = require('./paths');
const rules = require('./rules');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: paths.entryPath,
  output: {
    path: paths.outputPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
   HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({       // define global constants at compile time     
      APP_NAME: JSON.stringify(process.env.npm_package_name),
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
      WEBAPP_VERSION: JSON.stringify('1.0'),
    }) ,
    new ESLintPlugin({}),
  ]
};
