

//no1.  CommonJS 模块输出的是值的拷贝 （require引入CommonJS 模块）
// var mod = require('./lib.js');
// console.log(mod.counter);  //3
// mod.incCounter();
// console.log(mod.counter);  //3 写成一个函数后 4


//no2.  ES6 模块输出的是值的引用   （import引入ES6 模块）
// import{counter,incCounter} from './lib';
// console.log(counter);  //3
// incCounter();
// console.log(counter);  //4


//no3.  CommonJS 模块输出的是值的拷贝  （import引入CommonJS 模块）
// import{counter,incCounter} from './lib';
// console.log(counter);  //3
// incCounter();
// console.log(counter);  //3 写成一个函数后 4


//no4.  ES6 模块输出的是值的引用  （require引入ES6 模块）
var mod = require('./lib.js');
console.log(mod.counter);  //3
mod.incCounter();
console.log(mod.counter);  //4


// 由此可见，影响结果的是被引入的模式的模式（CommonJS 模块还是ES6 模块），
// 跟通过什么方式引入（require引入或者import引入）没有关系