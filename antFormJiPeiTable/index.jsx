import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Table, Button, Modal, Form, Select, Input, DatePicker } from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
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
    picker : (props) => {
	  	let {
				pickerType,
			} = props;

		if (pickerType === 'double') {
			return (
				<RangePicker  style = {{width:'100%'}} />
	    	)
		}
    	if (pickerType === 'single') {
			return (
				<DatePicker  style = {{width:'100%'}} />
	    	)
		}
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

/**
 * [获取门店数据]
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */ 
getStoreIds = () => {
  const that = this;
  let storeIdsList;
  let param = {
    url : 'shop/query',
    method : 'POST',
    data : {
    },
    successFn : function (data) {
      if (RequestUtil.isResultSuccessful(data)) {
        // Util.isArray(data.data) && that.setState({storeIdsList: data.data});
        storeIdsList = data.data;
        if (Util.isArray(data.data)) { return storeIdsList;} 
       
      } else {
        console.log("get storeIdsList error!")
      }
    },
    errorFn : function () {
      console.error(arguments);
    }
  };
  RequestUtil.fetch(param);
}

class MyForm  extends Component {
  constructor (props) {
  	super(props);
  	this.state = {
  		// initInfo: {
  			pageSize: 10, // 每页大小
    		pageNo: 0, 
        storeIdsList: '',
    		messageContent: `数据录入后不能修改，请检查无误后提交。
                         是否确认提交？`,
    	// },
  		formItemCol: {
    		labelCol: { span: 4 },
      		wrapperCol: { span: 8 },
    	},
  		addFormItemData: [
    		{
    			label: '门店',
    			id: 'storeName',
    			rules: [
    				{ required: true, message: '门店不能为空!', },
		       ],
		        getValueFromEvent:  this.handleStoreNameChange,
    			type: 'select',
    			options: genSelectOptions(), // 接口获取
    			value: 2,
    			defaultValue: 2,
    		},  
    		{
    			label: '支出类型',
    			id: 'otherOutcomeType',
    			rules: [
    				{ required: true, message: '支出类型不能为空!', },
		      ],
    			getValueFromEvent: this.handleOtherOutcomeTypeChange,
    			type: 'select',
    			options: [
    				{ id: 0, value: '房屋租金', label: '房屋租金', key:  0 },
    				{ id: 1, value: '物业费', label: '物业费', key:  1 },
    				{ id: 2, value: '维修费', label: '维修费', key:  2 },
    			],
    		},
    		{
    			label: '金额',
    			id: 'price',
    			rules: [
    			    { required: true, message: '金额不能为空!', }, 
		        	{ pattern: /^[0-9]+(.[0-9]{2})?$/, message: '金额必须为正数且最多两位小数!', }],
    			type: 'input',
    			suffix: '元',
    		},
    		{  
    			label: '有效期',
    			id: 'expirationDays',
    			rules: [
    				{ required: true, message: '有效期不能为空!', },
		        ],
    			type: 'picker',
    			pickerType: 'double',
    		},
    		{
    			label: '缴费时间',
    			id: 'paymentDate',
    			rules: [
    				{ required: true, message: '缴费时间不能为空!', },
		       ],
		        type: 'picker',
    			pickerType: 'single',
    		},
    		{
    			label: '说明',
    			id: 'remark',
    			type: 'input',
    		},
    	],

  	}

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
  			pickerType, 
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
	              	pickerType, 
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
	    e.preventDefault();
	    form.validateFields((err, values) => {
	        if (!err) {
		       	let result = form.getFieldsValue();
		        console.log('Received values of form: ', values);
		        console.log('提交了哈',result);
		        this.showConfirm(result);
	        }
	    });
  	}

  	showConfirm = (reslut) => {
  		let requestInfo = this.requestInfo;
	    let { messageContent } = this.state;
	    confirm({
	      content: `${messageContent}`,
	      okText: `确认`,
	      cancelText: `取消`,
	      iconType: ' ',
	      onOk () {
	        requestInfo(reslut);
	       
	      },
	      onCancel () {
	        console.log('Cancel');
	      },
	    });
  	}



 /**
 * [接口请求函数]
 * @param  {[function]} callback [description]
 */
  requestInfo = (result) => {
    let { 
    	expirationDays, 
    	otherOutcomeType, 
    	pageSize,
    	pageNo,
    	storeId
    } = result;

    let parm = {
      data: {
        expirationDays, 
    	otherOutcomeType, 
    	pageSize,
    	pageNo,
    	storeId,
      },
    };
    console.log('the last::::', parm.data);
    // this.reloadTableList();
	    //刷新页面
  }

  	// reloadTableList = () => {
  	// 	//
  	// }


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

  	let { addFormItemData, } = this.state;

    return (
			<Form onSubmit = {this.handleSubmit}>
      	
	          	{this.genFormItem(addFormItemData)}
		        <FormItem
		          wrapperCol={{ span: 8, offset: 4 }}
		        >
		          	<Button type='primary' htmlType='submit' 
			          		style={{ backgroundColor: '#FFE000',color: 'rgba(0, 0, 0, 0.65)' ,border: 'none' }}>
			            提交
			        </Button>
		        </FormItem>

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
        // initInfo: {
          otherOutcomeDataList: '', // 列表展示数据
          addOtherOutcomeModal: '',  //  增加时的蒙版
        // },
     //    otherOutcomeDataList: '', // 列表展示数据
	  		// addOtherOutcomeModal: '',  //  增加时的蒙版
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
      this.getOtherOutcomeData();
  }
  // submit = () => {
  // 	console.log('蒙版中的submit');
  // }

  addExpenditureRecord = () => {
  console.log('eeeeeeeee:');
  	let { 
      // initInfo: {
        addOtherOutcomeModal,
        // otherOutcomeDataList,
      // },
    } = this.state;

    // let {addOtherOutcomeModal} = this.state.initInfo;
    console.log('addOtherOutcomeModal:',addOtherOutcomeModal);

  	addOtherOutcomeModal = 
		<Modal title='' visible = {true}
          onOk={this.submit} 
          // onCancel={this.handleCancel}
          okText='提交' cancelText=' '
          footer = {null}
        >
        	<WrappedApp />
      	</Modal>

    console.log('addOtherOutcomeModal:',addOtherOutcomeModal);
    this.setState({
    	 // initInfo: {
        addOtherOutcomeModal,
        // otherOutcomeDataList,
      // },
    })

  }

  exportExpenditureRecord = () => {
    //
  }


  getOtherOutcomeData = () => {
    const that = this;
    let {
      // initInfo: {
        // addOtherOutcomeModal,
        otherOutcomeDataList,
      // },
    } = this.state;
    // let param = {
    //   url : 'outcome/others/list',
    //   method : 'POST',
    //   data : {
    //     'expirationDays': ,
    //     'otherOutcomeType': ,
    //     'pageNo': ,
    //     'pageSize': ,
    //     'storeId':,
    //   },
    //   successFn : function (data){
    //     if (RequestUtil.isResultSuccessful(data)) {
    //       Util.isArray(data.data) && that.setState({otherOutcomeDataList: data.data})
    //     } else {
    //       console.log("get otherOutcomeDataList error!")
    //     }
    //   },
    //   errorFn : function () {
    //     console.error(arguments);
    //   }
    // };
    // RequestUtil.fetch(param);
    otherOutcomeDataList = [{
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
      // initInfo:{
        // addOtherOutcomeModal,
        otherOutcomeDataList,
      // },
    })
  }
	
  render() {
    let { 
      columns, 
      // initInfo:{
        otherOutcomeDataList,
        addOtherOutcomeModal,
      // }, 
     
    } = this.state;

    return (
			<div>
				<Button className='editable-add-btn' onClick={this.addExpenditureRecord}>增加支出记录</Button>
				<Table
			    columns={columns}
			    dataSource={otherOutcomeDataList}  // 数据
			    bordered
			    title={() => 'Header'}
			    footer={() => 'Footer'}
				/>
				{addOtherOutcomeModal}
        <Button type="primary" onClick={this.exportExpenditureRecord}>Primary</Button>
			</div>
    )
  }
}


ReactDOM.render(
  <App />, document.getElementById('app')
);


