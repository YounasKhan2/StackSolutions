'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
    useEffect(() => {
        // Web Vitals monitoring
        const reportWebVitals = (metric: { name: string; id: string; value: number }) => {
            // Send to analytics
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', metric.name, {
                    event_category: 'Web Vitals',
                    event_label: metric.id,
                    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                    non_interaction: true,
                })
            }
        }

        // Lazy load web-vitals library
        const loadWebVitals = async () => {
            try {
                const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals')
                getCLS(reportWebVitals)
                getFID(reportWebVitals)
                getFCP(reportWebVitals)
                getLCP(reportWebVitals)
                getTTFB(reportWebVitals)
            } catch (error) {
                // Fallback if web-vitals is not available
                console.log('Web Vitals library not available')
            }
        }
        
        loadWebVitals()

        // Performance observer for additional metrics
        if ('PerformanceObserver' in window) {
            // Monitor long tasks
            try {
                const longTaskObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.duration > 50) {
                            console.warn('Long task detected:', entry.duration + 'ms')
                        }
                    }
                })
                longTaskObserver.observe({ entryTypes: ['longtask'] })
            } catch (e) {
                // Long task API not supported
            }

            // Monitor layout shifts
            try {
                const clsObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (!(entry as any).hadRecentInput) {
                            console.log('Layout shift detected:', (entry as any).value)
                        }
                    }
                })
                clsObserver.observe({ entryTypes: ['layout-shift'] })
            } catch (e) {
                // Layout shift API not supported
            }
        }

        // Monitor resource loading
        const monitorResources = () => {
            const resources = performance.getEntriesByType('resource')
            const slowResources = resources.filter((resource: any) => resource.duration > 1000)

            if (slowResources.length > 0) {
                console.warn('Slow resources detected:', slowResources)
            }
        }

        // Run after page load
        if (document.readyState === 'complete') {
            monitorResources()
        } else {
            window.addEventListener('load', monitorResources)
        }

        return () => {
            window.removeEventListener('load', monitorResources)
        }
    }, [])

    return null
}