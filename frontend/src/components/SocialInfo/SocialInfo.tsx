import styles from './SocialInfo.module.css'

export const SocialInfo = () => {
  const socialButtons = ['Instagram', 'Telegram', 'Github']
  return (
    <section className={styles.info}>
      <h2 className={styles.info__title}>Follow us in the media</h2>
      <p className={styles.info__desc}>
        Hear about exclusive news and changes in the cats world
      </p>

      <ul className={styles.social}>
        {socialButtons.map(soc => (
          <li key={`soc__${soc}`}>{soc}</li>
        ))}
      </ul>
    </section>
  )
}
