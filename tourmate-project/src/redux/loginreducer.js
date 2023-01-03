import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: { userLogin:[]},
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
    }
});

export const {} = userSlice.actions;

export default userSlice;