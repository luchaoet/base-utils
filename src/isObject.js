/**
 * 判断对象是否是对象
 * @param {*} obj
 */
export default function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object  Object]'
}
