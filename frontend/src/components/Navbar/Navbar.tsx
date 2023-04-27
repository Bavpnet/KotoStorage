import { useToggle } from '../../hooks/useToggle'
import { LinkButtonGroup } from '../LinkButtonGroup'
import { SocialInfo } from '../SocialInfo'
import { Hamburger } from '../ui/Hamburger'
import { UIButton } from '../ui/UIButton'
import styles from './Navbar.module.css'

export const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false)

  return (
    <nav>
      <h1 className={styles.logo}>KotoStorage</h1>

      <aside className={`${isMenuOpen ? styles.active : ''}`}>
        <LinkButtonGroup isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <SocialInfo />
      </aside>

      <div className={styles.gh_btn}>
        <UIButton text="GitHub">
          <a href="https://github.com/Bavpnet/KotoStorage" target="_blank">
            Github
          </a>
        </UIButton>
      </div>

      <Hamburger onClick={toggleMenu} isMenuOpen={isMenuOpen} />
    </nav>
  )
}
