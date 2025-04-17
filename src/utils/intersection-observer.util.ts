// Хук отслеживания ухода половины элемента за границу вьюпорта
// TODO убрать лишнее, типизировать

import { useEffect, useState, useRef } from 'react'

const useBoundaryObserver = () => {
  
  // const [isOffTop, setIsOffTop] = useState(false)
  const [isOffTop] = useState(false)
  const [isOffBottom, setIsOffBottom] = useState(false)
  const targetRef = useRef(null)

  useEffect(() => {
    const target = targetRef.current

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // const { top, bottom } = entry.boundingClientRect
        const { bottom } = entry.boundingClientRect
        const { intersectionRatio } = entry

        // Проверка ухода за верхнюю границу
        // if (intersectionRatio <= 0.5 && top < 0) {
        //   setIsOffTop(true)
        // } else {
        //   setIsOffTop(false)
        // }

        // Проверка ухода за нижнюю границу
        if (intersectionRatio <= 0.5 && bottom > window.innerHeight) {
          setIsOffBottom(true)
        } else {
          setIsOffBottom(false)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)
    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [])

  return { targetRef, isOffTop, isOffBottom }
}

export { useBoundaryObserver }
