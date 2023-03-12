import {
  MdOutlineCategory,
  MdOutlineSpaceDashboard,
  MdProductionQuantityLimits,
} from "react-icons/md";

import { RiFileList3Line } from "react-icons/ri";

export const drawerLinks = [
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
    icon: <RiFileList3Line />,
    title: "Logout",
    link: "/login",
  },
];
