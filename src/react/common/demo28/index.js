import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends Component {
  constructor () {
    super();
    this.state = { isLiked: false }
  }

  static defaultProps = {
    	likedText: '取消',
    	unlikedText: '点赞'
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })

    if (this.props.onClick) {
	        this.props.onClick()
	    }
  }



  render () {
    const likedText = this.props.likedText || '取消'
    const unlikedText = this.props.unlikedText || '点赞'

    const wordings = this.props.wordings || {
	        likedText: '取消',
	        unlikedText: '点赞'
	    }
    return (
			<button onClick={this.handleClickOnLikeButton.bind(this)} >
				// {this.state.isLiked ? wordings.likedText : wordings.unlikedText}
				{this.state.isLiked ? this.props.likedText : this.props.unlikedText}
			</button>
    )
  }
}

class Index extends Component {
  render () {
    return (
			<div>
				<LikeButton likedText='我想取消' unlikedText='我想点赞' />
			</div>
    )
  }
}

class Index2 extends Component {
  render () {
    return (
			<div>
				<LikeButton wordings={{ likedText: '已赞', unlikedText: '赞' }}
          		onClick={() => console.log('Click on like button!')} />
			</div>
    )
  }
}

ReactDOM.render(
    <div><Index2 /></div>,
    document.getElementById("app")
);	

	
	