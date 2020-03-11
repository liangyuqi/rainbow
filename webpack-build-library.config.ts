// "@types/debug": "0.0.31",

import path from 'path';
const join = path.join;
const WebpackShellPlugin = require('webpack-shell-plugin');
const {camelCase} = require('lodash');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');
const env = process && process.env && process.env.NODE_ENV;
/**
 * Update this variable if you change your library name
 */

const libraryName = 'rainbow';
const plugins = [
  // new webpack.BannerPlugin('版权所有，翻版必究'),
  // new TerserPlugin({
  //   parallel: true,
  //   terserOptions: {
  //     ecma: 6,
  //   },
  // }),
  new TsConfigPathsPlugin()
  // new WebpackShellPlugin({onBuildEnd:['node ./bin/generate-package-json.js']})
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
    // globalObject: 'this'
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
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: './images/[name].[ext]'
          // limit: 8192
        }
      },
      {
        test: /\-worker\.ts$/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              inline: true,
              publicPath: '/src/websocket/'
            }
          }
        ]
      }
    ]
  },
  plugins: plugins
};
