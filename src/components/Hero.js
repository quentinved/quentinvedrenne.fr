import styles from '../../styles/Hero.module.css'
import AnimatedTextWord from './HeroText'

const Hero = () => {

    return (
        <div className={styles.containerHero}>
            <div className={styles.content}>
                <AnimatedTextWord text="Quentin Vedrenne" isSubtitle={false} />
                <AnimatedTextWord text="Software Engineer" isSubtitle={true} />
            </div>
        </div>
    )
}

export default Hero