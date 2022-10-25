import { useEffect } from 'react'
import Experience from '../src/Timeline'
import Footer from '../src/Footer'
import Header from '../src/Header'
import Hero from '../src/Hero'
import Skills from '../src/Skills'
import Story from '../src/Story'
import styles from '../styles/Home.module.css'
import Portfolio from '../src/Portfolio'
import Contact from '../src/Contact'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Header/>
      <Hero />
      <Story />
      <Experience />
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </div>
  )
}
