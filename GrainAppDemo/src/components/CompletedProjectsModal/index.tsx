import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";

interface CompletedProjectsModalProps {
  openModal?: boolean | undefined;
  closeModal?: () => void;
  loading?: boolean | undefined;
}

const CompletedProjectsModal: FC<CompletedProjectsModalProps> = (props) => {
  return (
    <Modal
      isVisible={props.openModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.4}
      onBackdropPress={props.closeModal}
      useNativeDriverForBackdrop={true}
    >
      <View></View>
    </Modal>
  );
};

export default CompletedProjectsModal;

const styles = StyleSheet.create({
  container: {},
});
