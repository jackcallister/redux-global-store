var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry: './src/client/client.jsx',

  output: {
    path: './lib/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};