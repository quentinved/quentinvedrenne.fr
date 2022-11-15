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
                viewport={{ once: true, }}
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
        <section id="skills">
            <div className={styles.skillSection}>
                <p className={styles.titleSkills}>My Skills</p>
                <div className={styles.containerCenter}>
                    <div className={styles.containerSkillsPart}>
                        <Skill src="./js.png" class={styles.normalLogo} directionLeft={false} />
                        <Skill src="./ts.png" class={styles.normalLogo} directionLeft={false} />
                        <Skill src="./react.png" class={styles.normalLogo} directionLeft={false} />
                        <Skill src="./node.png" class={styles.normalLogo} directionLeft={false} />
                        <Skill src="./next.png" class={styles.normalLogo} directionLeft={false} />
                        <Skill src="./c.png" class={styles.specialLogo} directionLeft={false} />
                        <Skill src="./gcp.png" class={styles.normalLogo} directionLeft={true} />
                        <Skill src="./aws.png" class={styles.awsLogo} directionLeft={true} />
                        <Skill src="./kube.png" class={styles.normalLogo} directionLeft={true} />
                        <Skill src="./cpp.png" class={styles.specialLogo} directionLeft={true} />
                        <Skill src="./dock.png" class={styles.normalLogo} directionLeft={true} />
                        <Skill src="./python.png" class={styles.normalLogo} directionLeft={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills