// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import { dummyLoop, createMqttClient } from './containers/SensorContainer/logic'
import {} from './containers/SensorContainer/logic'
import './injectGlobal'

const store = configureStore()

store.dispatch(createMqttClient('leaf-fukushima-2017/#'))
store.dispatch(dummyLoop())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
