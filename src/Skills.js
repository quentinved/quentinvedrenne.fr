import { motion } from "framer-motion"
import styles from '../styles/Home.module.css'

const Skill = (props) => {
    return (
        <div className={styles.containerSkill}>
            <motion.img
                initial={{
                    y: props.directionLeft ? 100 : -100,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                src={props.src}
                className={props.class}
            />
            <div className={styles.containerPourcent}>
                <p>{props.pourcent}</p>
            </div>
        </div>
    )
}

const Skills = () => {
    return (
        <div className={styles.skillSection}>
            <p className={styles.titleSkills}>My Skills</p>
            <p>Hover each language logo to see my learning pourcentage on it</p>
            <div className={styles.containerCenter}>
                <div className={styles.containerSkillsPart}>
                    <Skill src="./js.png" class={styles.normalLogo} directionLeft={false} pourcent="75%" />
                    <Skill src="./ts.png" class={styles.normalLogo} directionLeft={false} pourcent="65%" />
                    <Skill src="./react.png" class={styles.normalLogo} directionLeft={false} pourcent="85%" />
                    <Skill src="./node.png" class={styles.normalLogo} directionLeft={false} pourcent="65%" />
                    <Skill src="./next.png" class={styles.normalLogo} directionLeft={true} pourcent="55%" />
                    <Skill src="./c.png" class={styles.specialLogo} directionLeft={true} pourcent="95%" />
                    <Skill src="./cpp.png" class={styles.specialLogo} directionLeft={true} pourcent="85%" />
                    <Skill src="./dock.png" class={styles.normalLogo} directionLeft={true} pourcent="45%" />
                    <Skill src="./flask.png" class={styles.specialLogo} directionLeft={true} pourcent="35%" />
                </div>
            </div>
        </div>
    )
}

export default Skills