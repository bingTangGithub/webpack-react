import React, { Component} from 'react';
import ReactDOM from 'react-dom';

// 子组件用父组件属性
class LikeButton extends Component {
	render () {
	    return (
	      	<ToggleButton likedText='喜欢' unlikedText='讨厌' />
	    );
	}
};


class ToggleButton extends Component {
	constructor () {
		super();
		this.handleClickOnLikeButton = this.handleClickOnLikeButton.bind(this);
		this.state = {isLiked: true};
	}

	handleClickOnLikeButton () {
		this.setState({
			isLiked: !this.state.isLiked
		})
	}

  	render () {
	    return (
	        <button onClick={this.handleClickOnLikeButton} >	
				{this.state.isLiked ? this.props.likedText : this.props.unlikedText}
			</button>
	    );
  	}
};




// 子组件用父组件方法，通过在父组件上将 this 绑定给 that属性
class HelloMessage   extends Component {
	constructor () {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.state = {value: 'Hello Runoob!'};
	}
	
	handleChange (event) {
		console.log('load',this);		
    	this.setState({value: '菜鸟教程'});
  	}

	render () {
	    return (
	      	<div>
            	<Content myDataProp = {this.state.value} 
              		that = {this}>
              	</Content>
           </div>
	    );
	}
};

class Content extends Component {
	handleClick () {
		let that = this.props.that;
		that.handleChange();
	}
	render () {
		console.log('myDataProp',this.props.myDataProp);
		return(
	   		<div>
	            <button onClick = {this.handleClick.bind(this)}>点我</button>
	            <h4 style={{fontSize: '20px'}}>{this.props.myDataProp}</h4>
	        </div>
	    )
	}
};




class App extends Component {
	constructor () {
		super();
		 // 在构造函数内完成绑定
		this.handleClick = this.handleClick.bind(this);
	}
    handleClick(e) {
    	console.log(e); 
       
    }; 
    	
    render() {
    	return <button onClick = {this.handleClick} > 我是按钮 </button>;
    }
}



ReactDOM.render(
    // <div><LikeButton /></div>,
    <div><HelloMessage />
    	 {/*<App />*/}
    </div>,
    document.getElementById("app")
);


	
	