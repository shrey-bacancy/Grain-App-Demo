import React, { FC } from "react";
import {
  View,
  StyleSheet,
  ListRenderItem,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../../constants/colors";
import Strings from "../../constants/strings";
import DefaultText from "../DefaultText";
import ProjectCard from "../ProjectCard";
import { SwipeListView } from "react-native-swipe-list-view";
import { Icon } from "react-native-elements";
import NoDataFoundComponent from "../NoDataFoundComponent";

interface ProjectsListProps {
  data: any;
  onEndReached?: ((info: { distanceFromEnd: number }) => void) | null;
  onProjectComplete?: any;
}

const ProjectsList: FC<ProjectsListProps> = (props) => {
  const renderProjectItem: ListRenderItem<any> = ({ item }) => {
    return (
      <View style={styles.projectCardContainer}>
        <ProjectCard projectData={item} />
      </View>
    );
  };

  const renderSwipeLeftHiddenItem: ListRenderItem<any> = ({ item }) => {
    return (
      <TouchableNativeFeedback
        onPress={() => props.onProjectComplete(item._id)}
      >
        <View style={styles.completeProjectTextContainer}>
          <Icon type="entypo" name="download" size={24} color={Colors.grey} />
          <DefaultText font="semibold" textStyle={styles.completeProjectText}>
            {Strings.ProjectsScreen.CompletedLabel}
          </DefaultText>
        </View>
      </TouchableNativeFeedback>
    );
  };

  return (
    <SwipeListView
      useFlatList={true}
      data={props.data}
      //@ts-ignore
      keyExtractor={(item, index) => index}
      renderItem={renderProjectItem}
      renderHiddenItem={renderSwipeLeftHiddenItem}
      onEndReached={props.onEndReached}
      rightOpenValue={-180}
      disableRightSwipe
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <NoDataFoundComponent
          noDataText={Strings.ProjectsScreen.NoProjectFoundMessage}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  projectCardContainer: {
    backgroundColor: Colors.solitude,
  },
  completeProjectTextContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    top: 0,
    right: 35,
  },
  completeProjectText: {
    paddingLeft: 8,
    color: Colors.grey,
  },
});

export default ProjectsList;
