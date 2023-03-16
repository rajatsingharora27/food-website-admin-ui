import React from "react";

import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../Redux/ReduxStore/Store";
import "../../index.css";

import Drawer from "../Drawer/Drawer";
import MessageBar from "../MessageBar/MessageBar";
import { ChakraProvider } from "@chakra-ui/react";
import TableShimmer from "../Shimmer/TableShimmer";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

const Mainlayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ChakraProvider>
        <Drawer />
        <div className="p-4 xl:ml-80">
          <DashboardNavbar />
          <MessageBar />
          <Outlet />
        </div>
      </ChakraProvider>
    </div>

    // <div className="min-h-screen bg-blue-gray-50/50">
    //   <Sidenav
    //     routes={routes}
    //     brandImg={
    //       sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
    //     }
    //   />
    //   <div className="p-4 xl:ml-80">
    //     <DashboardNavbar />
    //     <Configurator />
    //     <IconButton
    //       size="lg"
    //       color="white"
    //       className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
    //       ripple={false}
    //       onClick={() => setOpenConfigurator(dispatch, true)}
    //     >
    //       <Cog6ToothIcon className="h-5 w-5" />
    //     </IconButton>
    //     <Routes>
    //       {routes.map(
    //         ({ layout, pages }) =>
    //           layout === "dashboard" &&
    //           pages.map(({ path, element }) => (
    //             <Route exact path={path} element={element} />
    //           ))
    //       )}
    //     </Routes>
    //     <div className="text-blue-gray-600">
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Mainlayout;
