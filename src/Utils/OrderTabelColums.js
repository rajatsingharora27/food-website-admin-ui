import { Chip } from "@material-tailwind/react";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
export const tableColumns = [
  {
    Header: "Order ID",
    accessor: "_id", // accessor is the "key" in the data
  },
  {
    Header: "Customer Name",
    accessor: "customerName",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ row }) => (
      <Chip
        variant="gradient"
        className={` ${
          row?.values?.status === "delivered"
            ? "bg-green-400 px-4 py-2"
            : "bg-yellow-400 px-4 py-2"
        }`}
        value={row?.values?.status === "delivered" ? "Delivered" : "Pending"}
        // className="py-0.5 px-2 text-[11px] font-medium"
        // className={`px-4 py-2  text-base rounded-full ${
        //   row?.values?.status === "delivered"
        //     ? `text-green-600  bg-green-200`
        //     : `text-yellow-600  bg-yellow-200`
      />
      // {row?.values?.status}
    ),
  },
  {
    Header: "Toatl Bill",
    accessor: "totalBill",
    Cell: ({ row }) => (
      <span className="text-lg text-black flex flex-row ml-3">
        <BiRupee className=" mt-[9px] text-[11px] font-bold uppercase text-blue-gray-400" />{" "}
        <div className="text-[11px] font-bold uppercase text-blue-gray-400">
          {row?.values?.totalBill}
        </div>
      </span>
    ),
  },
  {
    Header: "Requested Slot",
    accessor: "delevirySolt",
    Cell: ({ row }) => <div className="ml-6"> {row?.values?.delevirySolt}</div>,
  },
  {
    Header: "View",
    accessor: "view",
    Cell: ({ row }) => (
      <Link
        to={`/orders/${row?.cells[1]?.row?.original?._id}`}
        state={row?.cells[1]?.row?.original}
        // state={{ some: "value" }}
        onClick={() => handleView(row)}
        // type="button"
        className="text-xs font-semibold text-blue-gray-600 text-cyan-400"
      >
        View
      </Link>
    ),
  },
];

export const tableColumsOrderDetails = [
  {
    Header: "Order ID",
    accessor: "_id", // accessor is the "key" in the data
  },
  {
    Header: "Customer Name",
    accessor: "customerName",
  },
];

export const handleView = (cells) => {
  // console.log(cells?.cells[1]?.row?.original);
};
