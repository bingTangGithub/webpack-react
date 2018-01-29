const React = require('react');
const ReactDOM = require('react-dom');


let names = ['Alice','Emily','Kate'];

let myStyle = {
  fontSize: 100,
  color: '#FF0000'
};


ReactDOM.render(
	<div>
	  {
	    names.map(function (name,i) {
      return (<div style={myStyle} key={i} >Hello, {name}!</div>)
    })
		}
  </div>,
  document.getElementById('example')
);

//  map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。
//  上面代码体现了 JSX 的基本语法规则：
//  遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；
//  遇到代码块（以 { 开头），就用 JavaScript 规则解析。
//  
//  React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式.
//   React 会在指定元素数字后自动添加 px 。