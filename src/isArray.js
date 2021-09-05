/**
 * 判断对象是否是数组
 * @param {*} obj
 */
export default function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object  Array]'
}
