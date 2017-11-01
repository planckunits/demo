// @flow

import React from 'react'
import type { Sensor } from '../../types'
import SensorListItem from '../../containers/SensorListItemContainer'
import { Wrapper, HeaderTitle, Header, Body } from './Wrapper'

type Props = {
  sensors: Sensor[],
}

const SensorGrid = ({ sensors }: Props) => (
  <Wrapper>
    <Header>
      <HeaderTitle>Sensors</HeaderTitle>
      <span>({sensors.length})</span>
    </Header>
    <Body>
      {sensors.map(sensor => (
        <SensorListItem sensor={sensor} key={sensor.id} />
      ))}
      {sensors.length === 0 ? <span>no item received</span> : ''}
    </Body>
  </Wrapper>
)
export default SensorGrid
