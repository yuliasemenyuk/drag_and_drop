const path = require("path");
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        //check for files that ends with ".ts"
        test: /\.ts$/,
        //and then handle those files with ts-loader
        use: "ts-loader",
        exclude: /node-modules/,
      },
    ],
  },
  //Webpack will look for files with these extentions and bundle them together if they're importing
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    //to clean up dist folder on each rebuild
    new CleanPlugin.CleanWebpackPlugin()
  ]
};
