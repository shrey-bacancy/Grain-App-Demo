import React, { FC } from "react";
import { ReturnKeyTypeOptions, StyleSheet } from "react-native";
import { Icon, SearchBar } from "react-native-elements";

import { Colors, Fonts, Strings } from "../../constants";

interface CustomSearchBarProps {
  onChangeText?: (text: string) => void;
  returnKeyType?: ReturnKeyTypeOptions;
}

const CustomSearchBar: FC<CustomSearchBarProps> = (props) => {
  return (
    <SearchBar
      placeholder={Strings.ProjectsScreen.SearchPlaceholder}
      placeholderTextColor={Colors.silver}
      onChangeText={props.onChangeText}
      platform="default"
      searchIcon={
        <Icon type="feather" name="search" size={20} color={Colors.silver} />
      }
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      returnKeyType="go"
    />
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderTopColor: Colors.white,
    borderBottomColor: Colors.white,
    borderRightColor: Colors.white,
    borderLeftColor: Colors.white,
  },
  inputContainerStyle: {
    borderColor: Colors.gainsboro,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  inputStyle: {
    fontFamily: Fonts.fontRegular,
    fontSize: 14,
    lineHeight: 21,
    textAlignVertical: "center",
    color: Colors.black,
    paddingTop: 13,
    paddingBottom: 8,
  },
});
