const React = require('react');
const ReactDOM = require('react-dom');


let MyTitle = React.createClass({
  propTypes: {   // 组件的属性可以接受任意值，字符串、对象、函数等等可以。
        	// 我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。
        	// 组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return <h1> {this.props.title} </h1>;
  }
});

// 上边的 MyTitle组件有一个 title属性。propTypes告诉React，这个title属性是必须的，
// 而且他的值必须是字符串


let data = 123;

ReactDOM.render(
	<MyTitle title={data} />,

    document.getElementById('example')
);
