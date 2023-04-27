import { useState } from 'react'
import { LinkButtonGroup } from '../LinkButtonGroup'
import { Hamburger } from '../ui/Hamburger'
import { UIButton } from '../ui/UIButton'
import styles from './Navbar.module.css'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openGithub = () => {
    window.open('https://github.com', '_blank')
  }

  return (
    <nav>
      <h1 className={styles.logo}>KotoStorage</h1>
      <LinkButtonGroup isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className={styles.gh_btn}>
        <UIButton text="GitHub" onClick={openGithub} />
      </div>

      <Hamburger onClick={toggleMenu} isMenuOpen={isMenuOpen} />
    </nav>
  )
}
