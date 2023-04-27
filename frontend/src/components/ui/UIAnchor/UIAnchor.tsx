import styles from './UIAnchor.module.css'

type UIAnchorProps = {
  text: string
  href: string
  target?: '_blank' | '_top' | '_self' | '_parent'
}

export const UIAnchor: React.FC<UIAnchorProps> = ({ text, href, target }) => (
  <a className={styles.anc} href={href} target={target ? target : '_blank'}>
    {text}
  </a>
)
