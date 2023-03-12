import { createSlice } from "@reduxjs/toolkit";

const authenticatedSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: false,
    isLogout: false,
  },
  reducers: {
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.isLogout = true;
    },
    changeLogInStatus: (state, action) => {
      state.isAuthenticated = true;
    },
  },
});

export const { logout, changeLogInStatus } = authenticatedSlice.actions;

export default authenticatedSlice.reducer;
