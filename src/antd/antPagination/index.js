import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';


let body = {
  width: '800px',
  margin: '20px auto'
}
let we = {
  border: '2px solid #800080',
  padding: '10px',
	// textAlign: 'center'
}


class Page extends Component {
  constructor() {
    super();
    this.state = {
    		current: 3,
  		}
    this.onShowSizeChange = this.onShowSizeChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
  }
  onShowSizeChange (current, pageSize) {
	   console.log('第3个div中的current: ',current);
	   console.log('第3个div中的pageSize: ',pageSize);
	   // console.log(current, pageSize);
  }
  onChange (pageNumber) {
  		console.log('第4个div中的Page: ', pageNumber);
  }
  onChange2 (page) {
	    console.log("第5个div中的page:",page);
	    this.setState({
	        current: page,
	    });
  }

  render() {
    return (
			<div style={body}>
				<div style={we}>
					<Pagination defaultCurrent={1} total={50} />
				</div>
				<br />

				<div style={we}>
					<Pagination defaultCurrent={6} total={500} />
				</div>
				<br />

				<div style={we}>
					<Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} 
						defaultCurrent={3} total={500}  onChange={this.onShowSizeChange}
					/>
				</div>
				<br />

				<div style={we}>
					<Pagination showQuickJumper defaultCurrent={2} 
						total={500} onChange={this.onChange} 
					/>
				</div>
				<br />

				<div style={we}>
					<Pagination current={this.state.current} 
						onChange={this.onChange2} total={50} 
					/>
				</div>
			</div>
    );
  }
}


ReactDOM.render(
    <Page />,
    document.getElementById('app')
);

