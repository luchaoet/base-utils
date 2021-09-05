/**
 * 数字补足两位
 * @param {Number} number
 */
export default function twoDigits(number) {
  if (typeof number === 'number') {
    return number < 10 ? `0${number}` : number
  } else {
    return number
  }
}
