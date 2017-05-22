const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

 var HelloMessage = React.createClass({
    getInitialState: function() {
        return {value: 'Hello Runoob'};
    },
    handleChange: function(event) {
        // debugger;
        console.log(123);
        console.log(event);
        console.log(event.target);
        this.setState({value: event.target.value});
    },
    render: function() {
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <h4>{value}</h4>
            </div>
        );
    }
 });

 //我们设置了输入框 input值 value。在输入框值发生变化时我们可以更新 state
 //我们可以使用 onChange 事件来监听 input的变化，并修改 state.
// 上面的代码将渲染出一个值为 Hello Runoob! 的 input 元素，并通过 onChange 事件响应更新用户输入的值。


ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);


//用户在表单填入的内容，属于用户跟组件的互动，所以不能用 this.props

// 文本输入框的值，不能用 this.props.value 读取，而要定义一个 onChange 事件的回调函数，
// 通过 event.target.value 读取用户输入的值。textarea 元素、select元素、radio元素都属于这种情况


// event.target 属性返回哪个 DOM 元素触发了事件。
// 这对比较 event.target 和 this 是非常有用的，以便判断事件是否因事件冒泡被处理。

// event   必需。event 参数来自事件绑定函数。