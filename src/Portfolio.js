import { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'
import portfolioElements from './portfolioElements'

const Slide = (props) => {

    return (
        <div className={styles[props.class]}>
            <h1>
                {props.data.title}
            </h1>
        </div>
    )
}

const Portfolio = () => {
    return (
        <div className={styles.containerPortfolio}>
            <div className={styles.side}>
                <h1> My Portfolio</h1>
            </div>
            <div className={styles.containerSlide}>
                {portfolioElements.map((project) => {
                    return <Slide key={project.id} class={project.class} data={project}/>
                })}
            </div>
        </div>
    )
}

export default Portfolio