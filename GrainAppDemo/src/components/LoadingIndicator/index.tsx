import React from "react";
import { ActivityIndicator } from "react-native";
import Colors from "../../constants/colors";

const LoadingIndicator = () => {
  return <ActivityIndicator size="large" color={Colors.green} />;
};

export default LoadingIndicator;
