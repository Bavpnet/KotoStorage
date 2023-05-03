import { PropsWithChildren } from 'react'
import styles from './BackgroundCats.module.css'

export const BackgroundCats: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.bgCats}>
      <div className={styles.wrapperOpacity}>{children}</div>
    </div>
  )
}
