import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateProduct from "../Pages/CreateProduct/CreateProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/createProduct",
        element: <CreateProduct />,
      },
    ],
  },
]);

export default routerApp;
