import styles from './SocialInfo.module.css'

export const SocialInfo = () => {
  const socialButtons = ['Instagram', 'Telegram', 'Github']
  return (
    <div className={styles.info}>
      <p className={styles.info__title}>Follow us in the media</p>
      <p className={styles.info__desc}>
        Hear about exclusive news and changes in the cats world
      </p>
      <ul className={styles.social}>
        {socialButtons.map(soc => (
          <li key={`soc__${soc}`}>{soc}</li>
        ))}
      </ul>
    </div>
  )
}
