import React, { FC } from "react";
import {
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInputSubmitEditingEventData,
  StyleSheet,
} from "react-native";
import { Icon, Input } from "react-native-elements";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";
import Strings from "../../constants/strings";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <>
      <Input
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        renderErrorMessage={false}
        placeholder={Strings.ProjectsScreen.SearchPlaceholder}
        placeholderTextColor={Colors.silver}
        leftIcon={
          <Icon type="feather" name="search" size={20} color={Colors.silver} />
        }
        value={props.value}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
      />
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 20,
  },
  inputContainerStyle: {
    borderColor: Colors.gainsboro,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
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
