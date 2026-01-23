import styles from "./styles.module.css";

import { Search } from "@/features/QuestionFilters/ui/Search/Search";
import { RatingFilter } from "@/features/QuestionFilters/ui/Rating/RatingFilter";
import { ComplexityFilter } from "@/features/QuestionFilters/ui/Complexity/ComplexityFilter";
import { SkillFilter } from "@/features/QuestionFilters/ui/Skills/SkillFilter";
import { SpecializationFilter } from "@/features/QuestionFilters/ui/Specializations/SpecializationFilter";
import { useAppSelector } from "@/shared/libs/hooks";

export const Sidebar = () => {
  const queryState = useAppSelector((state) => state.filters);

  return (
    <aside className={styles.sidebar}>
      <Search></Search>
      <SpecializationFilter queryState={queryState}></SpecializationFilter>
      <SkillFilter queryState={queryState}></SkillFilter>
      <ComplexityFilter queryState={queryState}></ComplexityFilter>
      <RatingFilter queryState={queryState}></RatingFilter>
    </aside>
  );
};
