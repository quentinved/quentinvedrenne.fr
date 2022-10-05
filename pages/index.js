import { useEffect } from 'react'
import Experience from '../src/Experience'
import Footer from '../src/Footer'
import Header from '../src/Header'
import Hero from '../src/Hero'
import Story from '../src/Story'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Header/>
      <Hero />
      <Story />
      <Experience />
      {/* <Footer /> */}
    </div>
  )
}
