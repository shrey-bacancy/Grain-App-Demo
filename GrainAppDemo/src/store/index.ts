import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import authReducer from "./reducers/auth";
import projectReducer from "./reducers/project";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  form: formReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
