import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import { Form, Select, Input, Button, Modal, } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      initOptionLen: 2, // 默认数量
      optionLen: 20, // 可选数量
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
      label: {  	
        expendTypeLabel: '支出类型',
        materialsLabel: '物资名称',
        brandLabel: '品牌',
        unitPriceLabel: '单价',
        depreciationRateLabel: '折旧率',
        quantityLabel: '数量',
      },
      purchaseItem: {
				// index: -1,	//-1则表示是新增的地址
        data: {
          expendType: '',
          materials: '',
          brand: '',
          unitPrice: '',
          depreciationRate: '',
          quantity: '',
        }
      },
    }
    // console.log(this.state);
  }


  // componentDidMount () {
	 //  	 let that = this;
	 //  // 	 that.initPrdtInfo((data) => {
		// 	// 	that.initUserHeadImg(data);
		// 	// });
  // }
   
/**
 * [请求函数]
 * @param  {[function]} callback [description]
 */
  // 请求函数
  requestInfo = (callback) => {
    const that = this;
    let sendData = that.state.purchaseItem.data;
    let { expendType, materialsLabel, brand, unitPrice, depreciationRate, quantity, } = sendData;
    let quantityIds = [];
    for (let i = 0; i < quantity; i++ ) {
      quantityIds.push(i);
    }
    let param = {
      url : `/outcome/goods/purchase`,
      method : 'POST',
      data: {
        depreciationRate: Number(depreciationRate),	
        goodsBrand: brand,	
        goodsIds: quantityIds.join(","),
        goodsModel: expendType,
        goodsName: materialsLabel,
        goodsNum: Number(quantity), 
        goodsPrice: Number(unitPrice),
      },
      successFn : (data) => {
        if (data.resultCode == 0) {
          let result = data.resultData;
          // let prdtInfoHook = function(data) {
          //   return {
          //     imgUrl: data.itemUrl,
          //     title: `${data.brandName || ''  } ${  data.itemName  }${data.specification}`,
          //     spec: data.itemDescrption,
          //     price: data.salePrice,
          //     skuPrice: data.skuSalePrice, 
          //     itemId: data.itemId,
          //     skuId: data.skuId,
          //     poSkuId: data.poSkuId,
          //   }
          // };

          // let prdtInfo = prdtInfoHook(result);

      	let { depreciationRate, goodsBrand, goodsModel, goodsName, goodsNum, goodsPrice, } = result;
          this.setState({
            expendType: goodsModel,
            materialsLabel: goodsName,
            brand: goodsBrand,
            unitPrice: Number(goodsPrice),
            depreciationRate: Number(depreciationRate),
            quantity: Number(goodsNum),
          }, callback.bind(that, result));
        } else {
          that.setState({
            groupStatus: 0,
            errorMsg: data.message,
          });
          console.error(data.message);
        }
      },
      // errorFn : (data) => {
      //   that.setState({ groupStatus: 0 });
      //   console.error(arguments);
      // }
    };
    // RequestUtil.fetch(param);
  }

  success = () => {
	  Modal.success({
	    title: 'This is a success message',
	    content: '恭喜,提交成功',
	  });
  }
  error = () => {
	  Modal.error({
	    title: 'This is an error message',
	    content: '提交失败',
	  });
  }
	

  	handleSubmit = (e) => {
  		let form = this.props.form;
  		let { purchaseItem } = this.state;

	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	      	let result = form.getFieldsValue();
	      	let { data } = purchaseItem;
	        console.log('Received values of form: ', values);
	        console.log('提交了哈',result);
	        for (let key in result) {
	        	data[key] = result[key];
	        	console.log('typeof data[key]:', typeof data[key]);
	        }
	        this.setState({ purchaseItem: purchaseItem });
	        console.log('要发送的',this.state.purchaseItem.data);

				// this.success();
        this.error();
	      //   // let listAlert = <Button onClick = {this.success} > Success </Button>;
	      //   let listAlert = '';
	      //   this.setState({
	      //   	listAlert
	      //   });
	      }
	    });
  	}














  	// 在第一次渲染后调用，只在客户端。
 	componentDidMount () {
 	    let { initOptionLen, optionLen } =  this.state ;
	   this.genInput(initOptionLen);
	   this.genOption(optionLen);
 }

  	genInput = (value) => {
	   let { labelCol, wrapperCol } = this.state;
	   let form = this.props.form; 
	   let listInput = [];
	    for (let i = 0; i < value; i++) { 
	      listInput.push(
	      			<FormItem key={i}
				        label={`编号${i + 1}`}
				        labelCol={ labelCol }
				        wrapperCol={ wrapperCol }
			        >
			        	<Input />
			        </FormItem>
			        );
	    }
	    this.setState({
		      listInput,
		    })
  	}

  	

  	genOption = (value) => {
	   let { labelCol, wrapperCol } = this.state; 
	   let listOption = [];
	    for (let i = 0; i < value; i++) { 
	      listOption.push(
			        <Option key={i + 1} value = {`${i + 1}`}> {i + 1} </Option>
			        );
	    }
    this.setState({
	      listOption,
	    })
  	}
  	
  checkConfirm = (rule, value, callback) => {
    	const form = this.props.form;
	    if (value ) {
	      form.validateFields(['confirm'], { force: true });
	    }
    	callback();
  	}
  updateMainInfoValue = (areaData) => {
    	console.log('type:',typeof areaData);
    	let form = this.props.form;
    	let purchaseItem = this.state.purchaseItem;
    	let that = this;
    	setTimeout(function () {
   	 		purchaseItem[areaData] = form.getFieldValue(areaData);
   	 		that.setState({
      purchaseItem: purchaseItem
    }, () => {
      that.validateSumbitButton();
    })
    	},200)
  }
  validateSumbitButton = () => {
    	const validResult = this.validateForm();
		// if (validResult.success == true) {
    this.setState({
      canSubmit: true
    });
		// } else {
		// 	this.setState({
		// 		canSubmit: false,
		// 	});
		// }
  }
  // validateForm = () => {
	 
  // }

  	checkPrice = (areaData, rule, value, callback) => {
    	
    	console.log('areaData:',areaData);

	    if (Number(value) > 0) {
	      	callback();
	      return;
	    } else {
	    	callback(`${areaData}必须大于0!`);
	    }
	    
  	}

  	handleCurrencyQuantityChange = (value) => {
  		console.log('select',value);
  		this.genInput(value);
  		return value;
  	}

  	handleCurrencyExpendChange = (value) => {
  		console.log('select',value);
  		console.log('expendType:', value);
  		console.log('expendType:', typeof value);
  		if (value === '采购') {
  			this.refs.buy.className = '';
  			this.refs.fix.className = 'noneStyle';
  		} else if (value === '维修') {
  			this.refs.buy.className = 'noneStyle';
  			this.refs.fix.className = '';
  		}
  		return value;
  	}
  render() {
    	const  { getFieldDecorator } = this.props.form;
    	let  { initOptionLen, label , listInput, listOption, labelCol, wrapperCol,  } = this.state;

    	return (
      		<Form onSubmit = {this.handleSubmit}>

      			<FormItem
			        label = {label.expendTypeLabel}
			        labelCol = {labelCol}
			        wrapperCol = {wrapperCol}
			    >
			        {getFieldDecorator('expendType', {
			            rules: [{ required: true, message: `${label.expendTypeLabel}不能为空!` }],
			            getValueFromEvent:  this.handleCurrencyExpendChange,
			        })(
			            <Select>
			              <Option value='采购'>采购</Option>
			              <Option value='维修'>维修</Option>
			            </Select>
			        )}
			    </FormItem>

			  	<div ref='buy' className = 'noneStyle'>
			    <FormItem
			        label = {label.materialsLabel}
			        labelCol = {labelCol}
			        wrapperCol = {wrapperCol}
	        	>
		          {getFieldDecorator('materials', {
		            rules: [{ required: true, message: `${label.materialsLabel}不能为空!`, },
		            		{ type: 'string', message: `${label.materialsLabel}必须为字符串!`, }],
		          })(
		            <Input />
		          )}
	        	</FormItem>

	        	<FormItem
			        label = {label.brandLabel}
			        labelCol = {labelCol}
			        wrapperCol = {wrapperCol}
	        	>
		          {getFieldDecorator('brand', {
		            rules: [{ required: true, message: `${label.brandLabel}不能为空!`, },
		            		{ type: 'string', message: `${label.materialsLabel}必须为字符串!`, }],
		          })(
		            <Input />
		          )}
	        	</FormItem>

	        	<FormItem
			        label = {label.unitPriceLabel}
			        labelCol = {labelCol}
			        wrapperCol = {wrapperCol}
	        	>
		          {getFieldDecorator('unitPrice', { 
		            rules: [{ required: true, message: `${label.unitPriceLabel}不能为空!`, }, 
		            		{ pattern: /^[0-9]+(.[0-9]{2})?$/, message: `${label.unitPriceLabel}必须为两位小数!`, }],
		          })(
		            <Input   suffix={<span  style={{ fontSize: 13 }} >元</span>} />
		          )}
	        	</FormItem>

	        	<FormItem
			        label = {label.depreciationRateLabel}
			        labelCol = {labelCol}
			        wrapperCol = {wrapperCol}
	        	>
		          {getFieldDecorator('depreciationRate', {
		            rules: [{ required: true, message: `${label.depreciationRateLabel}不能为空!` },
		            		{ pattern: /^[0-9]+(.[0-9]{2})?$/, message: `${label.unitPriceLabel}必须为两位小数!`, }],
		          })(
		            <Input suffix={<span  style={{ fontSize: 13 }} >月</span>} />
		          )}
	        	</FormItem>


				<FormItem
			        label = {label.quantityLabel}
			        labelCol = {labelCol}
			        wrapperCol = {wrapperCol}
			    >
			        {getFieldDecorator('quantity', {
			          	initialValue: `${initOptionLen}` ,
			            rules: [{ required: true, message: `${label.quantityLabel}不能为空!` },
			            		{ pattern: /^[0-9]+(.[0-9]{2})?$/, message: `${label.unitPriceLabel}必须为两位小数!`, }],
			            getValueFromEvent:  this.handleCurrencyQuantityChange,
			        })(
						<Select >
						{listOption}
			            </Select>
			        )}
			    </FormItem>

				{listInput}
			    </div>
			    <div ref='fix' className = 'noneStyle'>
				    <FormItem
				        label = {label.brandLabel}
				        labelCol = {labelCol}
				        wrapperCol = {wrapperCol}
		        	>
			          {getFieldDecorator('brand', {
			            rules: [{ required: true, message: `${label.brandLabel}不能为空!`, },
			            		{ type: 'string', message: `${label.materialsLabel}必须为字符串!`, }],
			          })(
			            <Input />
			          )}
		        	</FormItem>
			    </div>  
			   <FormItem
	          	wrapperCol={{ span: 8, offset: 4 }} >
	          <Button type='primary' htmlType='submit' 
	          		style={{ backgroundColor: '#FFE000',color: 'rgba(0, 0, 0, 0.65)' ,border: 'none' }}>
	            提交
	          </Button>
	        </FormItem>  
			   
			</Form>
    );
  
  }
}


const WrappedApp = Form.create({
  // onValuesChange: App.onValuesChange
})(App);

ReactDOM.render(<WrappedApp />, document.getElementById('app'));