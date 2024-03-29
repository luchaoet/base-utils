"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = uuid;

/**
 * 生成唯一id
 */
function uuid() {
  var d = new Date().getTime();

  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }

  var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return id;
}