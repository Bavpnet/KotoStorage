import styles from './Hamburger.module.css'

type HamburgerProps = {
  isMenuOpen: boolean
}

export const Hamburger: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & HamburgerProps
> = ({ isMenuOpen, ...rest }) => (
  <button
    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
    {...rest}
  >
    <span className={styles.bar} />
    <span className={styles.bar} />
    <span className={styles.bar} />
  </button>
)
