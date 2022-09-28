import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

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

  const storyAnim = {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in leo felis. Morbi ut gravida velit. Duis auctor, lacus in vestibulum eleifend, urna libero euismod dolor, vitae varius odio erat porta metus. Curabitur bibendum augue nec nisl ullamcorper, non luctus eros tempus. Praesent placerat consectetur quam, quis efficitur leo tempus eget. Quisque placerat, ex non ornare commodo, neque eros convallis tortor, nec rhoncus sapien augue vel nisi. Sed pretium diam ut tempus ornare. Sed feugiat, ipsum sed bibendum pharetra, nibh lectus tincidunt lectus, nec tristique ligula sem ut massa. Vestibulum ut porttitor lorem. Vivamus pellentesque leo nec orci dapibus, et porttitor leo consequat. Ut viverra odio nec tempus consequat.
          </motion.div>
        </div>
        {/* <p className={styles.lighttextwrapper}>d<p id="lighttext" className={styles.lighttext}>About</p></p> */}
        {/* <span className={styles.boldtextwrapper}><span id="boldtext" className={styles.boldtext}>Memories</span></span> */}
      </motion.div>
    </section>
  )
}

export default Story