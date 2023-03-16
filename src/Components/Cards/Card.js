import React, { useState } from "react";
import "../../index.css";
import axios from "axios";
import { updateProductDetails } from "../../Redux/Slices/creatProduct";
import { useDispatch } from "react-redux";
import { url } from "../../Utils/urlConfig";
import { FaRupeeSign } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

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
        if (/^\d*$/.test(e.target.value)) {
          dispatch(updateProductDetails({ price: e.target.value }));
        }
        break;
      case "description":
        dispatch(updateProductDetails({ description: e.target.value }));
        break;
      case "quantity":
        if (/^\d*$/.test(e.target.value)) {
          dispatch(updateProductDetails({ quantity: e.target.value }));
        }
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
      <Card className={`w-96`}>
        <CardHeader
          variant={"gradient"}
          color="cyan"
          className="mb-4 grid h-28 place-items-center bg-cyan-300"
        >
          <Typography variant="h3" color="white">
            {title}
          </Typography>
        </CardHeader>
        <CardBody>
          {inputField?.inputArray.map((ele, i) => {
            return (
              <div className="relative mb-8" key={i}>
                <input
                  type={
                    ele?.key === "price" || ele?.key === "quantity"
                      ? "number"
                      : "text "
                  }
                  className="w-full h-10 text-gray-500  italic font-semibold font-sans placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-teal-500"
                  id={ele?.id}
                  placeholder={ele?.placeholder}
                  onChange={handleChange(ele?.key)}
                />
                <label
                  for="product-name"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-500 peer-focus:text-sm"
                >
                  {ele?.key?.toUpperCase()}
                </label>
                <p className="font-sans font-medium text-gray-400 text-xs ">
                  {ele?.informationText}
                </p>
              </div>
            );
          })}

          {isTextArea && (
            <div className="relative mt-14">
              <label
                className=" font-sans absolute left-0 -top-6 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2"
                id="description"
                htmlFor="description"
              >
                Description
              </label>
              <label class="text-gray-700" for="description">
                <textarea
                  rows={10}
                  cols={40}
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent "
                  onChange={handleChange("description")}
                ></textarea>
                <p className="font-sans font-medium text-gray-400 text-xs">
                  Something about your product
                </p>
              </label>
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
                <Button
                  onClick={handleFileUpload}
                  className="my-5 text-white text-lg font-sans cursor-pointer  bg-[var(--background-color)] rounded opacity-75 p-3 shadow-lg hover:bg-[#aef1da] transition-all ease-in-out"
                >
                  Upload
                </Button>
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
        </CardBody>
      </Card>
    </>
  );
};

export default SmallCard;
