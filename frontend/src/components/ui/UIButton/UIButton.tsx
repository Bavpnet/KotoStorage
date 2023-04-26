import styles from './UIButton.module.css'

type UIButtonProps = {
  text: string
}

export const UIButton: React.FC<UIButtonProps> = ({ text }) => {
  return (
    <div className={styles.btn}>
      <p className={styles.btn_text}>{text}</p>
    </div>
  )
}
