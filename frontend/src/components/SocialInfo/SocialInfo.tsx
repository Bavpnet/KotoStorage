import classes from './SocialInfo.module.css'

export const SocialInfo = () => {
  const socialButtons = ['Instagram', 'Telegram', 'Github']
  return (
    <div className={classes.info}>
      <p className={classes.info__title}>Follow us in the media</p>
      <p className={classes.info__desc}>
        Hear about exclusive news and changes in the cats world
      </p>
      <ul className={classes.social}>
        {socialButtons.map((soc, i) => (
          <li key={`soc__${soc}_${i}`}>{soc}</li>
        ))}
      </ul>
    </div>
  )
}
