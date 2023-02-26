import {
  MdOutlineCategory,
  MdOutlineSpaceDashboard,
  MdProductionQuantityLimits,
} from "react-icons/md";

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
];
