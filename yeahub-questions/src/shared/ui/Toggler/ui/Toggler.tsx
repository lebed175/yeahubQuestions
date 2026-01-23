import arrowItem from "../../../assets/images/arrowItem.svg";
import styles from "./styles.module.css";

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

export const Toggler = ({ isOpen, handleClick }: Props) => {
  return (
    <img
      src={arrowItem}
      alt="Arrow"
      className={`${isOpen ? `${styles.img} ${styles.open}` : styles.img}`}
      onClick={handleClick}
    />
  );
};
