const path = require("path");
const webpacknodeexternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./src/server/config/index.js",
  mode: "development",
  output: {
    filename: "server_bundle.js",
    path: path.resolve(__dirname, "dist/server"),
    clean: false,
    assetModuleFilename: "images/[name][ext][query]",
  },
  externals: [webpacknodeexternals()],
  module: {
    rules: [
      {
        test: /\.*(js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: ["last 2 versions"],
                  modules: process.browser ? false : "commonjs",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(jpg|png)$/i,
        type: "asset/resource",
      },
    ],
  },
};
