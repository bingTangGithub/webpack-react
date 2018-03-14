// 定义类
class SuperType {
  // constructor 为es6的构造函数，对应es5 的构造方法
  constructor(name) {
    // this关键字则代表实例对象
    this.state = { isLiked: false }
    this.color = ["red", "blue", "green"];
    this.name = name;
  }

  // 类的所有方法都定义在类的prototype属性上面。
  createDOMFromString(str) {
    const div = document.createElement("div");
    if (typeof str == "string")
      div.innerHTML = str;
    return div;
  }

  domAddEvent(str, eventType, eventFun) {
    console.log('SuperType 中 this::::::', this);  // SuperType { state, color, name, el}
    console.log('SuperType::::::', SuperType); // SuperType 构造函数，即 constructor
    this.el = this.createDOMFromString(str);
    this.el.addEventListener(eventType, eventFun.bind(this, this.el, this), false);
    return this.el;
  }
}

// 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
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
  all.state.isLiked = !all.state.isLiked;
  likeText.innerHTML = all.state.isLiked ? '取消' : '点赞';
  const text = all.state.isLiked ? '为你点赞' : '取消点赞';
  spanText.innerHTML = `我是${all.name}，${text}`;
}

document.getElementById('app').appendChild(butInstance.domAddEvent(buttonStr, 'click', clickFun));



