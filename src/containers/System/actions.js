// @flow
import { SWITCH_TAB } from './actionTypes'
import type { SwitchTab } from './actionTypes'

export function switchTab(tab: 'base' | 'map'): SwitchTab {
  return {
    type: SWITCH_TAB,
    tab,
  }
}
