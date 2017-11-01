// @flow

import type { ThunkAction, Sensor } from '../../types'
import { receiveSensor } from '../SensorContainer/actions'
// import * as actions from './actions'

import mqtt from 'mqtt'
const url =
  process.env.NODE_ENV === 'production'
    ? 'ws://sensor-uniform.cps.im.dendai.ac.jp:1883'
    : 'ws://localhost:3001'

export function onMouseEnter(sensor: Sensor): ThunkAction {
  return async dispatch => {
    dispatch(receiveSensor({ ...sensor, hover: true }))
  }
}

export function onMouseLeave(sensor: Sensor): ThunkAction {
  return async dispatch => {
    dispatch(receiveSensor({ ...sensor, hover: false }))
  }
}

export function createMqttClient(topic: string): ThunkAction {
  return async dispatch => {
    const client = mqtt.connect(url)
    client.on('connect', () => {
      console.log('connected')
      client.subscribe(topic)
    })

    client.on('message', (topic, payload) => {
      const sensor: Sensor = JSON.parse(payload)
      dispatch(receiveSensor({ id: topic, ...sensor }))
    })
  }
}
