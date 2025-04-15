import styles from "./featuredMemeSection.module.css";
import FeaturedMemeCard from "../FeaturedMemeCard";

const FeaturedMemeSection = ({ featuredMemes }) => {
    return (
        <section className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
            <div className={styles.featuredGrid}>
                {featuredMemes.map((meme) => (
                    // COMPONENTE: FeaturedMemeCard
                    <FeaturedMemeCard meme={meme}/>
                    // FIM COMPONENTE: FeaturedMemeCard
                ))}
            </div>
        </section>
    )
}

export default FeaturedMemeSection;