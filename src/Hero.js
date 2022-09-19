import styles from '../styles/Home.module.css'

const Hero = () => {
    return (
        <div className={styles.containerHero}>
            <div className={styles.content}>
                <h1 className={styles.titleHero}>Quentin Vedrenne</h1>
                <h2 className={styles.subTitleHero}>Developper full stack / project manager</h2>
            </div>
        </div>

    )
}

export default Hero