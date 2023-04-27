import styles from './Hamburger.module.css'

type HamburgerProps = {
  onClick: () => void
  isMenuOpen: boolean
}

export const Hamburger: React.FC<HamburgerProps> = ({
  onClick,
  isMenuOpen
}) => (
  <button
    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
    onClick={() => onClick()}
  >
    <span className={styles.bar} />
    <span className={styles.bar} />
    <span className={styles.bar} />
  </button>
)
