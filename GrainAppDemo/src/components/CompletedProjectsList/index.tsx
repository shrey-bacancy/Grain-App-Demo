import React, { FC } from "react";
import { FlatList, ListRenderItem } from "react-native";

import { CompletedProjectCard } from "..";

interface CompletedProjectsListProps {
  data?: any;
  onDeleteProject?: any;
  // onRestoreProject?: any;
}

const CompletedProjectsList: FC<CompletedProjectsListProps> = (props) => {
  const renderCompletedProjectsItem: ListRenderItem<any> = ({ item }) => {
    return (
      <CompletedProjectCard
        completedProjectsData={item}
        onDeleteProject={props.onDeleteProject}
        // onRestoreProject={props.onRestoreProject}
      />
    );
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderCompletedProjectsItem}
      //@ts-ignore
      keyExtractor={(item, index) => index}
    />
  );
};

export default CompletedProjectsList;
