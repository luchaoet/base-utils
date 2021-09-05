/**
 * 数组去重
 * @param {*} obj
 */
export default function unique(obj) {
  if (isArray(obj)) {
    const array = new Set(obj)
    return [...array]
  } else {
    return obj
  }
}
