import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LOGIN_URL, LOGOUT_URL } from "../../api";
import { loginAction, logoutAction } from "./ActionCreators/authActionCreators";
import { errorToast } from "../../globals";

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
    saveDataToStorage(resData.data.token, resData.data.user._id);
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

    AsyncStorage.removeItem("userData");
    dispatch(logoutAction());
  };
};

const saveDataToStorage = async (token: string, userId: string) => {
  try {
    await AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        token: token,
        userId: userId,
      })
    );
  } catch (error) {
    errorToast(error);
  }
};
