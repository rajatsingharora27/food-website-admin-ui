import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import TableShimmer from "../../Components/Shimmer/TableShimmer";

const Inventory = () => {
  // const columns = useMemo(() => tableColumns, []);
  // const data = useMemo(() => [...orderData], [orderData]);
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  // useTable({ data, columns });
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
              //   onChange={(e) => {
              //     setSearch(e.target.value);
              //   }}
              //   value={searchQuery}
            />
          </div>
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
            Inventory
          </Typography>
        </CardHeader>

        <CardBody className="overflow-x-scroll mx-2 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead></thead>
            <tbody></tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Inventory;
