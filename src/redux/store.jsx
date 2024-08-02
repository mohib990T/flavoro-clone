import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/CartSlice";
import CatagoryReducer from "./slices/CatagorySlice";
import SearchReducer from "./slices/SearchSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    catagory: CatagoryReducer,
    search: SearchReducer,
  },
});

export default store;
