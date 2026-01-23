import { setFilters } from "@/entites/Questions/model/filtersSlice";
import styles from "./styles.module.css";

import type { QueryState } from "@/entites/Questions/model/types";
import { useAppDispatch } from "@/shared/libs/hooks";
import { Button } from "@/shared/ui/Button/Button";

interface Props {
  queryState: QueryState;
}

const complexityMap: Record<string, number[]> = {
  "1-3": [1, 2, 3],
  "4-6": [4, 5, 6],
  "7-8": [7, 8],
  "9-10": [9, 10],
};

export const ComplexityFilter = ({ queryState }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.complexity}>
      <p className={styles.text}>Сложность</p>
      <div className={styles.complexityButtons}>
        {Object.keys(complexityMap).map((variant, index) => (
          <Button
            key={index}
            size="medium"
            classCustom={
              complexityMap[variant].every((value) =>
                queryState.complexity?.includes(value),
              )
                ? "active"
                : ""
            }
            variant="secondary"
            onClick={() => {
              const current = queryState.complexity ?? [];
              const group = complexityMap[variant];
              const hasAll = group.every((value) => current.includes(value));

              const next = hasAll
                ? current.filter(
                    (complexityItem) => !group.includes(complexityItem),
                  )
                : [...current, ...group];

              dispatch(setFilters({ complexity: next }));
            }}
          >
            {variant}
          </Button>
        ))}
      </div>
    </div>
  );
};
