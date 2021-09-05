/**
 * 判断对象是否是字符串
 * @param {*} obj
 */
export default function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}
