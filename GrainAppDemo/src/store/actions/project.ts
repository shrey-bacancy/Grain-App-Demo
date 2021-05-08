import {
  COMPLETE_PROJECT_URL,
  CREATE_PROJECT_URL,
  DELETE_PROJECT_URL,
  FETCH_COMPLETED_PROJECTS_URL,
  FETCH_PROJECTS_URL,
} from "../../api";
import { errorToast } from "../../globals";
import {
  addProjectAction,
  completeProjectAction,
  deleteProjectAction,
  loadCompletedProjectsAction,
  loadProjectsAction,
  // restoreProjectAction,
} from "./ActionCreators/projectActionCreators";

export const addProject = (
  title: string,
  description: string,
  tags: Array<String>
) => {
  return async (dispatch: any, getState: any) => {
    const response = await fetch(CREATE_PROJECT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().auth.token,
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tags: tags,
      }),
    });

    const resData = await response.json();

    if (!response.ok) {
      errorToast(resData.message);
    }

    dispatch(addProjectAction(resData.data.project));
  };
};

export const loadProjects = (pageNo: number, searchTerm: string = "") => {
  return async (dispatch: any, getState: any) => {
    const response = await fetch(FETCH_PROJECTS_URL(pageNo, searchTerm), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().auth.token,
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      errorToast(resData.message);
    }

    dispatch(loadProjectsAction(pageNo, resData.data.projects));
  };
};

export const loadCompletedProjects = () => {
  return async (dispatch: any, getState: any) => {
    const response = await fetch(FETCH_COMPLETED_PROJECTS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().auth.token,
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      errorToast(resData.message);
    }

    dispatch(loadCompletedProjectsAction(resData.data.projects));
  };
};

export const completeProject = (id: string) => {
  return async (dispatch: any, getState: any) => {
    const response = await fetch(COMPLETE_PROJECT_URL(id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().auth.token,
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      errorToast(resData.message);
    }

    dispatch(completeProjectAction(id));
  };
};

export const deleteProject = (id: string) => {
  return async (dispatch: any, getState: any) => {
    const response = await fetch(DELETE_PROJECT_URL(id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().auth.token,
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      errorToast(resData.message);
    }

    dispatch(deleteProjectAction(id));
  };
};

// export const restoreProject = (id: string) => {
//   return async (dispatch: any) => {
//     dispatch(restoreProjectAction(id));
//   };
// };
