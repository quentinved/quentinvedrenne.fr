import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { Button } from './Contact';


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
              Hi, my name is Quentin Vedrenne 👋 ! <br></br>
              I’m a French Student from <a href='https://www.epitech.eu/fr/formations/epitech-en-5-ans-international/'> EPITECH</a> and I’m currently looking for an intern position as Software Engineer for 6 months from March to August 2023 to conclude my Master in Computer Science. <br></br>
              With now three years in the IT development and 1 year in the role of project manager I’m confident that my knowledge will be a real asset to the team. <br></br>
              I’m a passionate and motivated person who is always looking for new challenges. Thank to my studies I was able to become a quick learner and I'm always ready to learn new things. <br></br>
            </p>
          </motion.div>
          <div className={styles.buttonContainer}>
            <Button link={"https://www.epitech.eu/fr/formations/epitech-en-5-ans-international/"} text={"Learn more about my school"} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Story  