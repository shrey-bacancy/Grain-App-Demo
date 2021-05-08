import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import moment from "moment";
import Colors from "../../constants/colors";
import DefaultText from "../DefaultText";

interface ProjectCardProps {
  projectData?: any;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const date = moment(props.projectData.createdAt, "YYYY-MM-DD").format(
    "MMMM DD,YYYY"
  );

  return (
    <View style={styles.projectCardContainer}>
      <View style={styles.dateAndTitleContainer}>
        <View>
          <DefaultText font="regular" textStyle={styles.date}>
            {date}
          </DefaultText>
          <DefaultText font="semibold" textStyle={styles.projectTitle}>
            {props.projectData.title}
          </DefaultText>
        </View>
        <Icon type="foundation" name="rss" size={60} color={Colors.green} />
      </View>
      <View style={styles.descriptionContainer}>
        <DefaultText font="regular" textStyle={styles.descriptionText}>
          {props.projectData.description}
        </DefaultText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  projectCardContainer: {
    flex: 1,
    backgroundColor: Colors.mediumSlateBlue,
    borderRadius: 8,
    padding: 24,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  dateAndTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.grey,
  },
  projectTitle: {
    fontSize: 22,
    lineHeight: 33,
  },
  descriptionContainer: {
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.grey,
    textAlign: "justify",
  },
});

export default ProjectCard;
