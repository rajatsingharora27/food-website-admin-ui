import React from "react";
import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const CreateProduct = () => {
  return (
    <div className="m-5 md:m-7">
      <div>
        <h1 className="font-sans font-bold py-4 md:py-9">Product Form</h1>
      </div>
      <div className=" flex flex-col  md:flex-row ">
        <Card
          component={"div"}
          variant={"outlined"}
          className="max-w-screen-sm h-60  my-4 shadow-[0px_4px_20px_10px_#00000024] md:w-1/3 "
        ></Card>

        <Card
          component={"div"}
          variant={"outlined"}
          className="max-w-screen-sm h-80  my-4 shadow-[0px_4px_20px_10px_#00000024] md:w-1/3 "
        >
          <div className="flex flex-col m-5">
            <h1 className="m-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Basic Information
            </h1>
            <div className="flex flex-col">
              {/* <label
                className="font-sans font-semibold text-gray-400 text-sm m-3 "
                id="productName"
              >
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter product name"
                className="font-sans font-normal   text-gray-700 text-xs m-3 border-0 outline-1"
              /> */}

              <label
                for="productName"
                class=" font-sans font-semibold text-gray-400 text-sm m-3 "
              >
                Product Name
              </label>
              <input
                type="text"
                class="peer ml-3 block h-11 w-4/5 rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                id="productName"
                placeholder="Product Name"
              />
            </div>
          </div>
        </Card>

        {/* Product Card */}
        <Card
          component={"div"}
          variant={"outlined"}
          className="max-w-screen-sm h-80  my-4 shadow-[0px_4px_20px_10px_#00000024] md:w-1/3 "
        >
          <div className="flex flex-col m-5">
            <h1 className="m-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Product Details
            </h1>
            <div className="flex flex-col">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="category">Category</InputLabel>
                <Select labelId="category" id="category" label="Category">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <p className="font-sans font-semibold text-gray-400 text-xs ml-3 ">
                Add Category to Product
              </p>
            </div>
            {/* <div className=" flex flex-row  bg-green-200 rounded-lg opacity-50 p-4 shadow-lg w-1/2 m-2">
              <div className="px-4">+</div>
              <div className=" ">Add new category</div>
            </div> */}
            <button class="bg-green-200 rounded-lg opacity-50 p-4 shadow-lg my-10">
              Add New Category
            </button>
          </div>
        </Card>

        <ul className="mx-2 pt-3">
          <li className="font-sans font-bold">Basic Info</li>
        </ul>
        <Card
          component={"div"}
          variant={"outlined"}
          className="max-w-screen-sm h-60  my-4 shadow-[0px_4px_20px_10px_#00000024] md:w-1/3 "
        ></Card>
        <Card component={"div"}></Card>
        <Card component={"div"}></Card>
      </div>
    </div>
  );
};

export default CreateProduct;

{
  /* <div className="flex flex-col items-center  md:flex-row md:justify-center bg-slate-100 max-h-screen ">
{/* Left section */
}
{
  /* <Card
  variant="outlined"
  className="w-4/5 h-44 flex  justify-center md:h-72 md:w-1/4 md:m-14 shadow-md border-r-2 my-8"
>
  <div className="flex justify-start">
    <h2 className="text-start text-lg font-bold ">Thumbnail Image</h2>
  </div>
</Card>
<div className="flex justify-start">
  <span className="">Basic Details</span>
</div>
<Card
  variant="outlined"
  className="w-4/5 h-44 flex justify-center md:h-72 md:w-1/4 md:m-14 shadow-md border-r-2 my-8"
></Card> */
}
{
  /* Right Section */
}
{
  /* <div className="flex flex-col">
  <div>
    <h1>General</h1>
  </div> */
}

{
  /* <Card
  variant="outlined"
  className="w-4/5 h-44   md:h-72 md:w-1/4 md:m-14 shadow-md border-r-2"
></Card> */
}
// </div>
// </div> */}
