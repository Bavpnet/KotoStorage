import styles from './UIButton.module.css'

type UIButtonProps = {
  text?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
}

export const UIButton: React.FC<UIButtonProps> = ({
  text,
  onClick,
  children
}) => (
  <button className={styles.btn} onClick={onClick}>
    {children ? children : <span className={styles.btn_text}>{text}</span>}
  </button>
)
