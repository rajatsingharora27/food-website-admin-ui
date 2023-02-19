import {
  MdOutlineSpaceDashboard,
  MdProductionQuantityLimits,
} from "react-icons/md";

export const drawerLinks = [
  {
    id: 1,
    icon: <MdOutlineSpaceDashboard />,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    icon: <MdProductionQuantityLimits />,
    title: "Create Product",
    link: "/createProduct",
  },
];
