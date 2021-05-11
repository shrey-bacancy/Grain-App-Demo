import React, { FC, useRef } from "react";
import {
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInputSubmitEditingEventData,
  StyleSheet,
} from "react-native";
import { Input } from "react-native-elements";
import { WrappedFieldProps } from "redux-form";

import { DefaultText } from "..";
import { Colors, Fonts } from "../../constants";

interface AddProjectFormInputProps {
  autoFocus?: boolean | undefined;
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  blurOnSubmit?: boolean | undefined;
  multiline?: boolean | undefined;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}

const AddProjectFormInput: FC<AddProjectFormInputProps & WrappedFieldProps> = (
  props
) => {
  const { touched, error } = props.meta;
  const inputRef = useRef();

  const isErrorShown = () => {
    return touched && error ? (
      <DefaultText font="regular" textStyle={styles.error}>
        {error}
      </DefaultText>
    ) : null;
  };

  const inputStyleMultiline = {
    ...styles.inputStyle,
    height: props.multiline ? 100 : 50,
    textAlignVertical: "top",
  };

  return (
    <>
      <Input
        //@ts-ignore
        ref={inputRef}
        autoFocus={props.autoFocus}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={inputStyleMultiline}
        renderErrorMessage={false}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.silver}
        value={props.input.value}
        onChangeText={props.input.onChange}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
        blurOnSubmit={props.blurOnSubmit}
        //@ts-ignore
        onFocus={props.input.onFocus}
        onBlur={props.input.onBlur}
        multiline={props.multiline}
        scrollEnabled={props.multiline}
      />

      {isErrorShown()}
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 8,
    marginBottom: 4,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.gainsboro,
  },
  inputStyle: {
    fontFamily: Fonts.fontRegular,
    fontSize: 18,
    lineHeight: 27,
    color: Colors.black,
    paddingVertical: 10,
  },
  error: {
    color: Colors.redOrange,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});

export default AddProjectFormInput;
