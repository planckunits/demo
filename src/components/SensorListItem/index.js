// @flow

import React from 'react'
import FontAwesome from 'react-fontawesome'

import _ from 'lodash'
// import scrollToComponent from 'react-scroll-to-component'

import type { Sensor, Axis3 } from '../../types'
import { Wrapper, ValueRow, ValueRowLabel, Name, Cell } from './Wrapper'

export type Props = {
  sensor: Sensor,
  onMouseEnter: Function,
  onMouseLeave: Function,
}

const valueFormat = (v: number) => _.padStart(_.round(v, 2).toFixed(2), 8)

const GeoLabel = ({ sensor }: { sensor: Sensor }) => (
  <ValueRow>
    <pre style={{ margin: '4px' }}>
      @{sensor.gps.lat},{sensor.gps.lng}
    </pre>
    <div
      onClick={() => {
        const url = `https://www.google.co.jp/maps/@${sensor.gps.lat},${sensor
          .gps.lng},18z`
        console.log(url)
        window.open(url)
      }}
    >
      <FontAwesome name="globe" />
    </div>
  </ValueRow>
)
const Axis3Row = ({ v, name }: { v: Axis3, name: string }) => (
  <ValueRow>
    <ValueRowLabel>{name}</ValueRowLabel>
    <Cell>
      x:<span>{valueFormat(v.x)}</span>
    </Cell>
    <Cell>
      y:<span>{valueFormat(v.y)}</span>
    </Cell>
    <Cell>
      z:<span>{valueFormat(v.z)}</span>
    </Cell>
  </ValueRow>
)

class SensorListItem extends React.Component<Props, {}> {
  root: any
  componentDidMount() {
    this.ensureVisible()
  }

  componentDidUpdate() {
    this.ensureVisible()
  }

  ensureVisible() {
    if (this.props.sensor.hover) {
      // scrollToComponent(this.refs.name)
    }
  }

  render() {
    const { sensor, onMouseEnter, onMouseLeave } = this.props
    return (
      <Wrapper
        hover={sensor.hover}
        emerge={sensor.interrupt}
        onMouseEnter={() => {
          onMouseEnter(sensor)
        }}
        onMouseLeave={() => {
          onMouseLeave(sensor)
        }}
      >
        <Name>ID: {sensor.id}</Name>
        <Axis3Row v={sensor.accel} name={'Accelo'} />
        <Axis3Row v={sensor.gyro} name={'Gyro'} />
        <Axis3Row v={sensor.magnestic} name={'Magnet'} />
        <GeoLabel sensor={sensor} />
      </Wrapper>
    )
  }
}

export default SensorListItem
