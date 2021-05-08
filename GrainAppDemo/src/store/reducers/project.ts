import {
  ADD_PROJECT,
  COMPLETE_PROJECT,
  DELETE_PROJECT,
  LOAD_COMPLETED_PROJECTS,
  LOAD_PROJECTS_NEXT_PAGES,
  LOAD_PROJECTS_PAGE_1,
  // RESTORE_PROJECT,
} from "../types";

interface State {
  projects?: any;
  completedProjects?: any;
}

const initialState: State = {
  projects: [],
  completedProjects: [],
};

const projectReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.project, ...state.projects],
      };
    case DELETE_PROJECT:
      const updatedCompletedProjects = state.completedProjects.filter(
        (project: any) => project._id !== action.id
      );
      console.log("Del Proj", updatedCompletedProjects);

      return {
        ...state,
        completedProjects: updatedCompletedProjects,
      };
    case COMPLETE_PROJECT:
      const projectId = state.projects.findIndex(
        (project: any) => project._id === action.id
      );

      const completedProject = state.projects[projectId];

      const updatedProjects = state.projects.filter(
        (project: any) => project._id !== action.id
      );

      console.log("Complete Proj", completedProject);
      console.log("Complete Proj update", updatedProjects);

      return {
        ...state,
        completedProjects: [completedProject, ...state.completedProjects],
        projects: updatedProjects,
      };
    // case RESTORE_PROJECT:
    //   const completedProjectId = state.completedProjects.findIndex(
    //     (project: any) => project._id === action.id
    //   );

    //   const restoredProject = state.completedProjects[completedProjectId];

    //   const updateCompletedProjects = state.completedProjects.filter(
    //     (project: any) => project._id !== action.id
    //   );

    //   console.log("Restore Proj", restoredProject);
    //   console.log("Restore Comp Proj update", updateCompletedProjects);

    //   return {
    //     ...state,
    //     completedProjects: updateCompletedProjects,
    //     projects: [restoredProject, ...state.projects],
    //   };
    case LOAD_PROJECTS_PAGE_1:
      return {
        ...state,
        projects: action.project,
      };
    case LOAD_PROJECTS_NEXT_PAGES:
      return {
        ...state,
        projects: [...state.projects, ...action.project],
      };
    case LOAD_COMPLETED_PROJECTS:
      return {
        ...state,
        completedProjects: action.project,
      };
    default:
      return state;
  }
};

export default projectReducer;
