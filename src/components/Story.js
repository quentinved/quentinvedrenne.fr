import styles from "../../styles/Story.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { storyAnim } from "../animation/StoryText";
import { aboutmeAnim } from "../animation/StoryText";

const Story = () => {
  return (
    <section id="aboutme-section">
      <motion.div
        className={styles.storyContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className={styles.aboutme}>
          <div className={styles.containerImg}>
            <div className={styles.nextImg}>
              <Image
                width="250"
                height="260"
                src="/pp.jpeg"
                alt="profile picture"
              />
            </div>
          </div>
          <motion.div variants={aboutmeAnim} className={styles.titleStory}>
            <p>About me</p>
          </motion.div>
        </div>
        <motion.div className={styles.textContainer} variants={storyAnim}>
          <p>
            Hi, my name is Quentin Vedrenne 👋 ! <br></br>
            I'm a dynamic Software Engineer with a passion for solving complex
            problems and fostering collaborative environments. <br></br>My
            journey in tech is driven by a relentless pursuit of innovation,
            excellence, and impactful teamwork.<br></br> With a solid background
            in full-stack development, cloud technologies, and project
            management, I thrive in settings where I can contribute to
            meaningful solutions and continuous learning.
          </p>
        </motion.div>
        {/* TODO: Add when got the english link from the school */}
        {/* <div className={styles.buttonContainer}>
            <button href="https://www.epitech.eu/fr/formations/epitech-en-5-ans-international/" className={styles.epitechButton}><span>Learn more about my school 👀</span></button>
          </div> */}
      </motion.div>
    </section>
  );
};

export default Story;
