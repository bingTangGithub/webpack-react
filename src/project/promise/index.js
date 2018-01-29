// 在浏览器环境下运行，而非 node 环境， deffer 对象转化为 promise 对象
// cosnt jsPromise = Promise.resolve($.ajax('/whatever.json'))
// jsPromise.then(data => {
//     // ...
// })

// ================================


// var wait = function () {
//   var task = function () {
//     console.log('执行完成');
//   }
//   setTimeout(task, 2000);
// }

// wait();



// const wait = function () {
//   // 定义一个 promise 对象
//   const promise = new Promise((resolve, reject) => {
//     // 将之前的异步操作，包括到这个 new Promise 函数之内
//     const task  = function () {
//       console.log('执行完成');
//       resolve();  // callback 中去知执行 resolve 或者 reject
//     }
//     setTimeout(task, 2000);
//   })

//   // 返回 promise 对象
//   return promise;
// }

// const w = wait();
// w.then(() => {
//   console.log('ok 1');
// }, () => {
//   console.log('err 1');
// }).then(() => {
//   console.log('ok 2');
// }, () => {
//   console.log('err 2');
// })

// ================================


const fs = require('fs');
const path  = require('path');
const readFilePromise = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err); // 注意，这里执行 reject 是传递了参数，后面会有地方接收到这个参数
      } else {
        // console.log('读取文件后的data是：：：：：：', data, typeof data);
        console.log('读取文件后的data.toString()是：：：：：：', data.toString());
        resolve(data.toString()); // 注意，这里执行 resolve 时传递了参数，后面会有地方接收到这个参数
      }
    })
  })
}

// ================================

// const fullFileName = path.resolve(__dirname, './data1.json');
// const result = readFilePromise(fullFileName);

// console.log('result:::::::::::', result);

// // 如果then有链式操作，前面步骤返回的值，会被后面的步骤获取到
// result.then(data => {
//   console.log('data::::::::', data);

//   return JSON.parse(data).a; //  这里将 a 属性的值 return
// }).then(a => {
//   console.log('a:::::', a);
// }).catch(err => {
//   console.log(err.stack)  // 这里的 catch 就能捕获 readFilePromise 中触发的 reject ，而且能接收 reject 传递的参数
// })
// 对于Promise中的异常处理，我们建议用catch方法，而不是then的第二个参数。

// ================================

// 串联多个异步操作
// 需求： 先读取data2.json的内容，当成功之后，再去读取data1.json。
const fullFileName2 = path.resolve(__dirname, './data2.json')
const result2 = readFilePromise(fullFileName2)
const fullFileName1 = path.resolve(__dirname, './data1.json')
const result1 = readFilePromise(fullFileName1)


// ================================
// result2.then(data => {
//   console.log('data2.json的内容：：：：：', data)
//   return result1  // 此处只需返回读取 data1.json 的 Promise 即可
// }).then(data => {
//   console.log('data1.json的内容：：：：：', data); // data 即可接收到 data1.json 的内容
// })
// ================================

// 并行多个异步操作
// 需求： 读取两个文件data1.json和data2.json，现在我需要一起读取这两个文件，等待它们全部都被读取完，再做下一步的操作。
// Promise.all([result1, result2]).then(datas => {
//   // 接收到的 datas 是一个数组，依次包含了多个 promise 返回的内容
//   console.log('数组的值，第1个', datas[0]);
//   console.log('数组的值，第2个', datas[1]);
// })

// ================================
// 并行多个异步操作
// 读取两个文件data1.json和data2.json，现在我需要一起读取这两个文件，但是只要有一个已经读取了，就可以进行下一步的操作。
Promise.race([result1, result2]).then(data => {
  console.log('第一次读到的文件：：：：：', data);
})