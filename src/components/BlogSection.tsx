'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping web development, from AI integration to progressive web apps and the rise of edge computing.",
    author: "Alex Johnson",
    authorRole: "Lead Developer",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "AI", "PWA"],
    image: "/blog-web-trends-2024.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Mobile-First Design: Why Your Business Can't Afford to Wait",
    excerpt: "With mobile traffic accounting for over 60% of web visits, learn why mobile-first design is crucial for business success.",
    author: "Sarah Chen",
    authorRole: "UX Designer",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "Mobile Development",
    tags: ["Mobile", "UX", "Design", "Flutter"],
    image: "/blog-mobile-first.jpg",
    featured: true
  },
  {
    id: 3,
    title: "AI Automation: How to Save 40+ Hours Per Week",
    excerpt: "Real-world examples of how businesses are using AI automation to eliminate repetitive tasks and focus on growth.",
    author: "Emily Davis",
    authorRole: "AI Specialist",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    category: "AI & Automation",
    tags: ["AI", "Automation", "Productivity", "ROI"],
    image: "/blog-ai-automation.jpg",
    featured: true
  },
  {
    id: 4,
    title: "SEO in 2024: Technical Optimization That Actually Works",
    excerpt: "Beyond keywords: advanced technical SEO strategies that drive real organic traffic growth.",
    author: "Michael Rodriguez",
    authorRole: "SEO Specialist",
    publishDate: "2023-12-28",
    readTime: "12 min read",
    category: "SEO & Marketing",
    tags: ["SEO", "Technical", "Marketing", "Growth"],
    image: "/blog-seo-2024.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Building Scalable Applications: Lessons from 50+ Projects",
    excerpt: "Key architectural decisions and best practices learned from building applications that scale from startup to enterprise.",
    author: "Alex Johnson",
    authorRole: "Lead Developer",
    publishDate: "2023-12-20",
    readTime: "15 min read",
    category: "Architecture",
    tags: ["Scalability", "Architecture", "Best Practices"],
    image: "/blog-scalable-apps.jpg",
    featured: false
  },
  {
    id: 6,
    title: "The ROI of Custom Software: When to Build vs Buy",
    excerpt: "A comprehensive guide to making the build vs buy decision for your business software needs.",
    author: "Lisa Thompson",
    authorRole: "Business Analyst",
    publishDate: "2023-12-15",
    readTime: "9 min read",
    category: "Business Strategy",
    tags: ["ROI", "Strategy", "Custom Software"],
    image: "/blog-build-vs-buy.jpg",
    featured: false
  }
]

const categories = ["All", "Web Development", "Mobile Development", "AI & Automation", "SEO & Marketing", "Architecture", "Business Strategy"]

export default function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3)
  
  // Consistent date formatting to prevent hydration errors
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-neutral-charcoal mb-6">
            Insights & Resources
          </h2>
          <p className="text-xl text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, industry trends, and practical guides 
            from our team of experienced developers and strategists.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-inter font-bold text-neutral-charcoal mb-8">Featured Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-primary-navy to-primary-blue h-48 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-sm opacity-75">Featured Article</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-primary-blue text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-inter font-bold text-lg mb-3 text-neutral-charcoal group-hover:text-primary-blue transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-neutral-charcoal text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-navy rounded-full flex items-center justify-center text-white text-xs font-semibold mr-3">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-charcoal">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.authorRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1" />
                      {formatDate(post.publishDate)}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-inter font-bold text-neutral-charcoal mb-8">Recent Posts</h3>
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex gap-6 group cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-gray-400 to-gray-600 w-24 h-24 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <div className="text-2xl">📄</div>
                </div>

                <div className="flex-1">
                  {/* Category & Meta */}
                  <div className="flex items-center gap-4 mb-2">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1" />
                      {formatDate(post.publishDate)}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-inter font-bold text-lg mb-2 text-neutral-charcoal group-hover:text-primary-blue transition-colors">
                    {post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-neutral-charcoal text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-primary-blue font-semibold text-sm"
                    >
                      Read More <ArrowRight size={14} className="ml-1" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-primary-navy text-white p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-inter font-bold mb-4">
            Stay Updated with Industry Insights
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Get weekly insights, tutorials, and industry trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-neutral-charcoal focus:ring-2 focus:ring-accent-orange focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 1,000+ developers and business leaders. Unsubscribe anytime.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-inter font-bold text-neutral-charcoal mb-4">
            Need Expert Guidance for Your Project?
          </h3>
          <p className="text-lg text-neutral-charcoal mb-6">
            Our team is ready to help you navigate complex technical decisions and build solutions that scale.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}