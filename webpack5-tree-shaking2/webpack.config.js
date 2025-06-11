const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

// const mode = "development";
const mode = "production";

const PATHS = {
  dist: path.join(__dirname, "dist"),
};
const devMode = mode === "development";
const optimization = devMode
  ? {
      // 标记未被使用的代码
      usedExports: true,
    }
  : {};
const str = devMode ? "_dev" : "_prod";

module.exports = [
  {
    mode,
    devtool: false,
    entry: {
      [`bundle_1${str}`]: "./src/index_1",
      // [`bundle_2${str}`]: "./src/index_2",
      // [`bundle_3${str}`]: "./src/index_3",
    },
    output: {
      // clean: true,
      path: path.join(PATHS.dist),
      filename: "[name].js",
    },
    optimization,
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
      ],
    },
    plugins: [].concat(
      devMode
        ? []
        : [
            new MiniCssExtractPlugin({
              filename: "css/[name].css",
            }),
          ]
    ),
  },
];
