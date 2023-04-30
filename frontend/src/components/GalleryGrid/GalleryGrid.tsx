import { useCats } from '../../hooks/useCats'
import styles from './GalleryGrid.module.css'

export const GalleryGrid: React.FC = () => {
  const cats = useCats()
  return (
    <div className={styles.galleryGrid}>
      {cats.map(cat => (
        <img key={cat.id} src={cat.url} alt={cat.id} />
      ))}
    </div>
  )
}
