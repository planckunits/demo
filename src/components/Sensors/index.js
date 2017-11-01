// @flow
import * as React from 'react'
import type { Sensor } from '../../types'
import SensorMap from '../../containers/SensorMapContainer'
import SensorList from '../SensorList'
import { SensorsWrapper } from './SensorsWrapper'

export type Props = {
  sensors: Sensor[],
}

const Sensors = ({ sensors }: Props) => (
  <SensorsWrapper>
    <SensorMap sensors={sensors} />
    <SensorList sensors={sensors} />
  </SensorsWrapper>
)

export default Sensors
