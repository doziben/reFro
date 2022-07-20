import { configureStore } from "@reduxjs/toolkit";
import { AppSlice } from "./AppSlice";
import { ReportSlice } from "./ReportSlice";

const Store = configureStore({
  reducer: { app: AppSlice.reducer, report: ReportSlice.reducer },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export { Store };
