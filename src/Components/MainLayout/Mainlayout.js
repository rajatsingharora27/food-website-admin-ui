import React from "react";

import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../Redux/ReduxStore/Store";
// import Accordian from "./Components/Accordian/Accordian";
import Drawer from "../Drawer/Drawer";

const Mainlayout = () => {
  return (
    <div className=" overflow-y-hidden overflow-x-hidden">
      <Provider store={store}>
        <NavBar />
        <div className="w-full min-h-[90vh] flex ">
          <Drawer />
          <div className="w-full  ">
            <Outlet />
          </div>
        </div>
      </Provider>
    </div>
  );
};

export default Mainlayout;
