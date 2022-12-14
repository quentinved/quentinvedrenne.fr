import styles from '../../styles/Timeline.module.css'
import timelineElements from '../list/timelineElements'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { storyAnim } from './Story'
import { cardVariants } from '../animation/TimelineItem'

const TimelineItem = (x) => {

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, }}
            className={styles.timelineitem}
            key={x.data.id}
        >
            <motion.div variants={cardVariants} className={styles.timelineitemcontent}>
                <p className={styles.dateCard}>{x.data.date}</p>
                <p className={styles.titleCard}>{x.data.title}</p>
                <p className={styles.companyCard}>{x.data.company_name}</p>
                <p className={styles.placeCard}>{x.data.location}</p>
                <div className={styles.containerSkills}>
                    {x.data.skills && x.data.skills.map((elem, index) => {
                        return <h3 className={styles.skillsCard} key={index}>{elem}</h3>
                    })}
                </div>
                <ul className={styles.listCard}>
                    {x.data.detail?.map((elem, index) => {
                        return (
                            <li key={index}> {elem.title}
                                <ul>
                                    {elem.task?.map((task, index) => {
                                        return <li key={index}>{task}</li>
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
                <span className={styles.circle}>
                    {x.data.type == "experience" ? <Image className={styles.workCircle} width="50" height="50" src='/work.svg' alt='oui' /> : <Image className={styles.schoolCircle} width="50" height="50" src='/school.svg' alt='oui' />}
                </span>
            </motion.div>
        </motion.div>
    )
}

const Experience = () => {

    return (
        <section id="timeline-section">
            <motion.div
                className={styles.containerTitleExperience}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
            >
                <motion.div variants={storyAnim} className={styles.titleExperience}>
                    My experiences
                </motion.div>
            </motion.div>
            <div className={styles.timelinecontainer}>
                {timelineElements.map((data) => {
                    return <TimelineItem data={data} key={data.id} />
                })}
            </div>
        </section>
    )
}

export default Experience