// @flow
export const SWITCH_TAB: 'System/SWITCH_TAB' = 'System/SWITCH_TAB'

export const Actions = {
  SWITCH_TAB,
}

export type SwitchTab = {
  type: typeof SWITCH_TAB,
  tab: 'base' | 'map',
}

export type Action = SwitchTab
