//@ts-nocheck
import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import RootNavigator from "./src/navigators/rootNavigator";
import store from './src/store';
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <StoreProvider store={store}>
      <RootNavigator />
    </StoreProvider>
  );
};

export default App;
