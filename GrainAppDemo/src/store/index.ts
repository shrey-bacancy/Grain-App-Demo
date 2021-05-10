import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer, persistStore } from "redux-persist";
import ReduxThunk from "redux-thunk";

import authReducer from "./reducers/auth";
import projectReducer from "./reducers/project";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["userId", "token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  project: projectReducer,
  form: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
