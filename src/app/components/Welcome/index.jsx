import styles from "./welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.title}>Bem Vindo ao Template</h1>
      <p className={styles.subtitle}>Esse é um simples texto passado pelo componente</p>
    </div>
  );
};

export default Welcome;
