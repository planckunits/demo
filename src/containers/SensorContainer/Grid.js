// @flow

import { connect, type Connector } from 'react-redux'
import type { State, Sensor } from '../../types'
import SensorGrid from '../../components/SensorGrid'
import * as selectors from './selectors'

type Props = {
  sensors: Sensor[],
}

const ms = (state: State) => ({
  sensors: selectors.getSensors(state),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(SensorGrid)
