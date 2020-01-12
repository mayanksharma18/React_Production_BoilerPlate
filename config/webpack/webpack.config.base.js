const webpack = require('webpack');
// const path = require('path');
// const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');
const rules = require('./rules');

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
  module: {
    rules
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.sass', '.css', '.scss']
  },
  node: { fs: 'empty' },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
   HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({       // define global constants at compile time     
      APP_NAME: JSON.stringify(process.env.npm_package_name),
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
      WEBAPP_VERSION: JSON.stringify('1.0'),
    }) 
  ]
};
// function templateContent() {
//   // console.log(path.resolve(process.cwd(), '../../public/index.html'));
//   const html = fs.readFileSync(
//     path.resolve(process.cwd(), '../../public/index.html'),
//   ).toString();
// //  console.log(html)
//   return html;
// }