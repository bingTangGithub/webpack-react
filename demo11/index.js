const React = require('react');
const ReactDOM = require('react-dom');


 var Counter = React.createClass({
 	getInitialState: function() {
 		return { clickCount: 0};
 	},
 	handlesswClick: function() {
 		this.setState(function(state) {
 			return {clickCount: this.state.clickCount + 1};
 		});
 	},
 	render: function() {
 		return (<h2 onClick={this.handlesswClick}>点我！点击次数为: {this.state.clickCount}</h2>);
 	} 
 });


// 关于 setState
  //getInitialState 方法用于定义初始状态，  return一个对象
 // setState()并不会立即改变this.state，而是创建一个即将处理的state。
 // 不能在组件内部通过 this.state修改状态，因为该组件会在调用 setState()后被替换。
 // handlesswClick这个名字可以随便起


ReactDOM.render(
	<Counter />,

    document.getElementById('example')
);



