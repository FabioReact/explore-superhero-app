import { useReducer } from 'react';

type ConnectionState = {
  connected: boolean;
  error: string;
  loading: boolean;
  username: string;
};

enum ActionName {
  ON_LOGIN = 'ON_LOGIN',
  ON_LOGOUT = 'ON_LOGOUT',
}

type ActionTypes =
  | {
      type: ActionName.ON_LOGIN;
      payload: {
        username: string;
      };
    }
  | { type: ActionName.ON_LOGOUT };

const reducer = (state: ConnectionState, action: ActionTypes) => {
  switch (action.type) {
    case ActionName.ON_LOGIN:
      return {
        connected: true,
        error: '',
        loading: false,
        username: action.payload.username,
      };
    case ActionName.ON_LOGOUT:
      return {
        connected: false,
        error: '',
        loading: false,
        username: '',
      };
    default:
      throw new Error('useConnection Reducer - Not a valid action type');
  }
};

const useConnection = () => {
  const initialState = {
    connected: false,
    error: '',
    loading: false,
    username: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (email: string, password: string): void => {
    if (email === 'admin@mail.com' && password === 'admin') {
      dispatch({
        type: ActionName.ON_LOGIN,
        payload: {
          username: 'admin',
        },
      });
    }
  };

  const logout = (): void => {
    dispatch({
      type: ActionName.ON_LOGOUT,
    });
  };

  return {
    ...state,
    login, // equivalent à login: login
		logout,
  };
};

export default useConnection;
