import styles from '../styles/Home.module.css'
import timelineElements from './timelineElements'
import Image from 'next/image'

const TimelineItem = (x) => {
    console.log(x.data.title)
    return (
        <div className={styles.timelineitem}>
            <div className={styles.timelineitemcontent}>
                <p key={x.data.id}>{x.data.title}</p>
                <p key={x.data.id}>{x.data.description}</p>
                <p key={x.data.id}>{x.data.description}</p>
                <p key={x.data.id}>{x.data.description}</p>
                <p key={x.data.id}>{x.data.description}</p>
                <p key={x.data.id}>{x.data.description}</p>
                <p key={x.data.id}>{x.data.description}</p>
                <span className={styles.circle}>
                    <Image width="50" height="50" src='/school.svg' alt='oui'/>
                </span>
            </div>
        </div>
    )
}

const Experience = () => {
    return (
        <div className={styles.timelinecontainer}>
            {timelineElements.map((data) => {
                return <TimelineItem key={data.id} data={data} />
            })}
        </div>
    )
}

export default Experience