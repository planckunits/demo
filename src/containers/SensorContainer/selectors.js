// @flow
import type { State } from '../../types'
import { getSensor } from '../SensorById/selectors'

export const getSensors = (state: State) =>
  state.SensorContainer.map(id => getSensor(state, id))
