"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = randomNum;

/**
 * 生成 [min, max] 的随机整数，包括 min 和 max
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
function randomNum(min, max) {
  var random = max - min + 1;
  return Math.floor(Math.random() * random + min);
}