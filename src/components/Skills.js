import { motion } from "framer-motion"
import styles from '../../styles/Skills.module.css'
import skillsElements from "../list/skillsElement"

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
                className={styles[props.class]}
            />
        </div>
    )
}

const Skills = () => {

    return (
        <section id="skills-section">
            <div className={styles.skillsSection}>
                <p className={styles.titleSkills}>My Skills</p>
                <div className={styles.containerCenter}>
                    <div className={styles.containerSkillsPart}>
                        {skillsElements.map((elem, index) => {
                            return <Skill key={index} class={elem.class} src={elem.src} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills