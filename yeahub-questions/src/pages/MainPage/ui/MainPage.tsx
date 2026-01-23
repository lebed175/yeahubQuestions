import styles from "./styles.module.css";

import { useGetQuestionsQuery } from "@/entites/Questions/api/questionApi";

import { QuestionsList } from "@/widgets/QuestionsList/ui/QuestionList";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar";
import { useAppSelector } from "@/shared/libs/hooks";

export const MainPage = () => {
  const queryState = useAppSelector((state) => state.filters);
  const { data: questions, isLoading } = useGetQuestionsQuery(queryState);

  return (
    <main className={styles.main}>
      {questions?.data.length === 0 ? (
        <p className={styles.falseFilters}>
          Вопросы по заданным фильтрам отсутствуют.
        </p>
      ) : (
        <QuestionsList
          questions={questions}
          isLoading={isLoading}
        ></QuestionsList>
      )}

      <Sidebar></Sidebar>
    </main>
  );
};
