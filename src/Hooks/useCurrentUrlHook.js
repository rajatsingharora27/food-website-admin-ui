import { useLocation } from "react-router-dom";

export const useCurrentUrl = (oldPathName) => {
  console.log("Old Path", oldPathName);

  let location = useLocation();
  console.log("New Path", location.pathname);

  return location.pathname !== oldPathName;
};
