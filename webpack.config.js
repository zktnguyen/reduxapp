import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  module: {
    loaders: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query: {
        presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  }
}