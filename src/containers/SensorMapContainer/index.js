// @flow

import { connect, type Connector } from 'react-redux'
import type { State, Sensor } from '../../types'
import SensorMap from '../../components/SensorMap'
import type { Props as TProps } from '../../components/SensorMap'
import { onMouseEnter, onMouseLeave } from '../SensorContainer/logic'

type Props = {
  sensors: Sensor[],
}

const ms = (state: State, ownProps: *) => ({})

const conn: Connector<Props, TProps> = connect(ms, {
  onMouseEnter,
  onMouseLeave,
})

export default conn(SensorMap)
