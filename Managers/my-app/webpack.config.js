const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Входной файл
  output: {
    filename: 'bundle.js', // Выходной файл
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Шаблон HTML
    }),
  ],
  mode: 'development', // Режим разработки
};