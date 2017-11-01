// @flow

import React from 'react'
import type { Sensor } from '../../types'
import { Marker, MarkerImg } from './Marker'

import sensorImage from './sensor.svg'

export type Props = {
  sensor: Sensor,
  $hover?: boolean,
  lat: number,
  lng: number,
}

const MapSensor = ({ sensor, $hover = false }: Props) => (
  <Marker hover={$hover || sensor.hover}>
    <MarkerImg src={sensorImage} />
  </Marker>
)

export default MapSensor
