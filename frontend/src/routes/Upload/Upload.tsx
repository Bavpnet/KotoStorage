import { useState } from 'react'
import { ImagePreview } from '../../components/ImagePreview'
import { UIButton } from '../../components/ui/UIButton'
import { UIInput } from '../../components/ui/UIInput'
import { useControlledInput } from '../../hooks/useControlledInput'
import styles from './Upload.module.css'

export const Upload = () => {
  const [url, handleUrlChange, resetInput] = useControlledInput('')
  const [isValidUrl, setIsValidUrl] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isValidUrl) {
      alert('Please provide a valid url')
      return
    }

    try {
      const response = await fetch(`${window._env_.API_URL}/cats/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      })

      if (response.ok) {
        alert('Image uploaded successfully!')
      } else {
        alert('Something went wrong, please try again')
      }
    } catch (error) {
      alert('Something went wrong, please try again')
    }

    resetInput()
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

      <ImagePreview url={url} setIsValidUrl={setIsValidUrl} />
    </div>
  )
}
