import { useState } from 'react'

export const useControlledInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }
  return [value, onChange, reset] as const
}
