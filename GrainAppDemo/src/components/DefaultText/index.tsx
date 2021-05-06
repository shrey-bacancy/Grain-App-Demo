import React, { FC, ReactNode } from "react";
import { StyleSheet, TextProps } from "react-native";
import { Text } from "react-native-elements";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

interface DefaultTextProps {
  font: "regular" | "medium" | "semibold";
  textStyle?: object;
  children?: ReactNode;
}

const DefaultText: FC<DefaultTextProps & TextProps> = (props) => {
  return (
    <>
      {props.font === "regular" && (
        <Text
          style={{ ...styles.textStyleRegular, ...props.textStyle }}
          {...props}
        >
          {props.children}
        </Text>
      )}
      {props.font === "medium" && (
        <Text
          style={{ ...styles.textStyleMedium, ...props.textStyle }}
          {...props}
        >
          {props.children}
        </Text>
      )}
      {props.font === "semibold" && (
        <Text
          style={{ ...styles.textStyleSemibold, ...props.textStyle }}
          {...props}
        >
          {props.children}
        </Text>
      )}
    </>
  );
};

export default DefaultText;

const styles = StyleSheet.create({
  textStyleRegular: {
    fontFamily: Fonts.fontRegular,
    fontSize: 16,
    lineHeight: 25,
    color: Colors.black,
  },
  textStyleMedium: {
    fontFamily: Fonts.fontMedium,
    fontSize: 16,
    lineHeight: 25,
    color: Colors.black,
  },
  textStyleSemibold: {
    fontFamily: Fonts.fontSemiBold,
    fontSize: 16,
    lineHeight: 25,
    color: Colors.black,
  },
});
