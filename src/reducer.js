// @flow
import { combineReducers } from 'redux'
import SensorById from './containers/SensorById/reducer'
import SensorContainer from './containers/SensorContainer/reducer'
import System from './containers/System/reducer'

export default combineReducers({
  SensorById,
  SensorContainer,
  System,
})
