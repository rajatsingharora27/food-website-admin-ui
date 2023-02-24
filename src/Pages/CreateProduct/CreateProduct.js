import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/Cards/Card";
// import LargeCard from "../../Components/Cards/LargeCard";

const CreateProduct = () => {
  const productToAdd = useSelector((store) => store.newProduct.product);

  const showPayload = async () => {
    console.log(productToAdd);
    const res = await axios.post(
      "http://localhost:3003/api/v1/addProduct",
      productToAdd
    );
    console.log(res);
    alert("Product added sussefully");
  };

  const [dropDownData, setDropDownData] = useState([]);
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

  const createProduct = async () => {};

  useEffect(() => {
    getDropDownData();
  }, []);

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
          <Card
            title={"Product Details"}
            showButton={true}
            showDropDown={true}
            showFieldDescription={true}
            isThumbnailImage={false}
            categoryDropDownData={dropDownData}
          />
          <Card
            title={"Thumbnail Image"}
            showButton={false}
            showDropDown={false}
            showFieldDescription={false}
            isThumbnailImage={true}
          />
        </div>
        {/* ------------------------------Righthand side------------------------------------- */}
        <div className="flex flex-col ">
          <Card
            title={"Basic Information"}
            showButton={false}
            showDropDown={false}
            showFieldDescription={false}
            isThumbnailImage={false}
            isTextArea={true}
            inputField={{
              inputArray: [
                {
                  id: "productName",
                  label: "Product Name",
                  key: "name",
                  informationText:
                    "A Product name is required and recomended to be unique",
                  placeholder: "Product Name",
                  // onChangeInput: { handleInput },
                },
                {
                  label: "Price",
                  key: "price",
                  informationText: "Price is cumplusory field",
                  placeholder: "Enter Price",
                  // onChangeInput: { handleInput },
                },
              ],
            }}
          />
        </div>
      </div>
      <div className=" flex justify-end  ">
        <button
          type="submit"
          className="text-white text-lg font-sans m-4 md:m-7 lg:m-8  bg-[var(--background-color)] rounded opacity-75 p-3 shadow-lg hover:bg-[#aef1da] transition-all ease-in-out"
          onClick={showPayload}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
