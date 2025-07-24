// Data preloader service for first-time visitors
export interface PreloadedData {
  testimonials: any[]
  caseStudies: any[]
  blogPosts: any[]
  services: any[]
}

// Simulate API data - replace with actual API calls
const mockData = {
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStart Inc.",
      content: "StackSolutions transformed our outdated system into a modern, scalable platform.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen", 
      role: "Founder",
      company: "EcoCommerce",
      content: "The e-commerce platform they built increased our sales by 300% in the first quarter.",
      rating: 5
    }
  ],
  caseStudies: [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "EcoCommerce",
      industry: "Retail",
      results: { sales: "300%", conversions: "450%" }
    },
    {
      id: 2,
      title: "Healthcare Management System",
      client: "HealthTech Solutions", 
      industry: "Healthcare",
      results: { efficiency: "80%", satisfaction: "95%" }
    }
  ],
  blogPosts: [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping web development...",
      author: "Alex Johnson",
      publishDate: "2024-01-15"
    }
  ],
  services: [
    {
      id: 1,
      name: "Full-Stack Development",
      description: "Scalable web applications that grow with your business",
      icon: "code"
    },
    {
      id: 2,
      name: "Flutter Mobile Apps",
      description: "Native-quality mobile experiences for iOS and Android",
      icon: "smartphone"
    }
  ]
}

// Cache key for localStorage
const CACHE_KEY = 'stacksolutions_preloaded_data'
const CACHE_EXPIRY = 24 * 60 * 60 * 1000 // 24 hours

export class DataPreloader {
  private static instance: DataPreloader
  private cache: Map<string, { data: any; timestamp: number }> = new Map()

  static getInstance(): DataPreloader {
    if (!DataPreloader.instance) {
      DataPreloader.instance = new DataPreloader()
    }
    return DataPreloader.instance
  }

  // Preload all critical data
  async preloadAllData(): Promise<PreloadedData> {
    try {
      // Check if data is cached and still valid
      const cachedData = this.getCachedData()
      if (cachedData) {
        return cachedData
      }

      // Simulate API calls - replace with actual endpoints
      const [testimonials, caseStudies, blogPosts, services] = await Promise.all([
        this.fetchTestimonials(),
        this.fetchCaseStudies(), 
        this.fetchBlogPosts(),
        this.fetchServices()
      ])

      const preloadedData: PreloadedData = {
        testimonials,
        caseStudies,
        blogPosts,
        services
      }

      // Cache the data
      this.setCachedData(preloadedData)
      
      return preloadedData
    } catch (error) {
      console.error('Error preloading data:', error)
      // Return mock data as fallback
      return mockData
    }
  }

  // Individual data fetchers - replace with actual API calls
  private async fetchTestimonials(): Promise<any[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))
    return mockData.testimonials
  }

  private async fetchCaseStudies(): Promise<any[]> {
    await new Promise(resolve => setTimeout(resolve, 150))
    return mockData.caseStudies
  }

  private async fetchBlogPosts(): Promise<any[]> {
    await new Promise(resolve => setTimeout(resolve, 120))
    return mockData.blogPosts
  }

  private async fetchServices(): Promise<any[]> {
    await new Promise(resolve => setTimeout(resolve, 80))
    return mockData.services
  }

  // Cache management
  private getCachedData(): PreloadedData | null {
    if (typeof window === 'undefined') return null
    
    try {
      const cached = localStorage.getItem(CACHE_KEY)
      if (!cached) return null

      const { data, timestamp } = JSON.parse(cached)
      const now = Date.now()
      
      // Check if cache is still valid
      if (now - timestamp < CACHE_EXPIRY) {
        return data
      }
      
      // Cache expired, remove it
      localStorage.removeItem(CACHE_KEY)
      return null
    } catch (error) {
      console.error('Error reading cached data:', error)
      return null
    }
  }

  private setCachedData(data: PreloadedData): void {
    if (typeof window === 'undefined') return
    
    try {
      const cacheData = {
        data,
        timestamp: Date.now()
      }
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
    } catch (error) {
      console.error('Error caching data:', error)
    }
  }

  // Clear cache (useful for development)
  clearCache(): void {
    if (typeof window === 'undefined') return
    localStorage.removeItem(CACHE_KEY)
  }
}

// Export singleton instance
export const dataPreloader = DataPreloader.getInstance()

// Hook for React components
export function usePreloadedData() {
  const [data, setData] = React.useState<PreloadedData | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const preloadedData = await dataPreloader.preloadAllData()
        setData(preloadedData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { data, loading, error }
}

// Add React import for the hook
import React from 'react'