const Q = require('q');
const fs = require('fs')
console.log('Q::::::', Q);
console.log('fs::::::', fs);
// const readFilePromise = Q.denodeify(fs.readFile)

// 定义 async 函数
// const readFileAsync = async function () {
//     const f1 = await readFilePromise('../data1.json')
//     const f2 = await readFilePromise('../data2.json')
//     console.log('data1.json', f1.toString())
//     console.log('data2.json', f2.toString())

//     return 'done' // 先忽略，后面会讲到
// }
// // 执行
// const result = readFileAsync()