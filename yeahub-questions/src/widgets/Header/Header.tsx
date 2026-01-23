import styles from "./styles.module.css";
import yeahubLogo from "../../shared/assets/images/yeahubLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button/Button";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={yeahubLogo} alt="Yeahub" />
          </Link>
          <div className={styles.links}>
            <Link to={"/"}>База Вопросов</Link>
          </div>
        </div>
        <div className={styles.auth}>
          <Button
            classCustom=""
            size="large"
            variant="outline"
            onClick={() => navigate("/login")}
          >
            Вход
          </Button>
          <Button
            classCustom=""
            size="large"
            variant="primary"
            onClick={() => navigate("/register")}
          >
            Регистрация
          </Button>
        </div>
      </nav>
    </header>
  );
};
