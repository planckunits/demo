// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'
import _ from 'lodash'

export type State = string[]

const initialState: State = []

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.RECEIVE_SENSOR:
      return _.union(state, [action.sensor.id])
    default:
      return state
  }
}
