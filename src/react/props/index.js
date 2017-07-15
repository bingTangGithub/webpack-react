const React = require('react');
const ReactDOM = require('react-dom');


var HelloMessage = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Hello {this.props.name}</h1>  
				<h1>Hello {this.props.name}</h1>
			</div>
			);
	}
});

var names = ['Alice','Emily','Kate'];

ReactDOM.render(

    <div>
    	<HelloMessage name='wxl' />
		<HelloMessage name='wxl2' />
	{
		names.map(function (name) {
			return <HelloMessage name={name} />
		}) 	
	}
	</div>,

    document.getElementById('example')
);

// this.props指向当前的组件，比如这里的HelloMessage  ，name是组件内部的属性，属于外部引用