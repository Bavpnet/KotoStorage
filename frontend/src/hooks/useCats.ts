import { useEffect, useState } from 'react'

type Cat = {
  breeds: any[]
  id: string
  url: string
  width: number
  height: number
}

// FOR TESTING PURPOSES ONLY, WILL BE REPLACED BY BACKEND
export const useCats = () => {
  const api_key = process.env.REACT_APP_API_KEY
  const url = `https://api.thecatapi.com/v1/images/search?limit=30&api_key=${api_key}`
  const [cats, setCats] = useState<Cat[]>([])

  const fetchCats = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCats(data)
  }

  useEffect(() => {
    fetchCats()
  }, [])

  return cats
}
