import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image';


export const storyAnim = {
  offscreen: {
    opacity: 0,
    y: -25,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }
  }
};

const Story = () => {

  const aboutmeAnim = {
    offscreen: {
      opacity: 0,
      y: 0,
    },
    onscreen: {
      y: -25,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
  };



  return (
    <section id='aboutmesection'>
      <motion.div
        className={styles.storyContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className={styles.aboutme}>
          <div className={styles.containerImg}>
            <div className={styles.nextImg}>
              <Image width="250" height="260" src='/pp.jpeg' alt='profile picture' />
            </div>
          </div>
          <motion.div variants={aboutmeAnim} className={styles.titleStory}>
            <p>About me</p>
          </motion.div>
        </div>
        <div className={styles.textContainer}>
          <motion.div variants={storyAnim}>
            <p>
              Hi, my name is Quentin Vedrenne I’m a French Student from EPITECH and I’m researching an intern position as Software Engineer to conclude my fifth and last year of school from March to August 2023. With now three years in the IT development and 1 year in the role of project manager I’m confident that my knowledge will be a real asset to the team.
            </p>
            <p>
              skdkdk
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Story