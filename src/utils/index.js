// @flow

import type { Sensor } from '../types'

export function fakeData(): $Shape<Sensor> {
  return {
    gps: {
      lat: 37.3685362 + (Math.random() - 0.5) * 0.003,
      lng: 140.3825798 + (Math.random() - 0.5) * 0.003,
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
  }
}

export function fakeDataLeafFukushima(): $Shape<Sensor> {
  return {
    gps: {
      lat: 37.3685362 + (Math.random() - 0.5) * 0.003,
      lng: 140.3837 + (Math.random() - 0.5) * 0.0001,
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
  }
}

export const updateFakeData = (data: $Shape<Sensor>) => ({
  ...data,
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

export const updateFakeDataLeafFukushima = (data: $Shape<Sensor>) => {
  const interrupt = Math.random() < 0.1
  if (interrupt) {
    return {
      ...data,
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
      interrupt,
    }
  } else {
    return {
      ...data,
      interrupt,
    }
  }
}
