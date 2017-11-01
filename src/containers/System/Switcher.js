// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import styled from 'styled-components'

import type { State, System } from '../../types'
import { switchTab } from './actions'

type Props = {
  system: System,
  switchTab: Function,
}

const Selection = styled.button`
  color: ${p => (p.active ? 'black' : 'gray')};
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  margin: 5px;
`

class Container extends React.Component<Props> {
  render() {
    const { system, switchTab } = this.props
    return (
      <div style={{ display: 'flex' }}>
        <Selection
          active={system.tab === 'base'}
          onClick={() => switchTab('base')}
        >
          Base
        </Selection>
        <Selection
          active={system.tab === 'map'}
          onClick={() => switchTab('map')}
        >
          Map
        </Selection>
      </div>
    )
  }
}

const ms = (state: State) => ({
  system: state.System,
})

const conn: Connector<{}, Props> = connect(ms, { switchTab })

export default conn(Container)
