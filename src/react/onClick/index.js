const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

let HelloMessage = React.createClass({
 	getInitialState: function() {
 		return { value: 'Hello Runoob' };
 	},
 	handleChange: function(event) {
 		this.setState({ value: '菜鸟教程' })
 	},
 	render: function() {
 		let value = this.state.value;
 		return (
 			<div>
 				<button onClick={this.handleChange}>点我</button>
 				<h4>{value}</h4>
 			</div>
 		);
 	}
});

// 通过 onClick 事件来修改数据

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);



