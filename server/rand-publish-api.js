// @flow

const _ = require('lodash')
const request = require('request')

const { fakeData, updateFakeData } = require('../src/utils')

const sleep = ms => new Promise(r => setTimeout(r, ms))
const cycleDelay = 1000 //ms

const ids = 'abcdefghijklmnopqrstuvwxyz'.split()

const data = _.zipObject(ids, _.map(ids, () => fakeData()))

const packBinary = async data => {
  const bin = Buffer.alloc(33)
  console.log(JSON.stringify(data))
  bin.writeInt16BE(100 * data.accel.x, 0)
  bin.writeInt16BE(100 * data.accel.y, 2)
  bin.writeInt16BE(100 * data.accel.z, 4)
  bin.writeInt16BE(100 * data.magnestic.x, 6)
  bin.writeInt16BE(100 * data.magnestic.y, 8)
  bin.writeInt16BE(100 * data.magnestic.z, 10)
  bin.writeInt16BE(100 * data.gyro.x, 12)
  bin.writeInt16BE(100 * data.gyro.y, 14)
  bin.writeInt16BE(100 * data.gyro.z, 16)
  bin.writeInt16BE(100 * data.env.temperature, 18)
  bin.writeInt16BE(100 * data.env.humidity, 20)
  bin.writeInt16BE(100 * data.env.airPressure, 22)
  bin.writeFloatBE(data.gps.lat, 24)
  bin.writeFloatBE(data.gps.lng, 28)
  console.log(bin)
  const flags = 0 & data.interrupt
  bin.writeInt8(flags, 32)
  // TODO
  return bin
}

const main = async () => {
  for (var i = 0; i < 10000; i++) {
    await sleep(cycleDelay)
    const targetId = _.sample(ids)
    data[targetId] = updateFakeData(data[targetId])
    const message = await packBinary(data[targetId])

    request.post(
      {
        url: 'http://sensor-uniform-api.cps.im.dendai.ac.jp/log',
        headers: {
          'x-soracom-imsi': 'from-js-01',
        },
        body: message,
        timeout: 1000,
      },
      (error, response, body) => {
        console.log(body)
      }
    )

    // TODO
    console.log('publisher.publish:', message)
  }
}
main()
