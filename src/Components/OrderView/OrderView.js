import React from "react";
import { useLocation } from "react-router-dom";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";

const OrderView = () => {
  let { state } = useLocation();

  console.log(state);

  return (
    // <section className="p-6  dark:bg-gray-800 dark:text-gray-50">
    <div
      noValidate=""
      action=""
      className="container flex flex-col mx-auto my-auto p-10 md:p-3 space-y-12 ng-untouched ng-pristine ng-valid"
    >
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg bg-gray-100">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <p className="font-sans text-3xl ">
            {state.customerName}'s Basic Information
          </p>
          <p className="text-xs flex py-3">
            <span className="font-bold">Order ID : &nbsp; </span>
            <span>{state._id}</span>
          </p>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-gray-700 text-base">
              First name
            </label>
            <input
              type="text"
              id="rounded-name"
              disabled
              className="font-sans text-gray-500 mb-6 bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={state.customerName}
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-gray-700 text-base">
              Last name
            </label>
            <input
              id="lastname"
              type="text"
              disabled
              className="font-sans text-gray-500 mb-6 bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="disabled-email" className="text-gray-700 text-base">
              Email
            </label>
            <input
              type="text"
              id="disabled-email"
              disabled
              className="font-sans text-gray-500 mb-6 bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="email"
              value={state.customerEmail}
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label
              htmlFor="disabled-phone-number"
              className="text-gray-700 text-base"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="disabled-phone-number"
              disabled
              className="font-sans text-gray-500 mb-6 bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="disabled-phone-number"
              value={state.customerPhoneNumber}
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-gray-700 text-base">
              Address
            </label>
            <input
              id="address"
              type="text"
              disabled
              className="font-sans text-gray-500 mb-6 bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // value={state.}
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="city" className="text-gray-700 text-base">
              City
            </label>
            <input
              id="city"
              type="text"
              disabled
              className="font-sans text-gray-500 mb-6 bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="state" className="text-gray-700 text-base">
              State / Province
            </label>
            <input
              id="state"
              type="text"
              disabled
              className="font-sans text-gray-500 mb-6 bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="zip" className="text-gray-700 text-base">
              ZIP / Postal
            </label>
            <input
              id="zip"
              type="text"
              disabled
              className="font-sans text-gray-500 mb-6 bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </fieldset>
      <div className="w-full flex flex-col md:flex-row rounded-md shadow-lg bg-gray-100">
        <div className=" p-5 flex flex-col md:mr-16 lg:mr-52 xl:mr-[400px]">
          <h1 className="font-sans text-2xl">Order Details</h1>
          <div>Bill break up</div>
        </div>
        {/* <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
        <div className="m-5 flex flex-col justify-between">
          <div className=" my-5 flex-grow">
            <h2 className=" my-3 text-lg font-bold font-sans">
              Item's Ordered
            </h2>
            <table className="table p-4 bg-white rounded-lg shadow">
              <thead>
                <tr>
                  <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                    #
                  </th>
                  <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                    Product Name
                  </th>
                  <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                    Slot
                  </th>
                  <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                    Message
                  </th>
                  <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                    Pieces
                  </th>
                  <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700">
                  <td className="border p-4 dark:border-dark-5">1</td>
                  <td className="border p-4 dark:border-dark-5">Jean Marc</td>
                  <td className="border p-4 dark:border-dark-5">Louis</td>
                  <td className="border p-4 dark:border-dark-5">Jl987</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="border p-4 dark:border-dark-5">2</td>
                  <td className="border p-4 dark:border-dark-5">Eric</td>
                  <td className="border p-4 dark:border-dark-5">Prouve</td>
                  <td className="border p-4 dark:border-dark-5">prouveE</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="border p-4 dark:border-dark-5">3</td>
                  <td className="border p-4 dark:border-dark-5">Julien</td>
                  <td className="border p-4 dark:border-dark-5">Clai</td>
                  <td className="border p-4 dark:border-dark-5">CJUL87</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="border p-4 dark:border-dark-5">4</td>
                  <td className="border p-4 dark:border-dark-5">Igor</td>
                  <td className="border p-4 dark:border-dark-5">Louth</td>
                  <td className="border p-4 dark:border-dark-5">IGL89_9</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex my-4">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="deliverd" mb="0">
                Delivered?
              </FormLabel>
              <Switch id="deliverd" colorScheme="green" />
            </FormControl>
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default OrderView;
