const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

// 子组件
var Content = React.createClass({
	render: function() {
		return (
			<div>
				<button onClick={this.props.updateStateProp}>点我</button>
				<h4>{this.props.myDataProp}</h4>
			</div>
		);
	}
});

// 父组件
 var HelloMessage = React.createClass({
 	getInitialState: function() {
 		return {value: 'Hello Runoob'};
 	},
 	handleChange: function(event) {
 		this.setState({value: '菜鸟教程'})
 	},
 	render: function() {
 		var value = this.state.value;
 		return(
 			<div>
 				<Content myDataProp = {value}  updateStateProp = {this.handleChange}>点我</Content>
 			</div>
 		);
 	}
 });

// 需要从子组件中更新父组件的 state 时，需要在父组件通过创建事件句柄（handleChange）,
// 并作为 prop (updateStateProp)传递到你的子组件上。

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);



