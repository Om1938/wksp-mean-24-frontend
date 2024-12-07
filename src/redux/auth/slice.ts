import { createSlice } from "@reduxjs/toolkit";

const loadInitialState = () => {
  const token = localStorage.getItem("auth_token");
  return {
    token,
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadInitialState(),
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("auth_token", action.payload);
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice;
