import styles from "./styles.module.css";

import type { QueryState } from "@/entites/Questions/model/types";
import { useToggleFilters } from "../../hook/useToggleFilter";
import { Button } from "@/shared/ui/Button/Button";

interface Props {
  queryState: QueryState;
}

export const RatingFilter = ({ queryState }: Props) => {
  const ratingVariants = [1, 2, 3, 4, 5];
  const toggleFilters = useToggleFilters({
    filterName: "rate",
  });

  return (
    <div className={styles.rating}>
      <p className={styles.text}>Рейтинг</p>
      <div className={styles.ratingButtons}>
        {ratingVariants.map((variant, index) => (
          <Button
            variant="secondary"
            size="small"
            key={index}
            classCustom={queryState.rate?.includes(variant) ? "active" : ""}
            onClick={() => toggleFilters(variant, queryState.rate ?? [])}
          >
            {variant}
          </Button>
        ))}
      </div>
    </div>
  );
};
