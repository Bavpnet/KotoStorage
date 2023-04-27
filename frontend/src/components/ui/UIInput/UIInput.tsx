import styles from './UIInput.module.css'

type UIInputProps = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const UIInput: React.FC<UIInputProps> = ({
  placeholder,
  value,
  onChange
}) => (
  <input
    placeholder={placeholder}
    className={styles.inp}
    value={value}
    onChange={onChange}
  />
)
