import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class LikeButton extends Component {
  constructor () {
    super();
    this.state = { isLiked: 1 }
  }

	// componentWillMount() {
	// 	console.log('setState之前',this.state);
	// 	console.log(2222222222222);
		
	// 	this.setState({
	// 		isLiked: 2
	// 	})
	// 	console.log('setState之后',this.state);
	// }

  componentWillMount() {
    let { isLiked } = this.state;
    console.log('setState之前',isLiked);
    this.setState((prevState) => {
            // return { isLiked: prevState.isLiked + 100 } // 上一个 setState 的返回是 count 为 1，当前返回 101
      let nowState = prevState.isLiked + 100;
      console.log('setState方法中改变 state 后的state',nowState);
      return { isLiked:  nowState } 
    })
    console.log('setState之后，其实这里优先于setState方法之前执行',this.state.isLiked);
  }

	// componentDidMount() {
	// 	console.log(333333333333);
	// 	this.setState({
	// 		isLiked: 3
	// 	})
	// }

  render () {
    console.log('我这是render');
    return (
			<div>{this.state.isLiked}</div>
    )
  }
}

ReactDOM.render(
    <div><LikeButton /></div>,
    document.getElementById("app")
);	

	
	