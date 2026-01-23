import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className={styles.container}>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
