const config = {
  devtool: 'source-map',
  mode: 'production',
  entry: {
    app: './src/js/app.js',
    index: './src/js/index.js',
    services: './src/js/services.js',
    about: './src/js/about.js',
    sales: './src/js/sales.js',
    'free-guide': './src/js/free-guide.js',
  },
  output: {
    filename: '[name].min.js',
  },
};

module.exports = config;
