import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children, props }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default PrivateRoute;
