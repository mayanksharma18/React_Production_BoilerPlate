module.exports = [
  {
    enforce: 'pre',
    test: /\.(js|jsx)$/,
    loader: 'eslint-loader',
    options: { emitError: true, failOnError: true }
  },
  {
    test: /\.(js|jsx)$/,
    use: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
      'postcss-loader'
    ],
    exclude: /\.module\.css$/
  },
  {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true
        }
      },
      'postcss-loader'
    ],
    include: /\.module\.css$/
  },
  {
    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }
];
