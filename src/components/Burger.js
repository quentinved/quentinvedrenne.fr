import styles from '../../styles/Burger.module.css'

const Burger = (props) => {
    return (
        <div className={styles.containerMenu}>
            <div className={styles.menu}>
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