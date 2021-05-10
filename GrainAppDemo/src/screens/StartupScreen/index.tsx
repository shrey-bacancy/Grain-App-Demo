import React, { FC, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { LoadingIndicator } from "../../components";
import { Colors } from "../../constants";
import { useAppSelector } from "../../hooks";
import { loginAction } from "../../store/actions/ActionCreators/authActionCreators";
import { autoLogin } from "../../store/actions/auth";

interface StartupScreenProps {}

const StartupScreen: FC<StartupScreenProps> = () => {
  const dispatch = useDispatch();

  const userId = useAppSelector((state) => state.auth.userId);
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const tryLogin = () => {
      if (!userId && !token) {
        dispatch(autoLogin());
        return;
      }

      dispatch(loginAction(userId, token));
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
