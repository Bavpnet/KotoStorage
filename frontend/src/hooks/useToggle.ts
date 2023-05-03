import { useState } from 'react'

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = (forceValue?: boolean) =>
    setValue(prev => forceValue ?? !prev)
  return [value, toggleValue] as const
}
