import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
  handleClickOnTitle (e) {
    console.log('Click on title.');
    console.log(e.target.innerHTML);
    console.log(this);
  }

  render () {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书</h1>
    )
  }
}

ReactDOM.render(
  <Title />,
  document.getElementById('app')
);