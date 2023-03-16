import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  MobileNav,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { changeOpenStatus } from "../../Redux/Slices/sideBar";
import { breadCrumMap } from "../Drawer/DrawerLink";

const DashboardNavbar = () => {
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const isSideBarOpen = useSelector((store) => store.sideBarOpen.isOpen);
  const dispatch = useDispatch();

  const handleSideBarOpen = () => {
    dispatch(changeOpenStatus(isSideBarOpen));
    console.log(isSideBarOpen);
  };
  console.log(pathname, layout, page);
  return (
    // <Navbar
    //   color={"white"}
    //   className={`rounded-xl transition-all  px-0 py-1 shadow-2xl`}
    //   fullWidth
    //   blurred={true}
    // >
    //   <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center px-4">
    //     <div className="capitalize">
    //       <Breadcrumbs className={`bg-transparent p-0 transition-all mt-1 `}>
    //         <Link to={`${layout}`}>
    //           <Typography
    //             variant="small"
    //             color="black"
    //             className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
    //           >
    //             {layout !== undefined ? breadCrumMap.get(pathname) + " / " : ""}
    //           </Typography>
    //         </Link>
    //         <Typography variant="small" color="black" className="font-normal">
    //           Home
    //         </Typography>
    //       </Breadcrumbs>
    //       <Typography variant="h6" color="blue-gray">
    //         {page}
    //       </Typography>
    //     </div>
    //     <div className="flex justify-end my-2">
    //       {/* <div className="mr-auto md:mr-4 md:w-56">
    //         <Input label="Type here" />
    //       </div> */}
    //       <IconButton
    //         variant="text"
    //         color="black"
    //         className="grid xl:hidden"
    //         onClick={handleSideBarOpen}
    //       >
    //         <Bars3Icon strokeWidth={3} className="h-6 w-6 text-black" />
    //       </IconButton>
    //     </div>
    //   </div>
    // </Navbar>

    <Navbar className="mx-auto  py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 md:ml-0">
        <Breadcrumbs className={`bg-transparent p-0 transition-all mt-1  `}>
          <Link to={`${layout}`}>
            <Typography
              variant="small"
              color="black"
              className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
            >
              {layout !== undefined ? breadCrumMap.get(pathname) + " / " : ""}
            </Typography>
          </Link>
          <Typography variant="small" color="black" className="font-normal">
            Dashboard
          </Typography>
        </Breadcrumbs>

        <IconButton
          variant="text"
          color="blue-gray"
          className="grid justify-end xl:hidden"
          onClick={handleSideBarOpen}
        >
          <Bars3Icon strokeWidth={3} className="h-6 w-6 text-black mt-2 " />
        </IconButton>
      </div>
      {/* <MobileNav>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav> */}
    </Navbar>
  );
};

export default DashboardNavbar;
