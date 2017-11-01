// @flow
import type { State as SensorById } from '../containers/SensorById/reducer'
import type { State as SensorContainer } from '../containers/SensorContainer/reducer'
import type { State as System } from '../containers/System/reducer'

export type State = {
  SensorById: SensorById,
  SensorContainer: SensorContainer,
  System: System,
}
