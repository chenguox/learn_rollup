import { dateFormat } from './utils/format'
// import _ from 'lodash'
// import createApp from 'vue'
// import App from './App.vue'

createApp(App)

const message = "Hello Rollup";
console.log(message);

const sum = (num1, num2) => {
  return num1 + num2;
}

console.log(dateFormat());
// console.log(_.join(['abc','bbb']))

// const app = createApp(App)
// app.mount('#app')
export {
  sum
}
