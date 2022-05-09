// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  // parcel index.html parcel-bundler의 경우 index.html가 진입점임.
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: "main.js",
    clean: true
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'static' }
    //   ]
    // })
    new CopyPlugin({
      patterns: [{
        // from: path.resolve(__dirname, 'static'),
        // to: path.resolve(__dirname, 'dist')
        from: "static"
      }]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}