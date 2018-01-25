const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    path.resolve(__dirname, 'index.js')
  ],

  output: {
    path: path.resolve(__dirname),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
