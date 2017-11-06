// @flow
import { SWITCH_TAB, START } from './actionTypes'
import type { SwitchTab, Start } from './actionTypes'

export function switchTab(tab: 'base' | 'map'): SwitchTab {
  return {
    type: SWITCH_TAB,
    tab,
  }
}
export function start(): Start {
  return {
    type: START,
  }
}
