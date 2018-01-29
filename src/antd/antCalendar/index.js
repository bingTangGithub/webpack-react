import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Calendar } from 'antd';


let body = {
  width: '800px',
  margin: '20px auto'
}
let we = {
  border: '2px solid #800080',
  padding: '10px',
	// textAlign: 'center'
}

class MyCalendar extends Component {
 	constructor() {
 		super();
   this.onPanelChange = this.onPanelChange.bind(this);
 	}

 	onPanelChange (value, mode) {
  		console.log(value, mode);
 }

  render() {
    return (
			<div style={body} >

				<div style={we}>
					<Calendar onPanelChange={this.onPanelChange} />
				</div>
				<br />
				
			</div>

    )
  }

 }




ReactDOM.render(
	<MyCalendar />,

    document.getElementById('app')
);
