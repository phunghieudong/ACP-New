import { getUser } from "../../api/Auth/index";
import { UserData } from "../../types/User";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

export const login = createAsyncThunk("user/login", async (payload: string) => {
  // call login API
  await SecureStore.setItemAsync("token", payload);

  return {};
});

export const getPassword = createAsyncThunk(
  "user/getPasssword",
  async (payload: string) => {
    // call login API
    await SecureStore.deleteItemAsync("password");
    await SecureStore.setItemAsync("passsword", payload);

    return payload;
  }
);

export const fetchPassword = createAsyncThunk(
  "user/fetchPassword",
  async () => {
    // call login API
    const password = await SecureStore.getItemAsync("passsword");

    return password;
  }
);

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await getUser();
  const user = { ...res.Data };

  await SecureStore.setItemAsync("user", JSON.stringify(user));

  return user;
});

export const fetchLocalUser = createAsyncThunk(
  "user/fetchLocalUser",
  async () => {
    // get user data from EncryptedStorage
    const user = await SecureStore.getItemAsync("user");
    if (user) return JSON.parse(user);
    return {};
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  // remove token and user from  EncryptedStorage
  await SecureStore.deleteItemAsync("user");
  await SecureStore.deleteItemAsync("token");
  return {};
});

export const changeinformationUser = createAsyncThunk(
  "user/mergeUser",
  async (payload: Object) => {
    // get user from payload
    const user = payload;

    // merge user from EncryptedStorage
    await SecureStore.setItemAsync("user", JSON.stringify(user));

    return user;
  }
);

type UserState = {
  current: UserData | {};
  password: string;
};

const initialState: UserState = {
  current: {},
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<UserData>) => {
        state.current = action.payload;
      }
    );
    builder.addCase(
      fetchLocalUser.fulfilled,
      (state, action: PayloadAction<UserData | {}>) => {
        state.current = action.payload;
      }
    );
    builder.addCase(logout.fulfilled, (state, action: PayloadAction<{}>) => {
      state.current = action.payload;
    });
    builder.addCase(
      changeinformationUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.current = action.payload;
      }
    );
    builder.addCase(
      fetchPassword.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.password = action.payload;
      }
    );
    builder.addCase(
      getPassword.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.password = action.payload;
      }
    );
  },
});

// action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
