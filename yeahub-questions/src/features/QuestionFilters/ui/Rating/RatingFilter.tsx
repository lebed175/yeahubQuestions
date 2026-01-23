import { setFilters } from "@/entites/Questions/model/filtersSlice";
import styles from "./styles.module.css";

import type { QueryState } from "@/entites/Questions/model/types";
import { useAppDispatch } from "@/shared/libs/hooks";
import { Button } from "@/shared/ui/Button/Button";

interface Props {
  queryState: QueryState;
}

export const RatingFilter = ({ queryState }: Props) => {
  const ratingVariants = [1, 2, 3, 4, 5];

  const dispatch = useAppDispatch();

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
            onClick={() => {
              const current = queryState.rate ?? [];

              const next = current.includes(variant)
                ? current.filter((ratingItem) => ratingItem !== variant)
                : [...current, variant];

              dispatch(setFilters({ rate: next }));
            }}
          >
            {variant}
          </Button>
        ))}
      </div>
    </div>
  );
};
