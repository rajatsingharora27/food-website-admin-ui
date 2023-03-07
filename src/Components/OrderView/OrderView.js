import React from "react";
import { useLocation } from "react-router-dom";

const OrderView = () => {
  let { state } = useLocation();
  return (
    <div>
      {console.log(state)}
      View Order Product
    </div>
  );
};

export default OrderView;
