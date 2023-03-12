import React from "react";

import Mainlayout from "./Components/MainLayout/Mainlayout";
// import { Provider, useSelector } from "react-redux";
// import store from "../../Redux/ReduxStore/Store";

const App = () => {
  // const logInStatus = useSelector(
  //   (store) => store.authentication.isAuthenticated
  // );
  return (
    <>
      {/* <Provider store={store}> */}
      <Mainlayout />
      {/* </Provider> */}
    </>
  );
};

export default App;
