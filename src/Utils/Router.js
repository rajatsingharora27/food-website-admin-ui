import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Mainlayout from "../Components/MainLayout/Mainlayout";
import OrderView from "../Components/OrderView/OrderView";
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
        // children: [
        //   {
        //     path: ":orderId",
        //     element: <OrderView />,
        //   },
        // ],
      },
      { path: "/orders/:orderId", element: <OrderView /> },
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
