// 原型链继承
import React from 'react';

function SuperType () {
  this.state = { isLiked: false }
}

SuperType.prototype.createDOMFromString = function(str) {
  const div = document.createElement("div");
  if (typeof str == "string")
    div.innerHTML = str;
  return div;
}

SuperType.prototype.domAddEvent = function(str, clickFun) {
  this.el = SuperType.prototype.createDOMFromString(str);
  this.el.addEventListener('click', clickFun.bind(this, this.el, this.state), false);
  return this.el;
}


function SubType(x, y) {
  this.x = x;
  this.y = y;
}

// 继承了 SuperType
SubType.prototype = new SuperType();

let butInstance =  new SubType();
let buttonStr = `
  <button class='like-button'>
    <span class='like-text'>点赞</span>
    <span>👍</span>
  </button>
`;
let clickFun = (dom, state) => { // dom 对应第二个参数 this.el
  debugger;
  const likeText = dom.querySelector('.like-text')
  state.isLiked = !state.isLiked
  likeText.innerHTML = state.isLiked ? '取消' : '点赞'
}

document.getElementById('app').appendChild(butInstance.domAddEvent(buttonStr, clickFun));









