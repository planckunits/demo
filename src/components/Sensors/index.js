// @flow
import * as React from 'react'
import type { Sensor } from '../../types'
import SensorMap from '../../containers/SensorMapContainer'
import SensorList from '../../containers/SensorList'
import { SensorsWrapper } from './SensorsWrapper'

export type Props = {
  sensors: Sensor[],
  wave: Function,
}

const Sensors = ({ sensors, wave }: Props) => (
  <div>
    <SensorsWrapper>
      <SensorMap sensors={sensors} />
      <SensorList sensors={sensors} />
    </SensorsWrapper>
    <button onClick={wave}>wave DEMO</button>
  </div>
)

export default Sensors
