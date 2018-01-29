// const React = require('react');
// const ReactDOM = require('react-dom');


// var HelloMessage = React.createClass({
// 	render: function(){
// 		return <h1>Hello {this.props.name}</h1>;
// 	}
// });
// ReactDOM.render(
//   <HelloMessage name="John" />,
//   document.getElementById('example')
// );
// // 上面代码中，变量 HelloMessage 就是一个组件类。
// // 模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例
// 所有组件类都必须有自己的 render 方法，用于输出组件。
// 另外，组件类只能包含一个顶层标签，否则也会报错。
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloComponent extends React.Component {  
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
    <div>
    	<HelloComponent name='wxl' />
		<HelloComponent name='wx2' />
	</div>,
    document.getElementById('example')
);
