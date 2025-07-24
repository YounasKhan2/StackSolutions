'use client'

import { useEffect, useState } from 'react'

export default function LoadingStrategy() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload critical images and resources
    const preloadResources = async () => {
      const criticalImages = [
        '/og-image.jpg',
        '/logo.svg',
        '/hero-bg.jpg'
      ]

      // Preload images
      const imagePromises = criticalImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = reject
          img.src = src
        })
      })

      try {
        await Promise.allSettled(imagePromises)
      } catch (error) {
        console.log('Some images failed to preload, but continuing...')
      }

      // Preload critical API data
      await preloadCriticalData()

      setIsLoaded(true)
    }

    // Start preloading immediately
    preloadResources()

    // Ensure fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded')
      })
    }

    // Preload next page resources on hover
    const handleLinkHover = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.href) {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = target.href
        document.head.appendChild(link)
      }
    }

    // Add hover preloading to all links
    document.addEventListener('mouseover', handleLinkHover)

    return () => {
      document.removeEventListener('mouseover', handleLinkHover)
    }
  }, [])

  // Add loading indicator for first visit
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-primary-blue rounded-lg flex items-center justify-center mb-4 mx-auto animate-pulse">
            <span className="text-white font-poppins font-bold text-2xl">S</span>
          </div>
          <div className="text-primary-navy font-poppins font-semibold text-lg">
            Loading StackSolutions...
          </div>
          <div className="w-32 h-1 bg-gray-200 rounded-full mt-4 mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-blue to-accent-orange rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

// Preload critical data function
async function preloadCriticalData() {
  try {
    // Import data preloader dynamically to avoid blocking
    const { dataPreloader } = await import('@/lib/dataPreloader')
    
    // Preload all critical data
    await dataPreloader.preloadAllData()
    
    // Preload critical pages
    const criticalPages = ['/about', '/services', '/contact']
    const pagePromises = criticalPages.map(async (page) => {
      try {
        await fetch(page)
      } catch (error) {
        console.log(`Failed to preload ${page}:`, error)
      }
    })
    
    await Promise.allSettled(pagePromises)
    
    return Promise.resolve()
  } catch (error) {
    console.log('Error preloading critical data:', error)
    return Promise.resolve()
  }
}