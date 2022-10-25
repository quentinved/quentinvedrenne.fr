import { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'
import portfolioElements from './portfolioElements'
import Image from 'next/image'


const Slide = (props) => {

    return (
        <div className={styles[props.class]}>
            <div className={styles.textPortfolio}>
                <h1 className={styles.titlePortfolioSlide}>
                    {props.data.title}
                </h1>
                <div className={styles.containerSkillsPortfolio}>
                    {props.data.skills && props.data.skills.map((elem, index) => {
                        return <h3 className={styles[props.classSkils]} key={index}>{elem}</h3>
                    })}
                </div>
                <p className={styles.descriptionTitlePortfolio}> Description</p>
                <p className={styles.descriptionPortfolio}>{props.data.description}</p>
                <p className={styles.descriptionTitlePortfolio}>My Jobs</p>
                {props.data.detail?.map((elem, index) => {
                    return (
                        <ul key={index} className={styles.descriptionPortfolio}>
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
            </div>
            <div className={styles.rightSlide}>
                {props.data.img && props.data.img.map((img, index) => {
                    return (
                    <div className={styles.imgPortfolioContainer} key={index}>
                        <Image src={img} key={index} alt={props.data.title} className={styles.imgPortfolio} layout='fill' />
                    </div>
                    )
                })
                }
            </div>
        </div>
    )
}

const Portfolio = () => {

    const portfolio = ["p", "o", "r", "t", "f", "o", "l", "i", "o"]
    return (
        <div className={styles.containerPortfolio}>
            <div className={styles.side}>
                {portfolio.map((letter, index) => {
                    return <p key={index}>{letter}</p>
                })}
            </div>
            <div className={styles.containerSlide}>
                {portfolioElements.map((project) => {
                    return <Slide key={project.id} class={project.class} classSkils={project.classSkils} data={project} />
                })}
            </div>
        </div>
    )
}

export default Portfolio