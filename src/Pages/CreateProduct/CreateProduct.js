import React from "react";
import SmallCard from "../../Components/Cards/SmallCard";
import LargeCard from "../../Components/Cards/LargeCard";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const CreateProduct = () => {
  const productToAdd = useSelector((store) => store.newProduct.product);
  const showPayload = () => {
    console.log(productToAdd);
  };

  return (
    <div className=" w-full h-full bg-[#f5f8fa] ">
      <div className="flex justify-start m-5">
        <h1 className="font-sans font-bold text-2xl py-4 md:p-9  uppercase ">
          Product Form
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center ">
        {/*-------------------------- Left column for small screens ------------------------*/}
        <div className="flex flex-col">
          <SmallCard
            title={"Product Details"}
            showButton={true}
            showDropDown={true}
            showFieldDescription={true}
            isThumbnailImage={false}
          />
          <SmallCard
            title={"Thumbnail Image"}
            showButton={false}
            showDropDown={false}
            showFieldDescription={false}
            isThumbnailImage={true}
          />
        </div>
        {/* ------------------------------Righthand side------------------------------------- */}
        <div className="flex flex-col ">
          <LargeCard />
        </div>
      </div>
      <div className=" flex justify-end  ">
        <button
          type="submit"
          class="text-white text-lg font-sans m-4 md:m-7 lg:m-8  bg-[var(--background-color)] rounded opacity-75 p-3 shadow-lg hover:bg-[#aef1da] transition-all ease-in-out"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
