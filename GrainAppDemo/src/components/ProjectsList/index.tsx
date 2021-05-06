import React, { FC } from "react";
import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import Colors from "../../constants/colors";
import Strings from "../../constants/strings";
import DefaultText from "../DefaultText";
import ProjectCard from "../ProjectCard";

interface ProjectsListProps {
  data: ReadonlyArray<any> | null | undefined;
  onEndReached?: ((info: { distanceFromEnd: number }) => void) | null;
  onComplete?: any;
}

const ProjectsList: FC<ProjectsListProps> = (props) => {
  console.log("ProjectData", props.data);
  const renderProjectItem: ListRenderItem<any> = ({ item }) => {
    console.log("Project", item);
    return <ProjectCard project={item} onComplete={props.onComplete} />;
  };

  return props.data?.length === 0 ? (
    <View style={styles.noProjectFoundContainer}>
      <DefaultText font="semibold" textStyle={styles.noProjectFoundText}>
        {Strings.ProjectsScreen.NoProjectFoundMessage}
      </DefaultText>
    </View>
  ) : (
    <FlatList
      data={props.data}
      renderItem={renderProjectItem}
      onEndReached={props.onEndReached}
    />
  );
};

const styles = StyleSheet.create({
  noProjectFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noProjectFoundText: {
    color: Colors.green,
    fontSize: 22,
    lineHeight: 33,
  },
});

export default ProjectsList;
