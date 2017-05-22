import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


let body = {
	width: '800px',
	margin: '20px auto'
}
let we ={
	border: '2px solid #800080',
	padding: '10px',
	// textAlign: 'center'
}

class NormalLoginForm extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  	handleSubmit (e) {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	        if (!err) {
	        	console.log('Received values of form: ', values);
	        }
	    });
  	}
  	render() {
    	const { getFieldDecorator } = this.props.form;

	    return (
	    	<div style={body}>
	    		<div style={we}>
				    <Form onSubmit={this.handleSubmit} className="login-form">
				        <FormItem>
				          {getFieldDecorator('userName', {
				            rules: [{ required: true, message: 'Please input your username!' }],
				          })(
				            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
				          )}
				        </FormItem>
				        <FormItem>
				          {getFieldDecorator('password', {
				            rules: [{ required: true, message: 'Please input your Password!' }],
				          })(
				            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
				          )}
				        </FormItem>
				        <FormItem>
				          {getFieldDecorator('remember', {
				            valuePropName: 'checked',
				            initialValue: true,
				          })(
				            <Checkbox>Remember me</Checkbox>
				          )}
				          <a className="login-form-forgot" href="">Forgot password</a>
				          <Button type="primary" htmlType="submit" className="login-form-button">
				            Log in
				          </Button>
				          Or <a href="">register now!</a>
				        </FormItem>
				      </Form>
			    </div>
	      	</div>
	    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


ReactDOM.render(
	// <NormalLoginForm  />,
	 <WrappedNormalLoginForm  />,

    document.getElementById('app')
);
