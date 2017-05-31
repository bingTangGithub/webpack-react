import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import PropTypes from 'prop-types';
import Util from '../commonTool/extend/Util.jsx';

import { Form, Select, Input, Button, Modal, InputNumber } from 'antd';
const FormItem = Form.Item;
// const Option = Select.Option



const ComponentMap = {
	
  input : (props) => {
  	console.log('props:',props);
    return (
			<Input />
    )
  },
  select: (props) => {
    let {
			options,
		} = props;

    let optionsContent = options.map((opt, index) => {
      return (
				<Option key={index} value={opt.value}>{opt.label}</Option>
      )
    });

    return (
			<Select>
				{optionsContent}
			</Select>
    )
  }
}


let genSelectOptions = (count = 20) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(
			{ id: i, value: i + 1, label: i + 1, key: i + 1 }
		);
  }

  return result;
};

class CurrentForm extends Component {
	
  constructor (props) {
    super(props);
    this.state = {
    	inputSize: 2,
    	formItemCol: {
    		labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    	},
    	formItemData: [
    		{
    			label: '物资名称',
    			id: 'materials',
    			rules: [
    				{ required: true, message: `物资名称不能为空!`, },
		        ],
    			getValueFromEvent: this.handleCurrencyQuantityChange,
    			type: 'input',
    			value: '',
    			defaultValue: '',
    		},
    		{
    			label: '物资名称222',
    			id: 'materials11111',
    			rules: [
    				{ required: true, message: `物资名称222不能为空!`, },
		        ],
    			getValueFromEvent: this.handleCurrencyQuantityChange,
    			type: 'select',
    			options: genSelectOptions(),
    			value: 2,
    			defaultValue: 2,
    		},
    		// {
    		// 	label: '品牌',
    		// 	id: 'brand',
    		// 	rules: [
    		// 		{ required: true, message: `${this.label}不能为空!`, },
		    //         { type: 'string', message: `${this.label}必须为字符串!`, },
		    //     ],
    		// 	type: <Input />,
    		// },
    		// {
    		// 	label: '单价',
    		// 	id: 'unitPrice',
    		// 	price: '',
    		// 	rules: [
    		// 	    { required: true, message: `${this.label}不能为空!`, }, 
		    //         { pattern: /^[0-9]+(.[0-9]{2})?$/, message: `${this.label}必须为两位小数!`, }],
    		// 	type: <Input  value={this.state.price} suffix={<span  style={{ fontSize: 13 }} >元</span>} />,
    		// },
    		// {
    		// 	label: '折旧率',
    		// 	id: 'depreciationRate',
    		// 	rules: [
    		// 		{ required: true, message: `${this.label}不能为空!` },
		    //         { pattern: /^[0-9]+(.[0-9]{2})?$/, message: `${this.label}必须为两位小数!`, },
		    //     ],
    		// 	type: <Input suffix={<span  style={{ fontSize: 13 }} >月</span>} />,
    		// },
    		// {
    		// 	label: `123`,
    		// 	listOption: '123',
    		// 	id: 'brand',
    		// 	rules: [
    		// 		{ required: true, message: `${this.label}不能为空!` },
			   //      { pattern: /^[0-9]+(.[0-9]{2})?$/, message: `${this.label}必须为两位小数!`, },
			   //  ],
    		// 	type: 
    		// 		<Select >
						// {this.listOption}
			   //      </Select>,
    		// 	getValueFromEvent:  this.handleCurrencyQuantityChange,
    		// },
    	],
    };
  }

  // handleCurrencyQuantityChange = (value) => {
  // 	 return value;
  // }
  genFormItem = () => {
  	const  { getFieldDecorator } = this.props.form;
  	const {
  		formItemData,
  		formItemCol: {
  			labelCol,
  			wrapperCol,
  		}, 
  	} = this.state;

  	return formItemData.map((currentItem, i) => {
  		let { 
  			label, 
  			id, 
  			rules,
  			type, 
  			defaultValue, 
  			value,
  			options,
  			getValueFromEvent,
  		} = currentItem;

  		return (
  			<FormItem
		        label = {label}
		        labelCol = {labelCol}
		        wrapperCol = {wrapperCol}
		        key = {i}
	        >
	          {getFieldDecorator(`${id}`, {
	            rules,
	            getValueFromEvent,
	            initialValue: defaultValue || '',
	          })(
	              ComponentMap[type]({
	              	type, 
	              	defaultValue, 
	              	value,
	              	options,
	              })
	          )}
	        </FormItem>
  		)
  	});

  }

 	render () {
 		let {
 			inputSize,
 		} = this.state;

 		let genInputContent = () => {
 			let cnt = 0;
 			let ret = [];
 			while (cnt++ < inputSize) {
 				ret.push(ComponentMap.input());
 			}
 			return ret;
 		};
	    return (
	        <Form onSubmit={this.handleSubmit}>
	          {this.genFormItem()}
	          {genInputContent()}
	        </Form>
	    );
 }
}

CurrentForm.propTypes = {
  form: PropTypes.object.isRequired,
};

const MyCurrentForm = Form.create()(CurrentForm);
ReactDOM.render(<MyCurrentForm />, document.getElementById('app'));
