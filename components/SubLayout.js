import styles from "./SubLayout.module.css";
export default function SubLayout({ children }) {
  return (
    <>
      {children}
      <footer className={styles.footer}>@somin</footer>
    </>
  );
}
