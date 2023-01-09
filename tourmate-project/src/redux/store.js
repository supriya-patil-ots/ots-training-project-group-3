import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartReducer";
import userSlice from "./loginreducer";
import searchSlice from "./searchReducer";
import mockDataSlice from "./mockDataReducer";
import cityDetailSlice from "./cityDetailReducer";
import categorySlice from "./PackagesDataReducer";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    search: searchSlice.reducer,
    cityData: mockDataSlice.reducer,
    cityDetail: cityDetailSlice.reducer,
    categoryData: categorySlice.reducer,
  },
});
