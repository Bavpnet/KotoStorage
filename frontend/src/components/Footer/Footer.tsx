import { SocialInfo } from '../SocialInfo'
import Logo from '../../assets/logo.png'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.line} />
      <div className={styles.footerInfo}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" className={styles.img} />
          <h3 className={styles.heading3}>"Murr means love"</h3>
        </div>
        <SocialInfo isFooterInfo={true} />
      </div>
    </footer>
  )
}
