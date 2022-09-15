// import { getTotalNotifications } from "@/api/Notification";
// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// export const total = createAsyncThunk("notification/total", async () => {
//   // call login API
//   const res = await getTotalNotifications();

//   return res.Data;
// });

// const initialState = {
//   total: 0,
// };

// export const counterSlice = createSlice({
//   name: "route",
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(total.fulfilled, (state, action: PayloadAction<number>) => {
//       state.total = action.payload;
//     });
//   },
// });

// // action creators are generated for each case reducer function
// export const {} = counterSlice.actions;

// export default counterSlice.reducer;
