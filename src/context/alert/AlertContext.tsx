import React, { FC, createContext, useReducer } from 'react';
import { AlertActionTypes, AlertMessageType, AlertState } from './AlertActions';
import { alertReducer } from './AlertReducer';

interface AlertProviderProps {
  children: JSX.Element;
}

interface AlertContextProps {
  alertMessage: AlertState;
  setAlert: (message: string, type: AlertMessageType) => void;
}

const AlertContext = createContext<AlertContextProps>({} as AlertContextProps);

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  const initialState: AlertState = {
    message: '',
    type: AlertMessageType.None,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message: string, type: AlertMessageType) => {
    dispatch({ type: AlertActionTypes.SetAlert, payload: { message, type } });

    setTimeout(
      () => dispatch({ type: AlertActionTypes.ClearAlert, payload: {} }),
      3000
    );
  };

  return (
    <AlertContext.Provider value={{ alertMessage: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
