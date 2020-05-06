const path = require('path');
const join = path.join;
const resolve = path.resolve;

const os = require('os');
const size = os.cpus().length;

const TerserPlugin = require('terser-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

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
    chunks: ['index'],
  }),
  new CopyWebpackPlugin([
    {
      from: path.join(__dirname, 'examples-webgl/live2d'),
      to: path.join(__dirname, 'dist/examples-webgl/live2d'),
    },
    // {
    //   from: path.join(__dirname, 'assets'),
    //   to: path.join(__dirname, 'dist/examples-webgl/live2d')
    // },
    {
      from: path.join(__dirname, 'examples-webgl/mock'),
      to: path.join(__dirname, 'dist/examples-webgl/mock'),
    },
  ]),
  new AutoDllPlugin({
    inject: true,
    filename: '[name].[contenthash:8].js',
    path: './vendor',
    entry: {
      core: [
        // 不能分成多个entry，因为每个entry都可能会依赖同样的库，但同样的库无法通过commonChunks进行合并。
        'vue',
        'vue-router',
      ],
    },
  }),
  // new BundleAnalyzerPlugin()
];

module.exports = {
  // 也走devDependencies
  // mode: 'production',
  mode: 'development',
  entry: {
    index: './examples-webgl/index.ts',
  },
  // devtool: 'source-map',
  output: {
    path: join(__dirname, 'dist'),

    publicPath: './',

    libraryTarget: 'umd',
    library: camelCase(libraryName),
    filename: `${libraryName}.[contenthash:8].js`,
    chunkFilename: `${libraryName}.[contenthash:8].async.js`,
    // globalObject: 'this'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      vue$: 'vue/dist/vue',
      '@': path.resolve(__dirname, './examples-webgl'),
      src: path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './'),
    },
    plugins: [
      // new TsConfigPathsPlugin({
      //   configFile: 'tsconfig.json'
      // })
    ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/], // vue 单文件写法
        },
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          priority: 1,
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        parallel: size,
        cache: true,
        // chunkFilter: chunk => chunk.name !== 'common'
      }),
    ],
  },
  plugins: plugins,
};
