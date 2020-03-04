const path = require('path');
const join = path.join;
// const WebpackShellPlugin = require('webpack-shell-plugin');
// const TerserPlugin = require('terser-webpack-plugin')
const {camelCase} = require('lodash');
const webpack = require('webpack');
const {
  TsConfigPathsPlugin,
  CheckerPlugin
} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process && process.env && process.env.NODE_ENV;
const serverPort = process.env.npm_package_config_devPort || 8088;
const dev = !(env && env === 'production');
/**
 * Update this variable if you change your library name
 */

const libraryName = 'rainbow';
const plugins = [
  // new TerserPlugin({
  //   parallel: true,
  //   terserOptions: {
  //     ecma: 6,
  //   },
  // }),
  new TsConfigPathsPlugin()
  // new WebpackShellPlugin({onBuildEnd:['node ./bin/generate-pcackage-json.js']})
];
let entry = [`./src/index.ts`];
module.exports = {
  mode: 'production',
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
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: plugins
};
