import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { drawerLinks } from "./DrawerLink";

//bg-[var(--background-color)]
const Drawer = () => {
  const currentActive = useSelector((store) => store.active.id);
  //   console.log(currentActive);

  const [activeLink, setActiveLink] = React.useState(currentActive);

  const handleCurrentActiveDispatch = (id) => {
    setActiveLink(id);
  };

  return (
    <nav className="col-span-2 border-r border-gray-400 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full">
        {drawerLinks.map((ele) => {
          //   console.log(ele);
          return (
            <Link to={ele.link} key={ele.id}>
              <div
                onClick={() => handleCurrentActiveDispatch(ele.id)}
                className={`flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-[var(--background-color)]  border-l-4 border-transparent py-2 ${
                  activeLink === ele.id && "border-[var(--background-color)]"
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
