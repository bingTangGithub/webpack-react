import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 父组件用子组件属性
// 子类
// 子组件改变父组件state的办法只能是通过onClick触发父组件声明好的回调，
// 也就是父组件提前声明好函数或方法作为契约描述自己的state将如何变化
// 比如这里的子类 ButtonComment 通过 onClick方法去执行父类的 getSwordCount2回调，
// 其中getSwordCount2里描述了自己的state如何变化，
// 方法一：：：：：：：

// class Child extends Component {
//   constructor () {
//     super();
//     this.sendSword = this.sendSword.bind(this);
//     this.state = { count: 0 };
//   }

//   sendSword () {
//     this.setState({ count:this.state.count + 10 }, () => {
//     // debugger;
//     console.log('this.state.count',this.state.count);
//     this.props.getSwordCount2();
//     // this.props.getSwordCount2;  //这种写法不会调用的
//     // this.props.getSwordCount();  //这种写法会报错的
//     }); 
//  }

//   render () {
//     return (
//       <button onClick={this.sendSword}>{this.props.buttonName}</button>
//     )
//   }
// };


// // 父组件

// class Father extends Component { 
//   constructor () {
//     super();
//     this.sendSwordParent = this.sendSwordParent.bind(this);
//     this.getSwordCount = this.getSwordCount.bind(this);
//     this.state = { sendCount: 0 };
//   }
    
//   sendSwordParent () {
//     this.refs.getSwordButton.sendSword();
//     console.log(' this.refs.getSwordButton', this.refs.getSwordButton);
//   } 

//   getSwordCount () {
//     // 通过  this.refs.getSwordButton 获取 子类对象 加完之后将加完的结果通知给子类，即，将结果通过 this.refs.getSwordButton 给子类的state.count 设置
//     this.setState({ sendCount: this.refs.getSwordButton.state.count + 1 }, () => {
//       this.refs.getSwordButton.setState({
//         count: this.refs.getSwordButton.state.count + 1
//       });
//     });
//   }

//   render () {
//     return (
//       <div>
//           <Child ref='getSwordButton' getSwordCount2={this.getSwordCount} buttonName='儿子送宝刀'/>
//           <button onClick={this.sendSwordParent}>通过老爸送宝刀</button>
//           <p style={{ fontSize: '20px' }}>
//             父子俩共送{this.state.sendCount}把宝刀！！！
//           </p>
//       </div>
//     );
//   };
// };


// 方法二：：：：：：：
class Parent extends Component {
  state = {
    msg: 'start'
  };
  
  transferMsg(msg) {
    this.setState({
      msg
    });
  }

  render() {
    return (<div>
            <p>child msg: {this.state.msg}</p>
            <Child_1 transferMsg = {msg => this.transferMsg(msg)} />
          </div>);
  }
}

class Child_1 extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.transferMsg('end')
    }, 1000);
  }

  render() {
    return (<div>
      <p>child_1 component</p>
    </div>)
  }
}

ReactDOM.render(
  // <Father />,
  <Parent />,
  document.getElementById('app')
);


  
  