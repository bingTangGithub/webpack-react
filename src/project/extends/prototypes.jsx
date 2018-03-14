// 通过原型实现
import React from 'react';

function SuperType (name) {
  this.state = { isLiked: false }
  this.color = ["red", "blue", "green"];
  this.name = name;
}

SuperType.prototype = {
  constructor: SuperType,
  createDOMFromString: function(str) { // 这里不要用箭头函数
    const div = document.createElement("div");
    if (typeof str == "string")
      div.innerHTML = str;
    return div;
  },
  domAddEvent: function(str, eventType, eventFun) {
    console.log('this::::::', this);  // SuperType { state, color, name, el}
    console.log('SuperType::::::', SuperType); // SuperType 构造函数
    this.el = SuperType.prototype.createDOMFromString(str);
    this.el.addEventListener(eventType, eventFun.bind(this, this.el, this), false);
    return this.el;
  },
}

const butInstance =  new SuperType('bingTang');
const buttonStr = `
  <button class='like-button'>
    <span class='like-text'>点赞</span>
    <span>👍</span>
  </button>
  <div class='like-div'><span class="like-span">我是bingTang，已取消点赞</span></div>
`;

const clickFun = (dom, all) => { // dom 对应第二个参数 this.el
  debugger;
  const likeText = dom.querySelector('.like-text');
  const spanText = dom.querySelector('.like-span');
  all.state.isLiked = !all.state.isLiked
  likeText.innerHTML = all.state.isLiked ? '取消' : '点赞'
  const text = all.state.isLiked ? '为你点赞' : '取消点赞';
  spanText.innerHTML = `我是${all.name}，${text}`;
}

document.getElementById('app').appendChild(butInstance.domAddEvent(buttonStr, 'click', clickFun));









