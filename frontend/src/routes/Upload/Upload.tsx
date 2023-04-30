import { ImagePreview } from '../../components/ImagePreview'
import { UIButton } from '../../components/ui/UIButton'
import { UIInput } from '../../components/ui/UIInput'
import { useControlledInput } from '../../hooks/useControlledInput'
import styles from './Upload.module.css'

export const Upload = () => {
  const [url, handleUrlChange] = useControlledInput('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.upload}>
      <header>
        <h1>Upload a photo</h1>
        <h5>Provide a link for your cat's photo</h5>
      </header>

      <form className={styles.uploadForm} onSubmit={handleSubmit}>
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
