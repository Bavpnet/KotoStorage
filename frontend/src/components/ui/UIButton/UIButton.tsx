import classes from './UIButton.module.css'

type UIButtonProps = {
  text: string
}

export const UIButton: React.FC<UIButtonProps> = ({ text }) => {
  return (
    <div className={classes.btn}>
      <p className={classes.btn_text}>{text}</p>
    </div>
  )
}
