import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "../AppNavigator";
import AuthNavigator from "../AuthNavigator";
import { useAppSelector } from "../../hooks";
import StartupScreen from "../../screens/StartupScreen";

const RootNavigator = () => {
  const token = useAppSelector((state) => state.auth.token);
  const isLoggedIn = useAppSelector((state) => state.auth.isUserLoggedIn);

  return (
    <NavigationContainer>
      {token && <AppNavigator />}
      {!token && isLoggedIn && <AuthNavigator />}
      {!token && !isLoggedIn && <StartupScreen />}
    </NavigationContainer>
  );
};

export default RootNavigator;
