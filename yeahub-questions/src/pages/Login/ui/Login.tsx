import { Button } from "@/shared/ui/Button/Button";
import styles from "./styles.module.css";

export const Login = () => {
  return (
    <form className={styles.login}>
      <div className={styles.part}>
        <label className={styles.label} htmlFor="login">
          Введите логин:{" "}
        </label>
        <input className={styles.input} type="text" id="login" />
      </div>

      <div className={styles.part}>
        <label className={styles.label} htmlFor="password">
          Введите пароль:{" "}
        </label>
        <input className={styles.input} type="password" id="password" />
      </div>

      <Button disabled={true} variant="primary" size="large" classCustom="">
        Войти
      </Button>
    </form>
  );
};
