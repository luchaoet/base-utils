"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = merge;

/**
 * 合并多个对象
 * @param  {...Object} obj
 */
function merge() {
  for (var _len = arguments.length, obj = new Array(_len), _key = 0; _key < _len; _key++) {
    obj[_key] = arguments[_key];
  }

  return Object.assign.apply(Object, [{}].concat(obj));
}