module.exports = [
  {
    test: /\.(js|jsx)$/,
    use: "babel-loader",
    exclude: /node_modules/,
  },
  {
    test: /\.tsx?$/,
    use: {
      loader: "ts-loader",
      options: {
        compilerOptions: {
          noEmit: false, // this option will solve the issue
        },
      },
    },
    exclude: /node_modules/,
  },
  {
    test: /\.scss$/i,
    use: [
      {
        loader: "style-loader",
        options: {
          esModule: true,
        },
      },
      { loader: "css-modules-typescript-loader" },
      { loader: "css-loader", options: { modules: true } },
    ],
  },
  {
    test: /\.css$/i,
    include: /node_modules/,
    use: [
      {
        loader: "style-loader",
        options: {
          esModule: true,
        },
      },
      { loader: "css-modules-typescript-loader" },
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
    ],
  },
  // {
  //   test: /\.scss$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: "style-loader",
  //     },
  //     {
  //       loader: "css-loader",
  //       options: {
  //         sourceMap: true,
  //         modules: {
  //           localIdentName: "[name]_[local]__[hash:base64:5]",
  //         },
  //       },
  //     },
  //     {
  //       loader: "postcss-loader",
  //     },
  //   ],
  // },
  {
    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
];
