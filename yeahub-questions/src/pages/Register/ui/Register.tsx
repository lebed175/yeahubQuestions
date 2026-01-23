import { Button } from "@/shared/ui/Button/Button";
import styles from "./styles.module.css";

export const Register = () => {
  return (
    <form className={styles.auth}>
      <div className={styles.part}>
        <label className={styles.label} htmlFor="login">
          Придумайте логин:{" "}
        </label>
        <input className={styles.input} type="text" id="login" />
      </div>

      <div className={styles.part}>
        <label className={styles.label} htmlFor="email">
          Введите свою почту:
        </label>
        <input className={styles.input} type="email" id="email" />
      </div>

      <div className={styles.part}>
        <label className={styles.label} htmlFor="password">
          Придумайте пароль:{" "}
        </label>
        <input className={styles.input} type="password" id="password" />
      </div>

      <Button disabled={true} variant="primary" size="large" classCustom="">
        Регистрация
      </Button>
    </form>
  );
};
