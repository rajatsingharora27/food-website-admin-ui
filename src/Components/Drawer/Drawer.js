import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { changeActiveComponent } from "../../Redux/Slices/activeComponet";
import { drawerLinks } from "./DrawerLink";
import { changeOpenStatus } from "../../Redux/Slices/sideBar";
import { addMessageToShow } from "../../Redux/Slices/messageBar";
import { logout } from "../../Redux/Slices/isAuthenticated";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
// import { useMaterialTailwindController, setOpenSidenav } from "@/context";

//bg-[var(--background-color)]
const DrawerComponet = () => {
  const currentActive = useSelector((store) => store.activeComponent.id);
  const isSideBarOpen = useSelector((store) => store.sideBarOpen.isOpen);
  // const [controller, dispatch] = useMaterialTailwindController();
  // const { sidenavColor, sidenavType, openSidenav } = controller;
  let location = useLocation();
  const dispatch = useDispatch();
  const [path, setPath] = useState(location.pathname);
  const ref = useRef(null);

  const pageChange = () => {
    if (path !== location.pathname) {
      dispatch(addMessageToShow(-1));
      setPath(location.pathname);
    }
  };
  useEffect(() => {
    pageChange();
  });

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleCurrentActiveDispatch = (id) => {
    dispatch(changeActiveComponent(id));
    if (id === 5) {
      dispatch(logout());
    }
  };
  const handleSideBarOpen = () => {
    dispatch(changeOpenStatus(isSideBarOpen));
    console.log(isSideBarOpen);
  };

  const closeDrawer = () => {
    dispatch(changeOpenStatus(isSideBarOpen));
  };

  const handleClickOutside = (event) => {
    if (!ref.current.contains(event.target)) {
      if (isSideBarOpen) {
        dispatch(changeOpenStatus(isSideBarOpen));
      }
    }
  };

  return (
    <>
      <aside
        ref={ref}
        className={`bg-gradient-to-r from-green-200 to-green-300 shadow-lg ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
      >
        <div className={`relative border-b border-white/20`}>
          <Link to="/" className="flex items-center gap-4 py-6 px-8">
            <Avatar src="/images/logo.png" size="sm" className="fill-white " />
            {/* <Typography variant="h6" color={"white"}>
              {brandName}
            </Typography> */}
          </Link>
          {/* <IconButton
            variant="text"
            color="white"
            size="sm"
            // ripple={true}
            className="absolute right-10 top-4 grid rounded-br-none rounded-tl-none xl:hidden"
          >
            <XMarkIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-black"
              onClick={handleSideBarOpen}
            />
          </IconButton> */}
        </div>
        <div className="space-y-8 w-full mt-10  ">
          {drawerLinks.map(({ layout, title, pages }, key) => {
            return (
              <ul key={key} className="mb-4 flex flex-col gap-1">
                {title && (
                  <li className="mx-3.5 mt-4 mb-2">
                    <Typography
                      variant="small"
                      color={"blue-gray"}
                      className="font-black uppercase opacity-75"
                    >
                      {title}
                    </Typography>
                  </li>
                )}
                {pages.map(({ id, icon, title, link }) => (
                  <li key={id}>
                    <Link to={link} key={id} onClick={closeDrawer}>
                      <Button
                        onClick={() => handleCurrentActiveDispatch(id)}
                        variant={currentActive === id ? "gradient" : "text"}
                        className={`flex items-center gap-4 px-4 capitalize `}
                        // color={currentActive === id ? "yellow" : ""}
                        fullWidth
                      >
                        <span
                          className={`${
                            currentActive === id ? "text-black" : ""
                          }`}
                        >
                          {icon}
                        </span>
                        <Typography className="text-[var(--navBarHover-color)] font-medium capitalize">
                          {title}
                        </Typography>
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
              // <Link to={ele.link} key={ele.id} onClick={closeDrawer}>
              //   <div
              //     onClick={() => handleCurrentActiveDispatch(ele.id)}
              //     className={`flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-[var(--background-color)]  border-l-4 border-transparent py-2 ${
              //       currentActive === ele.id &&
              //       "border-[var(--background-color)]"
              //     }   `}
              //   >
              //     <span>{ele.icon}</span>
              //     <h1 className="text-[var(--navBarHover-color)] group-hover:text-[#c7b299] xl:flex hidden">
              //       {ele.title}
              //     </h1>
              //   </div>
              // </Link>
            );
          })}
        </div>
      </aside>
    </>

    // <aside
    //   className={`bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 ${
    //     isSideBarOpen ? "translate-x-0" : "-translate-x-80"
    //   } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    // >
    //   <div className={`relative border-b border-blue-gray-50`}>
    //     <Link to="/" className="flex items-center gap-4 py-6 px-8">
    //       {/* <Avatar src={brandImg} size="sm" /> */}
    //       <Typography
    //         variant="h6"
    //         // color={sidenavType === "dark" ? "white" : "blue-gray"}
    //         color={"blue-gray"}
    //       >
    //         Tuileries
    //       </Typography>
    //     </Link>
    //     <IconButton
    //       variant="text"
    //       color="white"
    //       size="sm"
    //       ripple={false}
    //       className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
    //       onClick={closeDrawer}
    //     >
    //       <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
    //     </IconButton>
    //   </div>
    //   <div className="m-4">
    //     {drawerLinks.map((ele) => (
    //       <ul className="mb-4 flex flex-col gap-1">
    //         <li key={ele.id} className="mx-3.5 mt-4 mb-2">
    //           <NavLink to={ele.link}>
    //             {({ isActive }) => (
    //               <Button
    //                 variant={isActive ? "gradient" : "text"}
    //                 color={"blue-gray"}
    //                 className="flex items-center gap-4 px-4 capitalize"
    //                 fullWidth
    //               >
    //                 {ele.icon}
    //                 <Typography
    //                   color="inherit"
    //                   className="font-medium capitalize"
    //                 >
    //                   {ele.title}
    //                 </Typography>
    //               </Button>
    //             )}
    //           </NavLink>
    //         </li>
    //       </ul>
    //     ))}
    //   </div>
    // </aside>
  );
};

export default DrawerComponet;
