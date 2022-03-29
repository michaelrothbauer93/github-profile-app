import {
  AlertActions,
  AlertActionTypes,
  AlertMessageType,
  AlertState,
} from './AlertActions';

export const alertReducer = (state: AlertState, action: AlertActions) => {
  switch (action.type) {
    case AlertActionTypes.SetAlert:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
      };
    case AlertActionTypes.ClearAlert:
      return {
        ...state,
        message: '',
        type: AlertMessageType.None,
      };
    default:
      return state;
  }
};
