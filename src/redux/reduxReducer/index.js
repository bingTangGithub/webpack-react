import { createStore } from 'redux';
import { VisibilityFilters } from './actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state = initialState, action) {
  switch (action.type) {
  case 'SET_VISIBILITY_FILTER':
    return Object.assign({}, state, {
      visibilityFilter: action.filter
    })
  case 'ADD_TODO':
    return Object.assign({}, state, {
      todos: [
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ]
    })
  case 'TOGGLE_TODO':
    return Object.assign({}, state, {
      todos: state.todos.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    })
  default:
    return state
  }
}


// 创建 Redux store 来存放应用的状态。
let store = createStore(todoApp);

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
  console.log(store.getState())
);

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'ADD_TODO', text: 'Go to swimming pool' });
store.dispatch({ type: 'TOGGLE_TODO', index: 0 });
store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ACTIVE' });
