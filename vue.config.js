const path = require('path');
const webpack = require('webpack');
const port = process.env.VUE_APP_PORT; // 端口
module.exports = {
  publicPath: '/', // 打包后读取文件自动添加的前缀
  devServer: {
    port: port,
    open: true, // 自动打开网页
  },
  lintOnSave: process.env.NODE_ENV === 'development',
  pluginOptions: {
    // 全局加载变量，不是全局加载样式 需要安装style-resources-loader和vue-cli-plugin-style-resources-loader插件
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/style/index.scss')], // path.resolve相对路径转化为绝对路径
    },
  },
  chainWebpack(config) {
    // 设置应用的title
    config.set('name', process.env.VUE_APP_TITLE);
    // 设置sourcemap
    config.when(process.env.NODE_ENV === 'development', (config) => {
      config.devtool('cheap-eval-source-map');
    });
    // remove vue-cli-service's progress output
    config.plugins.delete('progress');
    config
      .plugin('simple-progress-webpack-plugin')
      .use(require.resolve('simple-progress-webpack-plugin'), [
        {
          format: 'compact',
        },
      ]);
  },
};
