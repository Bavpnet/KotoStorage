import { useEffect, useState } from 'react'

type Cat = {
  id: string
  url: string
}

export const useCats = () => {
  const [cats, setCats] = useState<Cat[]>([])

  const fetchCats = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cats/`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setCats(data)
    } catch (error) {
      console.log(error)
      setCats([])
    }
  }

  useEffect(() => {
    fetchCats()
  }, [])

  return cats
}
