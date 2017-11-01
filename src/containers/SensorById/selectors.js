// @flow
import type { State } from '../../types'

export const getSensor = (state: State, id: string) => state.SensorById[id]
