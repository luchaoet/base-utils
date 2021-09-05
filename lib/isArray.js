"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isArray;

/**
 * 判断对象是否是数组
 * @param {*} obj
 */
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object  Array]';
}