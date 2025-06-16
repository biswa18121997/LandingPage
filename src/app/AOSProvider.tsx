'use client'

import { useEffect } from 'react'
import AOS from 'aos'

export function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation runs only once
    })
  }, [])

  return null
}
