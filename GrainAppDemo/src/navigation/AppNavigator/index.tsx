import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProjectScreen from "../../screens/ProjectsScreen";
import Screens from "../screens";

const AppNavigator = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={Screens.Project} component={ProjectScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
