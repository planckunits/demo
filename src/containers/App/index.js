import React, { Component } from 'react'
import PageHeader from '../../components/PageHeader'
import Switcher from '../System/Switcher'
import Tabs from '../Tabs'

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader title={'Sensor Uniform Map'} />
        <Switcher />
        <Tabs />
      </div>
    )
  }
}

export default App
