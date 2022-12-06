import styles from '../../styles/Story.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { storyAnim } from '../animation/StoryText';
import { aboutmeAnim } from '../animation/StoryText';

const Story = () => {

  return (
    <section id='aboutme-section'>
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
        <motion.div className={styles.textContainer} variants={storyAnim}>
          <p>
            Hi, my name is Quentin Vedrenne 👋 ! <br></br>
            I’m a French Student from <a href='https://www.epitech.eu/fr/formations/epitech-en-5-ans-international/'> EPITECH</a> in France, and I’m currently looking for a Software Engineer Internship in the United States for six months from March to August 2023 to conclude my Master in Computer Science.<br></br>
            With my three years experience in the IT development and 1 year in the role of project manager, I’m confident that my knowledge will be a real asset to the team.<br></br>
            I’m a quick learner, and I’m motivate and passionate to learn new things and always looking for new challenges.<br></br>
          </p>
        </motion.div>
        {/* TODO: Add when got the english link from the school */}
        {/* <div className={styles.buttonContainer}>
            <button href="https://www.epitech.eu/fr/formations/epitech-en-5-ans-international/" className={styles.epitechButton}><span>Learn more about my school 👀</span></button>
          </div> */}
      </motion.div>
    </section>
  )
}

export default Story  