import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

    this.state = {
      coffee : [],
    };
  }

  handleChange(e) {
    const { checked, value } = e.target;
	
    console.log('合成事件对象e',e);
    console.log('e.target',e.target);
    console.log('e.target.checked',e.target.checked);
    console.log('checked',checked);
    let { coffee } = this.state;
	// debugger;
		// if(checked ){ 

    if (coffee.indexOf(value) === -1) {
      coffee.push(value);
    } else {
      coffee = coffee.filter(i => {
        i !== value;
        console.log('filter之后',coffee);
      });
				
    }
		// }
    console.log(coffee);
    this.setState({
      coffee,
    });
  }

  handleChange2(e) {
    const { options } = e.target;
    console.log('select中e.target',e.target);
    console.log('select中e.target.options',options);
    const area = Object.keys(options)
		.filter(i => options[i].selected === true)
		.map(i => options[i].value);
    console.log(area);
  }

	

  render() {
    const { coffee } = this.state;
// debugger;
    return (
			<div style={{ fontSize: '20px' }}>
				<p>请选择你最喜欢的咖啡：</p>
				<label>
					<input 
						type='checkbox' 
						value='First' 
						// checked={coffee.indexOf('First') !== -1} 
						checked={true} 
						onChange={this.handleChange}
					/>
					First
				</label>
				<br />
				<label>
					<input 
						type='checkbox' 
						value='Second' 
						checked={coffee.indexOf('Second') !== -1} 
						onChange={this.handleChange}
					/>
					Second
				</label>
				<div>
					<select multiple={true} onChange={this.handleChange2}>
						<option value='beijing'>北京</option>
						<option value='shanghai'>上海</option>
						<option value='hangzhou'>杭州</option>
						<option value='henan'>河南</option>
					</select>
				</div>
			</div>
    )
  }
}


ReactDOM.render(
    // <div><App /><App2 /><App3 /></div>,
    <div><App /></div>,
    document.getElementById("app")
);	

	
	