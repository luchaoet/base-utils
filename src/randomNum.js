/**
 * 生成 [min, max] 的随机整数，包括 min 和 max
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
export default function randomNum(min, max) {
  const random = max - min + 1
  return Math.floor(Math.random() * random + min)
}
