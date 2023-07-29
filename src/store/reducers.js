import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here
});

export default rootReducer;
