import styles from "./styles.module.css";
import arrowLeft from "../../../shared/assets/images/arrowLeft.svg";

import { useGetQuestionsByIdQuery } from "@/entites/Questions/api/questionApi";
import { useNavigate, useParams } from "react-router-dom";

import { QuestionSidebar } from "@/widgets/QuestionSidebar/QuestionSidebar";
import { QuestionExpanding } from "@/features/QuestionExpanding/ui/QuestionExpanding";

export const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: question } = useGetQuestionsByIdQuery(Number(id));

  if (!question) return null;
  return (
    <>
      <div className={styles.link} onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="Arrow left" className={styles.linkImg} />
        <p className={styles.linkText}>Назад</p>
      </div>

      <main className={styles.main}>
        <QuestionExpanding question={question}></QuestionExpanding>
        <QuestionSidebar question={question}></QuestionSidebar>
      </main>
    </>
  );
};
