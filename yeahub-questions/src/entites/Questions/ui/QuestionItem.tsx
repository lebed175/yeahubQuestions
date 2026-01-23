import styles from "./styles.module.css";
import type { QuestionType } from "../model/types";
import arrowRight from "../../../shared/assets/images/arrowRight.svg";
import questionImg from "../../../shared/assets/images/questionAnswer.svg";

import { useState } from "react";
import { Toggler } from "@/shared/ui/Toggler/ui/Toggler";
import { Link } from "react-router-dom";

interface Props {
  question: QuestionType;
}

export const QuestionItem = ({ question }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.question}>
      <li className={styles.item}>
        <p className={styles.text}>{question.title}</p>
        <Toggler isOpen={isOpen} handleClick={toggle}></Toggler>
      </li>

      <div
        className={`${styles.hidden} ${isOpen ? styles.open : styles.closed}`}
      >
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.infoText}>
              Рейтинг:{" "}
              <span className={styles.infoNumber}>{question.rate}</span>
            </p>
            <p className={styles.infoText}>
              Сложность:{" "}
              <span className={styles.infoNumber}>{question.complexity}</span>
            </p>
          </div>

          <img
            src={questionImg}
            alt="Image Anwer"
            className={styles.questionImg}
          />

          <p className={styles.answer}>{question.shortAnswer}</p>

          <div className={styles.link}>
            <Link to={`/question/${question.id}`} className={styles.linkItem}>
              <p>Подробнее</p>
              <img src={arrowRight} alt="Arrow Right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
