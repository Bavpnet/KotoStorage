import styles from './UIButton.module.css'

type UIButtonProps = {
  text?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const UIButton: React.FC<UIButtonProps> = ({ text, onClick }) => (
  <button className={styles.btn} onClick={onClick}>
    {text}
  </button>
)
