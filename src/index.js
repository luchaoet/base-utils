/**
 * 下载
 * @param {String} href 下载链接
 */
export const download = (href) => {
  if (!href) return
  const a = document.createElement('a')
  a.setAttribute('href', href)
  return a.click()
}

/**
 * 判断对象是否是字符串
 * @param {*} obj
 */
export const isString = (obj) => {
  return Object.prototype.toString.call(obj) === '[object String]'
}

/**
 * 判断对象是否是数组
 * @param {*} obj
 */
export const isArray = (obj) => {
  // return Array.isArrray(obj);
  return Object.prototype.toString.call(obj) === '[object  Array]'
}

/**
 * 判断对象是否是对象
 * @param {*} obj
 */
export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object  Object]'
}

/**
 * 判断数据是否为空数据，不包括空数组、空对象
 * @param {*} value
 */
export const isNull = (value) => {
  return value === null || value === '' || value === undefined
}

/**
 * 判断数据是否为空值
 * @param {*} val
 */
export const isEmpty = (val) => {
  // null or undefined
  if (val == null) return true

  if (typeof val === 'boolean') return false

  if (typeof val === 'number') return !val

  if (val instanceof Error) return val.message === ''

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length
    }
  }

  return false
}

/**
 * 数组去重
 * @param {*} obj
 */
export const unique = (obj) => {
  if (isArray(obj)) {
    const array = new Set(obj)
    return [...array]
  } else {
    return obj
  }
}

/**
 * 删除对象中的空值
 * nul, '', undefined
 * @param {*} obj
 */
export const deleteNullValue = (obj) => {
  if (!isObject(obj)) return obj
  for (const item in obj) {
    if (isNull(obj[item])) delete obj[item]
  }
  return obj
}

/**
 * 获取url中的参数
 * @param {String} key
 */
export const getUrlParam = (key) => {
  const reg = new RegExp(`(^|&)${key})}=([^&]*)(&|$)`)
  const v = window.location.search.substr(1).match(reg)
  if (v !== null) return v[2]
  return null
}

/**
 * 生成唯一id
 */
export const generateUuid = () => {
  let d = new Date().getTime()
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now() // use high-precision timer if available
  }
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}

/**
 * 生成 [min, max] 的随机整数，包括 min 和 max
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
export const randomNum = (min, max) => {
  const random = max - min + 1
  return Math.floor(Math.random() * random + min)
}

/**
 * 打乱数组顺序
 * @param {Array} array
 */
export const sortArray = (array) => {
  return array.sort(function () {
    return 0.5 - Math.random()
  })
}

/**
 * 判断数组A是否为数组B的子集
 * @param {Array} arrayA
 * @param {Array} arrayB
 */
export const isSubset = (arrayA, arrayB) => {
  if (!isArray(arrayA) || !isArray(arrayA)) return false
  const concat = arrayA.concat(arrayB)
  // 合并后的数组长度大于B数组， 则A不为B的子集
  return [...new Set(concat)].length <= B.length
}

/**
 * 合并多个对象
 * @param  {...Object} obj
 */
export const merge = (...obj) => {
  return Object.assign({}, ...obj)
}

/**
 * 判断是否为整数
 * @param  {...Number} number
 */
export const isInteger = (number) => {
  const num = Number(number)
  return num % 1 === 0
}

/**
 * 数字补足两位
 * @param {Number} number
 */
export const twoDigits = (number) => {
  if (typeof number === 'number') {
    return number < 10 ? `0${number}` : number
  } else {
    return number
  }
}
