import { BiRupee } from "react-icons/bi";
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
      <span
        className={`px-4 py-2  text-base rounded-full ${
          row?.values?.status === "delivered"
            ? `text-green-600  bg-green-200`
            : `text-yellow-600  bg-yellow-200`
        }`}
      >
        {row?.values?.status}
      </span>
    ),
  },
  {
    Header: "Toatl Bill",
    accessor: "totalBill",
    Cell: ({ row }) => (
      <span className="text-lg text-black flex flex-row ml-3">
        <BiRupee className="text-xl mt-1" />{" "}
        <div className="">{row?.values?.totalBill}</div>
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
      <button
        onClick={() => handleView(row)}
        type="button"
        className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
      >
        View
      </button>
    ),
  },
];

export const handleView = (cells) => {
  console.log(cells?.cells[1]?.row?.original);
};
