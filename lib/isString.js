"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isString;

/**
 * 判断对象是否是字符串
 * @param {*} obj
 */
function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}