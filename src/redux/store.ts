// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import hohohoReducer from "./slices/hohohoSlice";

const store = configureStore({
  reducer: {
    hohoho: hohohoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
