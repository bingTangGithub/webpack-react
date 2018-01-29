
// import React, { Component} from 'react';
// import ReactDOM from 'react-dom';

// 方案一
// import BaiduUtil from './baiduUtil.jsx';
// BaiduUtil('https://user.qzone.qq.com/1569025161/infocenter');


// 方案二
// import simpleUtil from './simpleUtil.jsx';
// var _hmt = _hmt || [];
// (function() {
//   var domainId = simpleUtil('https://user.qzone.qq.com/1569025161/infocenter');
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?" + domainId;
//   var s = document.getElementsByTagName("script")[0]; 
//   s.parentNode.insertBefore(hm, s);
// })();


// 方案三
// import BaiduUtilES6 from './baiduUtilES6.jsx';
// BaiduUtilES6.genStatistics('https://user.qzone.qq.com/1569025161/infocenter');

// 方案四

import { BaiduUtil } from '@xinguang/common-tool';
BaiduUtil.genStatistics('https://sjyx.xinguang.com');
console.log(BaiduUtil.genStatistics('https://user.qzone.qq.com/1569025161/infocenter'));








	
	