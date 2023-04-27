import { useNavigate } from 'react-router-dom'
import styles from './LinkButtonGroup.module.css'

type LinkButtonGroupProps = {
  isMenuOpen: boolean
  toggleMenu: (forceValue?: boolean) => void
}

export const LinkButtonGroup: React.FC<LinkButtonGroupProps> = ({
  isMenuOpen,
  toggleMenu
}) => {
  const linkButtons = ['About', 'Upload', 'Gallery']
  const navigate = useNavigate()

  const onLinkClick = (link: string) => {
    navigate(`/${link.toLowerCase()}`)
    toggleMenu(false)
  }

  return (
    <ul className={styles.links}>
      <li role="presentation" className={styles.line} />

      {linkButtons.map(link => (
        <li key={`linkbtn__${link}`}>
          <button
            className={styles.links__btn}
            onClick={() => onLinkClick(link)}
          >
            <span>{link}</span>
            {isMenuOpen && <span>{'->'}</span>}
          </button>
        </li>
      ))}

      <li role="presentation" className={styles.line} />
    </ul>
  )
}
