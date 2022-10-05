import styles from '../styles/Home.module.css'
import AnimatedTextWord from './HeroText'

const Hero = () => {

    return (
        <div className={styles.containerHero}>
            <div className={styles.content}>
                <AnimatedTextWord text="Quentin Vedrenne" isSubtitle={false}/>
                <AnimatedTextWord text="Developer full stack - EPITECH" isSubtitle={true}/>
            </div>
        </div>

    )
}

export default Hero