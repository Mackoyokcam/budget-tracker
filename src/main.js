import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './component/app'
import reducer from './reducer'
import reporter from './lib/redux-reporter.js'

let store = createStore(reducer, applyMiddleware(reporter))

const container = document.createElement('div')
container.className = 'root'
document.body.appendChild(container)
ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  container)
