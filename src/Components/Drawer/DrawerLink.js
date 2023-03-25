import { BiLogOut } from "react-icons/bi";
import {
  MdOutlineCategory,
  MdOutlineSpaceDashboard,
  MdProductionQuantityLimits,
} from "react-icons/md";

import { RiFileList3Line } from "react-icons/ri";
import { AiFillGolden } from "react-icons/ai";

export const drawerLinks = [
  {
    layout: "dashboard",
    pages: [
      {
        id: 1,
        icon: <MdOutlineSpaceDashboard />,
        title: "Dashboard",
        link: "/",
      },
      {
        id: 2,
        icon: <MdProductionQuantityLimits />,
        title: "Create Product",
        link: "/createProduct",
      },
      {
        id: 3,
        icon: <MdOutlineCategory />,
        title: "New Category",
        link: "/createCategory",
      },
      {
        id: 4,
        icon: <RiFileList3Line />,
        title: "Order",
        link: "/orders",
      },
      {
        id: 5,
        icon: <AiFillGolden />,
        title: "Inventory",
        link: "/inventory",
      },
      {
        id: 6,
        icon: <BiLogOut />,
        title: "Logout",
        link: "/login",
      },
    ],
  },
];

export const breadCrumMap = new Map();

breadCrumMap.set("/dashboard", "Dashboard");
breadCrumMap.set("/createProduct", "Create Product");
breadCrumMap.set("/createCategory", "New Category");
breadCrumMap.set("/orders", "Order");
breadCrumMap.set("/inventory", "Inventory");
breadCrumMap.set("/login", "Login");

// {
//   layout: "dashboard",
//   pages: [
//     {
//       icon: <HomeIcon {...icon} />,
//       name: "dashboard",
//       path: "/home",
//       element: <Home />,
//     },
//     {
//       icon: <UserCircleIcon {...icon} />,
//       name: "profile",
//       path: "/profile",
//       element: <Profile />,
//     },
//     {
//       icon: <TableCellsIcon {...icon} />,
//       name: "tables",
//       path: "/tables",
//       element: <Tables />,
//     },
//     {
//       icon: <TableCellsIcon {...icon} />,
//       name: "Orders",
//       path: "/tables",
//       element: <Tables />,
//     },
//     {
//       icon: <BellIcon {...icon} />,
//       name: "notifactions",
//       path: "/notifactions",
//       element: <Notifications />,
//     },
//   ],
// },
