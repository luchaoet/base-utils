/**
 * 合并多个对象
 * @param  {...Object} obj
 */
export default function merge(...obj) {
  return Object.assign({}, ...obj)
}
