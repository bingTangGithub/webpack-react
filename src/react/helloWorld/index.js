const React = require('react');
const ReactDOM = require('react-dom');
// 上面代码一共用了三个库： react.js 、react-dom.js 和 Browser.js,它们必须首先加载。
// 	其中，react.js 是 React 的核心库，react-dom.js 是提供与 DOM 相关的功能，
// 	Browser.js 的作用是将 JSX 语法转为 JavaScript 语法，这一步很消耗时间，
// 	实际上线的时候，应该将它放到服务器完成 -->。   babel的浏览器版本browser.js
ReactDOM.render(
        <div>
        	<h1><span>12345</span>Hello, world!</h1>
        	<h2>eww</h2>
        </div>,
        document.getElementById('example')
      );

// ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
// 上面代码将一个 h1 标题，插入 example 节点