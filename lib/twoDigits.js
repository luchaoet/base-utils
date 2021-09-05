"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = twoDigits;

/**
 * 数字补足两位
 * @param {Number} number
 */
function twoDigits(number) {
  if (typeof number === 'number') {
    return number < 10 ? "0".concat(number) : number;
  } else {
    return number;
  }
}