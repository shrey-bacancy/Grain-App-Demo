import React, { FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import DefaultText from "../DefaultText";
import Colors from "../../constants/colors";
import Images from "../../constants/images";

interface LoginHeaderProps {
  title?: string;
  subTitle?: string;
}

const LoginHeader: FC<LoginHeaderProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={Images.abstract}
        style={{ position: "absolute", width: 840, top: -290 }}
      />
      <Image source={Images.woodLogo} style={{ marginTop: 42 }} />
      <DefaultText font="semibold" textStyle={styles.title}>
        {props.title}
      </DefaultText>
      <DefaultText font="regular" textStyle={styles.subTitle}>
        {props.subTitle}
      </DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    lineHeight: 48,
    marginBottom: 4,
    color: Colors.white,
  },
  subTitle: {
    fontSize: 18,
    lineHeight: 27,
    color: Colors.snow,
  },
});

export default LoginHeader;
