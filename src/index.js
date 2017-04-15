import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

import '../node_modules/semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
)

localStorage.clear()
console.warn('remove me')
