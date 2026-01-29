import styles from "./styles.module.css";
import questionImage from "../../../shared/assets/images/questionImage.svg";

import { useExpandContent } from "../hook/useExpandContent";

import type { QuestionType } from "@/entites/Questions/model/types";

interface Props {
  question: QuestionType;
}

export const QuestionExpanding = ({ question }: Props) => {
  const { contentRef, open, canExpand, toggle } = useExpandContent();

  return (
    <div className={styles.question}>
      <div className={styles.title}>
        <img src={questionImage} alt="Question" className={styles.titleImg} />
        <div>
          <h1 className={styles.titleItem}>{question.title}</h1>
          <p className={styles.titleDescription}>{question.description}</p>
        </div>
      </div>

      <div className={styles.shortAnswer}>
        <h3 className={styles.shortAnswerTitle}>Краткий ответ</h3>
        <p className={styles.shortAnswerText}>{question.shortAnswer}</p>
      </div>

      <div
        ref={contentRef}
        className={open ? styles.longAnswerFull : styles.longAnswer}
      >
        <h3 className={styles.longAnswerTitle}>Развёрнутый ответ</h3>
        <p className={styles.longAnswerText}>{question.longAnswer}</p>
      </div>
      {canExpand && (
        <div className={styles.moreInfo}>
          <p className={styles.moreInfoText} onClick={toggle}>
            {open ? "Скрыть" : "Развернуть"}
          </p>
        </div>
      )}
    </div>
  );
};
