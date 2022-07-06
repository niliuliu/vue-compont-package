/*
 * @Author: liuxiaoni
 * @Date: 2022-07-05 11:42:39
 * @LastEditors: liuxiaoni
 * @LastEditTime: 2022-07-06 10:55:56
 * @Description: 
 */
import modal from "./test-modal"//引入模态框组件
import HelloWorld from "./test-page"
import utils from "./utils/index"//引入模态框组件
// const coms = [modal, HelloWorld]//将来如果有其它组件,都可以写到这个数组里

// //批量组件注册
// const install = function (Vue) {
//   // 公共组件
//   coms.forEach(com => {
//     Vue.component(com.name, com)
//   })
//   // // 公共方法
//   Vue.prototype.$utils = utils
//   // // 邮箱验证
//   // Vue.prototype.$isEmail = (s) => {
//   //   return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
//   // }
// }



// export default install //这个方法以后再使用的时候可以被use调用

export {
  modal,
  HelloWorld,
  utils
}

