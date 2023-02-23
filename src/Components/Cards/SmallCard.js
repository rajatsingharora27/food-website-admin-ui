import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../index.css";
import axios from "axios";
import { updateProductDetails } from "../../Redux/Slices/creatProduct";
import { useDispatch } from "react-redux";
import { url } from "../../Utils/urlConfig";

const SmallCard = ({
  title,
  showButton,
  showDropDown,
  showFieldDescription,
  isThumbnailImage,
}) => {
  const [dropDownData, setDropDownData] = useState([]);
  const dispatch = useDispatch();

  const getDropDownData = async () => {
    console.log(
      `${
        process.env.TUILERIES_BASE_URL /
        process.env.API_VERSION /
        process.env.GET_ALL_CATEGORY
      }`
    );
    const CategoryData = await axios.get(
      "http://localhost:3003/api/v1/allCategory"
    );
    setDropDownData(CategoryData?.data?.data);
  };

  useEffect(() => {
    getDropDownData();
  }, []);

  const handleSelection = (e) => {
    console.log(e.target.value);
    dispatch(updateProductDetails({ typeOfproduct: e.target.value }));
  };

  return (
    <>
      <div className="flex flex-col p-5 m-5 shadow-[0px_4px_20px_10px_#00000024] md:w-[35vw] rounded-md bg-[var(--card-background-color)]">
        <h1 className="m-2 text-xl font-medium leading-tight text-neutral-800 ">
          {title}
        </h1>
        <div className="flex flex-col ">
          {isThumbnailImage && (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          )}
          {showDropDown && (
            <select
              defaultValue={"DEFAULT"}
              className="block cursor-pointer font-sans m-3 py-2.5 px-0 w-[50%] text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              onChange={handleSelection}
            >
              <option value="DEFAULT" disabled>
                Category...
              </option>
              {dropDownData.map((catergory) => {
                return (
                  <option
                    key={catergory._id}
                    value={catergory.name.toUpperCase()}
                  >
                    {catergory.name.toUpperCase()}
                  </option>
                );
              })}
            </select>
          )}

          {showFieldDescription && (
            <p className="font-sans font-semibold text-gray-400 text-xs ml-3 ">
              Add Category to Product
            </p>
          )}
        </div>

        {showButton && (
          <button className=" text-white text-lg font-sans my-10 md:m-7 lg:m-8  bg-[var(--background-color)] rounded opacity-75 p-3 shadow-lg hover:bg-[#aef1da] transition-all ease-in-out ">
            Add New Category
          </button>
        )}
      </div>
    </>
  );
};

export default SmallCard;

{
  /* <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
<InputLabel id="category">Category</InputLabel>
<Select
  labelId="category"
  id="category"
  label="Category"
  onChange={handleSelection}
>
  {dropDownData.map((category) => {
    return (
      <MenuItem
        key={category._id}
        value={category.name.toUpperCase()}
        defaultValue=""
      >
        {category.name.toUpperCase()}
      </MenuItem>
    );
  })}
</Select>
</FormControl> */
}
