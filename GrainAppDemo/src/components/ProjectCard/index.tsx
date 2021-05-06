import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import moment from "moment";
import Colors from "../../constants/colors";
import DefaultText from "../DefaultText";

interface ProjectCardProps {
  onComplete?: any;
  project?: ReadonlyArray<any> | null | undefined;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  // const date = moment(props.project.createdAt, "YYYY-MM-DD").format(
  //   "MMMM DD,YYYY"
  // );

  return (
    <View style={styles.projectCardContainer}>
      <View style={styles.dateAndTitleContainer}>
        <View>
          <DefaultText font="regular">Date</DefaultText>
          <DefaultText font="regular">Title</DefaultText>
        </View>
        <Icon type="foundation" name="rss" size={40} color={Colors.green} />
      </View>
      <View style={styles.descriptionContainer}>
        <DefaultText font="regular">Desc</DefaultText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  projectCardContainer: {
    backgroundColor: Colors.mediumSlateBlue,
    borderRadius: 8,
    padding: 24,
  },
  dateAndTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionContainer: {
    marginTop: 10,
  },
});

export default ProjectCard;
