import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  handleClick(e, arg) {
    console.log('this指的是',this); // App{}
    console.log('this指的是',typeof(this.handleClick)); // function
    console.log('e指的是',e);  // test1
    console.log('arg指的是',arg); // test2

  }

  render() {
    return <button onClick = {this.handleClick.bind(this, 'test1','test2','test3')} > 我是按钮 </button>;
  }
}


class App2 extends Component {
  handleClick = (e) => {
    console.log(e);
  };
	
  render() {
    return <button onClick = {this.handleClick} > 我是按钮2 </button>;
  }
}

class App3 extends Component {
  handleClick(e) {
    console.log('e指的是',e);  // test
  }

  render() {
    return <button onClick = {() => this.handleClick('test')} > 我是按钮3 </button>;
  }
}

class NativeEventDemo extends Component {
  componentDidMount() {
    console.log('挂载完成'); 
    this.refs.button.addEventListener('click', e => {
      this.handleClick(e);
			
    });
  }

  handleClick(e) {
    console.log('e指的是',e);
  }

  componentWillUnmount() {
    console.log('卸载了');
    this.refs.button.removeEventListener('click');
		
  }
  render() {
    return <button ref='button' > 我是按钮4 </button>;
  }
}

class OrCode extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickQr = this.handleClickQr.bind(this);

    this.state = {
      active: false,
    };
  }

  componentDidMount() {
		// document.body.addEventListener('click', e=> {   //原生事件
		// 	this.setState({
		// 		active: false,
		// 		// active: !this.state.active,
		// 	}, ()=>{
		// 		console.log("!我是原生body");
		// 	});
		// });

    document.querySelector('.erWM').addEventListener('click', e => {
      e.stopPropagation();
      this.setState({
        active: !this.state.active,
      }, () => {
        console.log("!我是原生二维码");
      });
    });
  }

  componentWillUnmount() {
    document.body.removeEventListener('click');
    document.querySelector('.qr').removeEventListener('click');
  }

	

  handleClick(e) {
    e.preventDefault();  // 阻止默认
		// e.stopPropagation();
    console.log('这里的e指的是onclick吗',e);
    console.log('这里的e指的是onclick吗',e.target);
    this.setState({
      active: !this.state.active,

    }, () => {
      console.log("!1111111111")
    });
  }

  handleClickQr(e) {
    e.stopPropagation();  // 阻止冒泡事件
    console.log("我是图片")
  }

  handleClick2(e) {
    console.log("我是合成大div") 
  }


  render() {
    return (
			<div onClick = {this.handleClick2}>
				<button className = 'erWM'> 二维码 </button>
				<div style = {{ display: this.state.active ? 'block' : 'none' }} onClick = {this.handleClickQr}>hahaha</div>
			</div>
    )
  }
}
ReactDOM.render(
    // <div><App /><App2 /><App3 /></div>,
    <div><App3 /><NativeEventDemo /><OrCode /></div>,
    document.getElementById("app")
);
