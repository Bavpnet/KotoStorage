import UIButton from '../ui/UIButton/UIButton'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <p className={classes.logo}>KotoStorage</p>
      <div className={classes.links}>
        <p>About</p>
        <p>Upload</p>
        <p>Gallery</p>
      </div>
      <div className={classes.gh_btn}>
        <UIButton text="GitHub" />
      </div>
    </div>
  )
}

export default Navbar
