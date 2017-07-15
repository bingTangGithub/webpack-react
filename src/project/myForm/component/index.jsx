import  React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import ProtoForm from './component.jsx';
import ProtoFormData from './data.jsx';
import Util from './Util.jsx';
import "./style.scss";

const { formItemData } = ProtoFormData;

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formItemData,
      sendedBoolean: false,
      passwordValue: '',
      publicInfo: {
        classError: 'errorC',
        classGood: 'errorN',
      },
    	phone: {
    	  phoneWarnEmpty: '请输入您的手机号！',
    	  phoneWarnLen: '手机号长度有误！',
    	  phoneWarnNull: '手机号不存在！',
    	},
    	currentPhone: {
    		currentPhoneClass: '',
    	  currentPhoneWarn: '',
    	},
      verification: {
        verificationWarnEmpty: '请输入收到的验证码！',
        verificationWarnError: '请输入正确的验证码！',
        verificationWarnWaited: '请先点击发送验证码按钮！',
      },
      currentVerification: {
        currentVerificationClass: '',
        currentVerificationWarn: '',
      },
      password: {
        passwordWarnEmpty: '请输入密码！',
        passwordWarnError: '格式有误，请输入6位的数字、字母或特殊字符！',
      },
      currentPassword: {
        currentPasswordClass: '',
        currentPasswordWarn: '',
      }, 
      passwordConfirm: {
        passwordConfirmWarnEmpty: '请再次输入密码！',
        passwordConfirmWarnError: '两次密码输入不一致！',
      },
      currentPasswordConfirm: {
        currentPasswordConfirmClass: '',
        currentPasswordConfirmWarn: '',
      }, 
    }
  }

  // updateStateByFieldName({
  //   field,
  //   clazz,
  //   warn,
  // }, callback = () => {}) {                
  //   this.setState({
  //     `${field}`: {
  //       `${field}Class`: clazz,
  //       `${field}Warn`: warn,
  //     }
  //   }, callback);
  // }
  // 
  updateStateByFieldName = ({
    field,
    clazz,
    warn,
    cloneFormItemData,
  }) => {
    let fieldClass = `${field}Class`;
    let fieldWarn = `${field}Warn`;
    let fieldObj = {};
    let stateObj = {};

    fieldObj[fieldClass] = clazz;
    fieldObj[fieldWarn] = warn;

    stateObj[field] = fieldObj;

    this.setState({
      ...stateObj,
      formItemData: cloneFormItemData,
    });
  }

  findLi = (obj,inputName) => {
    let liEvery = obj.find((n) => n.inputName === inputName).liEvery;
    return liEvery;
  }

  findWithType = (objLi, type) => {
    let input = objLi.find((n) => n.type === type);
    return input;
  }

  findLastSpan = (objLi) => {
    let span = objLi.find((n) => n.type === 'span');
    return span;
  }
  phoneBlur = (event) => {
  	let {
      formItemData,
      publicInfo: {
        classError,
        classGood,
      },
      phone: {
    	  phoneWarnEmpty,
    	  phoneWarnLen,
    	  phoneWarnNull,
      },
	  } = this.state;

	  let reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/i; // 验证手机正则(输入前7位至11位)
	  let value = event.target.value;

    let clazz;
    let warn;
	  
    if (value === '') {
      clazz = classError;
      warn = phoneWarnEmpty;
    } else if (value.length < 11) {
      clazz = classError;
      warn = phoneWarnLen;
    } else if (!reg.test(value)) {
      clazz = classError;
      warn = phoneWarnNull;
    } else {
      clazz = classGood;
      warn = '';
    }

    let cloneFormItemData = Util.deepClone(formItemData);
    let phoneLi = this.findLi(cloneFormItemData, 'phone');
    this.findWithType(phoneLi, 'input').className = clazz;
    this.findWithType(phoneLi, 'span').text = warn;

    this.updateStateByFieldName({
      field: 'currentPhone',
      clazz,
      warn,
      cloneFormItemData,
    });
  }

  verificationBlur = (event) => {
    let {
      sendedBoolean,
      formItemData,
      publicInfo: {
        classError,
        classGood,
      },
      verification: {
        verificationWarnEmpty,
        verificationWarnError,
        verificationWarnWaited,
      },
    } = this.state;

    let value = event.target.value;
    let receiveArr = localStorage.getItem('receiveArr');
    let clazz;
    let warn;

    if (sendedBoolean) {
      if (value === '') {
        clazz = classError;
        warn = verificationWarnEmpty;
      } else if (receiveArr !== value) {
        clazz = classError;
        warn = verificationWarnError;
      } else {
        clazz = classGood;
        warn = '';
      }
    } else {
      clazz = classError;
      warn = verificationWarnWaited;
    }

    let cloneFormItemData = Util.deepClone(formItemData);
    let verificationLi = this.findLi(cloneFormItemData, 'verification');
    let len = verificationLi.length;
    this.findWithType(verificationLi, 'input').className = clazz;
   
    verificationLi[len - 1].text = warn;
    this.updateStateByFieldName({
      field: 'currentVerification',
      clazz,
      warn,
      cloneFormItemData,
    })
  }

  genVerification = () => {
    let arr = ['0','1','2','3','4','5','6','7','8','9']; 

    return arr.sort(function() {
      return Math.random() - 0.5;
    });

  }
     
  showVerification = () => {
    let receiveArr = '';
    let sendedArr =  this.genVerification();

    for (let i = 0; i < 4; i ++) {
      receiveArr += sendedArr[i];
    }
    console.log('收到的验证码为：', receiveArr);
    localStorage.setItem('receiveArr', receiveArr);
  }

  verificationClicked = () => {
    this.showVerification();
    this.setState({
      sendedBoolean : true,
    });
    
  }

  // 密码失去焦点
  passwordBlur = (event) => {
    let value = event.target.value;
    let reg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
    let {
      formItemData,
      publicInfo: {
        classError,
        classGood,
      },
      password: {
        passwordWarnEmpty,
        passwordWarnError,
      },
    } = this.state;
    let clazz;
    let warn;

    if (value === '') {
      clazz = classError;
      warn = passwordWarnEmpty;
    } else if (!reg.test(value)) {
      clazz = classError;
      warn = passwordWarnError;
    } else {
      clazz = classGood;
      warn = '';
      this.setState({
        passwordValue: value,
      });
    }
 
    let cloneFormItemData = Util.deepClone(formItemData);
    let passwordLi = this.findLi(cloneFormItemData, 'password');
    this.findWithType(passwordLi, 'input').className = clazz;
    this.findWithType(passwordLi, 'span').text = warn;
    this.updateStateByFieldName({
      field: 'currentPassword',
      clazz,
      warn,
      cloneFormItemData,
    });

  }

  // 确认密码失去焦点
  passwordConfirmBlur = (event) => {
    let value = event.target.value;
    let {
      formItemData,
      passwordValue,
      publicInfo: {
        classError,
        classGood,
      },
      passwordConfirm: {
        passwordConfirmWarnEmpty,
        passwordConfirmWarnError,
      },
    } = this.state;
    
    let clazz;
    let warn;

    if (value === '') {
      clazz = classError;
      warn = passwordConfirmWarnEmpty;
    } else if (value !== passwordValue) {
      clazz = classError;
      warn = passwordConfirmWarnError;
    } else {
      clazz = classGood;
      warn = '';
    }

    let cloneFormItemData = Util.deepClone(formItemData);
    let passwordConfirmLi = this.findLi(cloneFormItemData, 'passwordConfirm');

    this.findWithType(passwordConfirmLi, 'input').className = clazz;
    this.findWithType(passwordConfirmLi, 'span').text = warn;
   
    this.updateStateByFieldName({
      field: 'currentPasswordConfirm',
      clazz,
      warn,
      cloneFormItemData,
    })
  }

  submitClick = (event) => {
    let form = this.refs.myForm;

    event.preventDefault();
    let proForm = ReactDOM.findDOMNode(form);
    let result = proForm.checkValidity();

    if (result) {
      location.href = 'http://172.16.1.194:9998/pages/viewpage.action?pageId=1736901';

    } else {
      console.log('请重新检查表单！');
    }
    
  }

  componentDidMount() {
    let { 
      formItemData,
    } = this.state;

    let cloneFormItemData = Util.deepClone(formItemData);

    let phoneLi = this.findLi(cloneFormItemData, 'phone');
    let verificationLi = this.findLi(cloneFormItemData, 'verification');
    let passwordLi = this.findLi(cloneFormItemData, 'password');
    let passwordConfirmLi = this.findLi(cloneFormItemData, 'passwordConfirm');

    this.findWithType(phoneLi, 'input').onBlur = this.phoneBlur;
    this.findWithType(verificationLi, 'span').onClick = this.verificationClicked;
    this.findWithType(verificationLi, 'input').onBlur = this.verificationBlur;
    this.findWithType(passwordLi, 'input').onBlur = this.passwordBlur;
    this.findWithType(passwordConfirmLi, 'input').onBlur = this.passwordConfirmBlur;

    this.setState({
      formItemData: cloneFormItemData,
    });

  }

  render() {
  	let {
      formItemData,
  	} = this.state;  
    
    return (
      <div className='divContent center'>
        <div className='register'>注册</div>
        <ProtoForm 
          ref='myForm'
          formItemData={formItemData}
          submitClick = {this.submitClick}
        >
        </ProtoForm>
      </div>)
  }
}

ReactDOM.render(<RegisterForm />, document.getElementById('app'));