import { configureStore } from "@reduxjs/toolkit";

import activeLinkSlice from "../Slices/activeComponet";
import isSideBarOpenSlice from "../Slices/sideBar";
import createProductSlice from "../Slices/creatProduct";
import messageSlice from "../Slices/messageBar";
import authenticatedSlice from "../Slices/isAuthenticated";

const store = configureStore({
  reducer: {
    activeComponent: activeLinkSlice,
    sideBarOpen: isSideBarOpenSlice,
    newProduct: createProductSlice,
    addMessageToShow: messageSlice,
    authentication: authenticatedSlice,
  },
});

export default store;
