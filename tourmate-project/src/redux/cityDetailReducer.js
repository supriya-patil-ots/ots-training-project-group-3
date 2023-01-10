import { createSlice} from "@reduxjs/toolkit";
import CityData from "../components/Data/CityData";

const initialState = {
    data: {}
};

const cityDetailSlice = createSlice({
    name: 'cityDetail',
    initialState,
    reducers: {
        cityDetailData: (state, action) => {
            let newData= CityData.filter((c)=>c.id===Number(action.payload))
            state.data = { ...newData[0] }

        },
    }
});

export const { cityDetailData } = cityDetailSlice.actions;

export default cityDetailSlice;