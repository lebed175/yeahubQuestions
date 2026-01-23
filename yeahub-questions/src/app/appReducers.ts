import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/config/api";
import { filterSlice } from "@/entites/Questions/model/filtersSlice";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  filters: filterSlice.reducer,
});
