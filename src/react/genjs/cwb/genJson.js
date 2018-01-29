let fs = require('fs');

// 1. 读当前文件夹下的所有图片文件
// 
// function readAllJpgs() {
// 	var result = [];
// 	
// 	return result;
// }
// 
// 引用imageinfo模块
let image = require("imageinfo");

function readFileList(path, filesList) {
  let files = fs.readdirSync(path);
  files.forEach(function (itm, index) {
    let stat = fs.statSync(path + itm);
    if (stat.isDirectory()) {
        // 递归读取文件
      readFileList(`${path + itm  }/`, filesList)
    } else {

      let obj = {};// 定义一个对象存放文件的路径和名字
      obj.path = path;// 路径
      obj.filename = itm// 名字
      filesList.push(obj);
    }

  })

}

let getFiles = {
    // 获取文件夹下的所有图片
  getImageFiles: function (path) {
    let imageList = [];

    this.getFileList(path).forEach((item) => {
      let ms = image(fs.readFileSync(item.path + item.filename));

      ms.mimeType && (imageList.push(item.filename))
    });
    return imageList;

  }
};

// 获取文件夹下的所有图片
getFiles.getImageFiles("./cwb/");
console.log(getFiles.getImageFiles("./cwb/"));

// 2. 根据生成固定的json格式
// function generatePersonInfo(list) {
// 	var result = [];
// 	for (var i = 0, item; i < list.length; i++) {
// 		item = list[i];
// 		result.push({
// 			"EMPLOYEE_ID": "11923",
// 			"empName": "李根",
// 			"IMAGE": "src/staffImage/11923-产品部-李根.jpg"
// 		});
// 	}
// 	return result;
// }
// 
// 


// 3. 导出成json文件
// function writeJson(arr, callback) {
// 	fs.writeFile(filename, JSON.stringify(arr), 'utf8', function(err) {
// 		
// 	});
// }
// 