// @flow
import type { Action, Sensor } from '../../types'
import { Actions } from '../SensorContainer/actionTypes'

export type State = { [id: string]: Sensor }

const initialState: State = {}
const initialSensorState: Sensor = {
  id: '',
  gps: { lat: 0, lng: 0 },
  env: { temperature: 0, humidity: 0, airPressure: 0 },
  accel: { x: 0, y: 0, z: 0 },
  magnestic: { x: 0, y: 0, z: 0 },
  gyro: { x: 0, y: 0, z: 0 },
  interrupt: false,
  hover: false,
  primary: false,
}

export default function(
  state: State = initialState,
  action: Action
): Exact<State> {
  switch (action.type) {
    case Actions.RECEIVE_SENSOR:
      return {
        ...state,
        ...{
          [action.sensor.id]: {
            ...initialSensorState,
            ...state[action.sensor.id],
            ...action.sensor,
          },
        },
      }
    default:
      return state
  }
}
