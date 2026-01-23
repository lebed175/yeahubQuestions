import styles from "./styles.module.css";

interface Props {
  count: number;
  type: string;
}

export const Skeleton = ({ count, type }: Props) => {
  return (
    <ul className={styles.column}>
      {[...Array(count)].map((_, index) => {
        return <li key={index} className={styles[type]}></li>;
      })}
    </ul>
  );
};
