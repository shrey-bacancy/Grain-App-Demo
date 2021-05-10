import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

import { DefaultText } from "..";
import { Colors } from "../../constants";

interface NoDataFoundComponentProps {
  noDataText?: string;
}

const NoDataFoundComponent: FC<NoDataFoundComponentProps> = (props) => {
  return (
    <View style={styles.noProjectFoundContainer}>
      <DefaultText font="semibold" textStyle={styles.noProjectFoundText}>
        {props.noDataText}
      </DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  noProjectFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noProjectFoundText: {
    color: Colors.green,
    fontSize: 22,
    lineHeight: 33,
  },
});

export default NoDataFoundComponent;
