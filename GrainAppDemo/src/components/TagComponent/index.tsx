import React, { FC } from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../constants/colors";
import DefaultText from "../DefaultText";

interface TagComponentProps {
  name?: string;
  removeTag?: (event: GestureResponderEvent) => void;
}

const TagComponent: FC<TagComponentProps> = (props) => {
  return (
    <View style={styles.tag}>
      <DefaultText font="medium" textStyle={styles.tagName}>
        {props.name}
      </DefaultText>
      <Icon
        type="antdesign"
        name="closecircleo"
        size={15}
        color={Colors.grey}
        //@ts-ignore
        onPress={props.removeTag.bind(this, props.name)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.solitude,
    borderRadius: 25,
    marginHorizontal: 6,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  tagName: {
    fontSize: 14,
    lineHeight: 21,
  },
});

export default TagComponent;
