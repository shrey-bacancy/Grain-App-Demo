import {
  ADD_PROJECT,
  COMPLETE_PROJECT,
  DELETE_PROJECT,
  LOAD_COMPLETED_PROJECTS,
  LOAD_MORE_PROJECTS,
  LOAD_PROJECTS,
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
      const updatedCompletedProjects = { ...state.completedProjects };
      console.log(updatedCompletedProjects);
      //   delete updatedCompletedProjects[action.id];

      return {
        ...state,
        completedProjects: updatedCompletedProjects,
      };
    case COMPLETE_PROJECT:
      const completedProject = state.projects[action.id];
      console.log(completedProject);
      const updatedProjects = { ...state.projects };
      console.log(updatedProjects);
      //   delete updatedProjects[action.id];

      return {
        ...state,
        completedProjects: [completedProject, ...state.completedProjects],
        projects: updatedProjects,
      };
    case LOAD_PROJECTS:
      return {
        ...state,
        projects: action.projects,
      };
    case LOAD_MORE_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, ...action.projects],
      };
    case LOAD_COMPLETED_PROJECTS:
      return {
        ...state,
        completedProjects: action.projects,
      };
    default:
      return state;
  }
};

export default projectReducer;
