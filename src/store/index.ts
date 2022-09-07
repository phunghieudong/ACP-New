import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userReducer'; // Import reducer đã khởi tạo

// Cái này coi tài liệu của redux toolkit: https://redux-toolkit.js.org/tutorials/quick-start
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store; // Export cái store mới tạo ra
export type RootState = ReturnType<typeof store.getState>; // Export type của cái store
