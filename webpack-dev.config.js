const path = require('path')
const join = path.join
const resolve = path.resolve
const {
  camelCase
} = require('lodash')
const webpack = require('webpack')
const {
  TsConfigPathsPlugin,
  CheckerPlugin
} = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = process && process.env && process.env.NODE_ENV
const serverPort = process.env.npm_package_config_devPort || 8081
const dev = !(env && env === 'production')
/**
 * Update this variable if you change your library name
 */
const libraryName = 'webgl-demo'
const plugins = [
  new CheckerPlugin(),
  new TsConfigPathsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    title: libraryName,
    filename: 'point.html',
    template: join(__dirname, 'example/point.html'),
    hash: true,
    chunks: ['common', 'index']
  })
]
let entry = [
  // 'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${serverPort}`,
  // bundle the client for webpack-dev-servers and connect to the provided endpoint
  'webpack/hot/only-dev-server',
  // bundle the client for hot reloading
  // `./src/${libraryName}.ts`
  `./example/point.ts`
]
// 线上环境去除console debugger
if (dev === false) {
  // plugins.push(
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false,
  //       drop_debugger: true,
  //       drop_console: true
  //     }
  //   }))


} else {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}
plugins.push(new TsConfigPathsPlugin({
  configFile: "./example/tsconfig.json"
}))
module.exports = {
  mode: 'development',
  entry: {
    index: entry
  },
  // Currently cheap-module-source-map is broken https://github.com/webpack/webpack/issues/4176
  devtool: 'source-map',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: camelCase(libraryName),
    filename: `${libraryName}.js`
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: plugins,
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'src'),
    port: serverPort,
    publicPath: '/'
  }
}
