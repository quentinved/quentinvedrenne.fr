import { useState } from 'react'
import Experience from '../src/components/Timeline'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Skills from '../src/components/Skills'
import Story from '../src/components/Story'
import styles from '../styles/Home.module.css'
import stylesBurger from '../styles/Burger.module.css'
import Portfolio from '../src/components/Portfolio'
import Contact from '../src/components/Contact'
import Burger from '../src/components/Burger'
import { MenuButton } from '../src/components/Menubutton'

export default function Home() {

  const [burger, setBurger] = useState(false)

  return (
    <div className={styles.container}>
      <div className={stylesBurger.containerBurger}>
        <a className={stylesBurger.burger}>
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
