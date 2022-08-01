import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  auth: boolean;
  user: User | null;
}

interface User {
  name: string;
  uid: string;
  newUser: boolean;
  company: string;
}

const initialState: AppState = {
  auth: false,
  user: null,
};
const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    logIn: (state: AppState, action: PayloadAction<User>) => {
      return (state = {
        auth: true,
        user: {
          name: "Emeka",
          uid: "Fro12112Emeka",
          newUser: false,
          company: "Frolancer",
        },
      });
    },

    logOut: (state: AppState) => {
      return (state = {
        auth: false,
        user: null,
      });
    },
  },
});

export { AppSlice };
