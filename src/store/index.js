import { configureStore } from "@reduxjs/toolkit";

import modalReducer from './modalSlice';
import userReducer from './userSlice';
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer : {modal : modalReducer, user : userReducer, cart: cartReducer}
})

export default store;