require('../../commonTool/jquery.js'); // 1.4.2 版本
const $1 = $;

// const $1 = require('../../commonTool/jquery.js') ;
console.log('$1::::::', $1);
// 
import $2 from '../../commonTool/jquery.2.1.4.min.js';

let ajax1 = $1.ajax({
  url: './ChinaData.json',
  success: function () {
    console.log('success::::::');
  },
  error: function () {
    console.log('error::::::');
  }
})
console.log('ajax1.5版本以下::::::::', ajax1) // 返回一个 XHR 对象



let ajax2 = $2.ajax('./ChinaData.json')
ajax2.done(function () {
  console.log('success 1')
})
.fail(function () {
  console.log('error')
})
.done(function () {
  console.log('success 2')
})


console.log('ajax1.5版本以上::::::::', ajax2) // 返回一个 defferred 对象


function waitHandle() {
  let dtd = $2.Deferred()  // 创建一个 deferred 对象

  let wait = function (dtd) {  // 要求传入一个 deferred 对象
    let task = function () {
      console.log('执行完成')
      dtd.resolve()  // 表示异步任务已经完成
            // dtd.reject()
    }
    setTimeout(task, 2000)
    return dtd  // 要求返回 deferred 对象
  }

    // 注意，这里一定要有返回值
  return wait(dtd)
}


let w = waitHandle()
w.reject();  // 这里的 reject 覆盖掉了前边的 resolve
w.then(function () {
  console.log('ok 1')
}, function () {
  console.log('err 1')
}).then(function () {
  console.log('ok 2')
}, function () {
  console.log('err 2')
})


function waitHandle2() {
  let dtd = $2.Deferred()
  let wait = function (dtd) {
    let task = function () {
      console.log('执行完成')
      dtd.resolve()
    }
    setTimeout(task, 2000)
    return dtd.promise()  // 注意，这里返回的是 primise 而不是直接返回 deferred 对象
  }
  return wait(dtd)
}

let w2 = waitHandle2() // 经过上面的改动，w 接收的就是一个 promise 对象
// w2.reject() // w是promise对象，不具备.reject属性。报错
w2.then(function () {
  console.log('ok 1')
})
 .then(function () {
   console.log('ok 2')
 })



