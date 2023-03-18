import React, { useEffect, useMemo } from "react";
import { useTable } from "react-table";
import axios from "axios";
import TableShimmer from "../../Components/Shimmer/TableShimmer";
import { useState } from "react";
import { url } from "../../Utils/urlConfig";
import { tableColumns } from "../../Utils/OrderTabelColums";
import { useSearchParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Order = () => {
  const [orderData, setOrderData] = useState([]);
  const [dataFetched, setDataFetched] = useState(true);
  const [searchParams] = useSearchParams();
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => [...orderData], [orderData]);
  const [searchQuery, setSearch] = useState(searchParams.get("query") || "");
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ data, columns });

  const fetchQueryData = async () => {
    const { data } = await axios.get(
      `http://localhost:3003/api/v1/filter-orders?customerName=${searchQuery}`
    );
    if (searchQuery.length !== 0) {
      setOrderData(data?.data);
    }
  };
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url.orderList);
      setOrderData(data?.data[0]?.orders);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timer;
    if (searchQuery === undefined || searchQuery.length === 0) {
      fetchData();
    } else {
      timer = setTimeout(() => fetchQueryData(), 200); //Debouncing
    }
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    console.log(orderData, dataFetched);
    if (orderData.length === 0) {
      setDataFetched(false);
    } else {
      setDataFetched(true);
    }
  }, [orderData]);

  return (
    <div className={`mt-12 mb-8 flex flex-col gap-10`}>
      <div className="flex flex-col  md:my-auto ">
        {/* Search input */}
        <form className=" flex flex-row justify-end">
          <div className=" relative mr-2">
            <input
              type="text"
              id='"form-subscribe-Filter'
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Search here..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={searchQuery}
            />
          </div>
          {/* <button
            className="cursor-pointer px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            // type="submit"
          >
            Search
          </button> */}
        </form>
        {/* Search input ends */}

        {/* Muti Select */}

        {/* Multi Select ends */}
      </div>
      <Card>
        <CardHeader
          variant="gradient"
          color=""
          className="mb-8 p-6 bg-cyan-300"
        >
          <Typography variant="h6" color="white">
            Orders
          </Typography>
        </CardHeader>
        {orderData.length === 0 && dataFetched ? (
          <TableShimmer />
        ) : dataFetched === false ? (
          <Typography className="p-4 font-bold ">
            No Records found 😔{" "}
          </Typography>
        ) : (
          <CardBody className="overflow-x-scroll mx-2 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead {...getTableProps}>
                {headerGroups.map((headerGroups) => {
                  return (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                      {headerGroups.headers.map((columns) => {
                        return (
                          <th
                            {...columns.getHeaderProps()}
                            scope="col"
                            className="border-b border-blue-gray-50 py-3  text-left"
                          >
                            <Typography
                              variant="small"
                              className="text-[11px] font-bold uppercase text-blue-gray-400"
                            >
                              {columns.render("Header")}
                            </Typography>
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            className=" py-5 text-sm bg-white border-b border-gray-200"
                            {...cell.getCellProps()}
                          >
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {cell.render("Cell")}
                            </Typography>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </CardBody>
        )}
      </Card>
      {/* -------------------------------------------------------------------------------------- */}
      {/* <div className="flex flex-col  m-5">
        <div className="flex flex-col md:flex-row justify-between ">
          <h1 className="font-sans font-bold text-2xl py-4 md:p-9  uppercase ">
            Orders
          </h1>
          <div className="flex flex-col  md:my-auto ">
           
            <form className=" flex flex-row">
              <div className=" relative mr-2">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="name"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  value={searchQuery}
                />
              </div>
              <button
                className="cursor-pointer px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                // type="submit"
              >
                Search
              </button>
            </form>
           
          </div>
        </div>
        
        {orderData.length === 0 && dataFetched ? (
          <TableShimmer />
        ) : dataFetched === false ? (
          <h1>No Records found</h1>
        ) : (
          <div className="container max-w-full px-4 mx-auto sm:px-8">
            <div className="py-8">
              <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                  <table
                    className="min-w-full leading-normal"
                    {...getTableProps}
                  >
                    <thead>
                      {headerGroups.map((headerGroups) => {
                        return (
                          <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map((columns) => {
                              return (
                                <th
                                  {...columns.getHeaderProps()}
                                  scope="col"
                                  className="px-6 py-4   text-lg font-sans text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                                >
                                  {columns.render("Header")}
                                </th>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                                  {...cell.getCellProps()}
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                      >
                        <svg
                          width="9"
                          fill="currentColor"
                          height="8"
                          className=""
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                      >
                        2
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                      >
                        3
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                      >
                        4
                      </button>
                      <button
                        type="button"
                        className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                      >
                        <svg
                          width="9"
                          fill="currentColor"
                          height="8"
                          className=""
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Order;
