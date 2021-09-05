"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isInteger;

/**
 * 判断是否为整数
 * @param  {...Number} number
 */
function isInteger(number) {
  var num = Number(number);
  return num % 1 === 0;
}