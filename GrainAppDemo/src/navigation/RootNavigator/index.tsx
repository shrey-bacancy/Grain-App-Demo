import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator, AuthNavigator } from "..";
import { useAppSelector } from "../../hooks";
import { StartupScreen } from "../../screens";

const RootNavigator: FC = () => {
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
