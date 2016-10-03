var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: ["whatwg-fetch", "./app/App.jsx"],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loaders: ["raw-loader"]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "lodash"
    })
  ],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false
      }
    },
    historyApiFallback: true
  }
};
