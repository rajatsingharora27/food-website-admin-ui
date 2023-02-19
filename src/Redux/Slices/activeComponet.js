import { createSlice } from "@reduxjs/toolkit";

const activeLinkSlice = createSlice({
  name: "activeComponent",
  initialState: {
    id: 1,
  },
  reducers: {
    changeActiveComponent: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { changeActiveComponent } = activeLinkSlice.actions;

export default activeLinkSlice.reducer;
