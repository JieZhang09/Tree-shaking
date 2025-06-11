const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, "app", "entry"),
  build: path.join(__dirname, "build"),
  shaking: path.join(__dirname, "app", "shaking"),
};

module.exports = [
  {
    mode: "production",
    entry: {
      vendor: ["react", "react-dom"],
      app: PATHS.app,
    },
    output: {
      path: path.join(PATHS.build),
      filename: "[name].js",
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
    plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  },

  {
    mode: "production",
    entry: {
      shaking: PATHS.shaking,
    },
    output: {
      path: path.join(PATHS.build),
      filename: "[name].js",
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  },
];
