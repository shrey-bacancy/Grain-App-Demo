import React, { FC } from "react";
import { ActivityIndicator } from "react-native";

import { Colors } from "../../constants";

const LoadingIndicator: FC = () => {
  return <ActivityIndicator size="large" color={Colors.green} />;
};

export default LoadingIndicator;
