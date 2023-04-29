import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useCurrentLocation = () => {
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState(
    location.pathname.substring(1)
  )

  useEffect(() => {
    setCurrentLocation(location.pathname.substring(1))
  }, [location])

  return currentLocation
}
