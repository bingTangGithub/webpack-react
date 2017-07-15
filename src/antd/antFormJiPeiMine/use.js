	<div className="name" onClick={that.handleGetFoucus.bind(that,"mainName")}>
			<input ref="mainName" placeholder="收货人姓名" className="name-field" value={mainName} onChange={that.updateMainInfoValue.bind(that, 'name')} maxLength={maxNameLength}/>
	</div>
	updateMainInfoValue(areaData) {
		const data = this.state.addrItem.data;
	

		const { mainName, mainPhone, mainDetail } = this.refs;
		let addrItem = Util.deepClone(this.state.addrItem);
		addrItem.data = {
			person: {
				name: mainName.value,
				phone: mainPhone.value
			},
			place: {
				area: areaString,
				detail: mainDetail.value
			},
			addrCode: {
				provinceCode: addrCode[0],
				cityCode: addrCode[1],
				districtCode: addrCode[2],
			}
		}

		this.setState({
			addrItem: addrItem
		}, ()=>{
			this.validateAndResetSumbitButton();
		});
	}


		this.state = {
			addrItem: {
				index: -1,	//-1则表示是新增的地址
				data: {
					person: {
						name: "",
						phone: ""
					},
					place: {
						area: "",
						detail: ""
					},
					addrCode: {
						provinceCode: "",
						cityCode: "",
						districtCode: "",
					},
				},
				isDefault: false,
			},
		
		}