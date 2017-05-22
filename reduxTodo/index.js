import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

let store = createStore(todoApp);
// console.log(Provider);
render(
  <Provider store={store}>
    <div>
    <App />
    </div>
  </Provider>,
  document.getElementById('app')
)


