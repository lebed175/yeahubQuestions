import styles from "./styles.module.css";

import { useState } from "react";
import type { QueryState } from "@/entites/Questions/model/types";
import { useGetSkillsQuery } from "@/entites/Skills/api/skillsApi";
import { Button } from "@/shared/ui/Button/Button";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { useAppDispatch } from "@/shared/libs/hooks";
import { setFilters } from "@/entites/Questions/model/filtersSlice";

interface Props {
  queryState: QueryState;
}
export const SkillFilter = ({ queryState }: Props) => {
  const [limit, setLimit] = useState(10);
  const { data: skills, isLoading } = useGetSkillsQuery(limit);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.skills}>
      <p className={styles.text}>Навыки</p>
      {isLoading ? (
        <Skeleton count={5} type="item"></Skeleton>
      ) : (
        <div className={styles.buttonsWrapper}>
          <div className={styles.skillsButtons}>
            {skills?.data.map((skill) => (
              <Button
                key={skill.id}
                variant="secondary"
                classCustom={
                  queryState.questionSkills?.includes(skill.id) ? "active" : ""
                }
                size="medium"
                onClick={() => {
                  const current = queryState.questionSkills ?? [];

                  const next = current.includes(skill.id)
                    ? current.filter((id) => id !== skill.id)
                    : [...current, skill.id];

                  dispatch(setFilters({ questionSkills: next }));
                }}
              >
                {skill.title}
              </Button>
            ))}
          </div>
          {limit === 10 ? (
            <p className={styles.moreOption} onClick={() => setLimit(20)}>
              Посмотреть все
            </p>
          ) : (
            <p className={styles.moreOption} onClick={() => setLimit(10)}>
              Скрыть
            </p>
          )}
        </div>
      )}
    </div>
  );
};
