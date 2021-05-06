import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import authReducer from "./reducers/auth";
import projectReducer from "./reducers/project";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  form: formReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export type RootState = ReturnType<typeof store.getState>;

export default store;
