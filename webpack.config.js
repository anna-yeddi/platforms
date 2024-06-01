const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // directory with the bundle 
    filename: 'index.js', // bundle filename (the same as the npm package entry point)
    library: 'ajs', // title of the package/library
    libraryTarget: 'umd', // UMD (Universal Module Definition https://github.com/umdjs/umd) - template allowing to use both RequireJS and browser
    libraryExport: 'default', // export name as default
    globalObject: 'this', // has to be set otherwise the global object will be set to "window" which is not defined for Node.js
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};