import React, { FC, ReactNode } from "react";
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInputSubmitEditingEventData,
  StyleSheet,
} from "react-native";
import { Input } from "react-native-elements";
import { WrappedFieldProps } from "redux-form";

import { DefaultText } from "..";
import { Colors, Fonts } from "../../constants";

interface LoginFormInputProps {
  autoFocus?: boolean | undefined;
  label?: ReactNode;
  rightIcon?: any;
  placeholder?: string;
  secureTextEntry?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  blurOnSubmit?: boolean | undefined;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}

const LoginFormInput: FC<LoginFormInputProps & WrappedFieldProps> = (props) => {
  const { touched, error } = props.meta;

  const isErrorShown = () => {
    return touched && error ? (
      <DefaultText font="regular" textStyle={styles.error}>
        {error}
      </DefaultText>
    ) : null;
  };

  const labelComponent = () => {
    return (
      <DefaultText font="regular" textStyle={styles.labelStyle}>
        {props.label}
      </DefaultText>
    );
  };

  return (
    <>
      <Input
        autoFocus={props.autoFocus}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        label={labelComponent}
        renderErrorMessage={false}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.silver}
        rightIcon={props.rightIcon}
        secureTextEntry={props.secureTextEntry}
        value={props.input.value}
        onChangeText={props.input.onChange}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
        keyboardType={props.keyboardType}
        blurOnSubmit={props.blurOnSubmit}
        //@ts-ignore
        onFocus={props.input.onFocus}
        onBlur={props.input.onBlur}
      />

      {isErrorShown()}
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  inputContainerStyle: {
    borderBottomColor: Colors.gainsboro,
  },
  inputStyle: {
    fontFamily: Fonts.fontRegular,
    fontSize: 18,
    lineHeight: 27,
    textAlignVertical: "center",
    color: Colors.black,
    paddingTop: 8,
    paddingBottom: 8,
  },
  labelStyle: {
    color: Colors.grey,
    textAlignVertical: "center",
    paddingLeft: 7,
  },
  error: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});

export default LoginFormInput;
