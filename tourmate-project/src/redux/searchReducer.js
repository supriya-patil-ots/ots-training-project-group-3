import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: ""
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchData: (state,action) => {
            state.data=action.payload;
         },
    }
});

export const {searchData} = searchSlice.actions;

export default searchSlice;