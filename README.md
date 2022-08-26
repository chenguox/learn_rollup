# learn_rollup 相关笔记

1、打包CommonJS的库

> npx rollup ./src/main.js -f cjs -o build/bundle.js

2、 打包浏览器的库

> npx rollup ./src/main.js -f iife -o build/bundle.browser.js

3、打包AMD的库

> npx rollup ./src/main.js -f amd -o build/bundle.amd.js

4、打包通用的库（必须跟上name）

> npx rollup ./src/main.js -f umd --name whyUtils -o build/bundle.umd.js

安装 commonjs 插件, 解决以 commonjs 导出的模块不能在浏览器执行

> npm install @rollup/plugin-commonjs -D

> npm install @rollup/plugin-node-resolve -D

rollup 中实现 Babel 转换代码(ES6 转成 ES5)
(1) 安装 rollup 对应的 babel 插件

> npm install @rollup/plugin-babel -D

(2) babel 需要使用 babel 核心 和 预设，所以也需要安装

> npm install @babel/core -D
> npm install @babel/preset-env -D


(3) 在 rollup 的配置文件中，配置使用babel插件

使用rollup-plugin-terser 对代码压缩

> npm install rollup-plugin-terser -D

处理css文件，安装 rollup-plugin-postcss 和 postcss

> npm install rollup-plugin-postcss postcss -D

处理 vue 文件

> npm install vue


处理 template 和 rollup-plugin-vue 插件，

注意：默认情况下我们安装的是vue2.x的版本，所以我这里指定了一下rollup-plugin-vue的版本

> npm install rollup-plugin-vue@4.6.1 vue-template-compiler -D

```javascript
import vuePlugin from 'rollup-plugin-vue'

export default {
  plugins: [
    vuePlugin(/* options */)
  ]
}
```

一个插件 rollup-plugin-replace 设置它对应的值：注入环境变量

> npm install rollup-plugin-replace -D
> @vue/compiler-sfc

搭建本地服务
安装 rollup-plugin-serve 库

> npm install rollup-plugin-serve -D

安装 rollup-plugin-livereload 帮助我们， 当文件发生变化时，自动刷新浏览器

> npm install rollup-plugin-livereload -
