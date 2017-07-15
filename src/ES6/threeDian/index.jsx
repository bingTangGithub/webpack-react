import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let supplyData = {
  a: 'a',
  b: 'b',
}

let changeData = {
  ...supplyData,
  c: 'c',
};
console.log('...supplyData', changeData);
console.log('supplyData', supplyData);

export default
class Input extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value1: 'wangxueli',
      value2: 'wangxueli2',
      name: 'wxl',
    };
  }

  handleChange =  (event) => {
    this.setState({
      value1: event.target.value.toUpperCase(),
    });
  }

  handleChange2 =  (event) => {
    this.setState({
      value2: event.target.value.toUpperCase(),
    });
  }

  handleChange3 =  (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value,
    });
  }


  render () {
    let { name } = this.state;

    return (
      <div>
        <input 
          type='text'
          value={this.state.value1}
          onChange={this.handleChange}
        />
        
        <input 
          type='text'
          defaultValue={this.state.value2}
          onChange={this.handleChange2}
        />
        <br />

        <input 
          type='text'
          name = 'name'
          value={name}
          onChange={this.handleChange3}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Input />,
  document.getElementById('app')
);