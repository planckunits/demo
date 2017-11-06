// @flow
export const SWITCH_TAB: 'System/SWITCH_TAB' = 'System/SWITCH_TAB'
export const START: 'System/START' = 'System/START'

export const Actions = {
  SWITCH_TAB,
  START,
}

export type SwitchTab = {
  type: typeof SWITCH_TAB,
  tab: 'base' | 'map',
}

export type Start = {
  type: typeof START,
}

export type Action = SwitchTab | Start
