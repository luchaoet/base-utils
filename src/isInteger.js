/**
 * 判断是否为整数
 * @param  {...Number} number
 */
export default function isInteger(number) {
  const num = Number(number)
  return num % 1 === 0
}
