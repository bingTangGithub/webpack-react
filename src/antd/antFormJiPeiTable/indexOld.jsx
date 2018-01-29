// getCartStatus() {
// 		let cartStatusParam = {
// 			url: 'cart/getCartStatus',
// 			data: {
// 				userId: Util.fetchUserId(),
// 				uid: Util.fetchUid(),
// 			},
// 			successFn: (data) => {
// 				if (RequestUtil.isResultSuccessful(data)) {
// 					let result = data.result;
// 					this.setState({
// 						cartCount: result.prdtCount,
// 					});
// 				} else {
// 					this.showNotification(CONSTANTS.MSG.CART.GET_CART_STATUS_FAILED);
// 				}
				
// 			},
// 			errorFn: (...args) => {
// 				Logger.error(...args);
// 			}
// 		};

// 		RequestUtil.fetch(cartStatusParam);
// 	}
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Table, Button, Modal, Form, Select, Input, DatePicker } from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const confirm = Modal.confirm;

class MyForm  extends Component {
  constructor (props) {
  	super(props);
  	this.state = {
  		// listModal: '',//增加时的蒙版
  		patternPoint: /^[0-9]+(.[0-9]{2})?$/, // 正数且两位小数
  		labelCol: { span: 4 }, // 蒙版上表单规格 距离左边的距离
    	wrapperCol: { span: 12 }, // input的宽度
    	listExpendTypeSelectOption: [],  // 支出类型数组
    	pageSize: 10, // 每页大小
    	pageNo: 0, 
    	expendType: [
    		{ text: '房屋租金', value: '房屋租金', },
    		{ text: '物业费', value: '物业费', },
    		{ text: '维修费', value: '维修费', },
    	],
  		label: {  	
		    storeNameLabel: '门店',
		    otherOutcomeTypeLabel: '支出类型',
		    priceLabel: '金额',
		    expirationDaysLabel: '有效期',
		    paymentDateLabel: '缴费时间',
		    remarkLabel: '说明',
    	},
	  	message: {
		    messageEmpty: '不能为空',
		    messageMoney: '必须为正数且为两位小数',
		    messageContent: `数据录入后不能修改，请检查无误后提交。
                          是否确认提交？`,
	    },
	    recordItem: {
	    	data: {
	    		storeName: '',
		        otherOutcomeType: '',
	            price: '',
	            expirationDays: '',
	            paymentDate: '',
	            remark: '',
	    	}
	          
       
    },
    	size: 'default', // 时间控件大小
  	}
  }

  handleSubmit = (e) => {
    	console.log('form中的submit');
  		let form = this.props.form;
  		let { recordItem } = this.state;
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	        if (!err) {
		       	let result = form.getFieldsValue();
		      	let { data } = recordItem;
		        console.log('Received values of form: ', values);
		        console.log('提交了哈',result);
		        for (let key in result) {
		        	data[key] = result[key];
		        	console.log('typeof data[key]:', typeof data[key]);
		        }
		        this.setState({ recordItem: recordItem });
		        console.log('要发送的',this.state.recordItem.data);
		        this.showConfirm();
	        }
	    });
  	}
  	showConfirm = () => {
  		let requestInfo = this.requestInfo;
	    let { messageContent } = this.state.message;
	    confirm({
	      content: `${messageContent}`,
	      okText: `确认`,
	      cancelText: `取消`,
	      iconType: ' ',
	      onOk () {
	        requestInfo();
	       
	      },
	      onCancel () {
	        console.log('Cancel');
	      },
	    });
  	}

// 向接口发送数据
  	requestInfo = () => {
    	const that = this;
    	let { pageSize, pageNo } = this.state;
	    let sendData = that.state.recordItem.data;
	    let { storeName, otherOutcomeType, expirationDays, } = sendData;
	    let parm = {
	    	// url : ` /outcome/others/list`,
      // 		method : 'POST',
	        data: {
		        expirationDays: expirationDays,
		        otherOutcomeType: otherOutcomeType,
		        pageSize: pageSize,
		        pageNo: pageNo,
		        storeId: storeName,
	    	},
	    	 //   successFn : (data) => {
    //     if (data.resultCode == 0) {
    //       this.success();
    //       this.setState({
    //         expendType: '',
    //         materialsLabel: '',
    //         brand: '',
    //         unitPrice: '',
    //         depreciationRate: '',
    //         quantity: '',
    //       })
    //     }
    //   },
    //   errorFn : (data) => {
    //     console.error(arguments);
    //     this.error();
    //   }
    // };
    // RequestUtil.fetch(param);
	    
  		}
  		console.log('the last::::', parm.data);
  		this.reloadTableList();
	    // 刷新页面
  	}

  	reloadTableList = () => {
  		//
  	}

  	componentDidMount () {
	    let { expendType } = this.state;
	    let expendTypeLen = expendType.length;
	    this.genOption(expendTypeLen);
  }

  	genOption = (value) => {
  		let { expendType, listExpendTypeSelectOption } = this.state;
	    for (let i = 0; i < value; i++) {
	      	listExpendTypeSelectOption.push(
	        	<Option key={i + 1} value={`${expendType[i].value}`}> {expendType[i].text} </Option>
	        );
	    }
	    this.setState({
	      listExpendTypeSelectOption,
	    });
  }


  render() {
    const  { getFieldDecorator } = this.props.form;
  	let { label, labelCol, wrapperCol, size, patternPoint, message, listExpendTypeSelectOption } = this.state;
  	let { storeNameLabel, otherOutcomeTypeLabel, priceLabel, 
  			expirationDaysLabel, paymentDateLabel, remarkLabel, } = label;
  	let { messageEmpty, messageMoney } = message;
  	
    return (
			<Form onSubmit = {this.handleSubmit}>
      	<FormItem
		        label = {storeNameLabel}
		        labelCol = {labelCol}
		        wrapperCol = {wrapperCol}
		    >
		        {getFieldDecorator('storeName', {
		            rules: [{ required: true, message: `${storeNameLabel}${messageEmpty}!` }],
		            // getValueFromEvent:  this.handleCurrencyStoreNameChange,
		        })(
		            <Select>
		              <Option value='采购'>采购</Option>
		              <Option value='维修'>维修</Option>
		            </Select>
		        )}
		    </FormItem>
		    <FormItem
		        label = {otherOutcomeTypeLabel}
		        labelCol = {labelCol}
		        wrapperCol = {wrapperCol}
		    >
		        {getFieldDecorator('otherOutcomeType', {
		            rules: [{ required: true, message: `${otherOutcomeTypeLabel}${messageEmpty}!` }],
		            // getValueFromEvent:  this.handleCurrencyOtherOutcomeTypeChange,
		        })(
		            <Select>
		              {listExpendTypeSelectOption}
		            </Select>
		        )}
		    </FormItem>
		    <FormItem
		        label = {priceLabel}
		        labelCol = {labelCol}
		        wrapperCol = {wrapperCol}
        	>
	          {getFieldDecorator('price', { 
	            rules: [{ required: true, message: `${priceLabel}${messageEmpty}!`, }, 
	            		{ pattern: patternPoint, message: `${priceLabel}${messageMoney}!`, }],
	          })(
	            <Input suffix={<span className='suffix'>元</span>} />
	          )}
        </FormItem>
        <FormItem
		        label = {expirationDaysLabel}
		        labelCol = {labelCol}
		        wrapperCol = {wrapperCol}
        	>
	          {getFieldDecorator('expirationDays', { 
	            rules: [{ required: true, message: `${expirationDaysLabel}${messageEmpty}!`, },],
	          })(
	          	<RangePicker size={size} style = {{ width:'100%' }} />
	          )}
        </FormItem>
        <FormItem
		        label = {paymentDateLabel}
		        labelCol = {labelCol}
		        wrapperCol = {wrapperCol}
        	>
	          {getFieldDecorator('paymentDate', { 
	            rules: [{ required: true, message: `${paymentDateLabel}${messageEmpty}!`, },],
	          })(
	            <DatePicker size={size} style = {{ width:'100%' }} />
	          )}
        </FormItem>
        <FormItem
		        label = {remarkLabel}
		        labelCol = {labelCol}
		        wrapperCol = {{ span: 18 }}
        	>
	          {getFieldDecorator('remark', )(
	             <Input type = 'textarea' rows={4} />
	          )}
        </FormItem>
         <Button type='primary' htmlType='submit' 
	          		style={{ backgroundColor: '#FFE000',color: 'rgba(0, 0, 0, 0.65)' ,border: 'none' }}>
	            提交
	          </Button>

        </Form>
    )
  }
}

const WrappedApp = Form.create({
})(MyForm);

class App extends Component {
  	constructor (props) {
	  	super(props);
	  	this.state = {
	  		// listModal: '',//增加时的蒙版
	  		columns: [{
				  title: '门店',
				  dataIndex: 'storeName',
				  }, {
					  title: '支出类型',
					  dataIndex: 'otherOutcomeType',
				  }, {
					  title: '金额（元）',
					  dataIndex: 'price',
				  }, {
				    title: '开始时间',
				    dataIndex: 'startDate',
				  }, {
				    title: '到期时间',
				    dataIndex: 'endDate',

				  }, {
				    title: '缴费时间',
				    dataIndex: 'paymentDate',
				  }, {
					 title: '有效期（月）',
					 dataIndex: 'expirationDays',
				  }, {
					 title: '日均支出（元）',
					 dataIndex: 'outcomeAvg',
				  }, {
				    title: '支出说明',
				    dataIndex: 'remark',
				  }],
  };
 	}

  componentDidMount () {
	  	this.getData();
  }
  // submit = () => {
  // 	console.log('蒙版中的submit');
  // }

  addExpenditureRecord = () => {
  	
  	let listModal = 

		 <Modal title='' visible = {true}
          onOk={this.submit} 
          // onCancel={this.handleCancel}
          okText='提交' cancelText=' '
          footer = {null}
        >
        <WrappedApp />
      </Modal>
    console.log('listModal:',listModal)
    this.setState({
    	listModal,
    })
  }

  getData = () => {
    let data = [{
		  key: '1',
		  storeName: '永裕大厦店',
		  otherOutcomeType: '物业费',
		  price: '720.0',
		  startDate: '2016.10.7',
		  endDate: '2017.4.7',  // 到期时间
		  paymentDate: '2017.10.7', // 缴费日期
		  expirationDays: '12', // 有效期
		  outcomeAvg: '4.00',
		  remark: ' 1.2元/平米/月',
    },];
    this.setState({
      data,
    })

    return data;
  }
	

  render() {
    let { columns, data, listModal, } = this.state;
    return (
			<div>
				<Button className='editable-add-btn' onClick={this.addExpenditureRecord}>Add</Button>
				<Table
			    columns={columns}
			    dataSource={data}
			    bordered
			    title={() => 'Header'}
			    footer={() => 'Footer'}
				/>
				{listModal}
			</div>
    )
  }
}


ReactDOM.render(
  <App />, document.getElementById('app')
);


