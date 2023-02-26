import React from "react";
import { FaList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeOpenStatus } from "../../Redux/Slices/sideBar";

import "../../root.css";

const NavBar = () => {
  const isSideBarOpen = useSelector((store) => store.sideBarOpen.isOpen);
  const dispatch = useDispatch();

  const handleSideBarOpen = () => {
    dispatch(changeOpenStatus(isSideBarOpen));
    console.log(isSideBarOpen);
  };
  return (
    <>
      <div className="w-auto  shadow-md h-[60px] flex justify-between items-center text-white bg-[var(--background-color)] z-10 md:w-screen">
        <img
          src="/images/logo.png"
          alt="Tuileries "
          className="flex items-center cursor-pointer w-auto h-8 "
        />

        <div className="lg:flex justify-between mx-4 ">
          <FaList className="mx-4 cursor-pointer" onClick={handleSideBarOpen} />
        </div>
      </div>
    </>
  );
};
export default NavBar;
