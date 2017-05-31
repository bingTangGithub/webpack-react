import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Form, Select, Input, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class App extends React.Component {
	// constructor () {
	// 	super();
	// 	this.state = {currency:  'rmb'}
	// }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      // note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      note: 'rmb',
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
	      <FormItem
	          // label="Gender"
	          label="支出类型"
	          labelCol={{ span: 4 }}
	          wrapperCol={{ span: 8 }}
	        >
	          {getFieldDecorator('支出类型', {
	          	// initialValue: '采购123',
	            rules: [{ required: true}],
	            onChange: this.handleSelectChange,
	          })(
	            <Select>
	              <Option value="male">采购</Option>
	              <Option value="female">维修</Option>
	            </Select>
	          )}
	        </FormItem>

	        <FormItem
	          label="物资名称"
	          labelCol={{ span: 4 }}
	          wrapperCol={{ span: 8 }}
	        >
	          {getFieldDecorator('物资名称', {
	            rules: [{ required: true, message: 'Please input your note!' }],
	          })(
	            <Input />
	          )}
	        </FormItem>
	        
	         <FormItem
	          label="品牌"
	          labelCol={{ span: 4 }}
	          wrapperCol={{ span: 8 }}
	        >
	          {getFieldDecorator('品牌', {
	            rules: [{ required: true, message: 'Please input your note!' }],
	          })(
	            <Input />
	          )}
	        </FormItem>

	         <FormItem
	          label="型号"
	          labelCol={{ span: 4 }}
	          wrapperCol={{ span: 8 }}
	        >
	          {getFieldDecorator('型号', {
	            rules: [{ required: true, message: 'Please input your note!' }],
	          })(
	            <Input />
	          )}
	        </FormItem>

	        <FormItem
	          label="单价"
	          labelCol={{ span: 4 }}
	          wrapperCol={{ span: 8 }}
	        >
	          {getFieldDecorator('单价', {
	            rules: [{ required: true, message: 'Please input your note!' }],
	          })(
	            <Input suffix={<span  style={{ fontSize: 13 }} >元</span>}/>
	          )}
	        </FormItem>

	        <FormItem
	          label="折旧率"
	          labelCol={{ span: 4 }}
	          wrapperCol={{ span: 8 }}
	        >
	          {getFieldDecorator('折旧率', {
	            rules: [{ required: true, message: 'Please input your note!' }],
	          })(
	            <Input  suffix={<span  style={{ fontSize: 13 }} >月</span>}/>
	          )}
	        </FormItem>

	        <FormItem
	          label="数量"
	          labelCol={{ span: 4 }}
	          wrapperCol={{ span: 8 }}
	        >
	          {getFieldDecorator('数量', {
	          	initialValue: 3 ,
	            rules: [{ required: true}],
	            onChange: this.handleSelectChange,
	          })(
	            <Select value>
	              <Option value="1">1</Option>
	              <Option value="2">2</Option>
	              <Option value="3">3</Option>
	              <Option value="4">4</Option>
	              <Option value="5">5</Option>
	              <Option value="6">6</Option>
	              <Option value="7">7</Option>
	              <Option value="8">8</Option>
	            </Select>
	          )}
	        </FormItem>

	         <FormItem
	          label="编号1"
	          labelCol={{ span: 4 }}
	          wrapperCol={{ span: 8 }}
	        >
	          {getFieldDecorator('编号1', {
	            rules: [{ message: 'Please input your note!' }],
	          })(
	            <Input />
	          )}
	        </FormItem>

	        <FormItem
	          wrapperCol={{ span: 8, offset: 4 }}
	        >
	          <Button type="primary" htmlType="submit" style={{ backgroundColor: '#FFE000',color: 'rgba(0, 0, 0, 0.65)' ,border: 'none'}}>
	            提交
	          </Button>
	        </FormItem>
      </Form>
    );
  }
}

const WrappedApp = Form.create()(App);

ReactDOM.render(<WrappedApp />, document.getElementById('app'));