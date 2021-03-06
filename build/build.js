'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'//设置当前环境为生产环境

const ora = require('ora')//loading...进度条
const rm = require('rimraf')//删除文件  'rm -rf'
const path = require('path')//node.js路径模块
const chalk = require('chalk')//chalk插件,用来在命令行输入不同颜色的文字
const webpack = require('webpack')//引入webpack模块使用内置插件和webpack方法
const config = require('../config')//引入config下的index.js配置文件
const webpackConfig = require('./webpack.prod.conf')//引入生产模式的webpack配置文件
//开启转圈圈动画
const spinner = ora('building for production...')
spinner.start()

//调用rm方法，第一个参数的结果就是dist/static，表示删除这个路径下面的所有文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  //如果删除的过程中出现错误，就抛出这个错误，同时程序终止
  if (err) throw err
  //没有错误，就执行webpack编译
  webpack(webpackConfig, (err, stats) => {
    //这个回调函数是webpack编译过程执行
    //停止转圈圈动画
    spinner.stop()
    if (err) throw err
    //没有错误执行下面的代码，process.stdout.write和console.log类似，输出对象
    process.stdout.write(stats.toString({
      //stats对象中保存着编译过程中的各种消息
      colors: true,//增加控制台颜色开关
      modules: false,//不增加内置模块信息 
      children: false, // 不增加子级信息If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,//允许较少的输出
      chunkModules: false//不将内置模块的信息加到包信息
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    //以上就是在编译过程中，持续打印消息
    //下面是编译成功的消息

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
