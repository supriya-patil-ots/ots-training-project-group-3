import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[]
};

const mockDataSlice = createSlice({
    name: 'cityData',
    initialState,
    reducers: {
      mainData:(state,action)=>{
      state.data=[...action.payload]
      },
    }
});

export const {mainData} = mockDataSlice.actions;

export default mockDataSlice;