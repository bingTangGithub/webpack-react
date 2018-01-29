const React = require('react');
const ReactDOM = require('react-dom');


let Button = React.createClass({
 	getInitialState: function() {
 		return {
 			data: 0
 		};
 	},
 	setNewNumber: function() {
 		this.setState({ data: this.state.data + 1 })
 	},
 	render: function() {
 		return (
 			<div>
 				<button onClick = {this.setNewNumber}>Increment</button>
 				<Content myNumber = {this.state.data}></Content>
 			</div>
 		);
 	}
})
let Content = React.createClass({   // 初始化时调用前两个方法，更新时调用 第3-第6个方法
 	// 在渲染前调用，在客户端也在服务端
 	componentWillMount:function() {
   console.log('Component WILL MOUNT!组件将要加载')
 },
 	// 在第一次渲染后调用，只在客户端。
 	componentDidMount:function() {
   console.log('Component DID MOUNT!组件已经加载')
 },
 	// 在组件接收到一个新的prop时调用。这个方法在初始化render时不会被调用。
 	componentWillReceiveProps:function(newProps) {
   console.log('Component WILL RECEIVE PROPS!组件将要接受新的属性')
 },
 	// 返回一个布尔值，在组件接收到新的props或者state时被调用。
 	shouldComponentUpdate:function(newProps, newState) {
 		console.log('Component DID RECEIVE PROPS!组件接受到新的属性或者状态')
   return true;
  	},
 	// 在组件接受到新的 props或者state但还没有render时被调用。
 	componentWillUpdate:function(nextProps, nextState) {
   console.log('Component WILL UPDATE!组件将要更新新的属性或者状态');
  	},
 	// 在组件完成更新后立即调用。在初始化时不会被调用。
 	componentDidUpdate:function(prevProps, prevState) {
   console.log('Component DID UPDATE!组件已经更新新的属性或者状态')
  	},
 	// 在组件从DOM中移除的时候立即被调用。
 	componentWillUnmount:function() {
   console.log('Component WILL UNMOUNT!组件将要退出')
  	},
 	render: function() {
 		return (
 			<div>
 				<h3>{this.props.myNumber}</h3>
 			</div>
 		);
 	}
});


 

ReactDOM.render(
	<div>
		<Button />
	</div>,

    document.getElementById('example')
);



