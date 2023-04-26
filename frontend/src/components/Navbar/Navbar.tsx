import { useState } from 'react'
import { LinkButtonGroup } from '../LinkButtonGroup'
import { Hamburger } from '../ui/Hamburger'
import { UIButton } from '../ui/UIButton'
import classes from './Navbar.module.css'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={classes.navbar}>
      <p className={classes.logo}>KotoStorage</p>
      <LinkButtonGroup isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={classes.gh_btn}>
        <UIButton text="GitHub" />
      </div>
      <Hamburger onClick={toggleMenu} isMenuOpen={isMenuOpen} />
    </div>
  )
}
