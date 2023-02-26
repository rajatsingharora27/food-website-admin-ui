import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { changeActiveComponent } from "../../Redux/Slices/activeComponet";
import { drawerLinks } from "./DrawerLink";
import { changeOpenStatus } from "../../Redux/Slices/sideBar";
import { addMessageToShow } from "../../Redux/Slices/messageBar";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

//bg-[var(--background-color)]
const DrawerComponet = () => {
  const currentActive = useSelector((store) => store.activeComponent.id);
  const isSideBarOpen = useSelector((store) => store.sideBarOpen.isOpen);
  let location = useLocation();
  const dispatch = useDispatch();
  const [path, setPath] = useState(location.pathname);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  const pageChange = () => {
    if (path !== location.pathname) {
      dispatch(addMessageToShow(-1));
      setPath(location.pathname);
    }
  };
  useEffect(() => {
    pageChange();
  });
  // useEffect(() => {
  //   closeSideBarOnMouseLeftClick();
  // }, []);
  // function closeSideBarOnMouseLeftClick(evt) {
  //   if (window.event.which === 0) {
  //     console.log("Inside the useEffect mouse click ", isSideBarOpen);

  //     dispatch(changeOpenStatus(isSideBarOpen));
  //   }
  // }

  const handleCurrentActiveDispatch = (id) => {
    dispatch(changeActiveComponent(id));
  };
  const closeDrawer = () => {
    dispatch(changeOpenStatus(isSideBarOpen));
  };

  return (
    <>
      <nav
        className={`fixed h-full top-0 left-0 z-50 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-8 w-full mt-10  ">
          {drawerLinks.map((ele) => {
            return (
              <Link to={ele.link} key={ele.id} onClick={closeDrawer}>
                <div
                  onClick={() => handleCurrentActiveDispatch(ele.id)}
                  className={`flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-[var(--background-color)]  border-l-4 border-transparent py-2 ${
                    currentActive === ele.id &&
                    "border-[var(--background-color)]"
                  }   `}
                >
                  <span>{ele.icon}</span>
                  <h1 className="text-[var(--navBarHover-color)] group-hover:text-[#c7b299] xl:flex hidden">
                    {ele.title}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* {!isSideBarOpen && window.event.which === 1
        ? closeSideBarOnMouseLeftClick()
        : null} */}
    </>
  );
};

export default DrawerComponet;
