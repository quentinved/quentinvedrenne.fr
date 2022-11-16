import styles from "../styles/Home.module.css"
import Image from "next/image"
import { PopupButton } from '@typeform/embed-react'

const Typeform = () => {
    return <PopupButton id="xjazXMlj" style={{ fontSize: 20 }} className={styles.button64} >
        <span>
            Fill in the form to contact me 👀
        </span>
    </PopupButton>
}

const Contact = () => {
    return (
        <section id="contact-section">
            <div className={styles.contactContainer}>
                <div className={styles.contactTitleContainer}>
                    <h3 className={styles.titleContact}> Contact </h3>
                </div>
                <div className={styles.typeformContainer}>
                    <p className={styles.stillthereContact}>Still There ?</p>
                    <Typeform />
                    <div className={styles.socialnetworkContainer}>
                        <div className={styles.socialnetworkImg}>
                            <Image src="/github.png" alt="arrow" layout="fill" className={styles.socialnetworkImg} />
                        </div>
                        <div className={styles.socialnetworkImg}>
                            <Image src="/linkedin.png" alt="arrow" layout="fill" className={styles.socialnetworkImg} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact