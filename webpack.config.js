const path = require('path');
const babelConfig = require('./babel.config.json');
const nodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/client/app.js'],
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, './public'),
  },
  plugins: [
    new nodemonPlugin({
      script: path.resolve(__dirname, './src/server.js'),
      watch: path.resolve(__dirname, './src'),
      ext: 'js|ts|jsx|json|css|scss'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|pubilc)/,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};