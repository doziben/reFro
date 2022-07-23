import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dateType } from "../types/navigation";

interface reportState {
  date: dateType | undefined;
  value: string;
}

const initialState: reportState = {
  date: undefined,
  value: "",
};

const ReportSlice = createSlice({
  name: "Report",
  initialState,
  reducers: {
    setReport: (state: reportState, action: PayloadAction<reportState>) => {
      return (state = {
        date: action.payload.date,
        value: action.payload.value,
      });
    },
  },
});

export { ReportSlice };
