import SocialInfo from '../SocialInfo/SocialInfo'
import classes from './LinkButtonGroup.module.css'

type Props = {
  isMenuOpen: boolean
}

const LinkButtonGroup: React.FC<Props> = ({ isMenuOpen }) => {
  const linkButtons = ['About', 'Upload', 'Gallery']
  return (
    <ul className={`${classes.links} ${isMenuOpen ? classes.active : ''}`}>
      <li className={classes.line}>
        <span />
      </li>
      {linkButtons.map((link, i) => (
        <li key={`linkbtn__${link}_${i}`} className={classes.links__btn}>
          {link}
        </li>
      ))}
      <li className={classes.line}>
        <span />
      </li>
      <li>
        <SocialInfo />
      </li>
    </ul>
  )
}

export default LinkButtonGroup
