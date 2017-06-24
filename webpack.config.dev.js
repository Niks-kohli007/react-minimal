const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './source/index.js',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader',
    },
    {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract(
        combineLoaders([{
          loader: 'css-loader!sass-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        }])
      ),
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('assets/styles.css'),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
  ],
  output: {
    path: `${__dirname}/distribution`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './distribution',
    hot: true,
  },
};
