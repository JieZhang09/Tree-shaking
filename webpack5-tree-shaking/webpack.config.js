const path = require("path");
const webpack = require("webpack");

const PATHS = {
  index: path.join(__dirname, "src", "index"),
  dist: path.join(__dirname, "dist"),
  shaking: path.join(__dirname, "src", "shaking"),
};

module.exports = [
  {
    // devtool: false,
    // mode: "development",
    mode: "production",
    entry: "./src/index2",
    output: {
      path: path.join(PATHS.dist),
      filename: "bundle.js",
    },
    optimization: {
      usedExports: true,
    },
  },

  // {
  //   mode: "development",
  //   entry: {
  //     shaking: PATHS.shaking,
  //   },
  //   output: {
  //     path: path.join(PATHS.build),
  //     filename: "[name].js",
  //   },
  //   optimization: {
  //     usedExports: true,
  //   },
  // },
];
