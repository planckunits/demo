// @flow
import type { State, Sensor } from '../../types'

import _ from 'lodash'

export const getSensor = (state: State, id: string) => state.SensorById[id]

function distance(a: Sensor, b: Sensor) {
  return Math.pow(b.gps.lat - a.gps.lat, 2) + Math.pow(b.gps.lng - a.gps.lng, 2)
}

export function nearOrderSensors(state: State, sensor: Sensor): Sensor[] {
  const sensors: Sensor[] = _.values(state.SensorById)
  sensors.sort(
    (a: Sensor, b: Sensor) => distance(sensor, a) - distance(sensor, b)
  )
  return sensors
}
