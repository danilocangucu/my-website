// src/redux/slices/hohohoApplicationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicationDetailsDTO } from "../../types/HohohoTypes";

export interface HohohoSliceState {
  token: string | null;
  email: string | null;
  applicationData: ApplicationDetailsDTO | null;
}

const initialState: HohohoSliceState = {
  token: null,
  email: null,
  applicationData: null,
};

const hohohoSlice = createSlice({
  name: "hohohoApplication",
  initialState,
  reducers: {
    setHohohoToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setHohohoEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setHohohoApplicationData: (state, action: PayloadAction<any>) => {
      state.applicationData = action.payload;
    },
  },
});

export const { setHohohoToken, setHohohoEmail, setHohohoApplicationData } =
  hohohoSlice.actions;

export default hohohoSlice.reducer;
