import { ActionMap } from '../actionMap';

export enum AlertActionTypes {
  SetAlert = 'SET_ALERT',
  ClearAlert = 'CLEAR_ALERT',
}

export enum AlertMessageType {
  None = 'none',
  Error = 'error',
  Success = 'success',
  Danger = 'danger',
}

// Alert
export interface AlertState {
  message: string;
  type?: AlertMessageType;
}

export type AlertPayload = {
  [AlertActionTypes.SetAlert]: {
    message: string;
    type: AlertMessageType;
  };
  [AlertActionTypes.ClearAlert]: {};
};

export type AlertActions =
  ActionMap<AlertPayload>[keyof ActionMap<AlertPayload>];
