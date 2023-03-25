import { useSelector } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Mainlayout from "../Components/MainLayout/Mainlayout";
import OrderView from "../Components/OrderView/OrderView";
import Category from "../Pages/Category/Category";
import CreateProduct from "../Pages/CreateProduct/CreateProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Inventory from "../Pages/Inventory/Inventory";
import Login from "../Pages/Login/Login";
import Order from "../Pages/Order/Order";
import PrivateRoute from "./PrivateRoutes";

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Mainlayout />
      </PrivateRoute>
    ),

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

      {
        path: "/orders/:orderId",
        element: <OrderView />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routerApp;
