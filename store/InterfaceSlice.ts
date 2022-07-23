import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectOptionProps } from "../components/modals/SelectOption";

interface InterfaceSliceState {
  modal: Modal;
}

interface Modal {
  state: boolean;
  props: SelectOptionProps | undefined;
}

const initialState: InterfaceSliceState = {
  modal: { state: false, props: undefined },
};

const InterfaceSlice = createSlice({
  name: "Interface",
  initialState,
  reducers: {
    toggleModal: (state: InterfaceSliceState, action: PayloadAction<Modal>) => {
      return (state = {
        modal: {
          state: action.payload.state,
          props: action.payload.props,
        },
      });
    },
  },
});

export { InterfaceSlice };
