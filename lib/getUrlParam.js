"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getUrlParam;

/**
 * 获取url中的参数
 * @param {String} key
 */
function getUrlParam(key) {
  var reg = new RegExp("(^|&)".concat(key, ")}=([^&]*)(&|$)"));
  var v = window.location.search.substr(1).match(reg);
  if (v !== null) return v[2];
  return null;
}