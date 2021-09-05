"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isObject;

/**
 * 判断对象是否是对象
 * @param {*} obj
 */
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object  Object]';
}