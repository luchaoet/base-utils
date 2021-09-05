/**
 * 获取url中的参数
 * @param {String} key
 */
export default function getUrlParam(key) {
  const reg = new RegExp(`(^|&)${key})}=([^&]*)(&|$)`)
  const v = window.location.search.substr(1).match(reg)
  if (v !== null) return v[2]
  return null
}
