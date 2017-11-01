// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import { createMqttClient } from './containers/SensorContainer/logic'
import './injectGlobal'

const store = configureStore()

store.dispatch(createMqttClient('topic/project1/#'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
