import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import "../../index.css";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";

const SmallCard = ({
  title,
  showButton,
  showDropDown,
  showFieldDescription,
  isThumbnailImage,
}) => {
  return (
    <div className="flex flex-col p-5 m-5 shadow-[0px_4px_20px_10px_#00000024] md:w-[35vw] rounded-md bg-[var(--card-background-color)]">
      <h1 className="m-2 text-xl font-medium leading-tight text-neutral-800 ">
        {title}
      </h1>
      <div className="flex flex-col ">
        {isThumbnailImage && (
          <div className="flex flex-row justify-center ">
            <BsFillFileEarmarkArrowDownFill className="w-1/5 h-1/5  shadow-md m-10 md:m-20 md:1/2 md:h:1/2 lg:m-40 lg:h-2/3 lg:w-2/3 " />
          </div>
        )}
        {showDropDown && (
          <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="category">Category</InputLabel>
            <Select labelId="category" id="category" label="Category">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        )}

        {showFieldDescription && (
          <p className="font-sans font-semibold text-gray-400 text-xs ml-3 ">
            Add Category to Product
          </p>
        )}
      </div>

      {showButton && (
        <button className="bg-green-200 rounded-lg opacity-50 p-4 shadow-lg my-10">
          Add New Category
        </button>
      )}
    </div>
  );
};

export default SmallCard;
