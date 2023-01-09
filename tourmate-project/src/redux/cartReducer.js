import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: { cartItem: {} },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (Object.keys(state.data.cartItem).length === 0) {
        state.data = {
          cartItem: { [action.payload.id]: { ...action.payload } },
        };
      } else if (state.data.cartItem.hasOwnProperty(action.payload.id)) {
        let count1 = state.data.cartItem[action.payload.id].count + 1;
        state.data = {
          cartItem: {
            ...state.data.cartItem,
            [action.payload.id]: {
              ...state.data.cartItem[action.payload.id],
              count: count1,
            },
          },
        };
      } else {
        state.data = {
          cartItem: {
            ...state.data.cartItem,
            [action.payload.id]: { ...action.payload },
          },
        };
      }
    },
    removeFromCart: (state, action) => {
      if (state.data.cartItem[action.payload].id === action.payload) {
        let item = delete state.data.cartItem[action.payload];
        state.data = { cartItem: { ...state.data.cartItem, ...item } };
      }
    },
  },
});

export const { addCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
