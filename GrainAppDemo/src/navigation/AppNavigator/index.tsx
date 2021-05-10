import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Screens from "../screens";
import { ProjectScreen } from "../../screens";

const AppNavigator: FC = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={Screens.Project} component={ProjectScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
