import { useState } from 'react'
import Hamburger from '../ui/Hamburger/Hamburger'
import UIButton from '../ui/UIButton/UIButton'
import classes from './Navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={classes.navbar}>
      <p className={classes.logo}>KotoStorage</p>
      <ul className={`${classes.links} ${isMenuOpen ? classes.active : ''}`}>
        <li className={classes.line}>
          <span />
        </li>
        <li className={`${classes.links__btn} ${classes.indented}`}>About</li>
        <li className={`${classes.links__btn} ${classes.indented}`}>Upload</li>
        <li className={`${classes.links__btn} ${classes.indented}`}>Gallery</li>
        <li className={classes.line}>
          <span />
        </li>
        <li className={classes.info}>
          <p className={`${classes.info__title} ${classes.indented}`}>
            Follow us in the media
          </p>
          <p className={`${classes.info__desc} ${classes.indented}`}>
            Hear about exclusive news and changes in the cats world
          </p>
          <ul className={classes.social}>
            <li>Instagram</li>
            <li>Telegram</li>
            <li>Github</li>
          </ul>
        </li>
      </ul>
      <div className={classes.gh_btn}>
        <UIButton text="GitHub" />
      </div>
      <Hamburger onClick={toggleMenu} />
    </div>
  )
}

export default Navbar
