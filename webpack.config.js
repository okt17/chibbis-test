const
  path = require('path'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  WebpackNotifierPlugin = require('webpack-notifier'),
  APP_DIR = path.resolve(__dirname, 'src'),
  BUILD_DIR = path.resolve(__dirname, 'build'),
  ROOT_DIR = path.resolve(__dirname);

module.exports = (env, argv) => ({
  entry: [
    'babel-polyfill',
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, 'build/*.*')),
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ],
  resolve: {
    alias: {
      app: APP_DIR,
      root: ROOT_DIR,
    },
    enforceExtension: false,
    extensions: ['.js', '.jsx', '.scss', '.json', '.png']
  },
  devtool: (
    argv !== undefined // required for eslint
    &&
    argv.mode === 'development'
  )
    ? 'source-map'
    : undefined
});
