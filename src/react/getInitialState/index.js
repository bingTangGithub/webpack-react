const React = require('react');
const ReactDOM = require('react-dom');


// React把组件看成一个状态机，通过与用户的交互，实现不同状态，然后渲染UI，让用户界面和数据保持一致。
// React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。
let LikeButton = React.createClass({
 	// 以下实例中创建了 LikeButton 组件，
 	// getInitialState 方法用于定义初始状态，也就是一个对象，   return一个对象
 	// 这个对象可以通过 this.state 属性读取。 即this.state 属性可以读取getInitialState初始状态的数据
 	// 当用户点击组件，导致状态变化，this.setState 方法就修改状态值，
 	// 每次修改以后，自动调用 this.render 方法，再次渲染组件。
 	getInitialState: function() {   
 		return { liked: false };
 	},
 	handleClick: function(event) {
 		this.setState({ liked: !this.state.liked });
 	},
 	render: function() {
 		let text = this.state.liked ? '喜欢' : '不喜欢';
 		return (
 			<p onClick = {this.handleClick}>
 			你<b>{text}</b>我。点我切换状态。
 			</p>
 	  );
 	}
});




ReactDOM.render(
	<LikeButton />,

    document.getElementById('example')
);



//  state与 props   其中state比较花心，易变


// 由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。
// 一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，
// 而 this.state 是会随着用户互动而产生变化的特性。