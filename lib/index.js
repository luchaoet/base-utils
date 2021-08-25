"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twoDigits = exports.isInteger = exports.merge = exports.isSubset = exports.sortArray = exports.randomNum = exports.generateUuid = exports.getUrlParam = exports.deleteNullValue = exports.unique = exports.isEmpty = exports.isNull = exports.isObject = exports.isArray = exports.isString = exports.download = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 下载
 * @param {String} href 下载链接
 */
var download = function download(href) {
  if (!href) return;
  var a = document.createElement('a');
  a.setAttribute('href', href);
  return a.click();
};
/**
 * 判断对象是否是字符串
 * @param {*} obj
 */


exports.download = download;

var isString = function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
};
/**
 * 判断对象是否是数组
 * @param {*} obj
 */


exports.isString = isString;

var isArray = function isArray(obj) {
  // return Array.isArrray(obj);
  return Object.prototype.toString.call(obj) === '[object  Array]';
};
/**
 * 判断对象是否是对象
 * @param {*} obj
 */


exports.isArray = isArray;

var isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object  Object]';
};
/**
 * 判断数据是否为空数据，不包括空数组、空对象
 * @param {*} value
 */


exports.isObject = isObject;

var isNull = function isNull(value) {
  return value === null || value === '' || value === undefined;
};
/**
 * 判断数据是否为空值
 * @param {*} val
 */


exports.isNull = isNull;

var isEmpty = function isEmpty(val) {
  // null or undefined
  if (val == null) return true;
  if (typeof val === 'boolean') return false;
  if (typeof val === 'number') return !val;
  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;
    // Map or Set or File

    case '[object File]':
    case '[object Map]':
    case '[object Set]':
      {
        return !val.size;
      }
    // Plain Object

    case '[object Object]':
      {
        return !Object.keys(val).length;
      }
  }

  return false;
};
/**
 * 数组去重
 * @param {*} obj
 */


exports.isEmpty = isEmpty;

var unique = function unique(obj) {
  if (isArray(obj)) {
    var array = new Set(obj);
    return _toConsumableArray(array);
  } else {
    return obj;
  }
};
/**
 * 删除对象中的空值
 * nul, '', undefined
 * @param {*} obj
 */


exports.unique = unique;

var deleteNullValue = function deleteNullValue(obj) {
  if (!isObject(obj)) return obj;

  for (var item in obj) {
    if (isNull(obj[item])) delete obj[item];
  }

  return obj;
};
/**
 * 获取url中的参数
 * @param {String} key
 */


exports.deleteNullValue = deleteNullValue;

var getUrlParam = function getUrlParam(key) {
  var reg = new RegExp("(^|&)".concat(key, ")}=([^&]*)(&|$)"));
  var v = window.location.search.substr(1).match(reg);
  if (v !== null) return v[2];
  return null;
};
/**
 * 生成唯一id
 */


exports.getUrlParam = getUrlParam;

var generateUuid = function generateUuid() {
  var d = new Date().getTime();

  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }

  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
};
/**
 * 生成 [min, max] 的随机整数，包括 min 和 max
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */


exports.generateUuid = generateUuid;

var randomNum = function randomNum(min, max) {
  var random = max - min + 1;
  return Math.floor(Math.random() * random + min);
};
/**
 * 打乱数组顺序
 * @param {Array} array
 */


exports.randomNum = randomNum;

var sortArray = function sortArray(array) {
  return array.sort(function () {
    return 0.5 - Math.random();
  });
};
/**
 * 判断数组A是否为数组B的子集
 * @param {Array} arrayA
 * @param {Array} arrayB
 */


exports.sortArray = sortArray;

var isSubset = function isSubset(arrayA, arrayB) {
  if (!isArray(arrayA) || !isArray(arrayA)) return false;
  var concat = arrayA.concat(arrayB); // 合并后的数组长度大于B数组， 则A不为B的子集

  return _toConsumableArray(new Set(concat)).length <= B.length;
};
/**
 * 合并多个对象
 * @param  {...Object} obj
 */


exports.isSubset = isSubset;

var merge = function merge() {
  for (var _len = arguments.length, obj = new Array(_len), _key = 0; _key < _len; _key++) {
    obj[_key] = arguments[_key];
  }

  return Object.assign.apply(Object, [{}].concat(obj));
};
/**
 * 判断是否为整数
 * @param  {...Number} number
 */


exports.merge = merge;

var isInteger = function isInteger(number) {
  var num = Number(number);
  return num % 1 === 0;
};
/**
 * 数字补足两位
 * @param {Number} number
 */


exports.isInteger = isInteger;

var twoDigits = function twoDigits(number) {
  if (typeof number === 'number') {
    return number < 10 ? "0".concat(number) : number;
  } else {
    return number;
  }
};

exports.twoDigits = twoDigits;