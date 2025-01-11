import { useState, useEffect, Dispatch, SetStateAction } from "react"

export default function useHeaderObserver(): [boolean, Dispatch<SetStateAction<boolean>>] {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return [isOpen, setIsOpen]
}
