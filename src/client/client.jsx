import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, } from 'redux'
import * as reducers from '../shared/reducers/index'
import Data from '../shared/components/DataConnector'
import Display from '../shared/components/DisplayConnector'

const combinedReducers = combineReducers(reducers)
const store = createStore(combinedReducers)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Data />
    </Provider>,
    document.getElementById('data')
  )

  ReactDOM.render(
    <Provider store={store}>
      <Display />
    </Provider>,
    document.getElementById('display')
  )

  console.log(store)
})
