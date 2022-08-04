import commonjs from "@rollup/plugin-commonjs"
// import resolve from "@/rollup/plugin-node-resolve"
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import vuePlugin from 'rollup-plugin-vue'
import serve from 'rollup-plugin-serve';
import livereload from "rollup-plugin-livereload"
import replace from 'rollup-plugin-replace'

export default {
  // 入口
  input: "./src/main.js",
  output: {
    format: "umd",
    name: 'formatUtils',
    file: "dist/formatUtils.js"
  },
  plugins: [
    commonjs(),
    // resolve()
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    terser(),
    postcss(),
    vuePlugin(/* options */),
    serve({
      open: true, // 是否打开浏览器
      port: 8080, // 监听哪一个端口
      contenBase: "." // 服务 哪一个文件夹
    }),
    livereload(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
  // 多出口
  // output: [
  //   {
  //     format: "umd",
  //     name: "whyUtils",
  //     file: "dist/why.umd.js"
  //   },
  //   {
  //     format: "cjs",
  //     file: "dist/why.commonjs.js"
  //   },
  //   {
  //     format: "amd",
  //     file: "dist/why.amd.js"
  //   },
  //   {
  //     format: "es",
  //     file: "dist/why.es.js"
  //   },
  //   {
  //     format: "iife",
  //     name: "whyUtils",
  //     file: "dist/why.browser.js"
  //   }
  // ]
}