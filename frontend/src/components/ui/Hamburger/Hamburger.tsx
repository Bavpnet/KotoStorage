import classes from './Hamburger.module.css'

type Props = {
  onClick: () => void
}

const Hamburger: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={classes.hamburger} onClick={onClick}>
      <span className={classes.bar} />
      <span className={classes.bar} />
      <span className={classes.bar} />
    </div>
  )
}

export default Hamburger
