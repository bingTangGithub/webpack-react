import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyInput from './MyInput.jsx';

class MyTags extends MyInput {
  constructor () {
    super(props);
    this.state = {
      inputValue:  '',
      inputVisible: false,
    };
  }
}


ReactDOM.render(
  <MyTags>
    hello
  </MyTags>,
  document.getElementById('app')
);