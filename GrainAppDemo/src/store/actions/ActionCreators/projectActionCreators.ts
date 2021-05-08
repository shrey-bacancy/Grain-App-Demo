import { ActionCreator } from "redux";
import {
  ADD_PROJECT,
  COMPLETE_PROJECT,
  DELETE_PROJECT,
  LOAD_COMPLETED_PROJECTS,
  LOAD_PROJECTS_NEXT_PAGES,
  LOAD_PROJECTS_PAGE_1,
  // RESTORE_PROJECT,
} from "../../types";

interface AddProjectAction {
  type?: typeof ADD_PROJECT;
  project?: any;
}

interface LoadProjectsAction {
  type?: typeof LOAD_PROJECTS_PAGE_1 | typeof LOAD_PROJECTS_NEXT_PAGES;
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

// interface RestoreProjectAction {
//   type?: typeof RESTORE_PROJECT;
//   id?: string;
// }

export const addProjectAction: ActionCreator<AddProjectAction> = (project) => {
  return { type: ADD_PROJECT, project: project };
};

export const loadProjectsAction: ActionCreator<LoadProjectsAction> = (
  pageNo,
  project
) => {
  if (pageNo === 1) {
    return { type: LOAD_PROJECTS_PAGE_1, project: project };
  } else {
    return { type: LOAD_PROJECTS_NEXT_PAGES, project: project };
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

// export const restoreProjectAction: ActionCreator<RestoreProjectAction> = (
//   id
// ) => {
//   return { type: RESTORE_PROJECT, id: id };
// };
