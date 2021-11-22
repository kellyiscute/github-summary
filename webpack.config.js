const path = require("path")

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.ts",
  target: "node",
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /.ts$/, use: "ts-loader" }
    ]
  }
}