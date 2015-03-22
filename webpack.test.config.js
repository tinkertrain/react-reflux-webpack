var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var sassLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 2 version',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src'),
];

module.exports = {
  entry: {
    app: ['./src/index'],
    test: ['./test/index']
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?browsers=last 2 version',
          'sass-loader?includePaths[]=' + path.resolve(__dirname, './src'),
        ],
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['src', 'node_modules']
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.DedupePlugin()
  ],

  node: {
    fs: 'empty'
  }
}