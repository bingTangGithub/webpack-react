import React, { Component} from 'react';
import ReactDOM from 'react-dom';

import  MyFormItem from '../commonTool/components/FormItemComponent/index.jsx';
// import Util from '../commonTool/extend/Util.jsx';
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			addFormItemData: [
		        {
		          label: '门店',
		          id: 'storeId',
		          rules: [
		            { required: true, message: '门店不能为空!' },
		          ],
		          getValueFromEvent:  this.handleStoreNameChange,
		          type: 'treeSelect',
		          treeData: [],
		          value: '',
		        },
		        {
		          label: '支出类型',
		          id: 'otherOutcomeType',
		          rules: [
		            { required: true, message: '支出类型不能为空!' },
		          ],
		          type: 'select',
		          options: this.genSelectOptions(),
		        },
		        {
		          label: '金额',
		          id: 'price',
		          rules: [
		              { required: true, message: '金额不能为空!' },
		              { pattern: /^[0-9]+(.[0-9]{2})?$/, message: '金额必须为正数且最多两位小数!' }],
		          type: 'input',
		          suffix: '元',
		        },
		        {
		          label: '开始时间',
		          id: 'beginDate',
		          rules: [
		            { required: true, message: '开始时间不能为空!' },
		          ],
		          type: 'picker',
		        },
		        {
		          label: '结束时间',
		          id: 'endDate',
		          rules: [
		            { required: true, message: '结束时间不能为空!' },
		          ],
		          type: 'picker',
		        },
		        {
		          label: '缴费时间',
		          id: 'paymentDate',
		          rules: [
		            { required: true, message: '缴费时间不能为空!' },
		          ],
		          type: 'picker',
		        },
		        {
		          label: '说明',
		          id: 'remark',
		          type: 'input',
		        },
		    ],


		}
	}

	genSelectOptions = (count = 20) => {
	    let result = [];
	    for (let i = 0; i < count; i++) {
	      result.push(
	        { id: i + 1, value: i + 1, label: i + 1, key: i + 1 }
	      );
	    }
	    return result;
	};

	componentDidMount() {
		let {
			addFormItemData,
		} = this.state;
		let treeDataMock = 
			[
				{
					label: "社区店",
					value: "area_shequ",
					key: "0-0",
					children: [
						{
							label: "社区店",
							value: "area_shequ",
							key: "0-0-1",
						},
						
					],
				},
			];

		let newObj = Object.assign({}, addFormItemData[0], {treeData: treeDataMock});
		this.setState({
			addFormItemData: [
		        newObj,
		        addFormItemData[1],
		        addFormItemData[2],
		        addFormItemData[3],
		        addFormItemData[4],
		        addFormItemData[5],
		        addFormItemData[6],
		    ],
		}, () => {console.log('addFormItemData:', addFormItemData)});
		
	}
     
    handleSubmit = () => {
       alert("123");
    }

	render() {
		return (
			<div>
				<MyFormItem formItemData = {this.state.addFormItemData} handleSubmit={this.handleSubmit}/>
			</div>
		)
	}
}


ReactDOM.render(
    <App>
    {/*	<WrappedApp formItemData= {this.state.addFormItemData}/>*/}
    </App>,
    document.getElementById("app")
);

	
	