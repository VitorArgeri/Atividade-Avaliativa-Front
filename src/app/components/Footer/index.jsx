import styles from "./footer.module.css";

const Footer = ({ footerData, socialLinks }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.footerLogo}>
                    <h2>MemeVerse</h2>
                    <p>O universo dos melhores memes da internet.</p>
                </div>

                <div className={styles.footerNavContainer}>

                    {footerData.map((item, index) => (
                        <div className={styles.footerNavSection} key={index}>
                            <h3>{item.title}</h3>
                            <nav className={styles.footerNav}>
                                {item.links.map((link, linkIndex) => (
                                    <a href="#" key={linkIndex}>
                                        {link}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    ))}

                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>© 2025 MemeVerse - Todos os direitos reservados</p>
                <div className={styles.socialLinks}>
                    {socialLinks.map((item, index) => (
                        <a href="#" key={index} className={styles.socialLink}>
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer