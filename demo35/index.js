// import React, { Component} from 'react';
// import ReactDOM from 'react-dom';

// class Logger {
//   printName(name = 'there') {
//     this.print(`Hello ${name}`);
//   }

//   print(text) {
//     console.log(text);
//   }
// }

// const logger = new Logger();
// const { printName } = logger;
// printName();



import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
    // 写在constructor里面定义这个函数，用this，只能在constructor里面定义变量
        this.handleClick = (e) => {
        console.log(e);
    };

  render() {
    return <button onClick = {this.handleClick} > 我是按钮 </button>;
  }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
ReactDOM.render(
    // <div><LikeButton /></div>,
    <div><HelloMessage />
    	 <App />
    </div>,
    document.getElementById("app")
);


	
	