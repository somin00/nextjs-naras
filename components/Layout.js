import { useRouter } from "next/router";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  const router = useRouter();
  const clickHeader = () => {
    router.push("/");
  };
  return (
    <div>
      <header className={styles.header} onClick={clickHeader}>
        NARAS 🌏
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
