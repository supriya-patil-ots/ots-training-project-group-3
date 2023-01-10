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
      if (JSON.parse(localStorage.getItem("storageData")).length > 0) {
        let arr = JSON.parse(localStorage.getItem("storageData"));
        let newData = arr.filter((user) => {
          if (user.email === action.payload.email) {
            return true;
          }
        });
        let newUser = newData[0];
        if(newUser.password===action.payload.password || newUser.email_verified){
          state.data = {
            userData: { [action.payload.email]: { ...newUser } },
          };
        }

      }
    },
    logOutData: (state, action) => {
      if (state.data.userData[action.payload].email === action.payload) {
        let item = delete state.data.userData[action.payload];
        state.data = { userData: { ...state.data.userData, ...item } };
      }
    },
  },
});

export const { signUpData, loginData, logOutData } = userSlice.actions;

export default userSlice;
