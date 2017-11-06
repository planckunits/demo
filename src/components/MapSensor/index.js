// @flow

import React from 'react'
import type { Sensor } from '../../types'
import { Marker, MarkerImg, Label } from './Marker'

import sensorImage from './sensor.svg'
import sensorImageError from './sensor-e.svg'

export type Props = {
  sensor: Sensor,
  $hover?: boolean,
  lat: number,
  lng: number,
}

const renderSensor = sensor => {
  if (sensor.interrupt) {
    return <MarkerImg src={sensorImage} />
  } else {
    return <MarkerImg src={sensorImageError} />
  }
}

const MapSensor = ({ sensor, $hover = false }: Props) => (
  <Marker hover={$hover || sensor.hover}>
    {renderSensor(sensor)}
    <Label primary={sensor.primary}>{sensor.id}</Label>
  </Marker>
)

export default MapSensor
