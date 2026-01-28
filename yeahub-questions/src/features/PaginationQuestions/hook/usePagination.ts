import { setCurrentPage } from "@/entites/Questions/model/filtersSlice";
import { useAppDispatch } from "@/shared/libs/hooks";

export const usePagination = () => {
  const dispatch = useAppDispatch();

  const onChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return { onChange };
};
