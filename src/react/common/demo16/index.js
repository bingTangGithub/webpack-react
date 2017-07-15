const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

// 子组件
 var Content = React.createClass({
    render: function() {
        return (
            <div>
            	<input type='text' value={this.props.myDataProp} onChange={this.props.updateStateProp} />
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
		this.setState({value: event.target.value});
	},
	render: function() {
		var value = this.state.value;
		return(
			<div>
				<Content myDataProp = {value}  updateStateProp = {this.handleChange} ></Content>
			</div>
		);
	}
});

//该实例在子组件上使用表单  
//子组件上 onChange 方法将触发 state 的更新并将更新的值传递到
//子组件的输入框的 value 上来重新渲染界面。
//我们只需要在父组件上通过创建事件句柄(handleChange),  handleChange是事件句柄   哈哈
//并作为 prop (updateStateProp) 传递到你的子组件上。

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);



