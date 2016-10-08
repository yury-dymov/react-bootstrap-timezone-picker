var webpack             = require('webpack');
var path                = require('path');
var nodeExternals       = require('webpack-node-externals');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

module.exports = {
  output:  {
    library: 'react-bootstrap-timezone-picker',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('react-bootstrap-timezone-picker.min.css')
  ],
  module:  {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json',  exclude: /node_modules/ },
      { test: /\.css$/,  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') }
    ]
  }
};
