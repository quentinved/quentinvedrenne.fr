import styles from '../styles/Home.module.css'
import timelineElements from './timelineElements'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { storyAnim } from './Story'

const TimelineItem = (x) => {

    const cardVariants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            y: 50,
            opacity: 1,
            transition: {
                type: "swing",
                bounce: 0.2,
                duration: 0.5
            }
        }
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            className={styles.timelineitem}
            key={x.data.id}
        >
            <motion.div variants={cardVariants} className={styles.timelineitemcontent}>
                <p className='styles.companytimeline'>{x.data.date}</p>
                <h3>{x.data.title}</h3>
                <p className='styles.companytimeline'>{x.data.company_name}</p>
                <p className='styles.companytimeline'>{x.data.location}</p>
                {x.data.detail?.map((elem, index) => {
                    return (
                        <ul key={index} >
                            <li> {elem.title}
                                <ul>
                                    {elem.task?.map((task, index) => {
                                        return <li key={index}>{task}</li>
                                    })}
                                </ul>
                            </li>
                        </ul>
                    )
                })}
                <span className={styles.circle}>
                    {x.data.type == "experience" ? <Image className={styles.workCircle} width="50" height="50" src='/work.svg' alt='oui' /> : <Image width="45" height="45" src='/school.svg' alt='oui' />}
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