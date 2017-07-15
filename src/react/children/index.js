const React = require('react');
const ReactDOM = require('react-dom');


var NotesList = React.createClass({
	render: function() {
		return (
			<ul>
			{
				React.Children.map(this.props.children,function(child){
					return <li>{child}</li>;
				})
			}
			</ul>
		);

	}
});


ReactDOM.render(
	<NotesList>
		<span>hello</span>
		<span>world</span>
	</NotesList>,

    document.getElementById('example')
);

//this.props 对象的属性与组件的属性一一对应，但是有一个例外，
//就是 this.props.children 属性。它表示组件的所有子节点
// React 提供一个工具方法 React.Children 来处理 this.props.children 。
// 我们可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object
