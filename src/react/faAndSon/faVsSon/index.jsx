import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:0,
    }
  }
  
  change = (e) => {
    let number = e.target.value;

    this.setState({
      number,
    }, () => {
      if (this.props.onSubmit) {
        this.props.onSubmit();
      }
    })

    console.log('this.props', this.props);
  }

  sonFunc = () => {
    return 123;
  }

  
  render () {
    return (
      <div>
        <input type='number' onChange={this.change}  />
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    let number = this.props.number * 100;
    return (
      <div>{`${number.toFixed(2)}%`}</div>
    )
  }
}

class PercentageApp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      number:0,
    }
  }

  change = () => {
    let input = this.refs.input;
    let number = input.state.number;
    let sonRes = input.sonFunc();
    console.log('子类input', input);
    console.log('子类input状态中的值:', number);
    console.log('调用子类方法返回的结果', sonRes);
    this.setState({
      number,
    })
  }
  render () {
    return (
      <div>
        <Input onSubmit={this.change}  ref='input' />
        <PercentageShower number={this.state.number} />
      </div>
    )
  }
}


// class Input extends Component {
//    constructor(props){
//         super(props);
//         this.state={
//             number:0,
//         }
//     }
  
//     change = (e) => {
//         let number = e.target.value;

//         this.setState({
//           number,
//         }, () => {
//             if(this.props.onSubmit){
//               this.props.onSubmit();
//             }
//         })

//         console.log('this.props', this.props);
//     }
//   render () {
//     return (
//       <div>
//         <input type='number' onChange={this.change}  />
//       </div>
//     )
//   }
// }

// class PercentageShower extends Component {
//   render() {
//     let number = this.props.number*100;
//       return (
//         <div>
//            {number.toFixed(2)+'%'}
//         </div>
//       )
//   }
// }


// class PercentageApp extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//         number:0,
//     }
//   }
  
//   change = () => {
//     let input = this.refs.input;
//     let number = input.state.number;
    
//     this.setState({
//       number,
//     })
//   }
//   render () {
//     return (
//       <div>
//         <Input onSubmit={this.change}  ref='input' />
//         <PercentageShower number={this.state.number} />
//       </div>
//     )
//   }
// }

ReactDOM.render(
    <PercentageApp />,
    document.getElementById('app')
);

	