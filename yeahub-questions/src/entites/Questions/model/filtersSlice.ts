import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QueryState } from "./types";

const initialState: QueryState = {
  currentPage: 1,
  limit: 15,
  complexity: [],
  rate: [],
  questionSkills: [],
  questionSpecializations: [],
  title: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, actions: PayloadAction<Partial<QueryState>>) => {
      return { ...state, ...actions.payload };
    },
    setCurrentPage: (state, actions: PayloadAction<number>) => {
      state.currentPage = actions.payload;
    },
  },
});

export const { setFilters, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
