import React from "react";
import { useDispatch } from "react-redux";
import { updateProductDetails } from "../../Redux/Slices/creatProduct";

const LargeCard = () => {
  const dispatch = useDispatch();

  const getProductName = (e) => {
    dispatch(updateProductDetails({ name: e.target.value }));
  };
  const getPrice = (e) => {
    dispatch(updateProductDetails({ price: e.target.value }));
  };
  const getDescription = (e) => {
    dispatch(updateProductDetails({ description: e.target.value }));
  };

  return (
    <div className="flex flex-col p-5 m-5 shadow-[0px_4px_20px_10px_#00000024] md:w-[35vw] rounded-md bg-[var(--card-background-color)]">
      <h1 className="m-2 text-xl font-medium leading-tight text-neutral-800 ">
        Basic Information
      </h1>
      <div className="flex flex-col px-4">
        <label
          for="productName"
          className=" font-sans font-semibold text-black text-sm m-3 ml-0"
        >
          Product Name
        </label>

        <input
          type="text"
          className="peer ml-3 block h-11 w-4/5 rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight  ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white"
          id="productName"
          placeholder="Product Name"
          onChange={getProductName}
        />
        <p className="font-sans font-medium text-gray-400 text-xs m-3">
          A Product name is required and recomended to be unique
        </p>
      </div>
      <div className="flex flex-col mt-4 px-4">
        <label
          className="font-sans font-medium text-black text-sm my-4 "
          id="price"
        >
          Price
        </label>
        <input
          type="text"
          className="peer ml-3 block h-11 w-4/5 rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight  ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white "
          id="price"
          placeholder="Enter Price"
          onChange={getPrice}
        />
      </div>
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
          className="rounded-lg border border-gray-300 text-base font-normal leading-tight  ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white  "
          onChange={getDescription}
        ></textarea>
      </div>
    </div>
  );
};

export default LargeCard;
