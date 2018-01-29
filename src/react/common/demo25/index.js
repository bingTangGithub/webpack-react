

// no1.  （require引入ES6  模块）
// var es_namespace = require('./lib.js');
// console.log(es_namespace.default.bar);


import foo from './lib.js';
console.log(foo.bar);

// 由此可见，影响结果的是被引入的模式的模式（CommonJS 模块还是ES6 模块），
// 跟通过什么方式引入（require引入或者import引入）没有关系