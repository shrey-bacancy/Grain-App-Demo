import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoadingIndicator from "../../components/LoadingIndicator";
import Colors from "../../constants/colors";
import {
  autoLogin,
  loginAction,
} from "../../store/actions/ActionCreators/authActionCreators";

interface StartupScreenProps {}

const StartupScreen = (props: StartupScreenProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");

      if (!userData) {
        dispatch(autoLogin());
        return;
      }

      const transformedData = JSON.parse(userData);
      dispatch(loginAction(transformedData.userId, transformedData.token));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <LoadingIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;
