const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: '../../assets/js/scripts.js'
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['env']
              }
          },
        },
        {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?url=false', 'sass-loader']
        })
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../../assets/css/style.css'),
    new BrowserSyncPlugin({
      host: 'card.loc',
      port: 3000,
      proxy: 'card.loc',
      open: false,
      files: ["./*.*"],
    })
  ]
};