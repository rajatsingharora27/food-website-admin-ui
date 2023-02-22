import { configureStore } from "@reduxjs/toolkit";

import activeLinkSlice from "../Slices/activeComponet";
import isSideBarOpenSlice from "../Slices/sideBar";
import createProductSlice from "../Slices/creatProduct";

const store = configureStore({
  reducer: {
    activeComponent: activeLinkSlice,
    sideBarOpen: isSideBarOpenSlice,
    newProduct: createProductSlice,
  },
});
// some comment
export default store;
