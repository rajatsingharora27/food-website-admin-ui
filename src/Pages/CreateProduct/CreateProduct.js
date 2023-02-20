import React from "react";

const CreateProduct = () => {
  return (
    <div>
      <div className=" flex justify-center  w-full shadow-md shadow-[var(--navBarHover-color)]   h-[3em]   font-bold">
        <span className="text-lg p-3 ">New Product</span>
      </div>
      <form className="mt-5 ml-2 flex flex-col md:flex-row flex-wrap md:justify-evenly">
        {/* Product-Name */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex flex-col my-3">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="productName"
          >
            Product Name
          </label>
          <input
            className=" shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="productName"
            type="text"
            placeholder="Product Name"
          />
        </div>

        {/* Product Categories Dropdown */}

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0  flex flex-col my-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="category"
          >
            Category
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="category"
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex flex-col my-3 ">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="price"
          >
            Price
          </label>
          <input
            className=" shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="price"
            type="text"
            placeholder="Price"
          />
        </div>

        {/* Quantity */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex flex-col my-3 ">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="quantity"
          >
            Storage Quantity
          </label>
          <input
            className=" shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="quantity"
            type="text"
            placeholder="Quantity"
          />
        </div>

        {/* Tagline */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex flex-col my-3 ">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="tagLine"
          >
            Tag Line
          </label>
          <textarea
            className=" shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="tagLine"
            type="text"
            placeholder="Tag Line"
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex flex-col my-3 ">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="tagLine"
          >
            Description
          </label>
          <textarea
            className=" shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="tagLine"
            type="text"
            placeholder="Tag Line"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
