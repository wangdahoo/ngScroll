module.exports = {
  entry: "./src/angular-scroll.js",
  output: {
    path: './dist',
    filename: "angular-scroll.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
};
