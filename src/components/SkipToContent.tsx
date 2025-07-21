'use client'

import React from 'react'

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-navy text-white px-4 py-2 rounded-lg font-semibold z-50 focus:outline-none focus:ring-2 focus:ring-accent-orange"
    >
      Skip to main content
    </a>
  )
}