const path = require('path');
const join = path.join;
const resolve = path.resolve;

const {camelCase} = require('lodash');
// const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const libraryName = 'rainbow';

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const plugins = [
  new VueLoaderPlugin(),
  // new TsConfigPathsPlugin({
  //   configFile: 'tsconfig.json'
  // }),
  new HtmlWebpackPlugin({
    inject: true,
    title: libraryName,
    favicon: join(__dirname, 'assets/images/logo.png'),
    filename: 'index.html',
    template: join(__dirname, 'examples-webgl/index.html'),
    hash: true,
    chunks: ['index']
  }),
  new CopyWebpackPlugin([
    {
      from: path.join(__dirname, 'examples-webgl/live2d'),
      to: path.join(__dirname, 'dist/examples-webgl/live2d')
    },
    // {
    //   from: path.join(__dirname, 'assets'),
    //   to: path.join(__dirname, 'dist/examples-webgl/live2d')
    // },
    {
      from: path.join(__dirname, 'examples-webgl/mock'),
      to: path.join(__dirname, 'dist/examples-webgl/mock')
    }
  ])
];

module.exports = {
  // 也走devDependencies
  // mode: 'production',
  mode: 'development',
  entry: {
    index: './examples-webgl/index.ts'
  },
  // devtool: 'source-map',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: camelCase(libraryName),
    filename: `${libraryName}.[contenthash:8].js`,
    chunkFilename: `${libraryName}.[contenthash:8].async.js`
    // globalObject: 'this'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      '@': resolve('examples-webgl')
    },
    plugins: [
      // new TsConfigPathsPlugin({
      //   configFile: 'tsconfig.json'
      // })
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/] // vue 单文件写法
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
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          esModule: false, // 这里设置为false，否则webpack打包img后src为“[object Module]”

          name: './images/[name].[ext]'
          // limit: 8192
        }
      }
    ]
  },
  plugins: plugins
};
