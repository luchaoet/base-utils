"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNull;

/**
 * 判断数据是否为空数据，不包括空数组、空对象
 * @param {*} value
 */
function isNull(value) {
  return value === null || value === '' || value === undefined;
}