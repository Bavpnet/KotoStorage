import { useNavigate } from 'react-router-dom'
import SocialInfo from '../SocialInfo/SocialInfo'
import classes from './LinkButtonGroup.module.css'

type Props = {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const LinkButtonGroup: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const linkButtons = ['About', 'Upload', 'Gallery']
  const navigate = useNavigate()

  const onLinkClick = (link: string) => {
    navigate(`/${link.toLowerCase()}`)
    setIsMenuOpen(false)
  }

  return (
    <ul className={`${classes.links} ${isMenuOpen ? classes.active : ''}`}>
      <li className={classes.line} />
      {linkButtons.map((link, i) => (
        <li
          key={`linkbtn__${link}_${i}`}
          className={classes.links__btn}
          onClick={() => onLinkClick(link)}
        >
          <span>{link}</span>
          {isMenuOpen ? <span>{'->'}</span> : null}
        </li>
      ))}
      <li className={classes.line} />
      <SocialInfo />
    </ul>
  )
}

export default LinkButtonGroup
