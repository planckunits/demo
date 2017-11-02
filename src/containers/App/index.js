// @flow

import React from 'react'
import PageHeader from '../../components/PageHeader'
import Switcher from '../System/Switcher'
import Tabs from '../Tabs'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route
        path="/fukushima-reif-2017"
        component={() => (
          <div>
            <PageHeader title={'Reif福島 杭デモ'} />
            <Switcher />
            <Tabs />
          </div>
        )}
      />
    </div>
  </Router>
)

export default App
