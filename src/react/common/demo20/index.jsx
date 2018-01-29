import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
// require("./Action.scss")

import './Action.scss';


export default 
class Action extends Component {   // 之前  var Action = React.createClass({})
  static defaultProps = {
    actionList: []
  };

  render() {   // 之前  render: function(){}
    console.log(this.props.actionList);
    let list = this.props.actionList.map(function (ele, index) {   // 对数组的每个元素调用定义的回调函数并返回包含结果的数组。
      console.log(ele);
      console.log(index);
      return (
        <div className='row' key={index}>
          <img className='icon-action' src={ele.id} />
          <div className='value'>{ele.value}</div>
        </div>
      )
    })
    if (list.length === 0) {
      return null;
    } else {
      return (
        <div className='m-actio
        n'>
          {list}
        </div>
      )
    }

  }
}

let arr = [
  {
    value: "123456",
        // id: 999,
  }, {
    value: "16",
        // id: 995,
  },
];

function doRender () {
  ReactDOM.render(
        <Action actionList={arr} /> ,
        document.getElementById("app")
    );
}

setTimeout(doRender, 16);



// ES6 class创建的组件语法更加简明，也更符合javascript。内部的方法不需要使用function关键字。