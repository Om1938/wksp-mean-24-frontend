import { createSlice } from "@reduxjs/toolkit";

const loadInitialState = () => {
  const token = localStorage.getItem("auth_token");
  const profile = localStorage.getItem("auth_profile");
  return {
    token,
    profile: JSON.parse(profile!) || {},
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
    setProfile: (state, action) => {
      localStorage.setItem("auth_profile", JSON.stringify(action.payload));
      state.profile = action.payload;
    },
  },
});

export const { setToken, setProfile } = authSlice.actions;
export default authSlice;
