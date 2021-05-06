import React, { FC } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Button } from "react-native-elements";
import { IconNode } from "react-native-elements/dist/icons/Icon";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

interface CustomButtonProps {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  iconLeft?: IconNode | undefined;
  containerStyle?: object;
  buttonStyle?: object;
  titleStyle?: object;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  return (
    <Button
      title={props.title}
      containerStyle={{ ...styles.container, ...props.containerStyle }}
      buttonStyle={{ ...styles.buttonStyle, ...props.buttonStyle }}
      titleStyle={{ ...styles.title, ...props.titleStyle }}
      icon={props.iconLeft}
      onPress={props.onPress}
      disabled={props.disabled}
    />
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    overflow: "hidden",
  },
  buttonStyle: {
    paddingVertical: 20,
    backgroundColor: Colors.green,
  },
  title: {
    fontFamily: Fonts.fontMedium,
    fontSize: 16,
    lineHeight: 25,
    color: Colors.white,
  },
});
