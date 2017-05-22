import React, { Component} from 'react';
import ReactDOM from 'react-dom';

// 父组件向子组件传递数据
class LikeButton extends Component {

	constructor () {
		super();
		this.state = {
			initInfo : {
				wxl: {
					first: {
						www: 'www',
					}
				},
			},
			xxx: 'xxx',
			lll: 'lll',
			fixData: [
				{
					a: 'a',
					b: 'b',
				},
				{
					c: 'c',
					d: 'd',
				}
			],
		};

	}

	changeObj = () => {
		let {
			fixData,
		} = this.state;
		
		 console.log('刚开始的fixData:',fixData);
		 console.log('刚开始的fixData:', ...fixData);
		 console.log('刚开始的fixData:', ...fixData);
		 
		let newfixDataFirst = Object.assign({}, fixData[0], {a: 'a2'});

		let newfixData = Object.assign({}, ...fixData, newfixDataFirst);


        console.log('newfixDataFirst:',newfixDataFirst);
        console.log('newfixData:',newfixData);

		console.log('数组的第一个元素：',fixData[0]);
		this.setState({
			fixData: [
				newfixDataFirst,
				fixData[1],
				// fixData[2],
				// fixData[3],
				// fixData[4],
			]
		})

		// this.setState({
		// 	fixData: newfixData,
		// })

		// let {
		// 	initInfo,
		// 	initInfo: {
		// 		wxl: {
		// 			first: {
		// 				www,
		// 			},
		// 		}
		// 	} ,

		// } = this.state;


		// var newObj = Object.assign({}, initInfo, {www : 'www222'});
		// console.log('initInfo变量:',initInfo);
		// console.log('www变量:',www);

		// this.setState({
		// 	initInfo : newObj,
		// })

		// console.log('setState后www:',www);
		// console.log('setState后xxx:',xxx);
	}

	
 
	render () {
		let {
			initInfo : {
				www,
			},
			xxx,
			lll,
			fixData,
		} = this.state;

		console.log('render中www:',www);
		console.log('render中xxx:',xxx);
		console.log('render中fixData中第一个对象:',fixData[0]);
		console.log('render中fixData:',fixData);

	    return (
	      	<div onClick = {this.changeObj} >wyqwiowioshbjkb</div>
	    );
	}
};



ReactDOM.render(
    <div><LikeButton /></div>,
    document.getElementById("app")
);

	
	