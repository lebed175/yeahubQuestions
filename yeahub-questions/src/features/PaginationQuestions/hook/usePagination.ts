import { setCurrentPage } from "@/entites/Questions/model/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/shared/libs/hooks";

export const usePagination = () => {
  const currentPage = useAppSelector((state) => state.filters.currentPage);
  const dispatch = useAppDispatch();

  const nextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const prevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const chooseCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return { nextPage, prevPage, chooseCurrentPage };
};
