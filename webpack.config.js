var prepareData = require('./prepareData');
var webpack = require('webpack');
var path = require('path');


module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/App'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?stage=0']
      },
      {
        test: /\.less$/,
        loader: 'style!css!less' // Run mutliple loaders
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000' // Images 25KB or smaller in size will be converted to a BASE64 string
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
