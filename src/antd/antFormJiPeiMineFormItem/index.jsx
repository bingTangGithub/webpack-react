import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import PropTypes from 'prop-types';
import Util from '../commonTool/extend/Util.jsx';

import { Form, Select, Input, Button, Modal, InputNumber } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;


const ComponentMap = {
	
  input : (props) => {
  	let {
			suffix,
		} = props;
    return (
			<Input suffix={<span  style={{ fontSize: 13 }} >{props.suffix}</span>} />
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
    	initSelectQuantity: {
    		quantityInputSize: 2,
    		listQuantityInput: [],
    		submitButtonBoolean: false,
    		submitButtonFormItem: '',
    		messageContent: `只有登记编号的物资可纪录维修费用，
                请为有维修可能性的物资创建编号；
                数据录入后不能修改，请检查无误后提交。是否确认提交？`
    	},
    	formItemCol: {
    		labelCol: { span: 4 },
      	wrapperCol: { span: 8 },
    	},
    	expendTypeFormItem: [
    		{
    			label: '支出类型',
    			id: 'expendType',
    			rules: [
    				{ required: true, message: '支出类型不能为空!', },
		      ],
    			getValueFromEvent: this.handleExpendTypeChange,
    			type: 'select',
    			options: [
    				{ id: 0, value: '采购', label: '采购', key:  0 },
    				{ id: 1, value: '维修', label: '维修', key:  1 },
    			],
    		},
    	],
    	currentFormItemData: [],
    	buyFormItemData: [
    		{
    			label: '物资名称',
    			id: 'goodsName',
    			rules: [
    				{ required: true, message: '物资名称不能为空!', },
		      ],
    			type: 'input',
    		},
    		{
    			label: '品牌',
    			id: 'goodsBrand',
    			rules: [
    				{ required: true, message: '品牌不能为空!', },
		      ],
    			type: 'input',
    		},
    		{
    			label: '型号',
    			id: 'goodsModel',
    			rules: [
    				{ required: true, message: '型号不能为空!', },
		      ],
    			type: 'input',
    		},
    		{
    			label: '单价',
    			id: 'goodsPrice',
    			rules: [
    			  { required: true, message: '单价不能为空!', }, 
		        { pattern: /^[0-9]+(.[0-9]{2})?$/, message: '单价必须为正数且最多两位小数!', }],
    			type: 'input',
    			suffix: '元',
    		},
    		{
    			label: '折旧率',
    			id: 'depreciationRate',
    			rules: [
    				{ required: true, message: '折旧率不能为空!' },
		        { pattern: /^[0-9]+(.[0-9]{2})?$/, message: '折旧率必须为正数且最多两位小数!', },
		      ],
    			type: 'input',
    			suffix: '月',
    		},
    		{
    			label: '数量',
    			id: 'goodsNum',
    			rules: [
    				{ required: true, message: '数量不能为空!', },
		      ],
    			getValueFromEvent: this.handleQuantityChange,
    			type: 'select',
    			options: genSelectOptions(),
    			value: 2,
    			defaultValue: 2,
    		},
    	],
    	fixFormItemData: [
    		{
    			label: '维修费用',
    			id: 'repairCost',
    			rules: [
    				{ required: true, message: '维修费用不能为空!' },
		        { pattern: /^[0-9]+(.[0-9]{2})?$/, message: '维修费用必须为正数且最多两位小数!', },
		      ],
    			type: 'input',
    			suffix: '元',
    		},
    	],
    };
  }

  handleQuantityChange = (value) => {
  	 this.genQuantityInput(value);
  	 return value;
  }

  handleExpendTypeChange = (value) => {
  	let { 
  		expendTypeFormItem, 
  		buyFormItemData, 
  		fixFormItemData, 
  		currentFormItemData,
  		initSelectQuantity: 
  			{
  				quantityInputSize,
  				submitButtonBoolean,
  			},
  	} = this.state;

  	this.state.initSelectQuantity.submitButtonBoolean = true;
  	// submitButtonBoolean = true;
  	console.log('刚设this.state.initSelectQuantity.submitButtonBoolean:', this.state.initSelectQuantity.submitButtonBoolean);
  	console.log('刚设submitButtonBoolean:', submitButtonBoolean);
  	let result = expendTypeFormItem[0].options[0].value;

  	if(value === result) { //选择采购
  		currentFormItemData = buyFormItemData;
  		this.genQuantityInput(quantityInputSize);
  	} else {
  		currentFormItemData = fixFormItemData; 
  		this.genQuantityInput(0);
  	}
  	this.setState({
	  		currentFormItemData,
	  		submitButtonBoolean,
	  }, () => {
	  	console.log('回调里的this.state.initSelectQuantity.submitButtonBoolean:',this.state.initSelectQuantity.submitButtonBoolean);
	  	console.log('回调里的submitButtonBoolean:',submitButtonBoolean);
	  })
  	return value;
  }

	genQuantityInput = (value) => {
		let {
			formItemCol: {
				labelCol,
				wrapperCol,
			},
			initSelectQuantity: {
				listQuantityInput,
			},
		} = this.state;
    let form = this.props.form; 
    let inputLen = listQuantityInput.length;

    if(value < inputLen) {
    	listQuantityInput.length = value;
    } else {
    	for (let i = inputLen; i < value; i++) { 
	      listQuantityInput.push(
	      			<FormItem key={i}
				        label={`编号${i + 1}`}
				        labelCol={ labelCol }
				        wrapperCol={ wrapperCol }
			        >
			        	<Input />
			        </FormItem>
			  );
      }
    }
    
    this.setState({
	      listQuantityInput,
	  })
    return listQuantityInput;
	}

  genFormItem = (current) => {
  	const  { getFieldDecorator } = this.props.form;
  	const {
  		formItemCol: {
  			labelCol,
  			wrapperCol,
  		}, 
  	} = this.state;

  	return current.map((currentItem, i) => {
  		let { 
  			label, 
  			id, 
  			rules,
  			type, 
  			defaultValue, 
  			value,
  			options,
  			suffix,
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
	              	suffix,
	              	options,
	              })
	          )}
	        </FormItem>
  		)
  	});
  }

	handleSubmit = (e) => {
    let form = this.props.form;
    let { purchaseItem } = this.state;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        let result = form.getFieldsValue();
        console.log('提交了哈', result);
        this.showConfirm(result);
      }
    });
	}
	      /**
 * [提交确认的提示弹窗]
 * @return {[type]} [description]
 */
  showConfirm = (result) => {
    let requestInfo = this.requestInfo;
    let { messageContent } = this.state.initSelectQuantity;
    confirm({
      content: `${messageContent}`,
      onOk () {
        requestInfo(result);
        // window.location.href = 'http://www.baidu.com'; // 跳转到物资使用界面
      },
      onCancel () {
        console.log('Cancel');
      },
    });
  }

   /**
 * [请求函数]
 * @param  {[function]} callback [description]
 */
  requestInfo = (result) => {
    let { 
    	goodsModel, 
    	goodsName, 
    	goodsBrand, 
    	goodsPrice, 
    	depreciationRate, 
    	goodsNum, 
    } = result;
    let quantityIds = [];
    for (let i = 0; i < goodsNum; i++) {
      quantityIds.push(i);
    }
    let parm = {
      data: {
        depreciationRate: Number(depreciationRate),
        goodsBrand,
        goodsIds: quantityIds.join(','),
        goodsModel,
        goodsName,
        goodsNum: Number(goodsNum),
        goodsPrice: Number(goodsPrice),
      },
    };
    console.log('the last::::', parm.data);
  }
  	

 	render () {
 		let {
 			initSelectQuantity:
 				{
 					listQuantityInput,
 					submitButtonBoolean,
 					submitButtonFormItem,
 				},
 			expendTypeFormItem,
 			currentFormItemData,
 		} = this.state;
 		console.log('render里的this.state.initSelectQuantity.submitButtonBoolean:', this.state.initSelectQuantity.submitButtonBoolean);
 		console.log('render里的submitButtonBoolean:', submitButtonBoolean);
 		let submitButtonDisplay = 
 			<FormItem
        wrapperCol={{ span: 8, offset: 4 }} >
        <Button type='primary' htmlType='submit' >
          提交
        </Button>
      </FormItem>
 		submitButtonFormItem = submitButtonBoolean ? submitButtonDisplay : '' ;

	  return (
      <Form onSubmit={this.handleSubmit}>
        {this.genFormItem(expendTypeFormItem)}
        {this.genFormItem(currentFormItemData)}
        {listQuantityInput}
        {submitButtonFormItem}
        
      </Form>
	  );
  }

}

CurrentForm.propTypes = {
  form: PropTypes.object.isRequired,
};

const MyCurrentForm = Form.create()(CurrentForm);
ReactDOM.render(<MyCurrentForm />, document.getElementById('app'));
