// @flow

import type { ThunkAction, Sensor } from '../../types'
import { receiveSensor } from '../SensorContainer/actions'
import { fakeDataLeafFukushima, updateFakeDataLeafFukushima } from '../../utils'

import _ from 'lodash'
// import * as actions from './actions'

import mqtt from 'mqtt'
const url =
  process.env.NODE_ENV === 'production'
    ? 'ws://sensor-uniform.cps.im.dendai.ac.jp:1883'
    : 'ws://sensor-uniform.cps.im.dendai.ac.jp:1883'
// : 'ws://localhost:3001'

const faker = fakeDataLeafFukushima()

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
  return async (dispatch, getState) => {
    const client = mqtt.connect(url)
    client.on('connect', () => {
      console.log('connected')
      client.subscribe(topic)
    })

    client.on('message', (topic, payload) => {
      const topics = topic.split('/')
      const id = topics[1]
      const pj = JSON.parse(payload.toString())
      const accel = { x: pj.acc_x, y: pj.acc_y, z: pj.acc_z }
      if (id in getState().SensorById) {
        dispatch(receiveSensor({ id, accel }))
      } else {
        const sensor = {
          ...faker.next().value,
          id,
          accel,
          primary: true,
        }
        dispatch(receiveSensor(sensor))
      }
    })
  }
}

const DELAY = 200 //ms

const sleep = ms => new Promise(r => setTimeout(r, ms))

export function dummyLoop(): ThunkAction {
  return async dispatch => {
    const ids = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(x => `dumm${x}`)

    const data = _.zipObject(ids, _.map(ids, () => faker.next().value))

    while (true) {
      await sleep(DELAY)
      const targetId = _.sample(ids)

      data[targetId] = updateFakeDataLeafFukushima(data[targetId])

      dispatch(receiveSensor({ id: targetId, ...data[targetId] }))
    }
  }
}
