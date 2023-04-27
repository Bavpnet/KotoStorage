import styles from './UIButton.module.css'

type UIButtonProps = {
  text: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const UIButton: React.FC<UIButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={e => onClick(e)}>
      <span className={styles.btn_text}>{text}</span>
    </button>
  )
}
