'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Cookie, Settings } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setPreferences(essentialOnly)
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'essential') return // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
      >
        <div className="container mx-auto px-4 py-6">
          {!showSettings ? (
            // Main Cookie Banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-start space-x-3 flex-1">
                <Cookie className="text-primary-blue mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">We use cookies</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                    <Link href="/cookies" className="text-primary-blue hover:underline">
                      Cookie Policy
                    </Link>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center space-x-3 space-y-2 lg:space-y-0">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg transition-colors"
                >
                  <Settings size={16} />
                  <span>Customize</span>
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-primary-blue hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Cookie Settings Panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Cookie Preferences</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="grid gap-4">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Required for basic website functionality. Cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? 'bg-primary-blue justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Used to track visitors across websites for advertising purposes.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? 'bg-primary-blue justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Functional Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Remember your preferences and enhance your experience.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('functional')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.functional ? 'bg-primary-blue justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 bg-primary-blue hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}