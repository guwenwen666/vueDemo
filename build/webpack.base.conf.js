'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {//处理路径
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),//基础目录
  entry: {
    app: './src/main.js'//入口文件
  },
  output: {
    path: config.build.assetsRoot,//输出文件，默认../dist
    filename: '[name].js',//输出文件名称
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath//生产模式publicpath
      : config.dev.assetsPublicPath//开发模式publicpath
  },
  resolve: {//解析确定的拓展名，方便模块导入
    extensions: ['.js', '.vue', '.json'],
    alias: {//创建别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {//模块相关配置 ，包括loader，plugin等
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,//vue要在babel之前
        loader: 'vue-loader',//vue转普通html
        options: vueLoaderConfig//可选项：vue-loader选项配置                 
      },
      {
        test: /\.js$/,//babel
        loader: 'babel-loader',//es6装es5loader
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {//url-loader文件大小低于指定的限制时，可返回DataURL，即base64
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,//url-loader图片
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {//url-loader音视频
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {//url-loader字体
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {//是否polyfill或mock
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
