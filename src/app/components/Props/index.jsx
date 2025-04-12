import styles from "./props.module.css";

export default function Props({ title, description }) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
