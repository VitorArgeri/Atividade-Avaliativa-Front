import styles from "./children.module.css";

export default function Children({ text }) {
    return (
        <div className={styles.children}>
            <p className={styles.text}>{text}</p>
        </div>
    );
}