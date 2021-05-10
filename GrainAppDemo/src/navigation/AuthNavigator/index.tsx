import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Screens from "../screens";
import { LoginScreen } from "../../screens";

const AuthNavigator: FC = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={Screens.Login} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
