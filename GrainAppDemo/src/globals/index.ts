import { ToastAndroid } from "react-native";

export const errorToast = (message: string) =>
  ToastAndroid.show(message.toString(), ToastAndroid.SHORT);
