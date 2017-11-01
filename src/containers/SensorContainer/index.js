// @flow

import { connect, type Connector } from 'react-redux'
import type { State, Sensor } from '../../types'
import Sensors from '../../components/Sensors'
import * as selectors from './selectors'

type Props = {
  sensors: Sensor[],
}

const ms = (state: State) => ({
  sensors: selectors.getSensors(state),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Sensors)
