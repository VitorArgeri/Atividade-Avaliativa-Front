import styles from "./dad.module.css";

export default function Dad({ children }) {
  return <div className={styles.children}>{children}</div>;
}
