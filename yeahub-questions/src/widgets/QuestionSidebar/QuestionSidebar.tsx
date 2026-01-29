import styles from "./styles.module.css";
import type { QuestionType } from "@/entites/Questions/model/types";

interface Props {
  question: QuestionType;
}

export const QuestionSidebar = ({ question }: Props) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.level}>
        <p className={styles.levelText}>Уровень:</p>
        <div className={styles.info}>
          <p className={styles.infoText}>
            Рейтинг: <span className={styles.infoNumber}>{question.rate}</span>
          </p>
          <p className={styles.infoText}>
            Сложность:{" "}
            <span className={styles.infoNumber}>{question.complexity}</span>
          </p>
        </div>
      </div>
      <ul className={styles.skills}>
        <p className={styles.skillsText}>Навыки:</p>
        {question.questionSkills.map((item) => (
          <li key={item.id} className={styles.skillsItem}>
            {item.title}
          </li>
        ))}
      </ul>
      <ul className={styles.keywords}>
        <p className={styles.keywordsText}>Ключевые слова:</p>
        {question.keywords.map((item, index) => (
          <li key={index} className={styles.keywordsItem}>{`#${item}`}</li>
        ))}
      </ul>
    </aside>
  );
};
