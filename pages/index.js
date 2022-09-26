import { useEffect } from 'react'
import Experience from '../src/Experience'
import Footer from '../src/Footer'
import Header from '../src/Header'
import Hero from '../src/Hero'
import Story from '../src/Story'
import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(() => {
    const aboutmeSection = document.getElementById("aboutmesection");
    const aboutLightText = document.getElementById("lighttext");
    // const meBoldText = document.getElementById("boldtext");
    console.log(aboutmeSection)
  
    // document.addEventListener("scroll", function () {
    //   const clientHeight = document.documentElement.clientHeight;
    //   const aboutmeSectionY = aboutmeSection.getBoundingClientRect().y;
    //   const aboutmeSectionHeight = aboutmeSection.getBoundingClientRect().height;
  
    //   if (clientHeight > aboutmeSectionY + (aboutmeSectionHeight * 2) / 3) {
    //     aboutLightText.style.animation = "slideUp 10s infinite";
    //     // aboutLightText.style.animationName= "slideUp"
    //     // aboutLightText.style.animationDuration = "10s",
    //     // aboutLightText.style.animationIterationCount = "infinite"
    //     // aboutLightText.style.backgroundColor= "red"
    //     // meBoldText.style.animation = "slidein 10s 0.2s forwards cubic-bezier(0.87, 0, 0.13, 1)";
    //     console.log('bite')
    //   }
    // })
  })
  
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Story />
      <Experience />
      <Story />
      <Footer />
    </div>
  )
}
