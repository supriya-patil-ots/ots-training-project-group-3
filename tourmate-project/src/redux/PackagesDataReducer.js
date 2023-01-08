import { createSlice } from "@reduxjs/toolkit";
import PackageData from "../components/packageData";

const initialState = {
  data: { categoryItem: "" },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryData: (state, action) => {
      console.log("action", action.payload);
      let categoryData = PackageData.category[action.payload].data;
      console.log(categoryData);
      state.data = categoryData;
    },
  },
});

export const { categoryData } = categorySlice.actions;

export default categorySlice;
