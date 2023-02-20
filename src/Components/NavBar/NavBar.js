import React from "react";
import { FaList } from "react-icons/fa";

import "../../root.css";

// import SearchComponent from "../SearchComponent";

const NavBar = () => {
  return (
    <>
      <div className="w-auto shadow-md h-[60px] flex justify-between items-center text-white bg-[var(--background-color)] z-10 md:w-screen">
        {/* <Link to={"/home"}> */}
        <img
          src="/images/logo.png"
          alt="Tuileries "
          className="flex items-center cursor-pointer w-auto h-8 "
        />

        <div className="lg:flex justify-between  ">
          <FaList className="mx-4 cursor-pointer" />
        </div>
      </div>
    </>
  );
};
export default NavBar;
