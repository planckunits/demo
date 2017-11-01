// @flow

import React from 'react'
import GoogleMapReact from 'google-map-react'
import MapSensor from '../MapSensor'

import type { Sensor } from '../../types'
import type { Props as MapSensorProps } from '../../components/MapSensor'

const key = 'AIzaSyCvjhDr-6fwAojZFLqi1SBOeycnW_pdU4U'

export type Props = {
  sensors: Sensor[],
  onMouseEnter: Function,
  onMouseLeave: Function,
}

const SensorMap = ({ sensors, onMouseEnter, onMouseLeave }: Props) => (
  <GoogleMapReact
    bootstrapURLKeys={{ key }}
    defaultZoom={16}
    minZoom={4}
    hoverDistance={40}
    onChildMouseEnter={(key: string, childProps: MapSensorProps) => {
      onMouseEnter(childProps.sensor)
    }}
    onChildMouseLeave={(key: string, childProps: MapSensorProps) => {
      onMouseLeave(childProps.sensor)
    }}
    center={{ lat: 35.681215342775026, lng: 139.76703829930344 }}
  >
    {sensors.map(sensor => (
      <MapSensor
        key={sensor.id}
        sensor={sensor}
        lat={sensor.gps.lat}
        lng={sensor.gps.lng}
      />
    ))}
  </GoogleMapReact>
)
export default SensorMap
