import styles from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>NARAS 🌏</header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
