import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends Component {
  constructor () {
    super();
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
		
    return (
			<button onClick={this.handleClickOnLikeButton.bind(this)} >
				
				{this.state.isLiked ? this.props.likedText : this.props.unlikedText}
			</button>
    )
  }
}


class Index extends Component {
  constructor () {
	    super()
	    this.state = {
	      likedText: '已赞初始的lalaaaaaaaaaaaaaaaaaaaa',
	      unlikedText: '赞初始的laaaaaaaaaaaaaaaaaaa'
	    }
  }

  handleClickOnChange () {
	    this.setState({
	      likedText: '取消改变后wwwwwwwwwwww',
	      unlikedText: '点赞改变后wwwwwwwwwwwwww'
	    })
  }

  render () {
	    return (
	        <div>
		        <LikeButton
		            likedText={this.state.likedText}
		            unlikedText={this.state.unlikedText} />
		        <div>
		          <button onClick={this.handleClickOnChange.bind(this)}>
		            修改 wordings
		          </button>
		        </div>
	      </div>
	    )
  }
}

ReactDOM.render(
    <div><Index /></div>,
    document.getElementById("app")
);	

	
	