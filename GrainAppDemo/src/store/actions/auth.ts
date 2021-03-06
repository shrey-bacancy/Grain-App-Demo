import { Platform } from "react-native";

import { LOGIN_URL, LOGOUT_URL } from "../../api";
import { errorToast } from "../../globals";
import {
  loginAction,
  logoutAction,
  autoLoginAction,
} from "./ActionCreators/authActionCreators";

const deviceTokenString = "ABCD";

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        deviceToken: {
          deviceTokenString: deviceTokenString,
          os: Platform.OS,
        },
      }),
    });

    const resData = await response.json();

    if (!response.ok) {
      errorToast(resData.message);
    }

    dispatch(loginAction(resData.data.user._id, resData.data.token));
  };
};

export const logout = () => {
  return async (dispatch: any, getState: any) => {
    const response = await fetch(LOGOUT_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().auth.token,
      },
      body: JSON.stringify({
        deviceToken: {
          deviceTokenString: deviceTokenString,
          os: Platform.OS,
        },
      }),
    });

    const resData = await response.json();

    if (!response.ok) {
      errorToast(resData.message);
    }

    dispatch(logoutAction());
  };
};

export const autoLogin = () => {
  return async (dispatch: any) => {
    dispatch(autoLoginAction());
  };
};
