import $ from 'jquery';

$(function() {
  $("#send").click(function() {
    console.log('点击');
    $('#resText').load('./$load.html');
		// $('#resText').load('$load.html');
  })





	// $("#ajaxSend").click(function(){
	// 	let xmlHttpReq = null;

	// 	if(window.ActiveXObject) {  // IE5 IE6浏览器引入 XMLHttpRequest
	// 		xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
	// 	} else if(window.XMLHttpRequest) {
	// 		xmlHttpReq = new XMLHttpRequest(); 
	// 	}


	// 	// xmlHttpReq.open('GET', "http://172.16.1.181:8059/", true);  //调用 open 方法并采用异步方式
	// 	xmlHttpReq.open('post', "http://106.14.181.21:8008/shop/query", true);  //调用 open 方法并采用异步方式
	// 	xmlHttpReq.onreadystatechange = RequestCallBack; //设置回调函数  
	// 	xmlHttpReq.send(null);

	// 	function RequestCallBack() { //一旦readyState值改变，就会调用该函数
	// 		if(xmlHttpReq.readyState == 4) {
	// 			if(xmlHttpReq.statue == 200) {
	// 				document.getElementById("resText").innerHTML =xmlHttpReq.responseText;
	// 			}
	// 		}

	// 	}

	// })
})