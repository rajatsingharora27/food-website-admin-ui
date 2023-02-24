import { createSlice } from "@reduxjs/toolkit";

const createProductSlice = createSlice({
  name: "newProduct",

  initialState: {
    product: {
      name: "",
      price: "",
      tagLine: "",
      storageDuration: "",
      quantity: "",
      typeOfproduct: "",
      description: "",
      thumbNailImage: "",
    },
  },
  reducers: {
    updateProductDetails: (state, action) => {
      console.log(action.payload);

      state.product = { ...state.product, ...action.payload };
    },
  },
});

export const { updateProductDetails } = createProductSlice.actions;

export default createProductSlice.reducer;
