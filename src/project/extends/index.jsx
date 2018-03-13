// 借用构造函数
import React from 'react';

function SuperType (name) {
  this.state = { isLiked: false }
  this.color = ["red", "blue", "green"];
  this.name = name;
}

// SuperType.prototype = {
//   constructor: SuperType,
//   createDOMFromString: (str) => {
//     const div = document.createElement("div");
//     if (typeof str == "string")
//       div.innerHTML = str;
//     return div;
//   },
//   domAddEvent: (str, eventType, eventFun) => {
//     SuperType.el = SuperType.prototype.createDOMFromString(str);
//     SuperType.el.addEventListener(eventType, eventFun.bind(SuperType, SuperType.el, SuperType), false);
//     return SuperType.el;
//   },
// }

SuperType.prototype.createDOMFromString = function(str) {
  const div = document.createElement("div");
  if (typeof str == "string")
    div.innerHTML = str;
  return div;
}

SuperType.prototype.domAddEvent = function(str, eventType, eventFun) {
  this.el = SuperType.prototype.createDOMFromString(str);
  this.el.addEventListener(eventType, eventFun.bind(this, this.el, this), false);
  return this.el;
}


function SubType(name, age) {
  // 继承了 SuperType，借调了SuperType的构造函数
  SuperType.call(this, name);
  this.age = age;
}

// 继承了 SuperType
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;

const butInstance =  new SubType();
const divInstance =  new SubType('bingTang', 18);
const buttonStr = `
  <button class='like-button'>
    <span class='like-text'>点赞</span>
    <span>👍</span>
  </button>
`;

const divStr = `
  <div class='like-div'> 文档
  </div>
`;
const clickFun = (dom, all) => { // dom 对应第二个参数 this.el
  debugger;
  const likeText = dom.querySelector('.like-text')
  all.state.isLiked = !all.state.isLiked
  likeText.innerHTML = all.state.isLiked ? '取消' : '点赞'
}

const mouseFun = (dom, all) => {
  debugger;
  const likeText = dom.querySelector('.like-div');
  likeText.innerHTML = all.state.isLiked ? `我是${all.name},我要为你点赞` : `我是${all.name},我要取消赞`
}

document.getElementById('app').appendChild(butInstance.domAddEvent(buttonStr, 'click', clickFun));
document.getElementById('app').appendChild(divInstance.createDOMFromString(divStr, 'mouseover', mouseFun));









