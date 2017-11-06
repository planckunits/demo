// @flow

import type { Sensor } from '../types'

export function* fakeData(): Generator<$Shape<Sensor>, void, true> {
  yield {
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
    primary: false,
    interrupt: false,
  }
}

export function* fakeDataLeafFukushima(): Generator<
  $Shape<Sensor>,
  void,
  true
> {
  const start = 0.0027
  let di = 0
  while (true) {
    di++
    yield {
      gps: {
        lat: 37.3685362 + start + di * (-0.003 / 27),
        lng: 140.3837 + (Math.random() - 0.5) * 0.0002,
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
      primary: false,
      interrupt: false,
    }
  }
}

export const updateFakeData = (data: $Shape<Sensor>) => ({
  ...data,
  gps: {
    lat: data.gps.lat + (Math.random() - 0.5) * 0.0001,
    lng: data.gps.lng + (Math.random() - 0.5) * 0.0001,
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
