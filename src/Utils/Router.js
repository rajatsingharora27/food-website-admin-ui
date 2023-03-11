import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Mainlayout from "../Components/MainLayout/Mainlayout";
import OrderView from "../Components/OrderView/OrderView";
import Category from "../Pages/Category/Category";
import CreateProduct from "../Pages/CreateProduct/CreateProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Order from "../Pages/Order/Order";
import PrivateRoute from "./PrivateRoutes";

const isAutheicate = true;
const routerApp = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute isAuthenticated={isAutheicate}>
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

      { path: "/orders/:orderId", element: <OrderView /> },
    ],
  },
  {
    path: "/login",
    element: <Login isAuthenticated={isAutheicate} />,
  },
]);

export default routerApp;
