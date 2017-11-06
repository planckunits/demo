// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { Action as _Action } from './action'
import type { State as _State } from './state'

export type State = _State
export type Action = _Action

export type GetState = () => State

export type ThunkAction = (
  dispatch: Dispatch,
  getState: GetState
) => void | Promise<void>

type ThunkDispatch<A> = ThunkAction => A

export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>
export type Store = ReduxStore<State, Action, Dispatch>

export type Axis3 = {
  x: number,
  y: number,
  z: number,
}

export type Sensor = {
  id: string,
  gps: {
    lat: number,
    lng: number,
  },
  env: { temperature: number, humidity: number, airPressure: number },
  accel: Axis3,
  magnestic: Axis3,
  gyro: Axis3,
  interrupt: boolean,
  hover: boolean,
  primary: boolean,
}

export type System = {
  tab: 'base' | 'map',
}
