import fetch from 'isomorphic-fetch';


// fetch('./domain.json')
// 	.then(function (response) {
// 		if (response.ok) {
// 		    response.json()
// 		    // .then(function (data) {
// 		    //   console.log(data);
// 		    // };
// 		  } else {
// 		    console.log('请求失败，状态码为', response.status);
// 		  }
// 		}, function(err) {
// 		  console.log('出错：', err);
// 		}).then((jsonData) => {
//    // this.handleJsonData(jsonData);
//     console.log('出错11：', jsonData);
//   });


//发送请求
 // handleRequest: function(tableType) {
  // let urlMap = UrlMaps[tableType];
  // let postReq = new Request(urlMap, { Method: 'POST' });

fetch('./domain.json')
	.then(function(response) {   // 向指定的URL发出请求
		if (response.ok) {
		    return response.json();   // 得到回应后，将其转为JSON格式
		} else {
		    console.log('请求失败，状态码为：',response.status)
		}
	}, function(err) {
		   console.log('出错：',err);
	})
	.then((jsonData) => {
    	console.log('jsonData:', jsonData);
    });
