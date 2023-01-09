import { configureStore } from "@reduxjs/toolkit";
import keranjangReducer from "./keranjang";
import todoReducer from "./todo";
import thunkMiddleware from "redux-thunk";

export const store = configureStore({
  reducer: {
    keranjang: keranjangReducer,
    todo: todoReducer,
  },
  middleware: [thunkMiddleware],
});
