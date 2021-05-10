import React, { FC, useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { Icon } from "react-native-elements";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { compose } from "redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import {
  AddProjectFormInput,
  CustomButton,
  DefaultText,
  LoadingIndicator,
  TagComponent,
} from "..";
import { Colors, Strings } from "../../constants";
import { addProject } from "../../store/actions/project";
import { fieldRequired } from "../../validation";

interface AddProjectModalProps {
  openModal?: boolean | undefined;
  closeModal?: () => void;
  loading?: boolean | undefined;
}

const AddProjectModal: FC<AddProjectModalProps & InjectedFormProps> = (
  props
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tags, setTags] = useState<Array<string>>([]);
  const dispatch = useDispatch();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    Keyboard.dismiss();
    await dispatch(
      addProject(values.ProjectName, values.ProjectDescription, tags)
    );
    setIsLoading(false);
    props.closeModal;
    props.reset();
  };

  return (
    <Modal
      isVisible={props.openModal}
      onModalHide={() => setTags([])}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.4}
      onBackdropPress={props.closeModal}
      useNativeDriverForBackdrop={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <DefaultText font="semibold" textStyle={styles.modalTitleStyle}>
            {Strings.ProjectsScreen.AddProjectModal.Title}
          </DefaultText>
          <Icon
            type="antdesign"
            name="close"
            size={30}
            color={Colors.grey}
            onPress={props.closeModal}
          />
        </View>
        <Field
          name="ProjectName"
          placeholder={
            Strings.ProjectsScreen.AddProjectModal.ProjectNamePlaceholder
          }
          component={AddProjectFormInput}
          returnKeyType="next"
          validate={[fieldRequired]}
        />
        <Field
          name="ProjectDescription"
          placeholder={
            Strings.ProjectsScreen.AddProjectModal.ProjectDescriptionPlaceholder
          }
          component={AddProjectFormInput}
          multiline={true}
          returnKeyType="next"
          validate={[fieldRequired]}
        />
        <Field
          name="Tags"
          placeholder={Strings.ProjectsScreen.AddProjectModal.TagsPlaceholder}
          component={AddProjectFormInput}
          returnKeyType="next"
          onSubmitEditing={(
            event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
          ) => {
            //@ts-ignore
            setTags((prevState) => [...prevState, event.nativeEvent.text]);
          }}
        />
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <TagComponent
              key={index}
              name={tag}
              removeTag={(tag: string) =>
                setTags(tags.filter((tg) => tg !== tag))
              }
            />
          ))}
        </View>

        <View style={styles.addProjectButton}>
          <CustomButton
            title={Strings.ProjectsScreen.AddProjectModal.AddButtonLabel}
            onPress={props.handleSubmit(onSubmit)}
            disabled={props.submitting}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 24,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  modalTitleStyle: {
    fontSize: 20,
    lineHeight: 30,
  },
  addProjectButton: {
    paddingHorizontal: 56,
    paddingTop: 24,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
});

export default compose(reduxForm({ form: "add-project-form" }))(
  AddProjectModal
);
