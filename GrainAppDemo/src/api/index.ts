const BASE_URL: string = "http://18.223.66.20:3000";

const USER_URL: string = BASE_URL + "/user";
const PROJECT_URL: string = BASE_URL + "/project";

export const LOGIN_URL: string = USER_URL + "/login";
export const LOGOUT_URL: string = USER_URL + "/logout";

export const CREATE_PROJECT_URL: string = PROJECT_URL + "/create";

export const FETCH_PROJECTS_URL = (
  pageNo: number,
  searchTerm: string = "",
  perPage: number = 5
) => {
  return `${PROJECT_URL}/list?perPage=${perPage}&pageNo=${pageNo}&title=${searchTerm}`;
};

export const FETCH_COMPLETED_PROJECTS_URL: string =
  PROJECT_URL + "/completeList";

export const COMPLETE_PROJECT_URL = (id: string) => {
  return `${PROJECT_URL}/completeProject/${id}`;
};

export const DELETE_PROJECT_URL = (id: string) => {
  return `${PROJECT_URL}/remove/${id}`;
};
