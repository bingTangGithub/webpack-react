import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Line from './Line.jsx';

import createG2 from 'g2-react';
import { Stat } from 'g2';
// export class MyLine extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <p style={{ fontSize:16 }}>收入走势</p>
//         <Line />
//         {
//         // <Line
//         //   date={this.state.requireData.date || []}
//         //   lineData={this.state.requireData.lineDataRight || []}
//         //   lineIndex={2}
//         // />
//         }
//       </div>
//     )
//   }
// }


import data from './data.json';

const Line = createG2(chart => {
  chart.line().position('time*price').color('name').shape('spline').size(2);
  chart.render();
});

class MyComponent extends Component {
  state = {
    data: data.slice(0, data.length / 2 - 1),
    width: 500,
    forceFit: true,
    height: 450,
    plotCfg: {
      margin: [10, 100, 50, 120],
    },
  }

  changeHandler = () => {
    this.setState({
      data: data.slice(data.length / 2, data.length - 1),
    });
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          plotCfg={this.state.plotCfg}
          forceFit={this.state.forceFit}
        />
        <button onClick={this.changeHandler}>Change Data</button>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'));
// ReactDOM.render(
//     <MyLine />,
//     document.getElementById("app")
// );


