import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ILanguage = {
  current: "vn" | "en";
};

const initialState: ILanguage = {
  current: "vn",
};

export const counterSlice = createSlice({
  name: "language",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<"vn" | "en">) => {
      state.current = action.payload;
    },
  },
});

// action creators are generated for each case reducer function
export const { changeLanguage } = counterSlice.actions;

export default counterSlice.reducer;
