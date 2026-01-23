import type { QuestionsType } from "@/entites/Questions/model/types";
import styles from "./styles.module.css";
import { QuestionItem } from "@/entites/Questions/ui/QuestionItem";
import { PaginationQuestion } from "@/features/PaginationQuestions/ui/PaginationQuestion";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface Props {
  questions?: QuestionsType;
  isLoading: boolean;
}

export const QuestionsList = ({ questions, isLoading }: Props) => {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Вопросы</h2>
      {isLoading ? (
        <Skeleton count={15} type="item"></Skeleton>
      ) : (
        <ul className={styles.list}>
          {questions?.data.map((question) => (
            <QuestionItem key={question.id} question={question}></QuestionItem>
          ))}
        </ul>
      )}
      <PaginationQuestion
        total={questions?.total}
        limit={questions?.limit}
      ></PaginationQuestion>
    </main>
  );
};
