import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RouteState = {
  auth: "Information" | "SignIn";
  root: "Dashboard" | "CreateNewPassword";
};

const initialState: RouteState = {
  auth: "Information",
  root: "Dashboard",
};

export const counterSlice = createSlice({
  name: "route",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeRoute: (
      state,
      action: PayloadAction<{ route: string; initialRoute: string }>
    ) => {
      state[action.payload.route] = action.payload.initialRoute;
    },
  },
});

// action creators are generated for each case reducer function
export const { changeRoute } = counterSlice.actions;

export default counterSlice.reducer;
