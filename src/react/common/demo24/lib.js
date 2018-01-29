
// no1.  CommonJS 模块输出的是值的拷贝
// var counter = 3;
// function incCounter(){
// 	counter++;
// }
// module.exports = {
// 	// counter: counter,
// 	get counter(){
// 		return counter
// 	},
// 	incCounter: incCounter,
// }



// no2.  ES6 模块输出的是值的引用
// export let counter = 3;
// export function incCounter(){
// 	counter++;
// }


// no3.  CommonJS 模块输出的是值的拷贝  （require引入ES6 模块）
// var counter = 3;
// function incCounter(){
// 	counter++;
// }
// module.exports = {
// 	// counter: counter, 
// 	get counter(){
// 		return counter
// 	},
// 	incCounter: incCounter,
// }

// no4.  ES6 模块输出的是值的引用  （require引入ES6 模块）
export let counter = 3;
export function incCounter() {
  counter++;
}