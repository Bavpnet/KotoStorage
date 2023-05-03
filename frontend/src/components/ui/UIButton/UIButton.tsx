import styles from './UIButton.module.css'

type UIButtonProps = {
  text: string
}

export const UIButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & UIButtonProps
> = ({ text, ...rest }) => (
  <button className={styles.btn} {...rest}>
    {text}
  </button>
)
