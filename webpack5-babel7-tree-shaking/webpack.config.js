const path = require("path");
const webpack = require("webpack");

const PATHS = {
  index: path.join(__dirname, "src", "index"),
  dist: path.join(__dirname, "dist"),
  shaking: path.join(__dirname, "src", "shaking"),
};

module.exports = [
  {
    mode: "development",
    // mode: "production",
    entry: PATHS.index,
    output: {
      path: path.join(PATHS.dist),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    optimization: {
      usedExports: true,
    },
  },
];
