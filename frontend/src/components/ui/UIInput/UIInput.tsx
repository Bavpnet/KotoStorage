import styles from './UIInput.module.css'

export const UIInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = props => <input className={styles.inp} {...props} />
