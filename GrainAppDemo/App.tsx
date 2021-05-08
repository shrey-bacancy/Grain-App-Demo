import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LoadingIndicator from "./src/components/LoadingIndicator";
import RootNavigator from "./src/navigation/RootNavigator";
import { persistor, store } from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<LoadingIndicator />} persistor={persistor}> */}
      <RootNavigator />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
