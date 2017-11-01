import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import SensorListItem from '../components/SensorListItem'
import { Wrapper, Body } from '../components/SensorList/Wrapper'
import type { Sensor } from '../types'
import { injectGlobal } from 'styled-components'

import '../injectGlobal'

import { Button, Welcome } from '@storybook/react/demo'

const sensorBase: Sensor = {
  id: 'topic/project1/a',
  gps: {
    lat: 35.681702990826395,
    lng: 139.76656811338268,
  },
  env: {
    temperature: 19.19591569750295,
    humidity: 43.099491670090224,
    airPressure: 2.8259926367954935,
  },
  accel: {
    x: 0.301673801809792,
    y: 0.7109216072266527,
    z: 0.9614828031202354,
  },
  magnestic: {
    x: 0.7123483942085147,
    y: 0.3077493291989195,
    z: 0.6439280416631015,
  },
  gyro: {
    x: 0.6398206611986514,
    y: 0.8664474653152547,
    z: 0.9051081746900183,
  },
  interrupt: false,
  hover: false,
}

const sensorEmerg: Sensor = { ...sensorBase, interrupt: true }

storiesOf('SensorListItem', module)
  .add('on Base', () => (
    <Wrapper>
      <Body style={{ border: 'solid 1px' }}>
        <SensorListItem sensor={sensorBase} />
      </Body>
    </Wrapper>
  ))
  .add('on Emergency', () => (
    <Wrapper>
      <Body style={{ border: 'solid 1px' }}>
        <SensorListItem sensor={sensorEmerg} />
      </Body>
    </Wrapper>
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
