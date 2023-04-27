import styles from './ImagePreview.module.css'

type ImagePreviewProps = {
  url: string
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ url }) => {
  return (
    <picture className={styles.imgContainer}>
      <h3 className={styles.heading3}>Preview of the photo:</h3>
      {url && <img src={url} alt="cat" className={styles.img} />}
    </picture>
  )
}
