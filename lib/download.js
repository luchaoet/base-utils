"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = download;

/**
 * 下载
 * @param {*} href 下载链接
 * @returns
 */
function download(href) {
  if (!href) return;
  var a = document.createElement('a');
  a.setAttribute('href', href);
  return a.click();
}