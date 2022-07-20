import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface reportState {
  date: Date | undefined;
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
