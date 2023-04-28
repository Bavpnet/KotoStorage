import { useToggle } from '../../hooks/useToggle'
import { LinkButtonGroup } from '../LinkButtonGroup'
import { SocialInfo } from '../SocialInfo'
import { Hamburger } from '../ui/Hamburger'
import { UIAnchor } from '../ui/UIAnchor'
import styles from './Navbar.module.css'

export const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false)

  return (
    <nav>
      <h1 className={styles.logo}>KotoStorage</h1>

      <aside className={`${isMenuOpen ? styles.active : ''}`}>
        <LinkButtonGroup isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <SocialInfo isFooterInfo={false} />
      </aside>

      <div className={styles.ghBtn}>
        <UIAnchor
          text={'GitHub'}
          href="https://github.com/Bavpnet/KotoStorage"
          target="_blank"
        />
      </div>

      <Hamburger onClick={toggleMenu} isMenuOpen={isMenuOpen} />
    </nav>
  )
}
