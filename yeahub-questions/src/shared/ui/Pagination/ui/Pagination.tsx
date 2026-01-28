import styles from "./styles.module.css";
import PaginationArrowLeft from "../../../assets/images/paginationArrowLeft.svg";
import PaginationArrowRight from "../../../assets/images/paginationArrowRight.svg";
import { getPaginationArray } from "../utils/paginationArray";

import { Button } from "../../Button/Button";

interface Props {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onChange }: Props) => {
  const { paginationArray, start, end } = getPaginationArray(
    currentPage,
    totalPages,
  );

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButtonArrow}
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
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
              onClick={() => onChange(1)}
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
            onClick={() => onChange(button)}
          >
            {button}
          </Button>
        ))}

        {end < totalPages && (
          <>
            <span>...</span>
            <Button
              classCustom=""
              variant="smallPriority"
              size="tiny"
              onClick={() => onChange(totalPages)}
            >
              {totalPages}
            </Button>
          </>
        )}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
        className={styles.paginationButtonArrow}
      >
        <img src={PaginationArrowRight} alt="next" />
      </button>
    </div>
  );
};
