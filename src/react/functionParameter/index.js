import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Page extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this,3,7);
  }
  onChange (a,b) {
  		console.log('a与b的和:', a + b);
  }

  render () {
    return <button  type='button' onClick = {this.onChange} >加法</button>
  }
}


ReactDOM.render(
    <Page />,
    document.getElementById('app')
);

