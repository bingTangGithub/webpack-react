const React = require('react');
const ReactDOM = require('react-dom');


let Hello = React.createClass({
 	getInitialState: function() {
 		return {
 			opacity: 1.0
 		};
 	},
 	// componentDidMount : 在第一次渲染后调用，只在客户端。
 	// 之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
 	componentDidMount: function() {
 		this.timer = setInterval(function() {
 			let opacity = this.state.opacity;
 			opacity -=  .05;
 			if (opacity < 0.1) {
 				opacity = 1.0;
 			}
 			this.setState({
 				opacity: opacity
 			});
 		}.bind(this),100);
 	},
 	render: function() {
 		return (
 			<div style={{ opacity: this.state.opacity }}>
 			    Hello {this.props.name}
 			</div>
 		);
 	}
});
 

ReactDOM.render(
	<Hello name='world' />,

    document.getElementById('example')
);



