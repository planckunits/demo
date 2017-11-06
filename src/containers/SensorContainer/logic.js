// @flow

import type { ThunkAction, Sensor } from '../../types'
import { receiveSensor } from '../SensorContainer/actions'
import { nearOrderSensors } from '../SensorById/selectors'
import { start } from '../System/actions'
import { fakeDataLeafFukushima, updateFakeDataLeafFukushima } from '../../utils'

import _ from 'lodash'
// import * as actions from './actions'

import mqtt from 'mqtt'
const url =
  process.env.NODE_ENV === 'production'
    ? 'ws://sensor-uniform.cps.im.dendai.ac.jp:1883'
    : 'ws://sensor-uniform.cps.im.dendai.ac.jp:1883'
// : 'ws://localhost:3001'

const DELAY = 10000 //ms

const sleep = ms => new Promise(r => setTimeout(r, ms))

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
      let pj, accel
      try {
        pj = JSON.parse(payload.toString())
        accel = { x: pj.acc_x, y: pj.acc_y, z: pj.acc_z }
      } catch (e) {
        return
      }
      let sensor
      const interrupt = !getState().System.intoro
      if (id in getState().SensorById) {
        sensor = { ...getState().SensorById[id], accel, interrupt }
        dispatch(receiveSensor(sensor))
      } else {
        sensor = {
          ...faker.next().value,
          id,
          accel,
          interrupt,
          primary: true,
        }
        dispatch(receiveSensor(sensor))
      }
      if (interrupt) {
        dispatch(wave(sensor))
        dispatch(demoReset(sensor))
      }
    })
  }
}

export function waiting(): ThunkAction {
  return async dispatch => {
    await sleep(8000)
    dispatch(start())
  }
}

export function wave(sensor: Sensor): ThunkAction {
  return async (dispatch, getState) => {
    const sensors = nearOrderSensors(getState(), sensor)
    for (let i = 0; i < sensors.length; i++) {
      const s = sensors[i]
      await sleep(600)
      dispatch(receiveSensor({ ...s, interrupt: true }))
      dispatch(demoReset(s))
    }
  }
}

export function demoReset(sensor: Sensor): ThunkAction {
  return async dispatch => {
    await sleep(8 * 1000)
    dispatch(receiveSensor({ ...sensor, interrupt: false }))
  }
}

export function dummyLoop(): ThunkAction {
  return async dispatch => {
    const ids = 'ABCDEF'.split('').map(x => `dum${x}`)

    const data = _.zipObject(ids, _.map(ids, () => faker.next().value))
    ids.forEach(id => {
      dispatch(receiveSensor({ id, ...data[id] }))
    })

    while (true) {
      await sleep(DELAY)
      const targetId = _.sample(ids)

      data[targetId] = updateFakeDataLeafFukushima(data[targetId])

      dispatch(receiveSensor({ id: targetId, ...data[targetId] }))
    }
  }
}
