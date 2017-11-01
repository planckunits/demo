// @flow
import type { Sensor } from '../../types'

import { RECEIVE_SENSOR } from './actionTypes'
import type { ReceiveSensor } from './actionTypes'

export function receiveSensor(sensor: Sensor): ReceiveSensor {
  return {
    type: RECEIVE_SENSOR,
    sensor,
  }
}
