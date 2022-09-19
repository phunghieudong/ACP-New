import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import RootNavigator from "./src/navigators/rootNavigator";
import store from './src/store';
import { LogBox } from "react-native";
import Demo from './src/views/Auth/Screen/demo';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <StoreProvider store={store}>
      <Demo />
    </StoreProvider>
  );
};

export default App;
