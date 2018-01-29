import React,{ Component } from 'react';
class HelloMessage extends Component {
  constructor() {
    super();
  }
  render() {
    return <h1 style={{ fontSize: `${40  }px` }}>Hello {this.props.name}</h1>;
  }
}
class Output extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div>
          <HelloMessage name='John' />
      </div>
    );
    // document.getElementById("app")     在return后写没有用的
  }
}
export default Output;
