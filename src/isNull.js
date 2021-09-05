/**
 * 判断数据是否为空数据，不包括空数组、空对象
 * @param {*} value
 */
export default function isNull(value) {
  return value === null || value === '' || value === undefined
}
