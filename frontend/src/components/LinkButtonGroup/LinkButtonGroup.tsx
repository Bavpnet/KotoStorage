import { useNavigate } from 'react-router-dom'
import { SocialInfo } from '../SocialInfo'
import styles from './LinkButtonGroup.module.css'

type LinkButtonGroupProps = {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

export const LinkButtonGroup: React.FC<LinkButtonGroupProps> = ({
  isMenuOpen,
  setIsMenuOpen
}) => {
  const linkButtons = ['About', 'Upload', 'Gallery']
  const navigate = useNavigate()

  const onLinkClick = (link: string) => {
    navigate(`/${link.toLowerCase()}`)
    setIsMenuOpen(false)
  }

  return (
    <ul className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
      <li className={styles.line} />
      {linkButtons.map((link, i) => (
        <li
          key={`linkbtn__${link}_${i}`}
          className={styles.links__btn}
          onClick={() => onLinkClick(link)}
        >
          <span>{link}</span>
          {isMenuOpen ? <span>{'->'}</span> : null}
        </li>
      ))}
      <li className={styles.line} />
      <SocialInfo />
    </ul>
  )
}
