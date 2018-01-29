import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 父组件向子组件传递数据
class LikeButton extends Component {

  constructor () {
    super();
    this.state = {
      initInfo : {
        www: 'www',
        xxx: 'xxx',
        lll: 'lll',
      },
    }

  }

  changeObj = () => {
    console.log(this.state);
		// let {
		// 	initInfo : {
		// 		www,
		// 		xxx,
		// 		lll,
		// 	},
		// } = this.state;
	
		
		// console.log('initInfo:', initInfo);
  }
	
 
  render () {
	    return (
	      	<div onClick = {this.changeObj} >egwhdbsamndbjsahbcik</div>
	    );
  }
};



ReactDOM.render(
    <div><LikeButton /></div>,
    document.getElementById("app")
);

	
	