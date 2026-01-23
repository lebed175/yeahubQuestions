import { useEffect, useState } from "react";
import { useDebounce } from "@/shared/hooks/useDebounce";
import styles from "./styles.module.css";
import { useAppDispatch } from "@/shared/libs/hooks";
import { setFilters } from "@/entites/Questions/model/filtersSlice";

export const Search = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilters({ title: debouncedText }));
  }, [debouncedText]);

  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Введите запрос..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
