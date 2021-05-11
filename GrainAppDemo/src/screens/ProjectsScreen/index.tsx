import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch } from "react-redux";

import {
  AddProjectModal,
  CompletedProjectsModal,
  CustomButton,
  CustomSearchBar,
  DefaultText,
  LoadingIndicator,
  ProjectsList,
} from "../../components";
import { Colors, Strings } from "../../constants";
import { useAppSelector } from "../../hooks";
import { completeProject, loadProjects } from "../../store/actions/project";
import { logout } from "../../store/actions/auth";

interface ProjectScreenProps {
  navigation?: StackNavigationProp<{}>;
}

const ProjectScreen: FC<ProjectScreenProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNo, setPageNo] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [
    isAddProjectModalVisible,
    setIsAddProjectModalVisible,
  ] = useState<boolean>(false);
  const [
    isCompletedProjectModalVisible,
    setIsCompletedProjectModalVisible,
  ] = useState<boolean>(false);

  const dispatch = useDispatch();
  const projects = useAppSelector((state) => state.project.projects);

  const loadProjectsHandler = async (pageNo: number, searchTerm?: string) => {
    setIsLoading(true);
    await dispatch(loadProjects(pageNo, searchTerm));
    setIsLoading(false);
  };

  const completeProjectHandler = async (id: string) => {
    await dispatch(completeProject(id));
  };

  const searchProjectHandler = (value: string) => {
    setPageNo(1);
    setSearchTerm(value);
    loadProjectsHandler(1, value);
  };

  const listEndReachedHandler = async () => {
    setPageNo((page) => page + 1);
    setIsLoading(true);
    await loadProjectsHandler(pageNo + 1, searchTerm);
    setIsLoading(false);
  };

  const logoutHandler = async () => {
    await dispatch(logout());
  };

  useEffect(() => {
    loadProjectsHandler(pageNo);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <DefaultText font="semibold" textStyle={styles.headerTitle}>
            {Strings.ProjectsScreen.Header.Title}
          </DefaultText>
          <DefaultText
            font="medium"
            textStyle={styles.addProjectText}
            onPress={() => setIsAddProjectModalVisible(true)}
          >
            {Strings.ProjectsScreen.Header.AddProject}
          </DefaultText>
          <Icon
            type="material"
            name="logout"
            size={25}
            color={Colors.green}
            onPress={logoutHandler}
          />
        </View>
        <CustomSearchBar onChangeText={searchProjectHandler} />
      </View>
      <View style={styles.projectListTitleContainer}>
        <DefaultText font="semibold" textStyle={styles.projectTitleText}>
          {Strings.ProjectsScreen.ProjectListTitle}
        </DefaultText>
        <CustomButton
          title={Strings.ProjectsScreen.CompletedButtonLabel}
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
          iconLeft={
            <Icon
              type="ionicon"
              name="md-checkmark-circle-sharp"
              size={20}
              color={Colors.green}
            />
          }
          onPress={() => setIsCompletedProjectModalVisible(true)}
        />
      </View>
      <ProjectsList
        data={projects}
        onEndReached={listEndReachedHandler}
        onProjectComplete={completeProjectHandler}
      />
      {isLoading ? <LoadingIndicator /> : null}
      <AddProjectModal
        //@ts-ignore
        openModal={isAddProjectModalVisible}
        closeModal={() => {
          setIsAddProjectModalVisible(false);
        }}
      />

      <CompletedProjectsModal
        openModal={isCompletedProjectModalVisible}
        closeModal={() => setIsCompletedProjectModalVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.solitude,
  },
  header: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: Colors.white,
    paddingTop: 10,
    paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    lineHeight: 35,
  },
  addProjectText: {
    fontSize: 20,
    color: Colors.green,
  },
  projectListTitleContainer: {
    flexDirection: "row",
    padding: 24,
    justifyContent: "space-between",
  },
  projectTitleText: {
    fontSize: 18,
    lineHeight: 27,
  },
  buttonContainerStyle: {
    borderRadius: 15,
  },
  buttonStyle: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: Colors.white,
  },
  buttonTitleStyle: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.black,
  },
});

export default ProjectScreen;
