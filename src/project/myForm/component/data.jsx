export default class RegisterData {
  static formItemData = [
    { 
      key: '0',
      inputName: 'fname',
      liEvery:[
        { 
          key: '0-0',
          type: 'label',
          required: 'true',
          text: 'Flower name',
        }, { 
          key: '0-1',
          name: 'fname',			
          type: 'input',
          innerType: 'text',
          maxLength: '2',
          placeholder: '请输入您的花名',
          required: 'true',
        },
        {
          key: '0-2',
          className: 'error',
          type: 'span',
        },
      ]
    },
    {
      key: '1',
      inputName: 'phone',
      liEvery:[
        {
          key: '1-0',
          type: 'label',
          required: 'true',
          text: 'phone number',
        },
        {
          key: '1-1',
          name: 'phone',
          type: 'input',
          innerType: 'text',
          maxLength: '11',
          placeholder: '请输入您的手机号',
          required: 'true',
          className: '',
		// onBlur: this.props.phoneBlur,
        },
        {
          key: '1-2',
          className: 'error',
          type: 'span',
          text: '',
        },
      ]
    },
    {
      key: '2',
      inputName: 'verification',
      liEvery:[
        {
          key: '2-0',
          type: 'label',
          required: 'true',
          text: 'verification code',
        },
        {
          key: '2-1',
          name: 'verification',
          type: 'input',
          innerType: 'text',
          maxLength: '4',
          placeholder: '请输入收到的验证码',
          required: 'true',
          className: '',
		// onBlur: this.props.verificationBlur,
        },
        {
          key: '2-2',
          className: 'add yzm',
          type: 'span',
          text: '发送验证码',
		// onClick: this.props.verificationClicked,
        },
        {
          key: '2-3',
          className: 'error',
          type: 'span',
          text: '',
        },
      ]
    },
    {
      key: '3',
      inputName: 'email',
      liEvery:[
        {
          key: '3-0',
          type: 'label',
          required: 'true',
          text: 'email',
        },
        {
          key: '3-1',
          name: 'email',
          type: 'input',
          innerType: 'email',
          placeholder: '请输入您的邮箱',
          required: 'true',
        },
        {
          key: '3-2',
          className: 'error',
          type: 'span',
        },
      ]
    },
    {
      key: '4',
      inputName: 'password',
      liEvery:[
        {
          key: '4-0',
          type: 'label',
          required: 'true',
          text: 'password',
        },
        {
          key: '4-1',
          name: 'password',
          type: 'input',
          innerType: 'password',
          maxLength: '6',
          placeholder: '请输入密码',
          required: 'true',
		// onBlur: this.props.passwordBlur
        },
        {
          key: '4-2',
          className: 'error',
          type: 'span',
          text: '',
        },
      ]
    },
    {
      key: '5',
      inputName: 'passwordConfirm',
      liEvery:[
        {
          key: '5-0',
          type: 'label',
          required: 'true',
          text: 'password confirm',
        },
        {
          key: '5-1',
          name: 'passwordConfirm',
          type: 'input',
          innerType: 'password',
          maxLength: '6',
          placeholder: '请再次输入密码',
          required: 'true',
		// onBlur: this.props.passwordConfirmBlur,
        },
        {
          key: '5-2',
          className: 'error',
          type: 'span',
        },
      ]
    },
    {
      key: '6',
      inputName: 'address',
      liEvery:[
        {
          key: '6-0',
          type: 'label',
          required: 'true',
          text: 'address',
        },
        {
          key: '6-1',
          name: 'address',
          type: 'input',
          innerType: 'text',
          placeholder: '近江时代大厦A座20楼',
          readonly: 'true',
          required: 'true',
        },
        {
          key: '6-2',
          className: 'error',
          type: 'span',
        },
      ]
    },
    {
      key: '7',
      inputName: 'welcome',
      liEvery:[
        {
          key: '7-0',
          type: 'label',
          className: 'welcome',
          text: 'welcome to front end',
        },
      ]
    },
  ]
}