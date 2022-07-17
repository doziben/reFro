import { configureStore } from "@reduxjs/toolkit";
import { AppSlice } from "./AppSlice";

const Store = configureStore({
  reducer: { app: AppSlice.reducer },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export { Store };
