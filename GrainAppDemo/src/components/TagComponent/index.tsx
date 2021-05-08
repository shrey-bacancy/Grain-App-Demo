import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../constants/colors";
import DefaultText from "../DefaultText";

interface TagComponentProps {
  name?: string;
  removeTag?: any;
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
        onPress={() => props.removeTag(props.name)}
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
    marginVertical: 6,
  },
  tagName: {
    fontSize: 14,
    lineHeight: 21,
  },
});

export default TagComponent;
