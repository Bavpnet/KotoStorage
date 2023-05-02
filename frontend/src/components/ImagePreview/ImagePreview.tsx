import { SyntheticEvent } from 'react'
import styles from './ImagePreview.module.css'

type ImagePreviewProps = {
  url: string
  setIsValidUrl: (isValidUrl: boolean) => void
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  url,
  setIsValidUrl
}) => {
  const url404 = 'https://http.cat/404'

  const onLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.src !== url404) {
      setIsValidUrl(true)
    }
  }

  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.src !== url404) {
      e.currentTarget.src = url404
      setIsValidUrl(false)
    }
  }

  return (
    <picture className={styles.imgContainer}>
      <h3 className={styles.heading3}>Preview of the photo:</h3>
      <img
        className={styles.img}
        src={url}
        alt="preview"
        onError={onError}
        onLoad={onLoad}
      />
    </picture>
  )
}
