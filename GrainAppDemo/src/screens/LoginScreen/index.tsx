import React, { FC, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { compose } from "redux";
import { useDispatch } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import CustomButton from "../../components/CustomButton";
import DefaultText from "../../components/DefaultText";
import LoadingIndicator from "../../components/LoadingIndicator";
import LoginFormInput from "../../components/LoginFormInput";
import LoginHeader from "../../components/LoginHeader";
import Colors from "../../constants/colors";
import Strings from "../../constants/strings";
import { login } from "../../store/actions/auth";
import {
  emailRequired,
  passwordRequired,
  validateEmail,
  validatePassword,
} from "../../validation";

interface LoginScreenProps extends InjectedFormProps {
  navigation?: StackNavigationProp<{}>;
}

const LoginScreen: FC<LoginScreenProps> = (props) => {
  const [secure, setSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const dispach = useDispatch();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      await dispach(login(values.Email, values.Password));
    } catch (error) {
      setIsLoading(false);
      Alert.alert(Strings.LoginScreen.AlertTitle, error.message, [
        { text: Strings.LoginScreen.AlertButton },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <LoginHeader
          title={Strings.LoginScreen.Header.Title}
          subTitle={Strings.LoginScreen.Header.SubTitle}
        />
        <View style={styles.loginForm}>
          <Field
            name="Email"
            component={LoginFormInput}
            label={Strings.LoginScreen.FormInputFields.Username}
            placeholder={
              Strings.LoginScreen.FormInputFieldsPlaceholders.Username
            }
            keyboardType="email-address"
            autoFocus
            returnKeyType="next"
            blurOnSubmit={false}
            validate={[emailRequired, validateEmail]}
          />
          <Field
            name="Password"
            component={LoginFormInput}
            label={Strings.LoginScreen.FormInputFields.Password}
            placeholder={
              Strings.LoginScreen.FormInputFieldsPlaceholders.Password
            }
            secureTextEntry={secure}
            rightIcon={
              <Icon
                name={secure ? "md-eye-outline" : "md-eye-off-outline"}
                type="ionicon"
                size={24}
                color={Colors.grey}
                onPress={() => setSecure(!secure)}
              />
            }
            returnKeyType="go"
            onSubmitEditing={() => props.handleSubmit(onSubmit)}
            validate={[passwordRequired, validatePassword]}
          />

          <DefaultText font="regular" textStyle={styles.forgetPassword}>
            {Strings.LoginScreen.ForgetPassword}
          </DefaultText>
          <View style={styles.loginButton}>
            <CustomButton
              title={Strings.LoginScreen.LoginButtonLabel}
              onPress={props.handleSubmit(onSubmit)}
              disabled={props.submitting}
            />
          </View>

          <DefaultText font="regular" textStyle={styles.signUpText}>
            {Strings.LoginScreen.NewUser}
            <DefaultText font="semibold" onPress={() => console.log("SignUp")}>
              {Strings.LoginScreen.SignUp}
            </DefaultText>
          </DefaultText>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  forgetPassword: {
    textAlign: "right",
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  loginForm: {
    marginTop: 167,
    flex: 1,
  },
  loginButton: {
    paddingHorizontal: 30,
    paddingTop: 78,
  },
  signUpText: {
    textAlign: "center",
    paddingTop: 26,
  },
});

export default compose(reduxForm({ form: "login-form" }))(LoginScreen);
