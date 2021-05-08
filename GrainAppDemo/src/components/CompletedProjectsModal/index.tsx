import React, { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import Colors from "../../constants/colors";
import Strings from "../../constants/strings";
import { useAppSelector } from "../../hooks";
import {
  deleteProject,
  loadCompletedProjects,
  restoreProject,
} from "../../store/actions/project";
import CompletedProjectsList from "../CompletedProjectsList";
import DefaultText from "../DefaultText";
import LoadingIndicator from "../LoadingIndicator";

interface CompletedProjectsModalProps {
  openModal?: boolean | undefined;
  closeModal?: () => void;
  loading?: boolean | undefined;
}

const CompletedProjectsModal: FC<CompletedProjectsModalProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const completedProjects = useAppSelector(
    (state) => state.project.completedProjects
  );

  const loadCompletedProjectsHandler = async () => {
    setIsLoading(true);
    await dispatch(loadCompletedProjects());
    setIsLoading(false);
  };

  const deleteProjectHandler = async (id: string) => {
    await dispatch(deleteProject(id));
  };

  // const restoreProjectHandler = async (id: string) => {
  //   await dispatch(restoreProject(id));
  // };

  return (
    <Modal
      isVisible={props.openModal}
      onModalShow={loadCompletedProjectsHandler}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.4}
      onBackdropPress={props.closeModal}
      useNativeDriverForBackdrop={true}
      style={styles.modalStyle}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Icon
            type="ionicon"
            name="md-checkmark-circle-sharp"
            size={35}
            color={Colors.green}
          />
          <DefaultText font="semibold" textStyle={styles.modalTitleStyle}>
            {Strings.ProjectsScreen.CompletedProjectsModal.Title}
          </DefaultText>
          <Icon
            type="antdesign"
            name="close"
            size={30}
            color={Colors.grey}
            onPress={props.closeModal}
          />
        </View>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <CompletedProjectsList
            data={completedProjects}
            onDeleteProject={deleteProjectHandler}
            // onRestoreProject={restoreProjectHandler}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: Colors.white,
    height: 405,
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
});

export default CompletedProjectsModal;
