// @flow

import { connect, type Connector } from 'react-redux'
import type { State, Sensor } from '../../types'
import SensorListItem, {
  type Props as TProps,
} from '../../components/SensorListItem'
import { onMouseEnter, onMouseLeave } from '../SensorContainer/logic'

type Props = {
  sensor: Sensor,
}

const ms = (state: State, ownProps: *) => ({})

const conn: Connector<Props, TProps> = connect(ms, {
  onMouseEnter,
  onMouseLeave,
})

export default conn(SensorListItem)
