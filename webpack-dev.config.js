const path = require('path');
const join = path.join;
const resolve = path.resolve;

const {camelCase} = require('lodash');
const webpack = require('webpack');
// const {TsConfigPathsPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process && process.env && process.env.NODE_ENV;
const serverPort = process.env.npm_package_config_devPort || 8081;

const libraryName = 'webgl';

const VueLoaderPlugin = require('vue-loader/lib/plugin');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './examples-webgl/index.ts',
  },
  devtool: 'none',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: camelCase(libraryName),
    filename: `${libraryName}.js`,
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/], // vue 单文件写法
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\-worker\.ts$/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              inline: true,
              publicPath: '/src/websocket/',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          esModule: false, // 这里设置为false，否则webpack打包img后src为“[object Module]”

          name: './images/[name].[ext]',
          // limit: 8192
        },
      },
    ],
  },
  plugins: [
    // new TsConfigPathsPlugin({
    //   configFile: path.resolve(__dirname, '../tsconfig.json')
    // }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      title: libraryName,
      favicon: join(__dirname, 'assets/images/logo.png'),
      filename: 'index.html',
      template: join(__dirname, 'examples-webgl/index.html'),
      hash: true,
      chunks: ['index'], // 和entry相对应
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      vue$: 'vue/dist/vue',
      '@': path.resolve(__dirname, './examples-webgl'),
      src: path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './'),
      // common: resolve('src/common'),
      // components: resolve('src/components')
    },
    plugins: [
      // new TsConfigPathsPlugin({
      //   configFile: 'tsconfig.json'
      // })
    ],
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname),
    port: serverPort,
    publicPath: '/',
  },
  // node: {
  //   fs:'empty'
  // }
};
