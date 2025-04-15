import styles from "./creatorsSection.module.css";
import CreatorCard from "../CreatorCard";

const CreatorsSection = ({ topCreators }) => {
    return (
        <section className={styles.creatorsSection}>
            <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
            <div className={styles.creatorsGrid}>
                {topCreators.map((creator) => (
                    <CreatorCard key={creator.id} creator={creator} />
                ))}
            </div>
        </section>
    );
};

export default CreatorsSection;