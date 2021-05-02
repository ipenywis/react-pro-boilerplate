import { createSelector } from "reselect";
import { IRootState } from "../../types";

const selectHomePage = (state: IRootState) => state.homePage;

export const makeSelectAnimePage = createSelector(
  selectHomePage,
  (homePage) => homePage.animePage
);
