import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import moment from "moment";

import { DefaultText } from "..";
import { Colors } from "../../constants";

interface CompletedProjectCardProps {
  completedProjectsData?: any;
  onDeleteProject?: any;
  onRestoreProject?: any;
}

const CompletedProjectCard: FC<CompletedProjectCardProps> = (props) => {
  const date = moment(
    props.completedProjectsData.createdAt,
    "YYYY-MM-DD"
  ).format("MMMM DD,YYYY");

  return (
    <View style={styles.completedProjectCardContainer}>
      <View style={styles.dateTitleIconContainer}>
        <View style={styles.dateIconContainer}>
          <DefaultText font="regular" textStyle={styles.date}>
            {date}
          </DefaultText>
          <Icon type="foundation" name="rss" size={40} color={Colors.green} />
        </View>
        <DefaultText font="semibold" textStyle={styles.completedProjectTitle}>
          {props.completedProjectsData.title}
        </DefaultText>
      </View>
      <View style={styles.deleteRestoreIconContainer}>
        <Icon
          type="entypo"
          name="reply"
          size={25}
          color={Colors.green}
          containerStyle={styles.iconContainer}
          // onPress={() =>
          //   props.onRestoreProject(props.completedProjectsData._id)
          // }
        />
        <Icon
          type="font-awesome-5"
          name="trash"
          size={24}
          color={Colors.redOrange}
          containerStyle={styles.iconContainer}
          onPress={() => props.onDeleteProject(props.completedProjectsData._id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  completedProjectCardContainer: {
    flexDirection: "row",
    backgroundColor: Colors.mediumSlateBlue,
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateTitleIconContainer: {
    flex: 1,
  },
  dateIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    paddingRight: 16,
    fontSize: 14,
    lineHeight: 21,
    color: Colors.grey,
  },
  completedProjectTitle: {
    fontSize: 18,
    lineHeight: 27,
  },
  deleteRestoreIconContainer: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    padding: 13,
    marginLeft: 8,
  },
});

export default CompletedProjectCard;
