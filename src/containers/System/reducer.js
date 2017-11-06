// @flow
import type { Action, System } from '../../types'
import { Actions } from './actionTypes'

export type State = System

const initialState: State = {
  tab: 'map',
}

export default function(
  state: State = initialState,
  action: Action
): Exact<State> {
  switch (action.type) {
    case Actions.SWITCH_TAB:
      return { ...state, tab: action.tab }
    default:
      return state
  }
}
