import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 父组件向子组件传递数据
class LikeButton extends Component {

  constructor () {
    super();
    this.handleClickOnLikeButton = this.handleClickOnLikeButton.bind(this);
    this.state = { checkeds: true,text:1,index:1 };
  }

  handleClickOnLikeButton () {
    this.setState({
      checkeds: !this.state.checkeds,
      index:this.state.index + 1,
      text:this.state.index,
    })
		
		// this.setState((prevState) => {
  //     			return { text: prevState.text + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
  //   	})
  }
 
  render () {
	    return (
	      	<ToggleButton 
		        styleee = {{ fontSize: '20px' }}
		        text = {this.state.text} 
		        onChange = {this.handleClickOnLikeButton} 
		        checkeds = {this.state.checkeds} 
	      	/>
	    );
  }
};


class ToggleButton extends Component {
  	render () {
    	let checkeds = this.props.checkeds;
    let text = this.props.text;
    console.log(this.props)
    console.log(this.props.styleee)
	    return (
	        <label style={this.props.styleee}>{text.toString()}: <input type='checkbox' checked={checkeds}  onChange = {this.props.onChange}/></label>
	    );
  	}
};


ReactDOM.render(
    <div><LikeButton /></div>,
    document.getElementById("app")
);

	
	