// const fs = require('fs');
// const readFile = function (fileName) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(fileName, function(error, data) {
//       if (error) return reject(error);
//       resolve(data);
//     });
//   });
// };

// // async函数的返回值是 Promise 对象
// const asyncReadFile = async function () { 
//   const f1 = await readFile('../data1.json');  
//   const f2 = await readFile('../data2.json');
//   console.log('f1.toString()::::', f1.toString());
//   console.log('f2.toString()::::', f2.toString());
// };

// asyncReadFile();

// ================================


// ================================

// function timeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// // 函数前面的async关键字，表明该函数内部有异步操作。调用该函数时，会立即返回一个Promise对象。
// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log('要等待吗？', value);
// }

// asyncPrint('hello world', 10000);

// ================================