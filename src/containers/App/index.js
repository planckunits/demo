// @flow

import React from 'react'
import PageHeader from '../../components/PageHeader'
import Switcher from '../System/Switcher'
import Tabs from '../Tabs'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const KuiDemo = props => {
  const { id } = props.match.params
  const info = {
    ripro: {
      title: 'RIPRO 情報杭',
      desc: 'PlanckUnits x 株式会社リプロ RIPRO Corporation Japan',
    },
    reaf: {
      title: 'REIFふくしま 杭デモ',
      desc: 'PlanckUnits x タカヤ株式会社 x 株式会社リプロ RIPRO Corporation Japan',
    },
  }

  return (
    <div>
      <PageHeader title={info[id].title} desc={info[id].desc} />
      <Switcher />
      <Tabs />
    </div>
  )
}

const ReafKuiDemo = props => (
  <KuiDemo match={{ ...props.match, params: { id: 'reaf' } }} />
)

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ReafKuiDemo} />
      <Route path="/fukushima-reif-2017" component={ReafKuiDemo} />
      <Route path="/kui/:id" component={KuiDemo} />
    </Switch>
  </Router>
)

export default App
