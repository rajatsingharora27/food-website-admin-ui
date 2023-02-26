import React from "react";

import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../Redux/ReduxStore/Store";
// import Accordian from "./Components/Accordian/Accordian";
import Drawer from "../Drawer/Drawer";
import MessageBar from "../MessageBar/MessageBar";
// import { changeOpenStatus } from "../../Redux/Slices/sideBar";

const Mainlayout = () => {
  // const isSideBarOpen = useSelector((store) => store.sideBarOpen.isOpen);
  // const dispatch = useDispatch();

  // function closeSideBarOnMouseLeftClick() {
  //   if (isSideBarOpen && window.event.which === 1) {
  //     dispatch(changeOpenStatus(isSideBarOpen));
  //   }
  // }
  return (
    <div className=" overflow-y-hidden overflow-x-hidden">
      <Provider store={store}>
        <NavBar />
        <MessageBar />
        <div className="w-full min-h-[90vh] flex ">
          <Drawer />
          {/* {closeSideBarOnMouseLeftClick()} */}
          <Outlet />
        </div>
      </Provider>
    </div>
  );
};

export default Mainlayout;
