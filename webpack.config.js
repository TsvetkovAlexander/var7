const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index-bundle.js',
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=app/images/[name].[ext]"},
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          },
        ),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(
      { filename: 'style.css' },
    ),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
