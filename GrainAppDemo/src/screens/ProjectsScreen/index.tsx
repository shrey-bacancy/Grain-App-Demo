import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import Colors from "../../constants/colors";
import DefaultText from "../../components/DefaultText";
import Strings from "../../constants/strings";
import SearchBar from "../../components/SearchBar";
import CustomButton from "../../components/CustomButton";
import ProjectsList from "../../components/ProjectsList";
import { useAppSelector } from "../../hooks";
import LoadingIndicator from "../../components/LoadingIndicator";
import {
  completeProject,
  deleteProject,
  loadProjects,
} from "../../store/actions/project";
import AddProjectModal from "../../components/AddProjectModal";
import CompletedProjectsModal from "../../components/CompletedProjectsModal";

interface ProjectScreenProps {
  navigation?: StackNavigationProp<{}>;
}

const ProjectScreen: FC<ProjectScreenProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddProjectModalVisible, setIsAddProjectModalVisible] = useState(
    false
  );
  const [
    isCompletedProjectModalVisible,
    setIsCompletedProjectModalVisible,
  ] = useState(false);

  const dispatch = useDispatch();
  const projects = useAppSelector((state) => state.project.projects);

  const loadProjectsHandler = async (pageNo: number, searchTerm?: string) => {
    try {
      await dispatch(loadProjects(pageNo, searchTerm));
    } catch (error) {
      console.log(error);
      Alert.alert(
        Strings.ProjectsScreen.AlertTitle.LoadProjects,
        error.message,
        [{ text: Strings.ProjectsScreen.AlertButton }]
      );
    }
  };

  const completeProjectHandler = async (id: string) => {
    try {
      await dispatch(completeProject(id));
    } catch (error) {
      console.log(error);
      Alert.alert(
        Strings.ProjectsScreen.AlertTitle.CompleteProject,
        error.message,
        [{ text: Strings.ProjectsScreen.AlertButton }]
      );
    }
  };

  const deleteProjectHandler = async (id: string) => {
    try {
      await dispatch(deleteProject(id));
    } catch (error) {
      console.log(error);
      Alert.alert(
        Strings.ProjectsScreen.AlertTitle.DeleteProject,
        error.message,
        [{ text: Strings.ProjectsScreen.AlertButton }]
      );
    }
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

  useEffect(() => {
    loadProjectsHandler(pageNo);
  }, []);

  isLoading ? <LoadingIndicator /> : null;

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
        </View>
        <SearchBar />
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
      <ProjectsList data={projects} onEndReached={listEndReachedHandler} />

      <AddProjectModal
        //@ts-ignore
        openModal={isAddProjectModalVisible}
        closeModal={() => setIsAddProjectModalVisible(false)}
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
    paddingHorizontal: 23,
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
