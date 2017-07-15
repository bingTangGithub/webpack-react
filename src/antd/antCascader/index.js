import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Cascader } from 'antd';


let body = {
	width: '800px',
	margin: '20px auto'
}
let we ={
	border: '2px solid #800080',
	padding: '10px',
	// textAlign: 'center'
}

class MyCascader extends Component {
 	constructor(){
 		super();
 		this.options = [
 			{
				value: 'zhejiang',
				label: 'Zhejiang',
				children: [{
				    value: 'hangzhou',
				    label: 'Hangzhou',
				    children: [{
				        value: 'xihu',
				        label: 'West Lake',
				    }],
				}],
			}, 
			{
			  	value: 'jiangsu',
			  	label: 'Jiangsu',
			  	children: [{
				    value: 'nanjing',
				    label: 'Nanjing',
				    children: [{
				        value: 'zhonghuamen',
				        label: 'Zhong Hua Men',
				    }],
			    }],
			}
		];

		this.onChange = this.onChange.bind(this);
 	}

 	onChange (value) {
		  console.log(value);
	}

	render() {
		return (
			<div style={body} >

				<div style={we}>
				<Cascader options={this.options} onChange={this.onChange} placeholder="Please select" />
				</div>
				<br />
				
			</div>

		)
	}

 }




ReactDOM.render(
	<MyCascader />,

    document.getElementById('app')
);
