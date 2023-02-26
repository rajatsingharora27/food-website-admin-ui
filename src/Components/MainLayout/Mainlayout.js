import React from "react";

import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../Redux/ReduxStore/Store";
import "../../index.css";

import Drawer from "../Drawer/Drawer";
import MessageBar from "../MessageBar/MessageBar";
import { ChakraProvider } from "@chakra-ui/react";

const Mainlayout = () => {
  return (
    <div className=" overflow-y-hidden overflow-x-hidden">
      <Provider store={store}>
        <ChakraProvider>
          <NavBar />
          <MessageBar />
          <div className="w-full min-h-[90vh] flex ">
            <Drawer />
            <Outlet />
          </div>
        </ChakraProvider>
      </Provider>
    </div>
  );
};

export default Mainlayout;
