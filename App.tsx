import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import RootNavigator from "./src/navigators/rootNavigator";
import store from './src/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <RootNavigator />
    </StoreProvider>
  );
};

export default App;
