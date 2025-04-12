import styles from './page.module.css';
import Welcome from './components/Welcome';
import Props from './components/Props';
import Children from './components/Children';
import Dad from './components/Dad';

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
      <Props title="Título Exemplo" description="Esta é uma descrição de exemplo." />
      <Dad>
        <Children text="Olá Mundo"/>
      </Dad>
    </main>
  );
}