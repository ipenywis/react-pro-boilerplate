import { createSlice } from "@reduxjs/toolkit";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { IHomePageState } from "./types";

const initialState: IHomePageState = {
  animePage: null,
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setAnimePage(state, action) {
      state.animePage = action.payload;
    },
  },
});

export const { setAnimePage } = HomePageSlice.actions;
export default HomePageSlice.reducer;
