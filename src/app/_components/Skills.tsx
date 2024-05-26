import React from 'react'
import styles from "./Skills.module.scss"
import { Title } from './ui/Title/Title.styled'
import MarqueeComponent from './ui/marquee/Marquee'
import { HomePageContainer } from './ui/Container/Container.styled'

function Skills() {
  return (
    <div className={styles.skillsSectionContainer}>
        {/* <Title className={styles.sectionTitle}>Skills</Title> */}
        {/* <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aLorem ipsum dolor sit amet,
          consectetu
        </p> */}
        {/* <MarqueeComponent/> */}
    </div>
  )
}

export default Skills
