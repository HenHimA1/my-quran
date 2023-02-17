import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { surahData } from "../data";

export const surahSlice = createSlice({
  name: "counter",
  initialState: {
    value: surahData,
  },
  reducers: {},
});

export default configureStore({
  reducer: { surahList: surahSlice.reducer },
});
