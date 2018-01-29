import React, { PropTypes } from 'react'

// const Todo = ({ likeText, like }) => {
// 	console.log(like);
// 	return (
//   <div style = {{fontSize: '20px'}}>
//     {`${likeText}just because ${like}`}
//   </div>
// )
// }
// 箭头函数可以省略 {}，还可以省去return。

const Todo = ({ likeText, like }) => (
  <div style = {{ fontSize: '20px' }}>
    {`${likeText}just because ${like}`}
  </div>
)
// 这里无状态函数的写法中的参数是父组件的属性，省略了 this.props

Todo.propTypes = {
  like: PropTypes.bool.isRequired,
  likeText: PropTypes.string.isRequired
}

export default Todo
