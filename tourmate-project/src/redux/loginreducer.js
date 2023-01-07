import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: { userData: {} },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpData: (state, action) => {
      if (Object.keys(state.data.userData).length === 0) {
        state.data = {
          userData: { [action.payload.email]: { ...action.payload } },
        };
      } else if (state.data.userData.hasOwnProperty(action.payload.email)) {
        state.data = {
          userData: {
            ...state.data.userData,
            [action.payload.email]: {
              ...state.data.userData[action.payload.email],
            },
          },
        };
      } else {
        state.data = {
          userData: {
            ...state.data.userData,
            [action.payload.email]: { ...action.payload },
          },
        };
      }
    },
    loginData: (state, action) => {
      if (state.data.userData.hasOwnProperty(action.payload.email)) {
        if (
          state.data.userData[action.payload.email].email ===
            action.payload.email &&
          state.data.userData[action.payload.email].password ===
            action.payload.password
        ) {
            state.data ={...state.data.userData[action.payload.email]};
        }
       
      }
    },
    logOutData:(state,action)=>{
        console.log(action.payload);
        if (state.data.userData[action.payload].email === action.payload) {
            let item = delete state.data.userData[action.payload];
            state.data = { userData: { ...state.data.userData, ...item } };
          }
    }
  },
});

export const { signUpData, loginData,logOutData } = userSlice.actions;

export default userSlice;
