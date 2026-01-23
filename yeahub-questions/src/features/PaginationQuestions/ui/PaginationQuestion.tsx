import { Button } from "@/shared/ui/Button/Button";
import styles from "./styles.module.css";
import PaginationArrowLeft from "../../../shared/assets/images/PaginationArrowLeft.svg";
import PaginationArrowRight from "../../../shared/assets/images/PaginationArrowRight.svg";
import { getPaginationArray } from "../utils/paginationArray";
import { useAppSelector } from "@/shared/libs/hooks";
import { usePagination } from "../hook/usePagination";

interface Props {
  total?: number;
  limit?: number;
}

export const PaginationQuestion = ({ total, limit }: Props) => {
  const currentPage = useAppSelector((state) => state.filters.currentPage);
  const { prevPage, nextPage, chooseCurrentPage } = usePagination();

  const totalButtons = total && limit ? Math.ceil(total / limit) : 0;
  const { paginationArray, start, end } = getPaginationArray(
    currentPage,
    totalButtons,
  );

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButtonArrow}
        disabled={currentPage === 1}
        onClick={() => prevPage()}
      >
        <img src={PaginationArrowLeft} alt="Prev" />
      </button>

      <div className={styles.buttons}>
        {start > 1 && (
          <>
            <Button
              classCustom=""
              variant="smallPriority"
              size="tiny"
              onClick={() => chooseCurrentPage(1)}
            >
              1
            </Button>
            <span>...</span>
          </>
        )}

        {paginationArray.map((button, index) => (
          <Button
            variant="smallPriority"
            size="tiny"
            classCustom={button === currentPage ? "active" : ""}
            key={index}
            onClick={() => chooseCurrentPage(button)}
          >
            {button}
          </Button>
        ))}

        {end < totalButtons && (
          <>
            <span>...</span>
            <Button
              classCustom=""
              variant="smallPriority"
              size="tiny"
              onClick={() => chooseCurrentPage(totalButtons)}
            >
              {totalButtons}
            </Button>
          </>
        )}
      </div>

      <button
        disabled={currentPage === totalButtons}
        onClick={() => nextPage()}
        className={styles.paginationButtonArrow}
      >
        <img src={PaginationArrowRight} alt="next" />
      </button>
    </div>
  );
};
