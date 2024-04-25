const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/name.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};