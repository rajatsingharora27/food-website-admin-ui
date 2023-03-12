import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticate = useSelector(
    (store) => store.authentication.isAuthenticated
  );
  if (!isAuthenticate) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default PrivateRoute;
