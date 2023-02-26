import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messageBarSlice",
  initialState: {
    messageToDisplay: [],
  },
  reducers: {
    addMessageToShow: (state, action) => {
      // if(action.payload.)
      state.messageToDisplay = action.payload;
    },
  },
});

export const { addMessageToShow } = messageSlice.actions;

export default messageSlice.reducer;
