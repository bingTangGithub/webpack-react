import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
class HelloMessage extends Component {
  constructor() {
    super();
  }
  render() {
    return <h1 style={{ fontSize: `${40  }px` }}>Hello {this.props.name}</h1>;
  }
}


// var A = React.createClass({ 
//     childContextTypes:{ name: React.PropTypes.string.isRequired }, 
//     getChildContext: function() { 
//             return { name: "Jonas" }; 
//     }, 
//     render: function() { return <B />; } 
//     }); 


// 父组件
class Output extends Component {
  childContextTypes: {
        name: React.PropTypes.string.isRequired
      }

  getChildContext() {
    return { name: this.name }
  }

  constructor(props, context) {
    super(props, context)
    this.name = props.name
  }

  render() {
        // return Children.only(this.props.children)

    return (
          <div>
              你好！
          </div>
    );

  }
  
}
 // ReactDOM.render(
 //        <Output />,
 //        document.getElementById("app")
 //    );


function doRender () {
  ReactDOM.render(
        <Output name='wxl'>
            <HelloMessage  />
        </Output>,
        document.getElementById("app")
    );
}

setTimeout(doRender, 16);



