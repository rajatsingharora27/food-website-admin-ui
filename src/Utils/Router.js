import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Mainlayout from "../Components/MainLayout/Mainlayout";
import CreateProduct from "../Pages/CreateProduct/CreateProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/createProduct",
        element: <CreateProduct />,
      },
    ],
  },

  // {
  //   path: "/",
  //   element: <Dashboard />,
  // },
  // {
  //   path: "/createProduct",
  //   element: <CreateProduct />,
  // },
]);

export default routerApp;
