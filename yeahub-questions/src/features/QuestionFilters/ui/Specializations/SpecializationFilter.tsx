import styles from "./styles.module.css";
import { useState } from "react";

import { useGetSpecializationsQuery } from "@/entites/Specializations/api/specializationsApi";

import { Button } from "@/shared/ui/Button/Button";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { useAppDispatch } from "@/shared/libs/hooks";
import { setFilters } from "@/entites/Questions/model/filtersSlice";
import type { QueryState } from "@/entites/Questions/model/types";

interface Props {
  queryState: QueryState;
}

export const SpecializationFilter = ({ queryState }: Props) => {
  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(5);
  const { data: specializations, isLoading } =
    useGetSpecializationsQuery(limit);

  return (
    <div className={styles.specializations}>
      <p className={styles.text}>Специализация</p>
      {isLoading ? (
        <Skeleton count={5} type="item"></Skeleton>
      ) : (
        <div className={styles.specializationButtons}>
          {specializations?.data.map((specialization) => (
            <Button
              key={specialization.id}
              size="medium"
              variant="secondary"
              classCustom={
                queryState.questionSpecializations?.includes(specialization.id)
                  ? "active"
                  : ""
              }
              onClick={() => {
                const current = queryState.questionSpecializations ?? [];

                const next = current.includes(specialization.id)
                  ? current.filter((id) => id !== specialization.id)
                  : [...current, specialization.id];

                dispatch(setFilters({ questionSpecializations: next }));
              }}
            >
              {specialization.title}
            </Button>
          ))}
          {limit === 5 ? (
            <p className={styles.moreOption} onClick={() => setLimit(15)}>
              Посмотреть все
            </p>
          ) : (
            <p className={styles.moreOption} onClick={() => setLimit(5)}>
              Скрыть
            </p>
          )}
        </div>
      )}
    </div>
  );
};
