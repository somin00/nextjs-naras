import styles from "./SubLayout.module.css";
export default function SubLayout({ children }) {
  return (
    <div className="SubLayout">
      <div>{children}</div>
      <footer className={styles.footer}>@somin</footer>
    </div>
  );
}
