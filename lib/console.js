"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * console
 */
var dev = process.env.NODE_ENV === 'development';

var _default = new Proxy({}, {
  get: function get(_, key) {
    return dev ? console[key] : function () {};
  }
});

exports["default"] = _default;