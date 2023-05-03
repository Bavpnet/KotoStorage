import styles from './UIAnchor.module.css'

type UIAnchorProps = {
  text: string
}

export const UIAnchor: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & UIAnchorProps
> = ({ text, ...rest }) => (
  <a className={styles.anc} {...rest}>
    {text}
  </a>
)
