import styles from '../styles/Home.module.css'
import timelineElements from './timelineElements'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

    return (
        <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.8 }}
                className={styles.timelineitem}
            >
            <motion.div variants={cardVariants} className={styles.timelineitemcontent}>
                <p className='styles.companytimeline' key={x.data.id}>{x.data.date}</p>
                <h3 key={x.data.id}>{x.data.title}</h3>
                <p className='styles.companytimeline' key={x.data.id}>{x.data.company_name}</p>
                <p className='styles.companytimeline' key={x.data.id}>{x.data.location}</p>
                {x.data.detail?.map((elem) => {
                    return (
                        <>
                            <ul>
                                <li>{elem.title}
                                    <ul>
                                        {elem.task?.map((task) => {return <li key={1}>{task}</li>
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </>
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
        // <section class="timeline-section">
        <div className={styles.timelinecontainer}>
            {timelineElements.map((data) => {
                return <TimelineItem key={data.id} data={data} />
            })}
        </div>
        // </section>
    )
}

export default Experience