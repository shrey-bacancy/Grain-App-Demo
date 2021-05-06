import { AUTO_LOGIN, LOGIN, LOGOUT } from "../types";

interface State {
  username?: string | null;
  token?: string | null;
  isUserLoggedIn?: boolean;
}

const initialState: State = {
  username: null,
  token: null,
  isUserLoggedIn: false,
};

const authReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case LOGIN:
      return {
        username: action.username,
        token: action.token,
        isUserLoggedIn: true,
      };
    case LOGOUT:
      return initialState;
    case AUTO_LOGIN:
      return {
        ...state,
        isUserLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
