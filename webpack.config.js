var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var sassLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 2 version',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src'),
];

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './src/index'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/build/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['src', 'node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel-loader?experimental&externalHelpers'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?browsers=last 2 version',
          'sass-loader?includePaths[]=' + path.resolve(__dirname, './src'),
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};