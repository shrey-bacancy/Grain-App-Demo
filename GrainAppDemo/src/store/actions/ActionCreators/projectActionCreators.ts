import { ActionCreator } from "redux";
import {
  ADD_PROJECT,
  COMPLETE_PROJECT,
  DELETE_PROJECT,
  LOAD_COMPLETED_PROJECTS,
  LOAD_MORE_PROJECTS,
  LOAD_PROJECTS,
} from "../../types";

interface AddProjectAction {
  type?: typeof ADD_PROJECT;
  project?: any;
}

interface LoadProjectsAction {
  type?: typeof LOAD_PROJECTS | typeof LOAD_MORE_PROJECTS;
  pageNo?: number;
  project?: any;
}

interface LoadCompletedProjectsAction {
  type?: typeof LOAD_COMPLETED_PROJECTS;
  project?: any;
}

interface CompleteProjectAction {
  type?: typeof COMPLETE_PROJECT;
  id?: string;
}

interface DeleteProjectAction {
  type?: typeof DELETE_PROJECT;
  id?: string;
}

export const addProjectAction: ActionCreator<AddProjectAction> = (project) => {
  return { type: ADD_PROJECT, project: project };
};

export const loadProjectsAction: ActionCreator<LoadProjectsAction> = (
  pageNo,
  project
) => {
  if (pageNo === 1) {
    return { type: LOAD_PROJECTS, project: project };
  } else {
    return { type: LOAD_MORE_PROJECTS, project: project };
  }
};

export const loadCompletedProjectsAction: ActionCreator<LoadCompletedProjectsAction> = (
  project
) => {
  return { type: LOAD_COMPLETED_PROJECTS, project: project };
};

export const completeProjectAction: ActionCreator<CompleteProjectAction> = (
  id
) => {
  return { type: COMPLETE_PROJECT, id: id };
};

export const deleteProjectAction: ActionCreator<DeleteProjectAction> = (id) => {
  return { type: DELETE_PROJECT, id: id };
};
