import { combineReducers } from "@reduxjs/toolkit";
import {
  LanguageSlice,
  NotificationSlice,
  RouteSlice,
  UserSlice,
} from "./reducers";

const RootReducer = combineReducers({
  user: UserSlice,
  route: RouteSlice,
  language: LanguageSlice,
  notification: NotificationSlice,
});

export default RootReducer;
