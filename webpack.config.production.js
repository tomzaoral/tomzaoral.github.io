var prepareData = require('./prepareData');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: './src/App',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  resolve: {
    extensions: [ '', '.js' ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel?stage=0']
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.md$/,
        loader: "html!markdown-highlight"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
};
