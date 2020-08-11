# fabric-demo

## Project detail

#### ImageLoad 原生 js 监听滚动条实现懒加载

- 在 js 中指定本地图片请求使用 require

#### imagePlugin 使用 vue-lazyload 实现懒加载

#### Canvas 画布 fabric

#### 2020.8.10

- 添加 editconfig 文件 帮助开发人员在不同的编辑器和 IDE 之间定义和维护一致的编码样式
- 添加 eslintrc.js 文件(解决：debugger 关键字报错)
- 安装 node-sass (1.yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass切换镜像，yarn add node-sass 安装 注意：安装完后需要将淘宝镜像再切换回来)
- 安装 prettier (prettier eslint-config-prettier eslint-plugin-prettier)

#### 2020.8.11

- vue hook 监听生命周期函数

```
    // vue通过hook监听组件的beforeDestroy生命周期函数 this.$on/$once('hook:生命周期',callback)
    this.$on("hook:beforeDestroy", () => {
      console.log("beforeDestroy...");
      window.removeEventListener("resize", this.handleResize);
    });
```

- vue hook 在父组件中监听子组件的生命周期函数
- 添加.prettierrc 文件 完善格式化代码(解决 vue template 中部自动填充空格警告问题)
- 添加 jsconfig.json 文件 (解决使用@别名不提示路径的问题)

##### others

- 1. 文件格式报红 setting.json 文件中添加"editor.tabSize": 2
