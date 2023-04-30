import { GalleryGrid } from '../../components/GalleryGrid'
import styles from './Gallery.module.css'

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <header>
        <h1>See cats from other users</h1>
        <h5>find your favourite furry pets</h5>
      </header>

      <main>
        <GalleryGrid />
      </main>
    </div>
  )
}
