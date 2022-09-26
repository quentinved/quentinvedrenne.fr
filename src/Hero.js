import styles from '../styles/Home.module.css'
import AnimatedTextWord from './HeroText'

const Hero = () => {

    return (
        <div className={styles.containerHero}>
            <div className={styles.content}>
                <AnimatedTextWord  styl={styles.titleHero} text="Quentin Vedrenne" />
                <AnimatedTextWord styl={styles.titleHero} text="Developper full stack / project manager" />
                {/* <h2 className={styles.subTitleHero}></h2> */}
            </div>
        </div>

    )
}

export default Hero