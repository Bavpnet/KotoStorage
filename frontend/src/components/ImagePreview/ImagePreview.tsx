import { SyntheticEvent, useEffect, useState } from 'react'
import styles from './ImagePreview.module.css'

type ImagePreviewProps = {
  url: string
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ url }) => {
  const url404 = 'https://http.cat/404'

  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('error')
    if (e.currentTarget.src !== url404) {
      e.currentTarget.src = url404
    }
  }

  return (
    <picture className={styles.imgContainer}>
      <h3 className={styles.heading3}>Preview of the photo:</h3>
      <img className={styles.img} src={url} alt="preview" onError={onError} />
    </picture>
  )
}
