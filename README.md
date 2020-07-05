# @luchao/utils
##### js常用的基础函数

安装
------
    npm install @luchao/utils --save

示例
------
```javascript
import { 
    download, 
    deleteNullValue,
 } from '@luchao/utils';
// 下载
download('https://xxxx/xxxxx.exe');

const obj = deleteNullValue({
    a: 1,
    b: '',
    c: null,
    d: undefined,
});
console.log(obj); // {a: 1}

```