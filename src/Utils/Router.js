import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Mainlayout from "../Components/MainLayout/Mainlayout";
import Category from "../Pages/Category/Category";
import CreateProduct from "../Pages/CreateProduct/CreateProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Order from "../Pages/Order/Order";

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
      {
        path: "/createCategory",
        element: <Category />,
      },
      {
        path: "/orders",
        element: <Order />,
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
