import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { credentials } from "../../MockData/Login";
import { changeLogInStatus } from "../../Redux/Slices/isAuthenticated";
// import {credentials} from "

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log(name, password);
  const logInStatus = useSelector((store) => store.authentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (logInStatus.isAuthenticated) {
      navigate("/");
    }
  }, [logInStatus]);

  const handleValidateFields = () => {
    if (name === credentials.name && password === credentials.password) {
      dispatch(changeLogInStatus());
      console.log(logInStatus, " logInStatus after dispatch");
    }
  };

  return (
    <div className="m-48">
      <h1>Login</h1>
      <form>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleValidateFields}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
