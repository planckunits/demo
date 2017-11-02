// @flow

import React from 'react'
import PageHeader from '../../components/PageHeader'
import Switcher from '../System/Switcher'
import Tabs from '../Tabs'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Main = () => (
  <div>
    <PageHeader title={'Reif福島 杭デモ'} />
    <Switcher />
    <Tabs />
  </div>
)

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Main} />
      <Route path="/fukushima-reif-2017" component={Main} />
    </Switch>
  </Router>
)

export default App
