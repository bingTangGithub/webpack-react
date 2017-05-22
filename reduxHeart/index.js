import { combineReducers, createStore } from 'redux';

function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;  
  } else {
    return state;
  }
}


function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat([{ text: action.text, completed: false }]);
  case 'TOGGLE_TODO':
    return state.map((todo, index) => 
      action.index === index ?
        { text: todo.text, completed: !todo.completed } :
        todo
    )
  default:
    return state;
  }
}

// function todoApp(state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// }
let reducer = combineReducers({ visibilityFilter, todos })

//创建 Redux store 来存放应用的状态。
// let store = createStore(todoApp);
let store = createStore(reducer);

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
  console.log(store.getState())
);

// 改变内部 state 惟一方法是 dispatch 一个 action。
store.dispatch({ type: 'ADD_TODO', text: 'Go to swimming pool' });
store.dispatch({ type: 'ADD_TODO', text: '第二个 Go to swimming pool' });
store.dispatch({ type: 'TOGGLE_TODO', index: 1 });
store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALLAAA' });