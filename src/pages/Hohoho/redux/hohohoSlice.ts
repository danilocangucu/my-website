import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicationDetailsDTO } from "../HohohoTypes";

export interface HohohoSliceState {
  token: string | null;
  email: string | null;
  applicationData: ApplicationDetailsDTO | null;
  language: string;
}

const initialState: HohohoSliceState = {
  token: null,
  email: null,
  applicationData: null,
  language: "en",
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
    setHohohoLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const {
  setHohohoToken,
  setHohohoEmail,
  setHohohoApplicationData,
  setHohohoLanguage,
} = hohohoSlice.actions;

export default hohohoSlice.reducer;
