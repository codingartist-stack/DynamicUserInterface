const path = reguire('path');

module.exports = {
  entry: '/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
