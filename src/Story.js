import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'


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
  
  const meAnim = {
    offscreen: {
      opacity: 0,
      y: 0,
    },
    onscreen: {
      y: 25,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
  };

  const aboutAnim = {
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
          <motion.div variants={aboutAnim} className={styles.titleStory}> About</motion.div>
          <motion.div variants={meAnim} className={styles.titleStory} >Me</motion.div>
        </div>
        <div className={styles.story}>
          <motion.div variants={storyAnim}>
          Hi, my name is Quentin Vedrenne I’m a French Student from EPITECH and I’m researching an intern position as Software Engineer to conclude my fifth and last year of school from March to August 2023. With now three years in the IT development and 1 year in the role of project manager I’m confident that my knowledge will be a real asset to the team.
          </motion.div>
        </div>
        {/* <p className={styles.lighttextwrapper}>d<p id="lighttext" className={styles.lighttext}>About</p></p> */}
        {/* <span className={styles.boldtextwrapper}><span id="boldtext" className={styles.boldtext}>Memories</span></span> */}
      </motion.div>
    </section>
  )
}

export default Story