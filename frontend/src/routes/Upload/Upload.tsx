import { ImagePreview } from '../../components/ImagePreview'
import { UIButton } from '../../components/ui/UIButton'
import { UIInput } from '../../components/ui/UIInput'
import { useControlledInput } from '../../hooks/useControlledInput'
import styles from './Upload.module.css'

export const Upload = () => {
  const [url, handleUrlChange] = useControlledInput('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(url)
  }

  return (
    <div className={styles.upload}>
      <header>
        <h1 className={styles.heading1}>Upload a photo</h1>
        <h3 className={styles.heading3}>Provide a link for your cat's photo</h3>
      </header>

      <form className={styles.upload_form} onSubmit={handleSubmit}>
        <UIInput
          placeholder="Paste your link here"
          value={url}
          onChange={handleUrlChange}
        />
        <UIButton text="Upload to gallery" />
      </form>

      <ImagePreview url={url} />
    </div>
  )
}
