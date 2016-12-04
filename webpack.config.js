'use strict';

var webpack = require('webpack');

module.exports = {
  // don't forget to change back to './app/index.js'
  entry: './redux-only/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-maps',
  devServer: {
    hot: true,
    port: 7000,
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
};
