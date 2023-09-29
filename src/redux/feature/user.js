import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/authAPI";

const initialState = {
  user: {},
  token: "",
  status: "idle",
  error: null,
};

export const userLogin = createAsyncThunk("user/userLogin", async (data) => {
  const response = await login(data);
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getTokenState: (state) => {
      state.token = JSON.parse(sessionStorage.getItem("token"));
    },
    getUserState: (state) => {
      state.user = JSON.parse(sessionStorage.getItem("user"));
    },
  },
  extraReducers(builder) {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      sessionStorage.setItem("user", JSON.stringify(action.payload.data.user));
      sessionStorage.setItem(
        "token",
        JSON.stringify(action.payload.data.token)
      );
    });
  },
});

export const { getUserState, getTokenState } = userSlice.actions;

export const getCurrentUser = (state) => state.user.user;

export const getCurrentUserToken = (state) => state.user.token;

export default userSlice.reducer;

// https://redux.js.org/tutorials/essentials/part-5-async-logic