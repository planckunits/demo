// @flow

const _ = require('lodash')
const request = require('request')

const { fakeData, updateFakeData } = require('../src/utils')

const sleep = ms => new Promise(r => setTimeout(r, ms))
const cycleDelay = 1000 //ms
const topic = 'takaya-a'

const ids = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => `Dm-${c}`)

const data = _.zipObject(ids, _.map(ids, () => fakeData()))

const packBinary = async data => {
  const bin = Buffer.alloc(33)
  console.log(JSON.stringify(data))
  bin.writeInt16LE(100 * data.accel.x, 0)
  bin.writeInt16LE(100 * data.accel.y, 2)
  bin.writeInt16LE(100 * data.accel.z, 4)
  bin.writeInt16LE(100 * data.magnestic.x, 6)
  bin.writeInt16LE(100 * data.magnestic.y, 8)
  bin.writeInt16LE(100 * data.magnestic.z, 10)
  bin.writeInt16LE(100 * data.gyro.x, 12)
  bin.writeInt16LE(100 * data.gyro.y, 14)
  bin.writeInt16LE(100 * data.gyro.z, 16)
  bin.writeInt16LE(100 * data.env.temperature, 18)
  bin.writeInt16LE(100 * data.env.humidity, 20)
  bin.writeInt16LE(100 * data.env.airPressure, 22)
  bin.writeFloatLE(data.gps.lat, 24)
  bin.writeFloatLE(data.gps.lng, 28)
  console.log(bin)
  const flags = data.interrupt
  bin.writeInt8(flags, 32)
  // TODO
  return bin
}

const main = async () => {
  for (var i = 0; i < 10000; i++) {
    await sleep(cycleDelay)
    const targetId = _.sample(ids)
    data[targetId] = updateFakeData(data[targetId])
    console.log('req')
    console.log(data[targetId])
    const message = await packBinary(data[targetId])

    request.post(
      {
        // url: 'http://localhost:8080/log',
        url: 'http://sensor-uniform-api.cps.im.dendai.ac.jp/log',
        headers: {
          'x-soracom-imsi': `jsd-${targetId}`,
          'x-topic': topic,
        },
        body: message,
        timeout: 1000,
      },
      (error, response, body) => {
        if (error) {
          console.error(error)
        } else {
          console.log('res')
          console.log(body)
        }
      }
    )
  }
}
main()
