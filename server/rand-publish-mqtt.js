// @flow
const mqtt = require('mqtt')
const _ = require('lodash')

const { fakeData, updateFakeData } = require('../src/utils')

const sleep = ms => new Promise(r => setTimeout(r, ms))
const topic = 'topic/project1'
const cycleDelay = 200 //ms

const client = mqtt.connect('ws://sensor-uniform.cps.im.dendai.ac.jp:1883', {
  connectTimeout: 1000,
})

client.on('connect', () => {
  console.log('publisher.connected.')
})

client.on('error', (...args) => {
  console.log(args)
})

client.on('message', (...args) => {
  console.log(args)
  client.end()
})

const ids = 'abcdefghijklmnopqrstuvwxyz'.split('')

const data = _.zipObject(ids, _.map(ids, () => fakeData()))

const main = async () => {
  while (!client.connected) {
    console.log('failed')
    await sleep(1000)
  }

  for (var i = 0; i < 10000; i++) {
    await sleep(cycleDelay)
    const targetId = _.sample(ids)
    data[targetId] = updateFakeData(data[targetId])
    const message = JSON.stringify(data[targetId])

    client.publish(`${topic}/${targetId}`, message)
    console.log('publisher.publish:', message)
  }
}
main()
