'use client'

import { useEffect } from 'react'

export default function MobileOptimization() {
  useEffect(() => {
    // Prevent zoom on input focus (iOS Safari)
    const addMaximumScaleToMetaViewport = () => {
      const el = document.querySelector('meta[name=viewport]')
      if (el !== null) {
        let content = el.getAttribute('content')
        if (content) {
          let re = /maximum\-scale=[0-9\.]+/g
          if (re.test(content)) {
            content = content.replace(re, 'maximum-scale=1.0')
          } else {
            content = [content, 'maximum-scale=1.0'].join(', ')
          }
          el.setAttribute('content', content)
        }
      }
    }

    const disableIosTextFieldZoom = addMaximumScaleToMetaViewport

    // Disable zoom only on form inputs
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea, select')
    inputs.forEach((input) => {
      input.addEventListener('focus', disableIosTextFieldZoom, false)
    })

    // Improve touch targets
    const improveAccessibility = () => {
      const buttons = document.querySelectorAll('button, a')
      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect()
        if (rect.height < 44 || rect.width < 44) {
          button.classList.add('min-h-[44px]', 'min-w-[44px]')
        }
      })
    }

    improveAccessibility()

    // Cleanup
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('focus', disableIosTextFieldZoom, false)
      })
    }
  }, [])

  return null
}