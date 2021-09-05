/**
 * 下载
 * @param {*} href 下载链接
 * @returns
 */
export default function download(href) {
  if (!href) return
  const a = document.createElement('a')
  a.setAttribute('href', href)
  return a.click()
}
