import Strings from "../constants/strings";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

// const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{6,}$/;

export const emailRequired = (value: string) =>
  value ? undefined : Strings.LoginScreen.Errors.EmailRequired;

export const passwordRequired = (value: string) =>
  value ? undefined : Strings.LoginScreen.Errors.PasswordRequired;

export const fieldRequired = (value: string) =>
  value ? undefined : Strings.ProjectsScreen.AddProjectModal.RequiredField;

export const validateEmail = (value: string) =>
  value && !value.match(emailRegex)
    ? Strings.LoginScreen.Errors.InvalidEmail
    : undefined;

export const validatePassword = (value: string) =>
  value && !value.match(passwordRegex)
    ? Strings.LoginScreen.Errors.InvalidPassword
    : undefined;
