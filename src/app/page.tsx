'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Smartphone, Zap, TrendingUp } from 'lucide-react'
import IndustriesSection from '../components/IndustriesSection'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialsSection from '../components/TestimonialsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-inter font-bold text-primary-navy mb-6">
              Stack<span className="text-primary-blue">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-charcoal mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge technology solutions. 
              We specialize in full-stack development, mobile apps, AI automation, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors"
              >
                Start Your Project <ArrowRight size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>

          {/* Services Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Code className="text-primary-blue mb-4" size={40} />
              <h3 className="font-inter font-semibold text-lg mb-2">Full-Stack Development</h3>
              <p className="text-neutral-charcoal text-sm">Modern web applications built with the latest technologies</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Smartphone className="text-primary-blue mb-4" size={40} />
              <h3 className="font-inter font-semibold text-lg mb-2">Flutter Mobile Apps</h3>
              <p className="text-neutral-charcoal text-sm">Cross-platform mobile solutions for iOS and Android</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="text-primary-blue mb-4" size={40} />
              <h3 className="font-inter font-semibold text-lg mb-2">AI Automation</h3>
              <p className="text-neutral-charcoal text-sm">Intelligent automation to streamline your business processes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="text-primary-blue mb-4" size={40} />
              <h3 className="font-inter font-semibold text-lg mb-2">SEO Optimization</h3>
              <p className="text-neutral-charcoal text-sm">Boost your online presence and search rankings</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* Our Process */}
      <ProcessTimeline />

      {/* Client Testimonials */}
      <TestimonialsSection />
    </main>
  )
}