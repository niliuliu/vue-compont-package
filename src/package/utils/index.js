/*
 * @Author: liuxiaoni
 * @Date: 2022-07-05 17:09:18
 * @LastEditors: liuxiaoni
 * @LastEditTime: 2022-07-05 17:11:42
 * @Description: 
 */
/**
 * 金额千分位
 *@param url,name
 **/

const moneyFormat = (num) => {
  let num1 = String(num)
  if (!num1.includes('.')) {
    num1 += '.'
  }
  return num1
    .replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
      return $1 + ','
    })
    .replace(/\.$/, '.00')
}
/**
 * 只展示前n位,剩余的用省略号
 *@param num
 **/

const ellipsisFormat = (value, num) => {
  let value1 = String(value)
  if (value1.length > 3) {
    return value1.slice(0, num - 1) + '...'
  }
  return value1
}

// 脱敏
const educationIdDesensit = (data) => {
  let str = data.substr(0, data.length - 4)
  let cardNo1 = data.replace(str, '*********')
  //  let cardNo1 = data.replace(/(?:\w+)(.{4})$/, '\$1********\$2');
  return cardNo1
}


export default {
  moneyFormat,
  ellipsisFormat,
  educationIdDesensit
}