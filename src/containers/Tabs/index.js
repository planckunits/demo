// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, System } from '../../types'
import SensorContainer from '../SensorContainer'
import SensorGrid from '../SensorContainer/Grid'

type Props = {
  system: System,
}

class Container extends React.Component<Props> {
  render() {
    const { system } = this.props
    return (
      <div>{system.tab === 'base' ? <SensorGrid /> : <SensorContainer />}</div>
    )
  }
}

const ms = (state: State) => ({
  system: state.System,
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
