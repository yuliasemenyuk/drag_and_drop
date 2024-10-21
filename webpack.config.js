const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    //to inform webpack dev-server where to find assets (bundle.js)
    publicPath: '/dist/'
  },
  //to defifine that there will be generated source maps already which WP should extract and wire up to the bundle it generates
  devtool: "inline-source-map",
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
};
