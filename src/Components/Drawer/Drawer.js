import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeActiveComponent } from "../../Redux/Slices/activeComponet";
import { drawerLinks } from "./DrawerLink";
import { changeOpenStatus } from "../../Redux/Slices/sideBar";

//bg-[var(--background-color)]
const Drawer = () => {
  const currentActive = useSelector((store) => store.activeComponent.id);
  const isSideBarOpen = useSelector((store) => store.sideBarOpen.isOpen);

  // const [activeLink, setActiveLink] = React.useState(currentActive);

  const dispatch = useDispatch();

  const handleCurrentActiveDispatch = (id) => {
    dispatch(changeActiveComponent(id));
  };
  const closeDrawer = () => {
    dispatch(changeOpenStatus(isSideBarOpen));
  };

  return (
    <nav
      className={`fixed h-full top-0 left-0 z-50 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
        isSideBarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="space-y-8 w-full mt-10  ">
        {drawerLinks.map((ele) => {
          //   console.log(ele);
          return (
            <Link to={ele.link} key={ele.id} onClick={closeDrawer}>
              <div
                onClick={() => handleCurrentActiveDispatch(ele.id)}
                className={`flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-[var(--background-color)]  border-l-4 border-transparent py-2 ${
                  currentActive === ele.id && "border-[var(--background-color)]"
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
  );
};

export default Drawer;

{
  /* <SwipeableDrawer open={true} className={classes.drawer} anchor={"left"}>
        {drawerLinks.map((ele) => {
          return (
            <Link to={ele.link} key={ele.id}>
              <ListItem>
                <ListItemIcon>{ele.icon}</ListItemIcon>
                <ListItemText primary={ele.title} />
              </ListItem>
            </Link>
          );
        })}
      </SwipeableDrawer> */
}
