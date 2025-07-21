'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, BookOpen, Code, Smartphone, Brain, TrendingUp, Eye, Calendar } from 'lucide-react'

interface Resource {
  id: string
  title: string
  description: string
  type: 'guide' | 'whitepaper' | 'checklist' | 'template' | 'case-study'
  category: string
  downloadCount: number
  fileSize: string
  pages: number
  publishDate: string
  icon: React.ComponentType<any>
  featured?: boolean
}

const resources: Resource[] = [
  {
    id: 'web-dev-guide',
    title: 'Complete Web Development Guide 2024',
    description: 'Comprehensive guide covering modern web development practices, frameworks, and best practices for building scalable applications.',
    type: 'guide',
    category: 'Web Development',
    downloadCount: 1250,
    fileSize: '2.5 MB',
    pages: 45,
    publishDate: '2024-01-15',
    icon: Code,
    featured: true
  },
  {
    id: 'mobile-app-checklist',
    title: 'Mobile App Development Checklist',
    description: 'Essential checklist for planning, developing, and launching successful mobile applications with Flutter.',
    type: 'checklist',
    category: 'Mobile Development',
    downloadCount: 890,
    fileSize: '1.2 MB',
    pages: 12,
    publishDate: '2024-01-10',
    icon: Smartphone
  },
  {
    id: 'ai-automation-whitepaper',
    title: 'AI Automation in Business: ROI Analysis',
    description: 'In-depth analysis of AI automation implementation, cost-benefit analysis, and real-world case studies.',
    type: 'whitepaper',
    category: 'AI & Automation',
    downloadCount: 675,
    fileSize: '3.1 MB',
    pages: 28,
    publishDate: '2024-01-05',
    icon: Brain,
    featured: true
  },
  {
    id: 'seo-optimization-guide',
    title: 'Technical SEO Optimization Guide',
    description: 'Step-by-step guide to improving your website\'s technical SEO performance and search rankings.',
    type: 'guide',
    category: 'SEO & Marketing',
    downloadCount: 1100,
    fileSize: '1.8 MB',
    pages: 32,
    publishDate: '2023-12-20',
    icon: TrendingUp
  },
  {
    id: 'project-planning-template',
    title: 'Software Project Planning Template',
    description: 'Ready-to-use template for planning software development projects, including timelines and resource allocation.',
    type: 'template',
    category: 'Project Management',
    downloadCount: 520,
    fileSize: '0.8 MB',
    pages: 8,
    publishDate: '2023-12-15',
    icon: FileText
  },
  {
    id: 'ecommerce-case-study',
    title: 'E-commerce Success Story: 300% Growth',
    description: 'Detailed case study of how we helped an e-commerce client achieve 300% growth in 6 months.',
    type: 'case-study',
    category: 'Case Studies',
    downloadCount: 780,
    fileSize: '2.2 MB',
    pages: 18,
    publishDate: '2023-12-10',
    icon: BookOpen,
    featured: true
  }
]

const categories = ['All', 'Web Development', 'Mobile Development', 'AI & Automation', 'SEO & Marketing', 'Project Management', 'Case Studies']

const typeColors: Record<Resource['type'], string> = {
  guide: 'bg-blue-100 text-blue-800',
  whitepaper: 'bg-purple-100 text-purple-800',
  checklist: 'bg-green-100 text-green-800',
  template: 'bg-orange-100 text-orange-800',
  'case-study': 'bg-red-100 text-red-800'
}

export default function ResourceCenter() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [downloadingId, setDownloadingId] = useState<string | null>(null)

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory)

  const handleDownload = async (resource: Resource) => {
    setDownloadingId(resource.id)
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, you would trigger the actual download here
    console.log(`Downloading: ${resource.title}`)
    
    setDownloadingId(null)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resource Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Download our free guides, whitepapers, and templates to help you make informed decisions 
            about your technology projects.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Resources */}
        {selectedCategory === 'All' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Featured Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.filter(r => r.featured).map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-900 to-blue-600 text-white p-6 rounded-xl shadow-lg"
                >
                  <resource.icon className="mb-4" size={32} />
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${typeColors[resource.type]} text-gray-900`}>
                    {resource.type.replace('-', ' ').toUpperCase()}
                  </span>
                  <h4 className="font-bold text-lg mb-3">{resource.title}</h4>
                  <p className="text-sm opacity-90 mb-4 line-clamp-3">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs opacity-75 mb-4">
                    <span>{resource.pages} pages</span>
                    <span>{resource.fileSize}</span>
                    <span className="flex items-center">
                      <Eye size={12} className="mr-1" />
                      {resource.downloadCount}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDownload(resource)}
                    disabled={downloadingId === resource.id}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    {downloadingId === resource.id ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download size={16} />
                        Download Free
                      </>
                    )}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Resources Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <resource.icon className="text-blue-600" size={28} />
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[resource.type]}`}>
                  {resource.type.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              
              <h4 className="font-bold text-lg mb-3 text-gray-900">
                {resource.title}
              </h4>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {resource.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  {new Date(resource.publishDate).toLocaleDateString()}
                </span>
                <span>{resource.pages} pages</span>
                <span>{resource.fileSize}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 flex items-center">
                  <Eye size={12} className="mr-1" />
                  {resource.downloadCount} downloads
                </span>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDownload(resource)}
                  disabled={downloadingId === resource.id}
                  className="bg-gray-800 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors disabled:opacity-50"
                >
                  {downloadingId === resource.id ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent"></div>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download size={14} />
                      Download
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-xl p-8 mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with New Resources
          </h3>
          <p className="text-gray-600 mb-6">
            Get notified when we publish new guides, whitepapers, and case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}