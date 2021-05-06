import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LOGIN_URL, LOGOUT_URL } from "../../api";
import { loginAction, logoutAction } from "./ActionCreators/authActionCreators";

const deviceTokenString =
  "fuSmuSBpTJ-0YS1WllOQ7U:APA91bHxFZIdfF9SCbozbydk-G42qS8talzF9atsnQzyNglQzvx5SV0jzrb10STFl5ZUv-TfirCt15Zu4S-UgTgevtOxlCIVtoaVsxXUGIZSLqO9MOz7z4xLaOXj0zwCBM6oFDBfBJk3";

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

    if (!response.ok) {
      const errorResData = await response.json();
      let message = errorResData.message;
      throw new Error(message);
    }

    const resData = await response.json();

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

    if (!response.ok) {
      const errorResData = await response.json();
      let message = errorResData.message;
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

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
  } catch (e) {
    console.log("Something wrong with AsyncStorage");
    console.log(e);
  }
};
