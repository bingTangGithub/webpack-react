const React = require('react');
const ReactDOM = require('react-dom');


let WebSite = React.createClass({
 	// getInitialState 方法用于定义初始状态，也就是一个对象，
 	getInitialState: function() {
 		return {
 			name: '菜鸟教程',
 			site: 'http://www.runoob.com'
 		};
 	},

 	render: function() {
 		return (
 			<div>
 				
 				<Name name={this.state.name} />    
            	<Link site='我的新site' />
 			</div>
 		);
 	}
});

let Name = React.createClass({
 	render: function() {
 		return (
 			<h1>{this.props.name}</h1>
 		);
 	}
});

let Link = React.createClass({
 	render: function() {
 		return (
 			<a href={this.props.site}>{this.props.site}</a>
 		);
 	}
});



ReactDOM.render(
	<WebSite />,

    document.getElementById('example')
);


// this.state 属性可以读取getInitialState初始状态的数据
