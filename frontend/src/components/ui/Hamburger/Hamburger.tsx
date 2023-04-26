import classes from './Hamburger.module.css'

type Props = {
  onClick: () => void
  isMenuOpen: boolean
}

const Hamburger: React.FC<Props> = ({ onClick, isMenuOpen }) => {
  return (
    <div
      className={`${classes.hamburger} ${isMenuOpen ? classes.active : ''}`}
      onClick={onClick}
    >
      <span className={classes.bar} />
      <span className={classes.bar} />
      <span className={classes.bar} />
    </div>
  )
}

export default Hamburger
