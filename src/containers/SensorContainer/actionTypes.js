// @flow
import type { Sensor } from "../../types";

export const RECEIVE_SENSOR: "SensorContainer/RECEIVE_SENSOR" =
  "SensorContainer/RECEIVE_SENSOR";

export const Actions = {
  RECEIVE_SENSOR
};

export type ReceiveSensor = {
  type: typeof RECEIVE_SENSOR,
  sensor: Sensor
};

export type Action = ReceiveSensor;
