import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../store/slices/todo/todoSlice";

export const store = configureStore({
  reducer: { todo: todoReducer },
});
