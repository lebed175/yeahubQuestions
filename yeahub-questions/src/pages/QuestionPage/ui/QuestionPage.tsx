import styles from "./styles.module.css";
import arrowLeft from "../../../shared/assets/images/arrowLeft.svg";
import questionImage from "../../../shared/assets/images/questionImage.svg";

import { useGetQuestionsByIdQuery } from "@/entites/Questions/api/questionApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: question } = useGetQuestionsByIdQuery(Number(id));

  const contentRef = useRef<HTMLDivElement>(null);
  const [canExpand, setCanExpand] = useState(false);

  useEffect(() => {
    if (!contentRef.current) return;

    const { scrollHeight, clientHeight } = contentRef.current;

    setCanExpand(scrollHeight > clientHeight);
  }, [question?.longAnswer]);

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.link} onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="Arrow left" className={styles.linkImg} />
        <p className={styles.linkText}>Назад</p>
      </div>

      <main className={styles.main}>
        <div className={styles.question}>
          <div className={styles.title}>
            <img
              src={questionImage}
              alt="Question"
              className={styles.titleImg}
            />
            <div>
              <h1 className={styles.titleItem}>{question?.title}</h1>
              <p className={styles.titleDescription}>{question?.description}</p>
            </div>
          </div>

          <div className={styles.shortAnswer}>
            <h3 className={styles.shortAnswerTitle}>Краткий ответ</h3>
            <p className={styles.shortAnswerText}>{question?.shortAnswer}</p>
          </div>

          <div
            ref={contentRef}
            className={open ? styles.longAnswerFull : styles.longAnswer}
          >
            <h3 className={styles.longAnswerTitle}>Развёрнутый ответ</h3>
            <p className={styles.longAnswerText}>{question?.longAnswer}</p>
          </div>
          {canExpand && (
            <div className={styles.moreInfo}>
              <p className={styles.moreInfoText} onClick={() => toggle()}>
                {open ? "Скрыть" : "Развернуть"}
              </p>
            </div>
          )}
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.level}>
            <p className={styles.levelText}>Уровень:</p>
            <div className={styles.info}>
              <p className={styles.infoText}>
                Рейтинг:{" "}
                <span className={styles.infoNumber}>{question?.rate}</span>
              </p>
              <p className={styles.infoText}>
                Сложность:{" "}
                <span className={styles.infoNumber}>
                  {question?.complexity}
                </span>
              </p>
            </div>
          </div>
          <ul className={styles.skills}>
            <p className={styles.skillsText}>Навыки:</p>
            {question?.questionSkills.map((item) => (
              <li key={item.id} className={styles.skillsItem}>
                {item.title}
              </li>
            ))}
          </ul>
          <ul className={styles.keywords}>
            <p className={styles.keywordsText}>Ключевые слова:</p>
            {question?.keywords.map((item, index) => (
              <li key={index} className={styles.keywordsItem}>{`#${item}`}</li>
            ))}
          </ul>
        </aside>
      </main>
    </>
  );
};
