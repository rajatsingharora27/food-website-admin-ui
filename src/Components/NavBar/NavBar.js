import React, { useState } from "react";
import {
  FaSearch,
  FaUserAlt,
  FaListUl,
  FaCartPlus,
  FaList,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../root.css";

// import SearchComponent from "../SearchComponent";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // const [search, setSearch] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="w-auto shadow-md h-[60px] flex justify-between items-center text-white bg-[var(--background-color)] z-10 md:w-screen">
        {/* <Link to={"/home"}> */}
        <img
          src="/images/logo.png"
          alt="Tuileries "
          className="flex items-center cursor-pointer w-auto h-8 "
        />
        {/* </Link> */}

        <div className="lg:flex justify-between  ">
          <FaList className="mx-4 cursor-pointer" />
        </div>
      </div>
    </>
  );
};
export default NavBar;
