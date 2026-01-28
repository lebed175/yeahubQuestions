import { Pagination } from "@/shared/ui/Pagination/ui/Pagination";
import { useAppSelector } from "@/shared/libs/hooks";
import { usePagination } from "../hook/usePagination";

interface Props {
  total?: number;
  limit?: number;
}

export const PaginationQuestion = ({ total, limit }: Props) => {
  const currentPage = useAppSelector((state) => state.filters.currentPage);
  const { onChange } = usePagination();

  const totalPages = total && limit ? Math.ceil(total / limit) : 0;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onChange={onChange}
    ></Pagination>
  );
};
