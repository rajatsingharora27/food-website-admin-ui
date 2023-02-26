import React, { useState } from "react";
import "../../index.css";
import axios from "axios";
import { updateProductDetails } from "../../Redux/Slices/creatProduct";
import { useDispatch } from "react-redux";
import { url } from "../../Utils/urlConfig";
import { FaRupeeSign } from "react-icons/fa";

const SmallCard = ({
  title,
  showButton,
  showDropDown,
  showFieldDescription,
  isThumbnailImage,
  inputField,
  isTextArea,
  categoryDropDownData,
}) => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelection = (e) => {
    console.log(e.target.value);
    dispatch(updateProductDetails({ typeOfproduct: e.target.value }));
  };
  const handleChange = (payloadField) => (e) => {
    switch (payloadField) {
      case "name":
        dispatch(updateProductDetails({ name: e.target.value }));
        break;
      case "price":
        const isValid = /^\d*$/.test(e.target.value);
        if (isValid) {
          dispatch(updateProductDetails({ price: e.target.value }));
        }

        break;
      case "description":
        dispatch(updateProductDetails({ description: e.target.value }));
        break;
      case "quantity":
        dispatch(updateProductDetails({ quantity: e.target.value }));
        break;
      default:
        console.log(e.target.value);
    }
  };

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileUpload = async (event) => {
    try {
      const formData = new FormData();
      formData.append("thumbNailImage", selectedFile);
      const response = await axios.post(url.thumbnailImage, formData);
      // console.log(response.data.data);
      dispatch(updateProductDetails({ thumbNailImage: response.data.data }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col p-5 m-5 shadow-[0px_4px_20px_10px_#00000024] md:w-[35vw] rounded-md bg-[var(--card-background-color)]">
        <h1 className="m-2 text-xl font-medium leading-tight text-neutral-800 ">
          {title}
        </h1>
        {/* {console.log(inputField?.inputArray?.onChangeInput)} */}
        {inputField?.inputArray.map((ele, i) => {
          return (
            <div className="flex flex-col px-4" key={i}>
              <div className="flex flex-row">
                <label
                  htmlFor={ele?.id}
                  className=" font-sans font-semibold text-black text-sm m-3 ml-0"
                >
                  {ele?.label}
                </label>
                <span className="mt-3 text-red-500 pr-3">*</span>
              </div>

              <div className="flex flex-row justify-start">
                {ele?.key === "price" && (
                  <FaRupeeSign className="flex justify-center my-3 mr-0" />
                )}

                <input
                  type={ele?.key === "price" ? "number" : "text "}
                  className="peer ml-3 block h-11 w-4/5 rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight  ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white"
                  id={ele?.id}
                  placeholder={ele?.placeholder}
                  onChange={handleChange(ele?.key)}
                  // pattern={ele?.key === "price" ? "^[0-9]*$" : ""}

                  // onChange={getProductName}
                />
              </div>

              <p className="font-sans font-medium text-gray-400 text-xs m-3">
                {ele?.informationText}
              </p>
            </div>
          );
        })}

        {isTextArea && (
          <div className="flex flex-col mt-4 px-4">
            <label
              className="font-sans font-medium text-black text-sm my-4 "
              id="description"
            >
              Description
            </label>
            <textarea
              rows={10}
              cols={40}
              className="rounded-lg border p-2 border-gray-300 text-base font-normal leading-tight  ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white  "
              onChange={handleChange("description")}
            ></textarea>
            <p className="font-sans font-medium text-gray-400 text-xs m-3">
              Something about your product
            </p>
          </div>
        )}

        <div className="flex flex-col ">
          {isThumbnailImage && (
            <div className="flex flex-col items-end  w-full">
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
                <input
                  id="dropzone-file"
                  type="file"
                  onChange={handleFileInputChange}
                  className="hidden"
                />
              </label>
              <span
                onClick={handleFileUpload}
                className="my-5 text-white text-lg font-sans cursor-pointer  bg-[var(--background-color)] rounded opacity-75 p-3 shadow-lg hover:bg-[#aef1da] transition-all ease-in-out"
              >
                Upload
              </span>
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
              {categoryDropDownData?.map((catergory) => {
                return (
                  <option key={catergory._id} value={catergory.name}>
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
