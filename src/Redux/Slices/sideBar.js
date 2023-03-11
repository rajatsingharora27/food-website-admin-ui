import { createSlice } from "@reduxjs/toolkit";

const isSideBarOpenSlice = createSlice({
  name: "sideBarOpen",

  initialState: {
    isOpen: true,
  },
  reducers: {
    changeOpenStatus: (state, action) => {
      state.isOpen = !action.payload;
    },
  },
});

export const { changeOpenStatus } = isSideBarOpenSlice.actions;

export default isSideBarOpenSlice.reducer;
