import "./style.scss";
import $ from '../commonTool/jquery.2.1.4.min.js';

$(function() {
  // 注册界面的提示文字
  // (function register() {
  let sendedBoolean = false;
  let form = document.getElementById('form1');
  // 手机号失去焦点
  $("form .phone").blur(function() {
    let reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/i; // 验证手机正则(输入前7位至11位)

    if ($(this).val() === '' || $(this).val() === '请输入您的手机号') {

      $(this).addClass("errorC");
      $(this).next().html('手机号不能为空');
      $(this).next().css('display','block');

    } else if ($(this).val().length < 11) {

      $(this).addClass("errorC");
      $(this).next().html('手机号长度有误');
      $(this).next().css('display','block');

    } else if (!reg.test($(this).val())) {

      $(this).addClass("errorC");
      $(this).next().html('手机号不存在');
      $(this).next().css('display','block');

    } else {

      $(this).removeClass("errorC");
      $(this).addClass("checkedC");
      $(this).next().empty();
    }
  });

  // 验证码失去焦点
  // $("form .verification").blur(function() {
  //   let reg = /^[A-Za-z0-9]{6}$/;
  //   if ($(this).val() === '' || $(this).val() === '请输入收到的验证码') {

  //     $(this).addClass("errorC");
  //     $(this).next().next().html('请填写验证码');
  //     $(this).next().next().css('display','block');

  //   } else if (!reg.test($(this).val())) {
 
  //     $(this).addClass("errorC");
  //     $(this).next().next().html('请填写正确的验证码');
  //     $(this).next().next().css('display','block');

  //   } else {

  //     $(this).removeClass("errorC");
  //     $(this).addClass("checkedC");
  //     $(this).next().next().empty();
        
  //   }
  // });

    // 密码失去焦点
  $("form .password").blur(function() {
    let reg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;

    if (!reg.test($(this).val())) {
 
      $(this).addClass("errorC");
      $(this).next().html('格式有误，请输入6~12位的数字、字母或特殊字符！');
      $(this).next().css('display','block');

    } else {

      $(this).removeClass("errorC");
      $(this).addClass("checkedN");
      $(this).next().empty();
        
    }
  });

    // 确认密码失去焦点
  $("form .passwordConfirm").blur(function() {
    let pwd1 = $('form input.password').val();
    let pwd2 = $(this).val();

    if (($(this).val() == '请再次输入密码' || $(this).val() == "") && (pwd1 == "请输入密码" || pwd1 == "")) {
      return;
    } else if (pwd1 !== pwd2) {
 
      $(this).addClass("errorC");
      $(this).next().html('两次密码输入不一致！');
      $(this).next().css('display','block');

    } else {

      $(this).removeClass("errorC");
      $(this).addClass("checkedN");
      $(this).next().empty();
        
    }
  });

    // (function createNumber() {
  function shuffle() {
    let arr = ['0','1','2','3','4','5','6','7','8','9']; 

    return arr.sort(function() {
      return Math.random() - 0.5;
    });

  }
     
  function showCode() {
    let arrNew = '';
    let arrChanged =  shuffle();

    for (let i = 0; i < 4; i ++) {
      arrNew += arrChanged[i];
    }
    console.log('收到的验证码为：', arrNew);
    localStorage.setItem('arrNew', arrNew);
    console.log('localStorage:',localStorage);
  }

  $('form .add').click(function() {
    showCode();
    sendedBoolean = true;
  })

  $('form .verification').blur(function() {
  	if (sendedBoolean) {
  	let arrNew = localStorage.getItem('arrNew');
    if (arrNew !== $(this).val()) {
      $(this).addClass("errorC");
      $(this).next().next().html('请输入正确的验证码！');
      $(this).next().next().css('display','block');
    } else {
    	$(this).removeClass("errorC");
    	$(this).addClass("checkedC");
      $(this).next().next().empty();
    }
  } else {
   	 $(this).addClass("errorC");
    $(this).next().next().html('请先点击发送验证码按钮！');
    $(this).next().next().css('display','block');
  }
  })
  
      
 
  function tabForward(event) {
  	// let form = document.getElementById('form1');
    let target = event.target;
    let len = form.elements.length;

    if (target.value.length === target.maxLength) {
      for (let i = 0; i < len; i++) {
        if (form.elements[i] === target) {
          if (form.elements[i + 1]) {
          	form.elements[i + 1].focus();
          }
          return;
        }
      }
    }
  }

  (function focusAuto() {
    // let form = document.getElementById('form1');
    let len = form.elements.length;
    let element = form.elements[0];
  
    if (element.autofocus !== true) {
      element.focus();
      console.log("JS focus");
    }
    for (let i = 0; i < len; i++) {
      form.elements[i].onkeyup = function(event) {
      	console.log("切换到下一个焦点");
      	tabForward(event);
      }
    }
  })();

  $(".sublimt").click(function(event) {
  	event.preventDefault();
    // let target = event.target;
    // let submitButton = target.elements["submit-button"];
    // submitButton.disabled = true;
    $(this).disabled = true;

    if (form.checkValidity()) {
      console.log('整个表单验证通过');
    } else {
      console.log('整个表单验证并没有通过');
    }
  })

});

