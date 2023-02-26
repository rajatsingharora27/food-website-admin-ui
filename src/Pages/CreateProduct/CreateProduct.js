import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Cards/Card";
import { addMessageToShow } from "../../Redux/Slices/messageBar";
import { url } from "../../Utils/urlConfig";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const productToAdd = useSelector((store) => store.newProduct.product);

  const createErrorList = (productToAdd) => {
    let errorList = [];
    if (productToAdd.name.trim().length === 0) {
      errorList.push({
        key: "name",
        type: "error",
        reason: "Name is required",
      });
    }
    if (productToAdd.price.trim().length === 0) {
      errorList.push({
        key: "price",
        type: "error",
        reason: "Price is required",
      });
    }
    if (productToAdd.description.trim().length === 0) {
      errorList.push({
        key: "description",
        type: "error",
        reason: "Description is required",
      });
    }
    if (productToAdd.quantity.trim().length === 0) {
      errorList.push({
        key: "quantity",
        type: "error",
        reason: "Quantity is required",
      });
    }
    if (productToAdd.typeOfproduct.trim().length === 0) {
      errorList.push({
        key: "typeOfproduct",
        type: "error",
        reason: "Category is required",
      });
    }
    return errorList;
  };

  const addProductToDatabase = async () => {
    let errorList = createErrorList(productToAdd);
    if (errorList.length > 0) {
      dispatch(addMessageToShow(errorList));
    } else {
      try {
        const response = await axios.post(url.createProduct, productToAdd);
        if (response.data.statusCode === 201) {
          dispatch(
            addMessageToShow([
              {
                key: "productCreated",
                type: "success",
                reason: response.data.message,
              },
            ])
          );
        }
      } catch (error) {
        console.log(error.response.data.error.message);

        if (error.response.data.error.statusCode === 400) {
          dispatch(
            addMessageToShow([
              {
                key: "DuplicateProduct",
                type: "error",
                reason: error.response.data.error.message,
              },
            ])
          );
        }
      }
    }
  };

  const [dropDownData, setDropDownData] = useState([]);
  const getDropDownData = async () => {
    const CategoryData = await axios.get(url.getALLCategory);
    setDropDownData(CategoryData?.data?.data);
  };

  useEffect(() => {
    getDropDownData();
  }, []);

  return (
    <div className={`w-full h-full bg-[#f5f8fa] `}>
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
                },
                {
                  label: "Price",
                  key: "price",
                  informationText: "Price is cumplusory field",
                  placeholder: "Enter Price",
                },
                {
                  label: "Quantity",
                  key: "quantity",
                  informationText: "Quantity is cumplusory field",
                  placeholder: "Enter Quantity",
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
          onClick={addProductToDatabase}
        >
          Save Changes
          {/* {buttonDisabled ? "Save Changes" : "Loading..."} */}
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
