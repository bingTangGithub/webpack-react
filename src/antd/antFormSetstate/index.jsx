import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import { Form, Select, Input, Button, Modal, InputNumber } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;




class CurrentForm extends Component {
	
  constructor (props) {
    super(props);
    this.state = {
      submitButtonBoolean: false,  
      submitButtonBoolean2: false,  
    }
  }

  handleExpendTypeChange = (value) => {
    // debugger;
  	this.setState({	
	  		submitButtonBoolean: true,
	  })
  }

  handleExpendTypeChange2 = (value) => {
    // debugger;
    this.setState({ 
      submitButtonBoolean2: true,
    })
  }

  render() {
    console.log('render',this.state.submitButtonBoolean);
    console.log('render2',this.state.submitButtonBoolean2);
    const  { getFieldDecorator } = this.props.form;
    return (

      <Form onSubmit = {this.handleSubmit}>
        <FormItem
              label = 'haha'
              labelCol = {{ span: 4 }}
              wrapperCol = {{ span: 8 }}
          >
              {getFieldDecorator('expendType', {
                getValueFromEvent:  this.handleExpendTypeChange,
              })(
                  <Select>
                    <Option value='采购'>采购</Option>
                    <Option value='维修'>维修</Option>
                  </Select>
              )}
          </FormItem>
       
      <Select onChange = {this.handleExpendTypeChange2}>
        <Option selected value=''>请选择</Option>
        <Option value='male'>采购</Option>
        <Option value='female'>维修</Option>
      </Select>
     </Form>
    )
  }
}
  
	
const WrappedApp = Form.create({})(CurrentForm);

ReactDOM.render(<WrappedApp />, document.getElementById('app'));
