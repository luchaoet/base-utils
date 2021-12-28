const class2type = {
    '[object Array]': "array",
    '[object Boolean]': "boolean",
    '[object Date]': "date",
    '[object Error]': "error",
    '[object Function]': "function",
    '[object Number]': "number",
    '[object Object]': "object",
    '[object RegExp]': "regexp",
    '[object String]': "string"
  }
  
  export default function type(obj) {
    return obj == null ? String(obj) : class2type[toString.call(obj)] || 'object'
  }
  