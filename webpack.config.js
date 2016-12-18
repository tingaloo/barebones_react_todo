'use strict';
var path = require("path");

module.exports = {
  context: __dirname + "/src",
  devtool: "cheap-eval-source-map",
  entry: {
    app: "./index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    publicPath: "/dist",
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000,
    // watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-airbnb"],
        }
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")

    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
};
