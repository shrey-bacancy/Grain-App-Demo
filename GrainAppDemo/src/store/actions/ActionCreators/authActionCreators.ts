import { ActionCreator } from "redux";
import { AUTO_LOGIN, LOGIN, LOGOUT } from "../../types";

interface LoginAction {
  type?: typeof LOGIN;
  userId?: string;
  token?: string;
}

interface LogoutAction {
  type?: typeof LOGOUT;
}

interface AutoLoginAction {
  type?: typeof AUTO_LOGIN;
}

export const loginAction: ActionCreator<LoginAction> = (
  userId: string,
  token: string
) => {
  return { type: LOGIN, userId: userId, token: token };
};

export const logoutAction: ActionCreator<LogoutAction> = () => {
  return { type: LOGOUT };
};

export const autoLogin: ActionCreator<AutoLoginAction> = () => {
  return { type: AUTO_LOGIN };
};
