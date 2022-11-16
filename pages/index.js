import { useEffect, useState } from 'react'
import Experience from '../src/Timeline'
import Footer from '../src/Footer'
import Header from '../src/Header'
import Hero from '../src/Hero'
import Skills from '../src/Skills'
import Story from '../src/Story'
import styles from '../styles/Home.module.css'
import Portfolio from '../src/Portfolio'
import Contact from '../src/Contact'
import Burger from '../src/Burger'
import { MenuButton } from '../src/Menubutton'

export default function Home() {

  const [burger, setBurger] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.containerBurger}>
        <a className={styles.burger}>
          <MenuButton
            isOpen={burger}
            onClick={() => setBurger(!burger)}
          />
        </a>
      </div>
      {burger && <Burger set={setBurger} />}
      <Header />
      <Hero />
      <Story />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
