import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Button from 'antd/lib/button';
// import 'antd/lib/button/style';

import { Button, Radio, Icon, DatePicker } from 'antd';

const ButtonGroup = Button.Group;


let body = {
  width: '800px',
  margin: '20px auto'
}
let we = {
  border: '2px solid #800080',
  padding: '10px',
	// textAlign: 'center'
}
let buttonMargin = {
  margin: '10px'
}


class ButtonSize extends React.Component {
  constructor() {
    super();
    this.state = {
		    size: 'default',
		    startValue: null,
		    endValue: null,
		    endOpen: false,
    };

  }
  	handleSizeChange = (e) => {
		    this.setState({ size: e.target.value });
		 
  }
  disabledStartDate = (startValue) => {
	    const endValue = this.state.endValue;
	    if (!startValue || !endValue) {
	      return false;
	    }
	    return startValue.valueOf() > endValue.valueOf();
  }
  
  dian = () => {
   	 	const [a, ...b] = [1, 2, 3];
	    console.log('a:',a);
	    console.log('b:',b);

	    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
	     console.log('x:',x); 
	     console.log('y:',y); 
	     console.log('z:',z);

	    let obj = { w: 'w', x:'x', l:'l' };
	    let { ...newObj } = obj;
	    // console.log('点点点对象:', newObj);

	    let objWXL = { wang: 'wang', xue:'xue', li:'li',  length: 3 };
	    // console.log('常用...', {...objWXL});

	    let objWXL2 = { wang: 'wang', xue:'xue', li:'li',  length: 3 };
	    // let objWXL2 = {0: 'wang', 1:'xue', 2:'li',  length: 3}; //类数组的对象
	    // console.log('{...objWXL2}', {...objWXL2});
	    console.log('[...objWXL2]', [...objWXL2]);
	    // console.log('关于数组...', ...objWXL2);
	    console.log('Array.from(objWXL2)', Array.from(objWXL2));

	    let a1 = { a:'a',b:'b' };
	    let a2 = { b:'b2' };
	    let aNew = Object.assign({},a1,a2);
	    let aNew2 = { ...a1,...a2 };
	    console.log('Object.assign:', aNew);
	    console.log('...:', aNew2);


	    let arrayLike = {  
      '0': 'a',  
      '1': 'b',  
      '2': 'c',  
      length: 3  
    };  
		// TypeError: Cannot spread non-iterable object.  
    let arr = [...arrayLike]; 
    console.log('类数组的对象：',arr); 

  }

  render() {
    const size = this.state.size;
     // type="primary" 按钮为蓝色
    return (
      <div style={body}>
      	<div>
      		<button onClick={this.dian}>点点点</button>
	        <DatePicker
	          disabledDate={this.disabledStartDate}
	          /* showTime
	          format="YYYY-MM-DD HH:mm:ss"
	          value={startValue}
	          placeholder="Start"
	          onChange={this.onStartChange}
	          onOpenChange={this.handleStartOpenChange}*/
	        />
	        <DatePicker
	          // disabledDate={this.disabledEndDate}
	          // showTime
	          // format="YYYY-MM-DD HH:mm:ss"
	          // value={endValue}
	          // placeholder="End"
	          // onChange={this.onEndChange}
	          // open={endOpen}
	          // onOpenChange={this.handleEndOpenChange}
	        />
      </div>
       {/* <div style={we}>
		    <Button type="primary">Primary</Button> 
		    <Button>Default</Button>
		    <Button type="dashed">Dashed</Button>
		    <Button type="danger">Danger</Button>
		</div>
		<br />

		<div style={we}>
	        <Radio.Group value={size} onChange={this.handleSizeChange}>
	          <Radio.Button value="large">Large</Radio.Button>
	          <Radio.Button value="default">Default</Radio.Button>
	          <Radio.Button value="small">Small</Radio.Button>
	        </Radio.Group>
	        <br /><br />
	        <Button type="primary" shape="circle" icon="download" size={size} />
	        <Button style={buttonMargin} type="primary" icon="download" size={size}>Download</Button>
	        <Button type="primary" size={size}>Normal</Button>
	        <br />
	        <Button.Group size={size}>
	          <Button style={buttonMargin} type="primary">
	            <Icon type="left" />Backward
	          </Button>
	          <Button type="primary">
	            Forward<Icon type="right" />
	          </Button>
	        </Button.Group>
        </div>
        <br />

        <div style={we}>
	        <Button type="primary" shape="circle" icon="search" />
		    <Button style={buttonMargin} type="primary" icon="search">Search</Button>
		    <Button style={buttonMargin} shape="circle" icon="search" />
		    <Button icon="search">Search</Button>
		    <br />
		    <Button shape="circle" icon="search" />
		    <Button style={buttonMargin} icon="search">Search</Button>
		    <Button type="dashed" shape="circle" icon="search" />
		    <Button style={buttonMargin} type="dashed" icon="search">Search</Button>
	    </div>
	    <br />

	    <div style={we}>
		    <Button style={buttonMargin} type="primary">Primary</Button>
		    <Button type="primary" disabled>Primary(disabled)</Button>
		    <br />
		    <Button style={buttonMargin}>Default</Button>
		    <Button disabled>Default(disabled)</Button>
		    <br />
		    <Button style={buttonMargin} >Ghost</Button>
		    <Button disabled>Ghost(disabled)</Button>
		    <br />
		    <Button style={buttonMargin} type="dashed">Dashed</Button>
		    <Button type="dashed" disabled>Dashed(disabled)</Button>
		</div>
		<br />

		<div style={we}>
		    <h4>Basic</h4>
		    <ButtonGroup  style={buttonMargin}>
		      <Button>Cancel</Button>
		      <Button type="primary">OK</Button>
		    </ButtonGroup>
		    <ButtonGroup  style={buttonMargin}>
		      <Button disabled>L</Button>
		      <Button disabled>M</Button>
		      <Button disabled>R</Button>
		    </ButtonGroup>
		    <ButtonGroup  style={buttonMargin}>
		      <Button type="primary">L</Button>
		      <Button>M</Button>
		      <Button>M</Button>
		      <Button type="dashed">R</Button>
		    </ButtonGroup>

		    <h4>With Icon</h4>
		    <ButtonGroup  style={buttonMargin}>
		      <Button type="primary">
		        <Icon type="left" />Go back
		      </Button>
		      <Button type="primary">
		        Go forward<Icon type="right" />
		      </Button>
		    </ButtonGroup>
		    <ButtonGroup  style={buttonMargin}>
		      <Button type="primary" icon="cloud" />
		      <Button type="primary" icon="cloud-download" />
		    </ButtonGroup>
		 </div>
		  <br />

		<div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
		    <Button type="primary" ghost>Primary</Button>
		    <Button ghost>Default</Button>
		    <Button type="dashed" ghost>Dashed</Button>
		    <Button type="danger" ghost>danger</Button>
	    </div>*/}
      </div>
    );
  }
}


ReactDOM.render(
    <ButtonSize />,
    document.getElementById('app')
);

