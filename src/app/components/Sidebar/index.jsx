import styles from "./sidebar.module.css";
import EventCard from "../EventCard";

const Sidebar = ({ premiumFeatures, popularTags, upcomingEvents }) => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
                {upcomingEvents.map((event) => (
                    // COMPONENTE: EventCard
                    <EventCard event={event} />
                    // FIM COMPONENTE: EventCard
                ))}
            </div>

            <div className={styles.sidebarSection}>

                <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
                <div className={styles.premiumCard}>
                    <h4 className={styles.premiumTitle}>
                        Desbloqueie recursos exclusivos!
                    </h4>
                    {premiumFeatures.map((item, index) => (
                        <ul key={index} className={styles.premiumFeatures}>
                            <li className={styles.premiumFeature}>
                                {item.feature}
                            </li>
                        </ul>
                    ))}
                    <button className={styles.premiumButton}>
                        Experimentar Grátis
                    </button>
                </div>
            </div>

            <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Tags Populares</h3>
                <div className={styles.tagCloud}>

                    {popularTags.map((item, index) => (
                        <span key={index} className={`${styles.tag} ${index % 2 === 0 && index <= 7 ? styles.tagLarge : styles.tagMedium}`}>
                            {item.tag}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;