import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartReducer';
import userSlice from './loginreducer';


 export const store = configureStore({
    reducer:{
      cart:cartSlice.reducer,
      user:userSlice.reducer
    }
 });