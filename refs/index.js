const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');


 var MyComponent = React.createClass({
 	handleClick: function() {
 		this.refs.myTextInput.focus();
 		// this.props.ref.focus();  //原型的方法
 		console.log(this.props);  //Object {}
 		console.log($(this.props));  //[Object]
 		console.log(this.refs);  //Object {myTextInput: input}
 		
 	},
 	render: function() {
 		return (
 			<div>
 				<input type="text" ref="myTextInput" />
 				<input type="button" value="Focus the text input" onClick={this.handleClick} />
 			</div>
 		);
 	}
 })




ReactDOM.render(
	<MyComponent />,

    document.getElementById('example')
);


//this.refs，reference（引用）的简称 内部通过该属性引用它