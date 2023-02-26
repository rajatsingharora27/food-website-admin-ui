import { configureStore } from "@reduxjs/toolkit";

import activeLinkSlice from "../Slices/activeComponet";
import isSideBarOpenSlice from "../Slices/sideBar";
import createProductSlice from "../Slices/creatProduct";
import messageSlice from "../Slices/messageBar";

const store = configureStore({
  reducer: {
    activeComponent: activeLinkSlice,
    sideBarOpen: isSideBarOpenSlice,
    newProduct: createProductSlice,
    addMessageToShow: messageSlice,
  },
});
// some comment
export default store;
