import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isAuthenticated }) => {
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const navigate = useNavigate();
  console.log(isAuthenticated, " from log in ");

  return <h1>Login</h1>;
};

export default Login;
