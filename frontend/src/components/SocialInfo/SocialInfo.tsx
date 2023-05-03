import styles from './SocialInfo.module.css'

type SocialInfoProps = {
  isFooterInfo: boolean
}

export const SocialInfo: React.FC<SocialInfoProps> = ({ isFooterInfo }) => {
  const socialButtons = ['Instagram', 'Telegram', 'Github']
  return (
    <section className={isFooterInfo ? styles.inFooter : styles.inSidebar}>
      <h2 className={styles.infoTitle}>Follow us in the media</h2>
      <p className={styles.infoDesc}>
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
