// 使用原型链实现继承
import React from 'react';

function SuperType (name) {
  this.state = { isLiked: false }
  this.color = ["red", "blue", "green"];
  this.name = name;
}

SuperType.prototype = {
  constructor: SuperType,
  createDOMFromString: function(str) {
    const div = document.createElement("div");
    if (typeof str == "string")
      div.innerHTML = str;
    return div;
  },
  domAddEvent: function(str, eventType, eventFun) {
    console.log('继承了this::::::', this);
    console.log('SuperType::::::', SuperType);
    this.el = SuperType.prototype.createDOMFromString(str);
    this.el.addEventListener(eventType, eventFun.bind(this, this.el, this), false);
    return this.el;
  },
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
const divInstance =  new SubType('bingTang');
const buttonStr = `
  <button class='like-button'>
    <span class='like-text'>点赞</span>
    <span>👍</span>
  </button>
`;

const divStr = `
  <div class='like-button' style="border: 1px solid red">
    <span class='like-text'>我是bingTang，已取消点赞</span>
  </div>
`;
const clickFun = (dom, all) => { // dom 对应第二个参数 this.el
  debugger;
  const likeText = dom.querySelector('.like-text');
  all.state.isLiked = !all.state.isLiked;
  likeText.innerHTML = all.state.isLiked ? '取消' : '点赞';
}

const mouseFun = (dom, all) => {
  debugger;
  const likeText = dom.querySelector('.like-button');
  if (likeText.style.border !== 'none') {
    likeText.style.border = 'none';
  } else {
    likeText.style.border = '1px solid red';
  }
}

document.getElementById('app').appendChild(butInstance.domAddEvent(buttonStr, 'click', clickFun));
document.getElementById('app').appendChild(divInstance.domAddEvent(divStr, 'click', mouseFun));









