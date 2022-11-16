import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Burger = (props) => {
    useEffect(() => {
        console.log("bop")
    }, [])


    return (
        <div className={styles.containerMenu}>
            <div className={styles.menu}>
                {/* <h3 className={styles.titleMenu}>Quentinvedrenne</h3> */}
                <a href='#aboutme-section' className={styles.sectionMenu} onClick={() => { props.set(false) }}>About Me</a>
                <a href='#timeline-section' className={styles.sectionMenu} onClick={() => { props.set(false) }}>My experiences</a>
                <a href='#skills-section' className={styles.sectionMenu} onClick={() => { props.set(false) }}>My skills</a>
                <a href='#portfolio-section' className={styles.sectionMenu} onClick={() => { props.set(false) }}>My portfolio</a>
                <a href='#contact-section' className={styles.sectionMenu} onClick={() => { props.set(false) }}>Contact me</a>
            </div>
        </div>
    )
}

export default Burger