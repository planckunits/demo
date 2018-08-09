// @flow

import { connect, type Connector } from 'react-redux'
import type { State, Sensor } from '../../types'
import Sensors from '../../components/Sensors'
import * as selectors from './selectors'
import { wave2 as wave } from './logic'

type Props = {
  sensors: Sensor[],
}

const ms = (state: State) => ({
  sensors: selectors.getSensors(state),
})

const conn: Connector<{}, Props> = connect(ms, { wave })

export default conn(Sensors)
