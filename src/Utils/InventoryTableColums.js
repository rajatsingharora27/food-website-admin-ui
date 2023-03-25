export const inventoryTableColumns = [
  {
    Header: "Product ID",
    accessor: "_id", // accessor is the "key" in the data
  },
  {
    Header: "Product Name",
    accessor: "productName",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Date Added",
    accessor: "dateAdded",
  },
  {
    Header: "Stock Status",
    accessor: "stockStatus",
  },
];

// export const tableColumsOrderDetails = [
//   {
//     Header: "Order ID",
//     accessor: "_id", // accessor is the "key" in the data
//   },
//   {
//     Header: "Customer Name",
//     accessor: "customerName",
//   },
// ];

// export const handleView = (cells) => {
//   // console.log(cells?.cells[1]?.row?.original);
// };
