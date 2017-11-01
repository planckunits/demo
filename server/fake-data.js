const fakeData = () => ({
  gps: {
    lat: 35.681167 + (Math.random() - 0.5) * 0.003,
    lng: 139.767052 + (Math.random() - 0.5) * 0.003,
  },
  env: {
    temperature: 20 + (Math.random() - 0.5) * 10,
    humidity: 50 + (Math.random() - 0.5) * 30,
    airPressure: Math.random() * 10,
  },
  accel: {
    x: Math.random(),
    y: Math.random(),
    z: Math.random(),
  },
  magnestic: {
    x: Math.random(),
    y: Math.random(),
    z: Math.random(),
  },
  gyro: {
    x: Math.random(),
    y: Math.random(),
    z: Math.random(),
  },
  interrupt: false,
})

const updateFakeData = data =>
  Object.assign(data, {
    gps: {
      lat: data.gps.lat + (Math.random() - 0.5) * 0.0001,
      lng: data.gps.lng + (Math.random() - 0.5) * 0.0001,
    },
    env: {
      temperature: 20 + (Math.random() - 0.5) * 10,
      humidity: 50 + (Math.random() - 0.5) * 30,
      airPressure: Math.random() * 10,
    },
    accel: {
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
    },
    magnestic: {
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
    },
    gyro: {
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
    },
    interrupt: Math.random() < 0.1,
  })
module.exports = { fakeData, updateFakeData }
