import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
const $ = require('jquery');
// import '../_config.scss';
import '../base/base.scss';
import './Alert.scss';

export default class Alert extends Component {
  constructor(props){
    super(props);
    // ES6的用法用法，在组件没有属性的情况下，用这个属性，有的话，就用组件的属性，
    // 即：这是系统默认的属性，当组建有属性时用组件的，没有的话，用系统默认的。
    // 而如果直接 this.props的话，就会将组件的prop覆盖掉。
    let {
      title = '警告操作', 
      message = '警告信息', 
      okText = '确定',
    } = this.props;

    // this.props = {
    //    title : '警告操作', 
    //   message : '警告信息', 
    //   okText : '确定',
    // };

    this.state = {
      shown: false,
      title: title,
      message: message,
      okText: okText,
    };
    // console.log(this.props);
  }

  //在组件接收到一个新的prop时调用。这个方法在初始化render时不会被调用。
  componentWillReceiveProps(nextProps) {
    if (Util.isExisty(nextProps.message)) {
      this.setState({
        message: nextProps.message
      });
    }     
  }

  showAlertBox(title, message) {
    this.setState({
      title: title,
      message: message,
      shown: true,
    })
  }

  handleOK() {
    this.setState({
      shown: false,
    });
  }

  render() {
    let {
      title,
      okText,
      message,
      shown,
    } = this.state;

    let isShown = !!shown;
    let isEmptyTitle = title == '';

    let alertMaskClazz = isShown ? 'm-alert-mask' : 'm-alert-mask hide';
    let alertBoxClazz = isShown ? 'm-alert' : 'm-alert hide';
    let titleContent = isEmptyTitle ? '' : (<h3 className="m-header-title">{title}</h3>);
    let maskStyleObj = isShown ? {
      height: $(document).height()
    } : null;

    let boxStyleObj = isShown ? {
      top: parseInt(document.body.scrollTop, 10) + (parseInt(document.documentElement.clientHeight, 10)/2) + 'px'
    } : null;

    return (

      <div>
      <div className={alertMaskClazz} style={maskStyleObj}>
      </div>
      <div className={alertBoxClazz} style={boxStyleObj}>
        <div className="m-alert-header">
          {titleContent}
        </div>
          <div className="m-alert-body">
            {message}
          </div>
          <div className="m-alert-footer">
          <div className="btn-ok" onClick={this.handleOK.bind(this)}>{okText}</div>
        </div>
      </div>
      </div>
    )
  }
}

function doRender () {
  ReactDOM.render(
      <Alert title="123123" /> , document.getElementById("app"));
}

setTimeout(doRender, 606);





